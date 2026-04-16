import { NextRequest, NextResponse } from "next/server";
import {
  REACTION_TYPES,
  getReactionDataForBlogAndReactor,
  type ReactionType,
} from "@/lib/blogReactions";
import { getClientIpFromHeaders, resolveReactorId } from "@/lib/reactorId";
import { supabaseServer as supabase } from "@/lib/supabaseServer";

const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY?.trim() || "";
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

function isReactionType(value: unknown): value is ReactionType {
  return typeof value === "string" && REACTION_TYPES.includes(value as ReactionType);
}

async function verifyTurnstileToken(token: string, remoteip?: string | null): Promise<boolean> {
  if (!TURNSTILE_SECRET_KEY) {
    console.error("[blog_reactions] TURNSTILE_SECRET_KEY is not set.");
    return false;
  }

  const form = new URLSearchParams();
  form.set("secret", TURNSTILE_SECRET_KEY);
  form.set("response", token);
  if (remoteip) form.set("remoteip", remoteip);

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
      cache: "no-store",
    });

    if (!res.ok) {
      const bodyText = await res.text().catch(() => "");
      console.error("[blog_reactions] Turnstile HTTP error:", res.status, bodyText);
      return false;
    }

    const data = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    if (!data.success) {
      console.error("[blog_reactions] Turnstile rejected:", data["error-codes"] ?? "unknown");
    }
    return Boolean(data.success);
  } catch (e) {
    console.error("[blog_reactions] Turnstile verify network error:", e);
    return false;
  }
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<unknown> }
) {
  const { blogId } = (await context.params) as { blogId?: string };
  if (!blogId) {
    return NextResponse.json({ error: "Missing blogId." }, { status: 400 });
  }

  const body = (await req.json().catch(() => null)) as {
    reactionType?: unknown;
    turnstileToken?: unknown;
  } | null;

  if (!body || !isReactionType(body.reactionType)) {
    return NextResponse.json({ error: "Invalid reactionType." }, { status: 400 });
  }
  if (typeof body.turnstileToken !== "string" || !body.turnstileToken.trim()) {
    return NextResponse.json({ error: "Missing Turnstile token." }, { status: 400 });
  }

  if (!supabase) {
    console.error(
      "[blog_reactions] Supabase server client is not configured (NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY)."
    );
    return NextResponse.json({ error: "Server misconfigured." }, { status: 500 });
  }

  const remoteip = getClientIpFromHeaders(req.headers);
  const verified = await verifyTurnstileToken(body.turnstileToken.trim(), remoteip);
  if (!verified) {
    return NextResponse.json({ error: "Verification failed" }, { status: 403 });
  }

  const reactorId = resolveReactorId(req.headers);

  const { error: deleteError } = await supabase
    .from("blog_reactions")
    .delete()
    .eq("blog_id", blogId)
    .eq("reactor_id", reactorId);

  if (deleteError) {
    console.error("[blog_reactions] Supabase delete failed:", JSON.stringify(deleteError, null, 2));
    return NextResponse.json({ error: "Could not save reaction." }, { status: 500 });
  }

  const { error: insertError } = await supabase.from("blog_reactions").insert({
    blog_id: blogId,
    reactor_id: reactorId,
    reaction_type: body.reactionType,
  });

  if (insertError) {
    console.error("[blog_reactions] Supabase insert failed:", JSON.stringify(insertError, null, 2));
    return NextResponse.json({ error: "Could not save reaction." }, { status: 500 });
  }

  const reactionData = await getReactionDataForBlogAndReactor(blogId, reactorId);
  return NextResponse.json(reactionData, { status: 200 });
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<unknown> }
) {
  const { blogId } = (await context.params) as { blogId?: string };
  if (!blogId) {
    return NextResponse.json({ error: "Missing blogId." }, { status: 400 });
  }

  const reactorId = getClientIpFromHeaders(req.headers);
  const reactionData = await getReactionDataForBlogAndReactor(blogId, reactorId);
  return NextResponse.json(reactionData, { status: 200 });
}
