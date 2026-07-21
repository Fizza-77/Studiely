import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import { Footer } from "@/components/Footer";
import { buildBlogPostingJsonLd } from "@/lib/blogSchema";
import { getBlogBySlugForStudiely } from "@/lib/blogs";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/seo";
import "../blog-content.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const dynamicParams = true;

const getStudielyBlogBySlug = cache(async (slug: string) => {
  const post = await getBlogBySlugForStudiely(slug);
  if (!post) return null;
  return post;
});

const formatDate = (value: string | null) => {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) return { title: "Blog Post" };

  const blog = await getStudielyBlogBySlug(slug);
  if (!blog) return { title: "Blog Post" };

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
      publishedTime: blog.date_published
        ? new Date(blog.date_published).toISOString()
        : undefined,
      modifiedTime: blog.date_modified
        ? new Date(blog.date_modified).toISOString()
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

  const blog = await getStudielyBlogBySlug(slug);
  if (!blog) {
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
        <main className="min-h-screen bg-bg-base font-jakarta">
          <section className="pb-8 pt-[clamp(0.75rem,2vw,1.25rem)]">
            <div className="wrap">
              <div
                className="rounded-[32px] px-6 py-12 sm:rounded-[40px] sm:px-10 md:px-14"
                style={{ backgroundColor: BLUE }}
              >
                <span
                  className="mb-5 inline-flex rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1E1B4B]"
                  style={{ backgroundColor: LIME }}
                >
                  Studiely Blog
                </span>
                <h1 className="mb-4 font-hanken text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white">
                  Coming soon
                </h1>
                <p className="m-0 max-w-[560px] text-[15px] leading-[1.75] text-white/85">
                  New Studiely articles will appear here once they are published.
                </p>
              </div>
            </div>
          </section>
          <div className="wrap pb-12">
            <article className="mx-auto max-w-[900px] rounded-[28px] bg-white p-6 shadow-[0_12px_36px_rgba(30,27,75,0.08)] sm:rounded-[32px] md:p-10">
              <p className="text-[#5B5A6A]">We’re working on new content. Check back soon.</p>
              <Link href="/blog" className="funky-link font-bold text-[#4F35F2]">
                View all articles →
              </Link>
            </article>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const jsonLd = buildBlogPostingJsonLd(blog);
  const breadcrumbSchema = buildBreadcrumbSchema(blog.title, `/blog/${blog.slug}`);
  const published = formatDate(blog.date_published);

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
      <main className="min-h-screen overflow-x-clip bg-bg-base font-jakarta">
        <section className="pb-[clamp(2rem,4vw,3rem)] pt-[clamp(0.75rem,2vw,1.25rem)]">
          <div className="wrap">
            <div
              className="relative overflow-hidden rounded-[32px] px-6 py-8 sm:rounded-[40px] sm:px-10 sm:py-10 md:px-12 lg:px-14"
              style={{ backgroundColor: BLUE }}
            >
              <div className="relative z-[1] grid min-w-0 items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:gap-10 xl:gap-14">
                <div className="min-w-0">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span
                      className="inline-flex rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#1E1B4B] sm:text-[11px]"
                      style={{ backgroundColor: LIME }}
                    >
                      {blog.category?.name || "Studiely Blog"}
                    </span>
                    {published && (
                      <span className="text-[12px] font-semibold text-white/70 sm:text-[13px]">
                        {published}
                      </span>
                    )}
                  </div>

                  <h1 className="mb-5 font-hanken text-[clamp(2rem,4.7vw,3.65rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-white">
                    {blog.title}
                  </h1>
                  <p className="m-0 max-w-[620px] text-[14px] leading-[1.75] text-white/85 sm:text-[15px] md:text-[16px]">
                    {blog.description ||
                      "A Studiely blog article on smarter studying, exam strategies, and AI-powered learning."}
                  </p>
                  {blog.author_name && (
                    <p className="mb-0 mt-5 text-[12px] font-semibold text-white/65 sm:text-[13px]">
                      By {blog.author_name}
                    </p>
                  )}
                </div>

                <div className="relative aspect-[16/11] min-w-0 overflow-hidden rounded-[24px] bg-white/10 shadow-[0_18px_44px_rgba(20,16,70,0.3)] sm:rounded-[28px]">
                  {blog.cover_image_url ? (
                    <Image
                      src={blog.cover_image_url}
                      alt={blog.title}
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-white/10">
                      <span
                        className="rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B4B]"
                        style={{ backgroundColor: LIME }}
                      >
                        Studiely Blog
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="wrap pb-[clamp(3rem,6vw,5rem)]">
          <article className="mx-auto w-full max-w-[1200px] overflow-hidden rounded-[24px] bg-white px-4 py-7 text-[15px] leading-[1.8] text-[#2D2D35] shadow-[0_14px_40px_rgba(30,27,75,0.08)] sm:rounded-[28px] sm:px-7 sm:py-9 sm:text-[16px] md:rounded-[32px] md:px-10 md:py-11 lg:px-14">
            {blog.content ? (
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            ) : (
              <p className="font-jakarta text-[13px] text-[#5B5A6A]">
                Content for this article has not been added yet.
              </p>
            )}
            <nav
              className="not-prose mt-10 border-t border-[#ECEEF6] pt-8"
              aria-label="Related pages"
            >
              <Link
                href="/blog"
                className="funky-button inline-flex items-center justify-center rounded-full px-5 py-3 text-[13px] font-bold text-white sm:text-[14px]"
                style={{ backgroundColor: BLUE }}
              >
                ← Back to all articles
              </Link>
            </nav>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
