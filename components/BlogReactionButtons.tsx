"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Script from "next/script";
import type { ReactionCounts, ReactionType } from "@/lib/blogReactions";

type BlogReactionButtonsProps = {
  blogId: string;
  initialCounts: ReactionCounts;
  initialUserReaction: ReactionType | null;
};

type TurnstileWindow = Window & {
  turnstile?: {
    render: (
      container: string | HTMLElement,
      options: {
        sitekey: string;
        size?: "normal" | "compact" | "invisible";
        callback?: (token: string) => void;
        "error-callback"?: (code?: string) => void;
        "expired-callback"?: () => void;
      }
    ) => string;
    execute: (widgetId: string) => void;
    reset: (widgetId: string) => void;
    remove?: (widgetId: string) => void;
  };
};

const REACTIONS: Array<{ key: ReactionType; label: string; icon: string }> = [
  { key: "love", label: "Love", icon: "❤️" },
  { key: "thumbs_up", label: "Thumbs up", icon: "👍" },
  { key: "thumbs_down", label: "Thumbs down", icon: "👎" },
  { key: "celebrationpop", label: "Celebrate", icon: "🎉" },
  { key: "clap", label: "Clap", icon: "👏" },
];

export function BlogReactionButtons({
  blogId,
  initialCounts,
  initialUserReaction,
}: BlogReactionButtonsProps) {
  const [counts, setCounts] = useState<ReactionCounts>(initialCounts);
  const [userReaction, setUserReaction] = useState<ReactionType | null>(initialUserReaction);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const pendingReactionRef = useRef<ReactionType | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() || "";
  /** Must match widget type in Cloudflare: "invisible" widget → "invisible"; Managed widget → "normal" or "compact". */
  const widgetSize = (
    process.env.NEXT_PUBLIC_TURNSTILE_WIDGET_SIZE?.trim().toLowerCase() || "normal"
  ) as "invisible" | "normal" | "compact";

  const [scriptLoaded, setScriptLoaded] = useState(false);

  const canSubmit = useMemo(() => Boolean(siteKey), [siteKey]);

  const updateCountsAfterReaction = useCallback(
    (nextReaction: ReactionType | null) => {
      const next = { ...counts };
      if (userReaction) {
        next[userReaction] = Math.max(0, next[userReaction] - 1);
      }
      if (nextReaction) {
        next[nextReaction] += 1;
      }
      setCounts(next);
      setUserReaction(nextReaction);
    },
    [counts, userReaction]
  );

  const submitReaction = useCallback(
    async (reactionType: ReactionType, token: string) => {
      setIsSubmitting(true);
      setError(null);
      try {
        const res = await fetch(`/api/public/blogs/${blogId}/reactions`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reactionType, turnstileToken: token }),
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Could not save reaction.");
        }

        const data = (await res.json().catch(() => null)) as
          | { counts?: ReactionCounts; userReaction?: ReactionType | null }
          | null;

        if (data?.counts) {
          setCounts(data.counts);
          setUserReaction(data.userReaction ?? reactionType);
        } else {
          updateCountsAfterReaction(reactionType);
        }
      } catch (e) {
        const message = e instanceof Error ? e.message : "Could not save reaction.";
        setError(message);
      } finally {
        setIsSubmitting(false);
        setTurnstileToken(null);
        pendingReactionRef.current = null;
        if (widgetIdRef.current && (window as TurnstileWindow).turnstile) {
          (window as TurnstileWindow).turnstile!.reset(widgetIdRef.current);
        }
      }
    },
    [blogId, updateCountsAfterReaction]
  );

  const submitReactionRef = useRef(submitReaction);
  submitReactionRef.current = submitReaction;

  /** Mount Turnstile after api.js loads — avoids race with ref + avoids display:none on widget host. */
  useEffect(() => {
    if (!scriptLoaded || !canSubmit || !turnstileContainerRef.current || widgetIdRef.current) return;
    const api = (window as TurnstileWindow).turnstile;
    if (!api) return;

    widgetIdRef.current = api.render(turnstileContainerRef.current, {
      sitekey: siteKey,
      size: widgetSize,
      callback: (token: string) => {
        setTurnstileToken(token);
        const pendingReaction = pendingReactionRef.current;
        if (pendingReaction) {
          void submitReactionRef.current(pendingReaction, token);
        }
      },
      "error-callback": (code?: string) => {
        setError(
          code
            ? `Turnstile error (${code}). Check site key and widget type in Cloudflare match this page.`
            : "Turnstile verification failed. Check site key and allowed hostnames in Cloudflare."
        );
        setIsSubmitting(false);
      },
      "expired-callback": () => {
        setTurnstileToken(null);
      },
    });
    setTurnstileReady(true);

    return () => {
      const id = widgetIdRef.current;
      const api = (window as TurnstileWindow).turnstile;
      if (id && api?.remove) {
        try {
          api.remove(id);
        } catch {
          /* ignore */
        }
      }
      widgetIdRef.current = null;
      setTurnstileReady(false);
    };
  }, [canSubmit, scriptLoaded, siteKey, widgetSize]);

  const handleReact = useCallback(
    async (reactionType: ReactionType) => {
      if (isSubmitting || !canSubmit) return;
      pendingReactionRef.current = reactionType;
      if (turnstileToken) {
        await submitReaction(reactionType, turnstileToken);
        return;
      }
      const api = (window as TurnstileWindow).turnstile;
      if (!api || !widgetIdRef.current) {
        setError("Verification is not ready yet. Please try again.");
        return;
      }
      if (widgetSize === "invisible") {
        setIsSubmitting(true);
        setError(null);
        api.execute(widgetIdRef.current);
      } else {
        setError("Complete the verification box above, then tap your reaction again.");
      }
    },
    [canSubmit, isSubmitting, submitReaction, turnstileToken, widgetSize]
  );

  return (
    <div>
      {canSubmit && (
        <>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
            strategy="afterInteractive"
            onLoad={() => setScriptLoaded(true)}
          />
          {/* Do not use display:none — Turnstile iframe can fail. Visually hide instead for invisible mode. */}
          <div
            ref={turnstileContainerRef}
            className={
              widgetSize === "invisible"
                ? "fixed left-0 top-0 -z-10 h-px w-px overflow-hidden opacity-0 pointer-events-none"
                : "mb-4 min-h-[65px]"
            }
            aria-hidden={widgetSize === "invisible"}
          />
        </>
      )}

      <div className="flex flex-wrap gap-2">
        {REACTIONS.map((reaction) => {
          const isActive = userReaction === reaction.key;
          return (
            <button
              key={reaction.key}
              type="button"
              disabled={!canSubmit || isSubmitting || !turnstileReady}
              onClick={() => void handleReact(reaction.key)}
              className={`text-[12px] border rounded-full px-2.5 py-1 transition-colors ${
                isActive
                  ? "border-teal text-teal bg-teal-lt"
                  : "border-border-default text-muted hover:text-body"
              } disabled:opacity-60 disabled:cursor-not-allowed`}
              aria-label={`${reaction.label}: ${counts[reaction.key]}`}
            >
              {reaction.icon} {counts[reaction.key]}
            </button>
          );
        })}
      </div>

      {!canSubmit && (
        <p className="text-[11px] text-muted mt-2">
          Reaction submit is disabled until Turnstile keys are configured.
        </p>
      )}
      {error && <p className="text-[11px] text-rose mt-2">{error}</p>}
    </div>
  );
}
