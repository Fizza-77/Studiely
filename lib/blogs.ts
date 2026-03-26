import { supabase } from "@/lib/supabaseClient";
import { cache } from "react";

const SITE_KEY = process.env.SITE_KEY;

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
 * Get all blogs for configured site
 */
export async function getBlogsForConfiguredSite() {
  const siteId = await getSiteId();

  const { data, error } = await supabase
    .from("blogs")
    .select("cover_image_url, slug, title, description, display_date")
    .eq("site_id", siteId)
    .order("display_date", { ascending: false });

  if (error) {
    throw new Error(`Failed to load blogs: ${error.message}`);
  }

  return data ?? [];
}

/**
 * Get single blog by slug
 */
export async function getBlogBySlugForConfiguredSite(slug: string) {
  const siteId = await getSiteId();

  const { data, error } = await supabase
    .from("blogs")
    .select(
      "id, title, slug, description, meta_title, meta_description, content, display_date, cover_image_url"
    )
    .eq("site_id", siteId)
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to fetch blog: ${error.message}`);
  }

  return data ?? null;
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