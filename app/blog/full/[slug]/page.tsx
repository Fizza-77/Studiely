        import { notFound } from "next/navigation";
        import { Footer } from "@/components/Footer";
        import { PageHeader } from "@/components/PageHeader";
        import { supabase } from "@/lib/supabaseClient";

        interface Params {
        slug: string;
        }

        async function getBlogBySlug(slug: string) {
        const { data: site } = await supabase
            .from("sites")
            .select("id,domain")
            .eq("domain", "studiely.app")
            .single();

        if (!site) return null;

        const { data: blog } = await supabase
            .from("blogs")
            .select("id,title,slug,description,content,cover_image_url")
            .eq("site_id", site.id)
            .eq("slug", slug)
            .single();

        if (!blog) return null;

        return blog;
        }

        export default async function FullBlogPage({ params }: { params: Promise<{ slug: string }> }) {
        const { slug } = await params;  // await here to unwrap the Promise

            const blog = await getBlogBySlug(slug);
        if (!blog) return notFound();

        return (
            <>
            <PageHeader
  title={blog.title}
  sub={blog.description || "Read the full article below."}
  variant="compact"
/>
            <main className="bg-bg-base min-h-screen pt-[32px] pb-[40px]">
                <div className="wrap max-w-[760px] mx-auto px-4">
                <article className="bg-white border border-border-default rounded-xl p-6 md:p-8 text-[14px] text-body leading-[1.8] prose prose-sm max-w-none">
                {blog.cover_image_url && (
        <div className="mb-6 overflow-hidden rounded-xl max-h-[400px]">
            <img
            src={blog.cover_image_url}
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded-xl"
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