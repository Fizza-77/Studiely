"use client";

import { useCallback, useMemo, useRef, useState } from "react";
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
        "error-callback"?: () => void;
        "expired-callback"?: () => void;
      }
    ) => string;
    execute: (widgetId: string) => void;
    reset: (widgetId: string) => void;
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

  const onTurnstileScriptReady = useCallback(() => {
    if (!siteKey || !turnstileContainerRef.current) return;
    const api = (window as TurnstileWindow).turnstile;
    if (!api || widgetIdRef.current) return;
    widgetIdRef.current = api.render(turnstileContainerRef.current, {
      sitekey: siteKey,
      size: "invisible",
      callback: (token: string) => {
        setTurnstileToken(token);
        const pendingReaction = pendingReactionRef.current;
        if (pendingReaction) {
          void submitReaction(pendingReaction, token);
        }
      },
      "error-callback": () => {
        setError("Turnstile verification failed. Please try again.");
        setIsSubmitting(false);
      },
      "expired-callback": () => {
        setTurnstileToken(null);
      },
    });
    setTurnstileReady(true);
  }, [siteKey, submitReaction]);

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
      setIsSubmitting(true);
      setError(null);
      api.execute(widgetIdRef.current);
    },
    [canSubmit, isSubmitting, submitReaction, turnstileToken]
  );

  return (
    <div>
      {canSubmit && (
        <>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
            strategy="afterInteractive"
            onReady={onTurnstileScriptReady}
          />
          <div ref={turnstileContainerRef} className="hidden" aria-hidden="true" />
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
