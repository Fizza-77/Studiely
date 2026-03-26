/** Canonical site origin — override in env for previews/staging */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.studiely.com";

/** Fallback when a page has no dedicated social image (1200×630 recommended for og.png later) */
export const DEFAULT_OG_IMAGE_PATH = "/logo.jpeg";
