import { getBlogBySlugForStudiely, getBlogIndexDataForStudiely } from "@/lib/blogs";
import { supabaseServer } from "@/lib/supabaseServer";

export const REACTION_TYPES = [
  "love",
  "thumbs_up",
  "thumbs_down",
  "celebrationpop",
  "clap",
] as const;

export type ReactionType = (typeof REACTION_TYPES)[number];

export type ReactionCounts = Record<ReactionType, number>;

export type BlogReactionData = {
  counts: ReactionCounts;
  userReaction: ReactionType | null;
};

export type ReactionCountsByBlog = Record<string, ReactionCounts>;

const REACTIONS_TABLE = "blog_reactions";

export const ZERO_REACTION_COUNTS: ReactionCounts = {
  love: 0,
  thumbs_up: 0,
  thumbs_down: 0,
  celebrationpop: 0,
  clap: 0,
};

function normalizeUserReaction(raw: unknown): ReactionType | null {
  if (typeof raw !== "string") return null;
  return REACTION_TYPES.includes(raw as ReactionType) ? (raw as ReactionType) : null;
}

export async function getReactionCountsForBlog(blogId: string): Promise<BlogReactionData> {
  if (!blogId || !supabaseServer) {
    return { counts: ZERO_REACTION_COUNTS, userReaction: null };
  }

  try {
    const { data, error } = await supabaseServer
      .from(REACTIONS_TABLE)
      .select("reaction_type")
      .eq("blog_id", blogId);

    if (error) return { counts: ZERO_REACTION_COUNTS, userReaction: null };

    const counts = { ...ZERO_REACTION_COUNTS };
    for (const row of data ?? []) {
      const key = normalizeUserReaction((row as { reaction_type?: unknown }).reaction_type);
      if (key) counts[key] += 1;
    }

    return {
      counts,
      userReaction: null,
    };
  } catch {
    return { counts: ZERO_REACTION_COUNTS, userReaction: null };
  }
}

export async function getReactionDataForBlogAndVisitor(
  blogId: string,
  visitorId: string | null
): Promise<BlogReactionData> {
  const base = await getReactionCountsForBlog(blogId);
  if (!visitorId || !supabaseServer) return base;
  try {
    const { data, error } = await supabaseServer
      .from(REACTIONS_TABLE)
      .select("reaction_type")
      .eq("blog_id", blogId)
      .eq("visitor_id", visitorId)
      .limit(1)
      .maybeSingle();
    if (error) return base;
    return {
      counts: base.counts,
      userReaction: normalizeUserReaction((data as { reaction_type?: unknown } | null)?.reaction_type),
    };
  } catch {
    return base;
  }
}

export async function setReactionForVisitor(
  blogId: string,
  visitorId: string,
  reactionType: ReactionType
): Promise<BlogReactionData> {
  if (!supabaseServer) {
    return { counts: ZERO_REACTION_COUNTS, userReaction: null };
  }
  const { error } = await supabaseServer
    .from(REACTIONS_TABLE)
    .upsert(
      {
        blog_id: blogId,
        visitor_id: visitorId,
        reaction_type: reactionType,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "blog_id,visitor_id" }
    );
  if (error) {
    return { counts: ZERO_REACTION_COUNTS, userReaction: null };
  }
  return getReactionDataForBlogAndVisitor(blogId, visitorId);
}

export async function getBlogIndexPageDataWithReactions() {
  const indexData = await getBlogIndexDataForStudiely();
  const reactionResults = await Promise.all(
    indexData.posts.map(async (post) => ({
      blogId: post.id,
      data: await getReactionCountsForBlog(post.id),
    }))
  );

  const reactionCountsByBlog: ReactionCountsByBlog = {};
  for (const row of reactionResults) {
    reactionCountsByBlog[row.blogId] = row.data.counts;
  }

  return {
    ...indexData,
    reactionCountsByBlog,
  };
}

export async function getBlogPostBySlugWithReactions(slug: string) {
  const blog = await getBlogBySlugForStudiely(slug);
  if (!blog) return null;

  const reactionData = await getReactionCountsForBlog(blog.id);
  return {
    blog,
    reactionData,
  };
}
