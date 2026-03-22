// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { supabase } from "@/lib/supabaseClient";

interface Params {
  slug: string;
}

async function getStudielyBlogBySlug(slug: string) {
  const { data: site, error: siteError } = await supabase
    .from("sites")
    .select("id,domain")
    .eq("domain", "studiely.app")
    .single();

  if (siteError || !site) {
    console.error("Failed to load Studiely site:", siteError);
    return null;
  }

  const { data: blog, error: blogError } = await supabase
    .from("blogs")
    .select(
      "id,title,slug,description,meta_title,meta_description,content,display_date,cover_image_url"
    )
    .eq("site_id", site.id)
    .eq("slug", slug)
    .single();

  if (blogError || !blog) {
    console.error("Blog not found for slug:", slug, blogError);
    return null;
  }

  return { site, blog };
}

export async function generateMetadata(
  { params }: { params: { slug?: string } }
): Promise<Metadata> {
  const slug = params?.slug;
  if (!slug) return { title: "Blog Post" };

  const result = await getStudielyBlogBySlug(slug);
  if (!result) return { title: "Blog Post" };

  const { blog, site } = result;
  const title = blog.meta_title || blog.title;
  const description =
    blog.meta_description ||
    blog.description ||
    "A Studiely blog article about smarter studying and AI-powered learning.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://${site.domain}/blog/${blog.slug}`,
    },
  };
}

// ✅ Default export React Component
export default async function BlogPostPage({
  params,
}: {
  params: { slug?: string };
}) {
  const slug = params?.slug;
  if (!slug) return notFound();

  const result = await getStudielyBlogBySlug(slug);
  if (!result) return notFound();

  const { blog } = result;

  return (
    <>
      <PageHeader
        label="Blog"
        title={blog.title}
        sub={
          blog.description ||
          "A Studiely blog article on smarter studying, exam strategies, and AI-powered learning."
        }
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
            {blog.content ? (
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            ) : (
              <p className="text-muted text-[13px]">
                Content for this article has not been added yet.
              </p>
            )}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}