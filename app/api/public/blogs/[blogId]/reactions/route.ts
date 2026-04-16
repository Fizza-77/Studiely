import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import {
  REACTION_TYPES,
  getReactionDataForBlogAndVisitor,
  setReactionForVisitor,
  type ReactionType,
} from "@/lib/blogReactions";

const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY?.trim() || "";
const VISITOR_COOKIE = "studiely_reaction_vid";

function isReactionType(value: unknown): value is ReactionType {
  return typeof value === "string" && REACTION_TYPES.includes(value as ReactionType);
}

async function verifyTurnstileToken(token: string, ip?: string | null) {
  if (!TURNSTILE_SECRET_KEY) {
    return { ok: false, reason: "missing-secret" as const, codes: ["missing-input-secret"] };
  }
  const form = new URLSearchParams();
  form.set("secret", TURNSTILE_SECRET_KEY);
  form.set("response", token);
  if (ip) form.set("remoteip", ip);

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
      cache: "no-store",
    });
    if (!res.ok) {
      return { ok: false, reason: "verify-request-failed" as const, codes: ["verification-http-error"] };
    }
    const data = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    return {
      ok: Boolean(data.success),
      reason: data.success ? ("ok" as const) : ("invalid-token" as const),
      codes: data["error-codes"] || [],
    };
  } catch {
    return { ok: false, reason: "verify-network-error" as const, codes: ["verification-network-error"] };
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

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;
  const turnstile = await verifyTurnstileToken(body.turnstileToken, ip);
  if (!turnstile.ok) {
    const status = turnstile.reason === "missing-secret" ? 500 : 403;
    return NextResponse.json(
      {
        error: "Turnstile verification failed.",
        reason: turnstile.reason,
        codes: turnstile.codes,
      },
      { status }
    );
  }

  const existingVisitorId = req.cookies.get(VISITOR_COOKIE)?.value?.trim();
  const visitorId = existingVisitorId || randomUUID();
  const reactionData = await setReactionForVisitor(blogId, visitorId, body.reactionType);
  const res = NextResponse.json(reactionData, { status: 200 });
  if (!existingVisitorId) {
    res.cookies.set(VISITOR_COOKIE, visitorId, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
  }
  return res;
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<unknown> }
) {
  const { blogId } = (await context.params) as { blogId?: string };
  if (!blogId) {
    return NextResponse.json({ error: "Missing blogId." }, { status: 400 });
  }
  const visitorId = req.cookies.get(VISITOR_COOKIE)?.value?.trim() || null;
  const reactionData = await getReactionDataForBlogAndVisitor(blogId, visitorId);
  return NextResponse.json(reactionData, { status: 200 });
}
