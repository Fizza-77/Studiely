// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { getBlogsForConfiguredSite } from "@/lib/blogs";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";

export const revalidate = 10;
type BlogListItem = {
  slug: string;
  title: string;
  description: string | null;
  coverImage: string;
};

export const metadata: Metadata = {
  title: "Blog — Study Tips, Exam Prep & Product Updates",
  description:
    "Practical revision ideas, curriculum tips, and Studiely product news — for students on IGCSE, GCSE, IB, and more.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Studiely Blog — Smarter Studying & Exam Prep",
    description:
      "Articles on revision strategies, syllabus-aligned study habits, and what’s new in Studiely.",
    url: `${SITE_URL}/blog`,
    siteName: "Studiely",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE_PATH, alt: "Studiely" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studiely Blog",
    description:
      "Study strategies and updates from the Studiely team.",
    images: [DEFAULT_OG_IMAGE_PATH],
  },
};

async function getStudielyBlogs(): Promise<BlogListItem[]> {
  const blogs = await getBlogsForConfiguredSite();
  return blogs.map((b) => ({
    slug: b.slug,
    title: b.title,
    description: b.description,
    coverImage: b.cover_image_url,
  }));
}

export default async function BlogPage() {
  const posts = await getStudielyBlogs();

  return (
    <>
      <PageHeader
  label="Resources"
  title="Studiely Blog"
  sub="Explore articles on smarter studying, exam strategies, and how to get the most out of Studiely."
  variant="compact"
/>
      <main className="bg-bg-base min-h-screen pt-[32px] pb-[40px]">
        <div className="wrap max-w-[1120px] mx-auto px-4">
          <section
            aria-label="Blog articles"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {posts.length === 0 ? (
              <p className="text-muted text-[13px]">
                Blog posts will appear here once they are published from the admin panel.
              </p>
            ) : (
              posts.map((post) => (
               <article
  key={post.slug}
  className="bg-white border border-border-default rounded-xl p-6 flex flex-col justify-between hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-shadow duration-200"
>
  {post.coverImage && (
    <div className="mb-4 rounded-xl overflow-hidden">
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-40 object-cover rounded-xl"
      />
    </div>
  )}
  <div>
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