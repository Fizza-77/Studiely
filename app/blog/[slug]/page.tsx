import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { buildBlogPostingJsonLd } from "@/lib/blogSchema";
import { getBlogBySlugForStudiely } from "@/lib/blogs";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const dynamicParams = true;

const getStudielyBlogBySlug = cache(async (slug: string) => {
  const blog = await getBlogBySlugForStudiely(slug);
  if (!blog) return null;
  return { blog };
});

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) return { title: "Blog Post" };

  const result = await getStudielyBlogBySlug(slug);
  if (!result) return { title: "Blog Post" };

  const { blog } = result;
  const title = blog.meta_title || blog.title;
  const description =
    blog.meta_description ||
    blog.description ||
    "A Studiely blog article about smarter studying and AI-powered learning.";

  const canonical = `${SITE_URL}/blog/${blog.slug}`;
  const ogImage = blog.cover_image_url
    ? [{ url: blog.cover_image_url, alt: blog.title }]
    : [{ url: DEFAULT_OG_IMAGE_PATH, alt: "Studiely" }];

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonical,
      siteName: "Studiely",
      locale: "en_US",
      publishedTime: blog.display_date
        ? new Date(blog.display_date).toISOString()
        : undefined,
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage.map((i) => i.url),
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug) return notFound();

  const result = await getStudielyBlogBySlug(slug);
  if (!result) {
    if (slug !== "coming-soon") return notFound();
    const breadcrumbSchema = buildBreadcrumbSchema("Coming soon", "/blog/coming-soon");
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <PageHeader
          label="Blog"
          title="Coming soon"
          sub="New Studiely articles will appear here once they are published."
          variant="compact"
        />
        <main className="bg-bg-base min-h-screen pt-[32px] pb-[40px]">
          <div className="wrap max-w-[760px] mx-auto px-4">
            <article className="bg-white border border-border-default rounded-xl p-6 md:p-8 text-[14px] text-body leading-[1.8] prose prose-sm max-w-none">
              <p>We’re working on new content. Check back soon.</p>
              <p>
                <Link href="/blog" className="text-teal hover:text-teal-dk font-medium">
                  View all articles
                </Link>
              </p>
            </article>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const { blog } = result;
  const jsonLd = buildBlogPostingJsonLd(blog);
  const breadcrumbSchema = buildBreadcrumbSchema(blog.title, `/blog/${blog.slug}`);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <PageHeader
        label={blog.category?.name ? `Blog · ${blog.category.name}` : "Blog"}
        title={blog.title}
        sub={
          blog.description ||
          "A Studiely blog article on smarter studying, exam strategies, and AI-powered learning."
        }
        variant="compact"
      />
      <main className="bg-bg-base min-h-screen pt-[32px] pb-[40px]">
        <div className="wrap max-w-[760px] mx-auto px-4">
          <article className="bg-white border border-border-default rounded-xl p-6 md:p-8 text-[14px] text-body leading-[1.8] prose prose-sm max-w-none">
            {blog.cover_image_url && (
              <div className="mb-6">
                <img
                  src={blog.cover_image_url}
                  alt={blog.title}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            )}
            {blog.category && (
              <p className="not-prose mb-6 inline-flex items-center rounded-full border border-border-default px-2.5 py-1 text-[11px] text-muted">
                {blog.category.name}
              </p>
            )}
            {blog.content ? (
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            ) : (
              <p className="text-muted text-[13px]">
                Content for this article has not been added yet.
              </p>
            )}
            <nav
              className="mt-10 pt-8 border-t border-border-default not-prose"
              aria-label="Related pages"
            >
              <p className="text-[13px] text-muted">
                <Link
                  href="/blog"
                  className="text-teal hover:text-teal-dk font-medium"
                >
                  All articles
                </Link>
                <span className="mx-2 text-border-default">·</span>
              </p>
            </nav>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
