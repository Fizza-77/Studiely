// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { getBlogIndexDataForStudiely } from "@/lib/blogs";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const dynamic = "force-static";

type BlogPageProps = {
  searchParams?: {
    category?: string;
  };
};

export async function generateMetadata(): Promise<Metadata> {
  const indexData = await getBlogIndexDataForStudiely();
  const title = "Studiely Blog — AI Learning, Flashcards & Exam Practice Tips";
  const description =
    "AI learning and study tips for real exams: revision strategies, IGCSE and IB guides, flashcards, exam practice ideas, " +
    "and student tools — for GCSE, A-Level, SAT and HSC students.";

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/blog` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/blog`,
      siteName: "Studiely",
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE_PATH, alt: "Studiely" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const indexData = await getBlogIndexDataForStudiely();
  const { posts, categories, seo } = indexData;
  const breadcrumbSchema = buildBreadcrumbSchema("Blog", "/blog");

  const activeCategory = searchParams?.category?.trim() || "";
  const hasActiveCategory = categories.some((cat) => cat.slug === activeCategory);
  const visiblePosts = hasActiveCategory
    ? posts.filter((post) => post.category?.slug === activeCategory)
    : posts;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <PageHeader
        label="Resources"
        title={seo.headline}
        sub={seo.subheadline}
        variant="compact"
      />
      <main className="bg-bg-base min-h-screen pt-[32px] pb-[40px]">
        <div className="wrap max-w-[1120px] mx-auto px-4">
          {categories.length > 0 && (
            <nav
              aria-label="Filter posts by category"
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <Link
                href="/blog"
                className={`px-3 py-1.5 rounded-full border text-[12px] transition-colors ${
                  !hasActiveCategory
                    ? "border-teal text-teal"
                    : "border-border-default text-muted hover:text-body"
                }`}
              >
                All
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/blog?category=${encodeURIComponent(category.slug)}`}
                  className={`px-3 py-1.5 rounded-full border text-[12px] transition-colors ${
                    activeCategory === category.slug
                      ? "border-teal text-teal"
                      : "border-border-default text-muted hover:text-body"
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          )}
          <section
            aria-label="Blog articles"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {visiblePosts.length === 0 ? (
              <p className="text-muted text-[13px]">
                {seo.empty_state_message}
              </p>
            ) : (
              visiblePosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-border-default rounded-xl p-6 flex flex-col justify-between hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-shadow duration-200"
                >
                  {post.cover_image_url && (
                    <div className="mb-4 rounded-xl overflow-hidden">
                      <img
                        src={post.cover_image_url}
                        alt={post.title}
                        className="w-full h-40 object-cover rounded-xl"
                      />
                    </div>
                  )}
                  <div>
                    {post.category && (
                      <p className="inline-flex items-center rounded-full border border-border-default px-2.5 py-1 text-[11px] text-muted mb-3">
                        {post.category.name}
                      </p>
                    )}
                    <h2 className="font-serif text-[18px] text-navy mb-2">{post.title}</h2>
                    <p className="text-[13px] text-muted leading-[1.7] mb-4">
                      {post.description || "Read the full article to learn more."}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-[13px] font-medium text-teal hover:text-teal-dk transition-colors duration-150"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read more
                    <span className="ml-1 text-[14px]">→</span>
                  </Link>
                </article>
              ))
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}