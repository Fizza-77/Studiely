import { supabase } from "@/lib/supabaseClient";
import { cache } from "react";

const STUDIELY_SITE_KEY = (process.env.SITE_KEY || "studiely").trim();
const STUDIELY_SITE_ID_OVERRIDE = process.env.SITE_ID?.trim() || "";

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
    const cause =
      error &&
      typeof error === "object" &&
      "cause" in error &&
      error.cause instanceof Error
        ? error.cause.message
        : "";
    if (cause && !lastMsg.includes(cause)) {
      lastMsg = `${lastMsg} (${cause})`;
    }

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
  "slug, title, description, meta_title, meta_description, cover_image_url, date_published, date_modified, main_entity_of_page, author_name, keywords, article_section";

export type BlogListRow = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  meta_title: string | null;
  meta_description: string | null;
  cover_image_url: string | null;
  date_published: string | null;
  date_modified: string | null;
  main_entity_of_page: string | null;
  author_name: string | null;
  keywords: string | null;
  article_section: string | null;
  category: BlogCategoryRef | null;
};

export type BlogPostRow = BlogListRow & {
  content: string | null;
};

export type BlogCategoryRef = {
  id: string;
  name: string;
  slug: string;
};

export type BlogCategoryRow = BlogCategoryRef & {
  sort_order: number;
};

export type BlogIndexSeo = {
  title: string;
  description: string;
  headline: string;
  subheadline: string;
  empty_state_message: string;
};

export type BlogIndexDataForStudiely = {
  site_id: string;
  seo: BlogIndexSeo;
  categories: BlogCategoryRow[];
  posts: BlogListRow[];
};

type SiteBlogPageRow = {
  id: string;
  blog_page_meta_title?: string | null;
  blog_page_meta_description?: string | null;
  blog_page_headline?: string | null;
  blog_page_subheadline?: string | null;
  blog_page_empty_state_message?: string | null;
};

const DEFAULT_INDEX_SEO: BlogIndexSeo = {
  title: "Blog - Study Tips, Exam Prep & Product Updates",
  description:
    "Practical revision ideas, curriculum tips, and Studiely product news for students on IGCSE, GCSE, IB, and more.",
  headline: "Studiely Blog",
  subheadline:
    "Explore articles on smarter studying, exam strategies, and how to get the most out of Studiely.",
  empty_state_message: "Blog posts will appear here once they are published.",
};

function normalizeCategory(value: unknown): BlogCategoryRef | null {
  if (!value || Array.isArray(value) || typeof value !== "object") return null;
  const row = value as Partial<BlogCategoryRef>;
  if (!row.id || !row.name || !row.slug) return null;
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
  };
}

function toSeo(site: SiteBlogPageRow | null): BlogIndexSeo {
  if (!site) return DEFAULT_INDEX_SEO;
  return {
    title: site.blog_page_meta_title?.trim() || DEFAULT_INDEX_SEO.title,
    description:
      site.blog_page_meta_description?.trim() || DEFAULT_INDEX_SEO.description,
    headline: site.blog_page_headline?.trim() || DEFAULT_INDEX_SEO.headline,
    subheadline:
      site.blog_page_subheadline?.trim() || DEFAULT_INDEX_SEO.subheadline,
    empty_state_message:
      site.blog_page_empty_state_message?.trim() ||
      DEFAULT_INDEX_SEO.empty_state_message,
  };
}

/** Resolve Studiely's site id from site_key. Returns null when not found. */
export const getSiteIdForStudiely = cache(async (): Promise<string | null> => {
  if (STUDIELY_SITE_ID_OVERRIDE) return STUDIELY_SITE_ID_OVERRIDE;

  const client = supabase;
  if (!client) return null;

  const data = await execPostgrestWithRetries("resolve studiely site_id", () =>
    client
      .from("sites")
      .select("id")
      .eq("site_key", STUDIELY_SITE_KEY)
      .limit(1)
      .maybeSingle() as PromiseLike<{
      data: { id: string } | null;
      error: { message?: string; code?: string } | null;
    }>
  );

  return data?.id ?? null;
});

async function loadStudielyBlogPageSeo(siteId: string): Promise<SiteBlogPageRow | null> {
  const client = supabase;
  if (!client) return null;

  try {
    return await execPostgrestWithRetries("load studiely blog page seo", () =>
      client
        .from("sites")
        .select(
          "id, blog_page_meta_title, blog_page_meta_description, blog_page_headline, blog_page_subheadline, blog_page_empty_state_message"
        )
        .eq("id", siteId)
        .limit(1)
        .maybeSingle() as PromiseLike<{
        data: SiteBlogPageRow | null;
        error: { message?: string; code?: string } | null;
      }>
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const missingEmptyStateColumn =
      message.includes("blog_page_empty_state_message") &&
      message.includes("does not exist");

    if (!missingEmptyStateColumn) {
      throw error;
    }

    return await execPostgrestWithRetries(
      "load studiely blog page seo (legacy schema)",
      () =>
        client
          .from("sites")
          .select(
            "id, blog_page_meta_title, blog_page_meta_description, blog_page_headline, blog_page_subheadline"
          )
          .eq("id", siteId)
          .limit(1)
          .maybeSingle() as PromiseLike<{
          data: SiteBlogPageRow | null;
          error: { message?: string; code?: string } | null;
        }>
    );
  }
}

function warnBlogFetchFailure(label: string, error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  console.warn(`[blogs] ${label}; serving empty/fallback data. ${truncateForError(message)}`);
}

/**
 * Fetch Studiely blog index payload: site SEO fields, site categories and posts.
 * Network / Supabase outages degrade to empty lists instead of crashing the page.
 */
export async function getBlogIndexDataForStudiely(): Promise<BlogIndexDataForStudiely> {
  const siteId = await getSiteIdForStudiely().catch((error) => {
    warnBlogFetchFailure("resolve studiely site_id failed", error);
    return null;
  });

  if (!siteId) {
    return {
      site_id: "",
      seo: DEFAULT_INDEX_SEO,
      categories: [],
      posts: [],
    };
  }

  const client = supabase;
  if (!client) {
    return {
      site_id: siteId,
      seo: DEFAULT_INDEX_SEO,
      categories: [],
      posts: [],
    };
  }

  const [siteRow, categoriesData, postsData] = await Promise.all([
    loadStudielyBlogPageSeo(siteId).catch((error) => {
      warnBlogFetchFailure("load studiely blog page seo failed", error);
      return null;
    }),
    execPostgrestWithRetries("load studiely blog categories", () =>
      client
        .from("blog_categories")
        .select("id, name, slug, sort_order")
        .eq("site_id", siteId)
        .order("sort_order", { ascending: true })
        .order("name", { ascending: true })
    ).catch((error) => {
      warnBlogFetchFailure("load studiely blog categories failed", error);
      return [] as Array<{
        id: string;
        name: string;
        slug: string;
        sort_order: number | null;
      }>;
    }),
    execPostgrestWithRetries("load studiely blogs", () =>
      client
        .from("blogs")
        .select(
          `id, ${BLOG_SEO_FIELDS}, category:blog_categories(id, name, slug)`
        )
        .eq("site_id", siteId)
        .eq("status", "published")
        .order("date_published", { ascending: false })
    ).catch((error) => {
      warnBlogFetchFailure("load studiely blogs failed", error);
      return [] as Array<Omit<BlogListRow, "category"> & { category: unknown }>;
    }),
  ]);

  const categories = ((categoriesData ?? []) as Array<{
    id: string;
    name: string;
    slug: string;
    sort_order: number | null;
  }>).map((row) => ({
    id: row.id,
    name: row.name,
    slug: row.slug,
    sort_order: row.sort_order ?? 0,
  }));

  const posts = ((postsData ?? []) as Array<
    Omit<BlogListRow, "category"> & { category: unknown }
  >).map((row) => ({
    ...row,
    category: normalizeCategory(row.category),
  }));

  return {
    site_id: siteId,
    seo: toSeo(siteRow),
    categories,
    posts,
  };
}

/** Fetch a single Studiely blog by slug with joined category. */
export async function getBlogBySlugForStudiely(
  slug: string
): Promise<BlogPostRow | null> {
  try {
    const siteId = await getSiteIdForStudiely();
    if (!siteId) return null;

    const client = supabase;
    if (!client) return null;

    const row = await execPostgrestWithRetries(
      `fetch studiely blog "${slug}"`,
      () =>
        client
          .from("blogs")
          .select(
            `id, content, ${BLOG_SEO_FIELDS}, category:blog_categories(id, name, slug)`
          )
          .eq("site_id", siteId)
          .eq("status", "published")
          .eq("slug", slug)
          .maybeSingle()
    );

    if (!row) return null;

    const typedRow = row as Omit<BlogPostRow, "category"> & {
      category: unknown;
    };
    return {
      ...typedRow,
      category: normalizeCategory(typedRow.category),
    };
  } catch (error) {
    warnBlogFetchFailure(`fetch studiely blog "${slug}" failed`, error);
    return null;
  }
}


/**
 * Get all blogs for configured site (includes SEO / Schema.org fields).
 */
export async function getBlogsForConfiguredSite(): Promise<BlogListRow[]> {
  try {
    const data = await getBlogIndexDataForStudiely();
    return data.posts;
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
  return getBlogBySlugForStudiely(slug);
}

/**
 * Get all blog slugs (for static generation, etc.)
 */
export async function getBlogSlugsForConfiguredSite(): Promise<
  { slug: string; date_published: string | null; date_modified: string | null }[]
> {
  const siteId = await getSiteIdForStudiely();
  if (!siteId) return [];

  const client = supabase;
  if (!client) return [];

  try {
    const data = await execPostgrestWithRetries("fetch blog slugs", () =>
      client
        .from("blogs")
        .select("slug, date_published, date_modified")
        .eq("site_id", siteId)
        .eq("status", "published")
    );
    return (data ?? []) as { slug: string; date_published: string | null; date_modified: string | null }[];
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