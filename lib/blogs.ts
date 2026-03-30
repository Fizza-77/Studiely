import { supabase } from "@/lib/supabaseClient";
import { cache } from "react";

const SITE_KEY = process.env.SITE_KEY;

const SUPABASE_QUERY_RETRIES = Math.max(
  1,
  Number(process.env.SUPABASE_BUILD_RETRIES || "5")
);
const SUPABASE_RETRY_DELAY_MS = Math.max(
  500,
  Number(process.env.SUPABASE_BUILD_RETRY_DELAY_MS || "2000")
);

function isTransientSupabaseFailure(message: string): boolean {
  if (!message) return false;
  if (message.includes("<!DOCTYPE") || message.includes("Bad gateway")) return true;
  return /502|503|504|Cloudflare|timeout|fetch failed|ECONNRESET|ETIMEDOUT|NetworkError|Failed to fetch/i.test(
    message
  );
}

async function pause(ms: number) {
  await new Promise((r) => setTimeout(r, ms));
}

function truncateForError(message: string, max = 420) {
  const t = message.replace(/\s+/g, " ").trim();
  return t.length > max ? `${t.slice(0, max)}…` : t;
}

/**
 * PostgREST can return HTML (e.g. Cloudflare 502) as the error body during outages.
 * Retries help `next build` survive brief Supabase / edge failures.
 */
async function execPostgrestWithRetries<T>(
  label: string,
  op: () => PromiseLike<{ data: T; error: { message?: string; code?: string } | null }>
): Promise<T> {
  let lastMsg = "";
  for (let attempt = 1; attempt <= SUPABASE_QUERY_RETRIES; attempt++) {
    const { data, error } = await op();
    if (!error) return data as T;

    lastMsg = error.message || error.code || "unknown error";

    if (!isTransientSupabaseFailure(lastMsg)) {
      throw new Error(`${label}: ${truncateForError(lastMsg)}`);
    }

    if (attempt >= SUPABASE_QUERY_RETRIES) break;

    console.warn(
      `[blogs] ${label}: transient failure (attempt ${attempt}/${SUPABASE_QUERY_RETRIES}), retrying in ${SUPABASE_RETRY_DELAY_MS * attempt}ms…`
    );
    await pause(SUPABASE_RETRY_DELAY_MS * attempt);
  }

  throw new Error(`${label}: ${truncateForError(lastMsg)}`);
}

/** Columns shared by list and detail (SEO + structured data fields). */
const BLOG_SEO_FIELDS =
  "slug, title, description, meta_title, meta_description, cover_image_url, display_date, author_name, keywords, article_section";

export type BlogListRow = {
  slug: string;
  title: string;
  description: string | null;
  meta_title: string | null;
  meta_description: string | null;
  cover_image_url: string | null;
  display_date: string | null;
  author_name: string | null;
  keywords: string | null;
  article_section: string | null;
};

export type BlogPostRow = BlogListRow & {
  id: string;
  content: string | null;
};

let cachedSiteId: string | null = null;

const getSiteId = cache(async (): Promise<string> => {
  if (!SITE_KEY) {
    throw new Error("Missing SITE_KEY environment variable.");
  }

  const data = await execPostgrestWithRetries("resolve site_id", () =>
    supabase.from("sites").select("id").eq("site_key", SITE_KEY).single() as PromiseLike<{
      data: { id: string } | null;
      error: { message?: string; code?: string } | null;
    }>
  );

  if (!data?.id) {
    throw new Error(`Failed to resolve site_id for site_key "${SITE_KEY}"`);
  }

  return data.id;
});


/**
 * Get all blogs for configured site (includes SEO / Schema.org fields).
 */
export async function getBlogsForConfiguredSite(): Promise<BlogListRow[]> {
  const siteId = await getSiteId();

  try {
    const data = await execPostgrestWithRetries("load blogs", () =>
      supabase
        .from("blogs")
        .select(BLOG_SEO_FIELDS)
        .eq("site_id", siteId)
        .order("display_date", { ascending: false })
    );
    return (data ?? []) as BlogListRow[];
  } catch (e) {
    if (process.env.BUILD_SKIP_BLOGS_ON_SUPABASE_ERROR === "1") {
      console.warn(
        "[blogs] BUILD_SKIP_BLOGS_ON_SUPABASE_ERROR=1: returning empty blog list after Supabase failure."
      );
      return [];
    }
    throw e;
  }
}

/**
 * Get single blog by slug (full row for page content + JSON-LD).
 */
export async function getBlogBySlugForConfiguredSite(
  slug: string
): Promise<BlogPostRow | null> {
  const siteId = await getSiteId();

  const data = await execPostgrestWithRetries(`fetch blog "${slug}"`, () =>
    supabase
      .from("blogs")
      .select(`id, content, ${BLOG_SEO_FIELDS}`)
      .eq("site_id", siteId)
      .eq("slug", slug)
      .maybeSingle()
  );

  return (data ?? null) as BlogPostRow | null;
}

/**
 * Get all blog slugs (for static generation, etc.)
 */
export async function getBlogSlugsForConfiguredSite(): Promise<
  { slug: string; display_date: string | null }[]
> {
  const siteId = await getSiteId();

  try {
    const data = await execPostgrestWithRetries("fetch blog slugs", () =>
      supabase.from("blogs").select("slug, display_date").eq("site_id", siteId)
    );
    return (data ?? []) as { slug: string; display_date: string | null }[];
  } catch (e) {
    if (process.env.BUILD_SKIP_BLOGS_ON_SUPABASE_ERROR === "1") {
      console.warn(
        "[blogs] BUILD_SKIP_BLOGS_ON_SUPABASE_ERROR=1: returning no static blog slugs after Supabase failure."
      );
      return [];
    }
    throw e;
  }
}