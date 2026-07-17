import type { Metadata } from "next";
import { BlogPageContent } from "@/components/BlogPageContent";
import { ContactFooter } from "@/components/ContactFooter";
import { getBlogIndexDataForStudiely } from "@/lib/blogs";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { BlogHeroSection } from "@/sections/BlogHeroSection";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type BlogPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
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
  const resolvedSearchParams = await searchParams;

  const activeCategory = resolvedSearchParams?.category?.trim() || "";
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
      <div className="font-jakarta">
        <BlogHeroSection headline={seo.headline} subheadline={seo.subheadline} />
        <main className="min-h-screen overflow-x-clip bg-bg-base">
          <BlogPageContent
            posts={visiblePosts}
            categories={categories}
            activeCategory={activeCategory}
            hasActiveCategory={hasActiveCategory}
            emptyMessage={seo.empty_state_message}
          />
        </main>
        <ContactFooter />
      </div>
    </>
  );
}
