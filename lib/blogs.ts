import { supabase } from "@/lib/supabaseClient";
import { cache } from "react";

const SITE_KEY = process.env.SITE_KEY;

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

  const { data, error } = await supabase
    .from("sites")
    .select("id")
    .eq("site_key", SITE_KEY)
    .single();

  if (error || !data) {
    throw new Error(`Failed to resolve site_id for site_key "${SITE_KEY}"`);
  }

  return data.id;
});


/**
 * Get all blogs for configured site (includes SEO / Schema.org fields).
 */
export async function getBlogsForConfiguredSite(): Promise<BlogListRow[]> {
  const siteId = await getSiteId();

  const { data, error } = await supabase
    .from("blogs")
    .select(BLOG_SEO_FIELDS)
    .eq("site_id", siteId)
    .order("display_date", { ascending: false });

  if (error) {
    throw new Error(`Failed to load blogs: ${error.message}`);
  }

  return (data ?? []) as BlogListRow[];
}

/**
 * Get single blog by slug (full row for page content + JSON-LD).
 */
export async function getBlogBySlugForConfiguredSite(
  slug: string
): Promise<BlogPostRow | null> {
  const siteId = await getSiteId();

  const { data, error } = await supabase
    .from("blogs")
    .select(`id, content, ${BLOG_SEO_FIELDS}`)
    .eq("site_id", siteId)
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to fetch blog: ${error.message}`);
  }

  return (data ?? null) as BlogPostRow | null;
}

/**
 * Get all blog slugs (for static generation, etc.)
 */
export async function getBlogSlugsForConfiguredSite() {
  const siteId = await getSiteId();

  const { data, error } = await supabase
    .from("blogs")
    .select("slug, display_date")
    .eq("site_id", siteId);

  if (error) {
    throw new Error(`Failed to fetch blog slugs: ${error.message}`);
  }

  return data ?? [];
}