import Image from "next/image";
import Link from "next/link";
import { FaqBottomCards } from "@/components/FaqBottomCards";
import type { BlogCategoryRow, BlogListRow } from "@/lib/blogs";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";

const CATEGORY_THEMES = [
  { background: "#4F35F2", foreground: "#FFFFFF", soft: "#ECEAFF" },
  { background: "#FF36C6", foreground: "#1E1B4B", soft: "#FFE5F7" },
  { background: "#E8FF2F", foreground: "#1E1B4B", soft: "#F7FFC2" },
  { background: "#FF765E", foreground: "#1E1B4B", soft: "#FFE8E3" },
  { background: "#42D6E8", foreground: "#1E1B4B", soft: "#DFF9FC" },
  { background: "#FFC94A", foreground: "#1E1B4B", soft: "#FFF3CF" },
  { background: "#8B5CF6", foreground: "#FFFFFF", soft: "#EEE8FF" },
  { background: "#2CC59D", foreground: "#1E1B4B", soft: "#DDF8F0" },
] as const;

type BlogPageContentProps = {
  posts: BlogListRow[];
  categories: BlogCategoryRow[];
  activeCategory: string;
  emptyMessage: string;
};

const categoryPillClass = (active: boolean) =>
  `inline-flex items-center rounded-full px-4 py-2 font-jakarta text-[12px] font-semibold transition-[transform,background-color,color,box-shadow] duration-200 sm:text-[13px] ${
    active
      ? "text-[#1E1B4B] shadow-[0_6px_18px_rgba(232,255,47,0.35)]"
      : "bg-white text-[#4F35F2] shadow-[0_4px_14px_rgba(30,27,75,0.06)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(79,53,242,0.12)]"
  }`;

const formatDate = (value: string | null) => {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const BlogPageContent = ({
  posts,
  categories,
  activeCategory,
  emptyMessage,
}: BlogPageContentProps) => {
  const categoryThemes = new Map(
    categories.map((category, index) => [
      category.slug,
      CATEGORY_THEMES[index % CATEGORY_THEMES.length],
    ]),
  );

  return (
    <div className="wrap font-jakarta pb-[clamp(1.5rem,3.5vw,2.25rem)] pt-[clamp(0.5rem,2vw,1rem)]">
      {categories.length > 0 && (
        <nav
          aria-label="Filter posts by category"
          className="mb-5 grid grid-cols-2 gap-2 sm:mb-6 sm:flex sm:flex-wrap sm:items-center sm:gap-3"
        >
          {categories.map((category) => {
            const active = activeCategory === category.slug;
            const theme = categoryThemes.get(category.slug)!;
            return (
              <Link
                key={category.id}
                href={
                  active
                    ? "/blogs"
                    : `/blogs?category=${encodeURIComponent(category.slug)}`
                }
                className={`${categoryPillClass(active)} w-full justify-center sm:w-auto`}
                style={{
                  backgroundColor: active ? theme.background : theme.soft,
                  color:
                    theme.foreground === "#FFFFFF" && !active
                      ? theme.background
                      : theme.foreground,
                }}
                aria-pressed={active}
                aria-current={active ? "true" : undefined}
              >
                {category.name}
              </Link>
            );
          })}
        </nav>
      )}

      <section
        aria-label="Blog articles"
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3"
      >
        {posts.length === 0 ? (
          <div className="col-span-full rounded-[28px] border border-[#ECEEF6] bg-white px-6 py-12 text-center shadow-[0_10px_32px_rgba(30,27,75,0.08)] sm:rounded-[32px] sm:px-8">
            <p className="m-0 font-jakarta text-[14px] leading-relaxed text-[#5B5A6A] sm:text-[15px]">
              {emptyMessage}
            </p>
          </div>
        ) : (
          posts.map((post) => {
            const published = formatDate(post.date_published);
            const categoryTheme = post.category
              ? categoryThemes.get(post.category.slug) ?? CATEGORY_THEMES[0]
              : CATEGORY_THEMES[0];

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F35F2]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
                aria-label={`Read more about ${post.title}`}
              >
                <article className="funky-card flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_10px_32px_rgba(30,27,75,0.08)] sm:rounded-[32px]">
                  {post.cover_image_url ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#ECEAFF]">
                      <Image
                        src={post.cover_image_url}
                        alt={post.title}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <div
                      className="flex aspect-[16/10] items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(79,53,242,0.12) 0%, rgba(255,54,198,0.12) 100%)",
                      }}
                    >
                      <span
                        className="rounded-full px-4 py-1.5 font-jakarta text-[11px] font-bold uppercase tracking-[0.1em]"
                        style={{ backgroundColor: LIME, color: "#1E1B4B" }}
                      >
                        Studiely Blog
                      </span>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      {post.category && (
                        <span
                          className="inline-flex rounded-full px-3 py-1 font-jakarta text-[10px] font-bold uppercase tracking-[0.08em] sm:text-[11px]"
                          style={{
                            backgroundColor: categoryTheme.background,
                            color: categoryTheme.foreground,
                          }}
                        >
                          {post.category.name}
                        </span>
                      )}
                      {published && (
                        <span className="font-jakarta text-[11px] font-medium text-[#8B8D9A] sm:text-[12px]">
                          {published}
                        </span>
                      )}
                    </div>

                    <h2 className="mb-2 font-hanken text-[clamp(1.05rem,1.8vw,1.25rem)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#1E1B4B] sm:mb-3">
                      {post.title}
                    </h2>

                    <p className="mb-4 line-clamp-3 font-jakarta text-[13px] leading-[1.7] text-[#5B5A6A] sm:mb-5 sm:text-[14px]">
                      {post.description || "Read the full article to learn more."}
                    </p>

                    <span
                      className="mt-auto inline-flex items-center gap-1 font-jakarta text-[13px] font-bold transition-transform duration-200 group-hover:translate-x-1 sm:text-[14px]"
                      style={{ color: BLUE }}
                    >
                      Read article
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </article>
              </Link>
            );
          })
        )}
      </section>

      <FaqBottomCards />
    </div>
  );
};
