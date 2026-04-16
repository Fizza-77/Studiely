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
  return getReactionDataForBlogAndReactor(blogId, null);
}

/**
 * Counts for the blog plus the current reactor's reaction (if any), using column `reactor_id`.
 */
export async function getReactionDataForBlogAndReactor(
  blogId: string,
  reactorId: string | null
): Promise<BlogReactionData> {
  if (!blogId || !supabaseServer) {
    return { counts: { ...ZERO_REACTION_COUNTS }, userReaction: null };
  }

  try {
    const { data, error } = await supabaseServer
      .from(REACTIONS_TABLE)
      .select("reaction_type")
      .eq("blog_id", blogId);

    if (error) {
      console.error("[blogReactions] Supabase select (counts) failed:", JSON.stringify(error, null, 2));
      return { counts: { ...ZERO_REACTION_COUNTS }, userReaction: null };
    }

    const counts = { ...ZERO_REACTION_COUNTS };
    for (const row of data ?? []) {
      const key = normalizeUserReaction((row as { reaction_type?: unknown }).reaction_type);
      if (key) counts[key] += 1;
    }

    if (!reactorId) {
      return { counts, userReaction: null };
    }

    const { data: mine, error: mineError } = await supabaseServer
      .from(REACTIONS_TABLE)
      .select("reaction_type")
      .eq("blog_id", blogId)
      .eq("reactor_id", reactorId)
      .limit(1)
      .maybeSingle();

    if (mineError) {
      console.error("[blogReactions] Supabase select (reactor) failed:", JSON.stringify(mineError, null, 2));
      return { counts, userReaction: null };
    }

    return {
      counts,
      userReaction: normalizeUserReaction((mine as { reaction_type?: unknown } | null)?.reaction_type),
    };
  } catch (e) {
    console.error("[blogReactions] Unexpected error:", e);
    return { counts: { ...ZERO_REACTION_COUNTS }, userReaction: null };
  }
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

export async function getBlogPostBySlugWithReactions(slug: string, reactorId?: string | null) {
  const blog = await getBlogBySlugForStudiely(slug);
  if (!blog) return null;

  const reactionData = await getReactionDataForBlogAndReactor(blog.id, reactorId ?? null);
  return {
    blog,
    reactionData,
  };
}
