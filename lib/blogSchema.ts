import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";

/** Fields needed to emit Schema.org BlogPosting JSON-LD */
export type BlogPostForJsonLd = {
  title: string;
  slug: string;
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
};

function toIsoDate(value: string | null | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  return new Date(value).toISOString();
}

function buildMainEntityOfPage(
  blog: Pick<BlogPostForJsonLd, "slug" | "main_entity_of_page">
): Record<string, unknown> | string {
  const fromDb = blog.main_entity_of_page?.trim();
  if (fromDb) {
    if (fromDb.startsWith("{")) {
      try {
        return JSON.parse(fromDb) as Record<string, unknown>;
      } catch {
        // fall through to WebPage wrapper
      }
    }
    return {
      "@type": "WebPage",
      "@id": fromDb,
    };
  }

  const url = `${SITE_URL}/blog/${blog.slug}`;
  return {
    "@type": "WebPage",
    "@id": url,
  };
}

/**
 * Builds a BlogPosting object for JSON-LD (headline, description, author,
 * datePublished, dateModified, mainEntityOfPage, image, keywords, articleSection).
 */
export function buildBlogPostingJsonLd(blog: BlogPostForJsonLd): Record<string, unknown> {
  const url = `${SITE_URL}/blog/${blog.slug}`;
  const headline = blog.meta_title?.trim() || blog.title;
  const description =
    blog.meta_description?.trim() ||
    blog.description?.trim() ||
    undefined;

  const image =
    blog.cover_image_url?.trim() || `${SITE_URL}${DEFAULT_OG_IMAGE_PATH}`;

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    url,
    mainEntityOfPage: buildMainEntityOfPage(blog),
  };

  if (description) jsonLd.description = description;

  const datePublished = toIsoDate(blog.date_published);
  if (datePublished) jsonLd.datePublished = datePublished;

  const dateModified = toIsoDate(blog.date_modified);
  if (dateModified) jsonLd.dateModified = dateModified;

  if (image) jsonLd.image = image;

  const kw = blog.keywords?.trim();
  if (kw) jsonLd.keywords = kw;

  const section = blog.article_section?.trim();
  if (section) jsonLd.articleSection = section;

  const author = blog.author_name?.trim();
  if (author) {
    jsonLd.author = {
      "@type": "Person",
      name: author,
    };
  }

  return jsonLd;
}
