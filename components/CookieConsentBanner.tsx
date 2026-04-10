"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "studiely_policies_consent_v2";

type Key = "aup" | "cookie" | "disclaimer";

/** Solid fills = AI Study Tools section card colours (notes / flashcards / quiz). */
const ITEMS: {
  id: Key;
  href: string;
  title: string;
  blurb: string;
  emoji: string;
  /** Tool hex from StudyToolsSection TOOLS */
  toolColor: string;
}[] = [
  {
    id: "aup",
    href: "/acceptable-use",
    title: "Acceptable use",
    blurb: "Learning space only — be kind, stay safe, no abuse or misuse.",
    emoji: "📋",
    toolColor: "#00b09b",
  },
  {
    id: "cookie",
    href: "/cookie-policy",
    title: "Cookies",
    blurb: "Session & essentials + anonymised analytics. No ads, no data sales.",
    emoji: "🍪",
    toolColor: "#2563eb",
  },
  {
    id: "disclaimer",
    href: "/disclaimer",
    title: "Disclaimer",
    blurb: "AI supports learning — not a substitute for school, teachers, or parents.",
    emoji: "⚡",
    toolColor: "#d97b2a",
  },
];

export function CookieConsentBanner() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [agree, setAgree] = useState<Record<Key, boolean>>({
    aup: false,
    cookie: false,
    disclaimer: false,
  });

  useEffect(() => {
    setMounted(true);
    try {
      if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) {
        return;
      }
      setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const allOn = useMemo(
    () => agree.aup && agree.cookie && agree.disclaimer,
    [agree]
  );

  const count = useMemo(
    () => [agree.aup, agree.cookie, agree.disclaimer].filter(Boolean).length,
    [agree]
  );

  const persistAndClose = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  const acceptAll = () => {
    setAgree({ aup: true, cookie: true, disclaimer: true });
    persistAndClose();
  };

  const toggle = (id: Key) => {
    setAgree((s) => ({ ...s, [id]: !s[id] }));
  };

  const continueIfComplete = () => {
    if (!allOn) return;
    persistAndClose();
  };

  if (!mounted || !show) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] pointer-events-none"
      aria-live="polite"
    >
      <div
        className="pointer-events-auto w-full border-t border-white/10 bg-gradient-to-b from-navy/[0.97] via-[#1a1c2e] to-navy shadow-[0_-8px_40px_rgba(0,0,0,0.35)] backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        role="dialog"
        aria-label="Policy consents"
      >
        {/* Funky top shimmer */}
        <div
          className="h-1 w-full bg-gradient-to-r from-teal via-indigo to-amber opacity-90"
          aria-hidden
        />

        <div className="wrap max-w-[1200px] mx-auto px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-4 lg:gap-6">
            {/* Left: hook + progress */}
            <div className="flex shrink-0 gap-3 sm:gap-4 items-center lg:max-w-[220px] xl:max-w-[260px]">
              <div className="relative">
                <span
                  className="text-[2.5rem] sm:text-[2.75rem] leading-none block animate-[cookie-wobble_2.6s_ease-in-out_infinite] motion-reduce:animate-none drop-shadow-lg"
                  aria-hidden
                >
                  🍪
                </span>
                <span className="absolute -top-1 -right-2 text-[10px] font-black uppercase tracking-tighter text-navy bg-teal px-1.5 py-0.5 rounded-md rotate-12 border border-teal-lt shadow-sm">
                  psst
                </span>
              </div>
              <div>
                <p className="text-white text-[15px] sm:text-base font-bold leading-tight">
                  3 quick ticks
                </p>
                <p className="text-[11px] sm:text-xs text-white/55 leading-snug mt-0.5">
                  Same ideas as our legal pages — shortened so you can move fast.
                </p>
                <div className="flex gap-1 mt-2" aria-hidden>
                  {([0, 1, 2] as const).map((i) => (
                    <span
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-colors ${
                        i < count ? "bg-teal" : "bg-white/15"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right stack: three consents */}
            <div className="flex-1 min-w-0 flex flex-col gap-2 lg:max-w-xl lg:ml-auto xl:max-w-2xl">
              {ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 rounded-xl border border-white/25 px-3 py-2.5 sm:py-2.5"
                  style={{
                    backgroundColor: item.toolColor,
                    boxShadow:
                      "0 6px 24px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.14)",
                  }}
                >
                  <div className="flex items-start sm:items-center gap-2 min-w-0 flex-1">
                    <span
                      className="text-lg shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-black/15 border border-white/25 shadow-sm"
                      aria-hidden
                    >
                      {item.emoji}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
                        <span className="text-[13px] sm:text-sm font-bold text-white drop-shadow-sm">
                          {item.title}
                        </span>
                        <Link
                          href={item.href}
                          className="text-[10px] sm:text-[11px] font-semibold text-white/95 underline decoration-white/40 underline-offset-2 hover:decoration-white hover:text-white shrink-0"
                        >
                          Full policy →
                        </Link>
                      </div>
                      <p className="text-[11px] sm:text-[12px] text-white/88 leading-snug mt-0.5 line-clamp-2 sm:line-clamp-2">
                        {item.blurb}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={agree[item.id]}
                    onClick={() => toggle(item.id)}
                    className={`shrink-0 self-end sm:self-center relative h-7 w-12 rounded-full transition-colors border-2 ${
                      agree[item.id]
                        ? "bg-white border-white shadow-md"
                        : "bg-black/25 border-white/35"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full shadow-md transition-transform ${
                        agree[item.id] ? "translate-x-5" : "translate-x-0"
                      }`}
                      style={{
                        backgroundColor: agree[item.id]
                          ? item.toolColor
                          : "#ffffff",
                      }}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Full-width actions row */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-white/10">
            <p className="text-[10px] sm:text-[11px] text-white/50 text-center sm:text-left leading-relaxed order-2 sm:order-1">
              By continuing you agree to our{" "}
              <Link
                href="/terms-of-service"
                className="text-teal-lt font-semibold hover:text-white underline-offset-2 hover:underline"
              >
                Terms
              </Link>
              ,{" "}
              <Link
                href="/privacy-policy"
                className="text-teal-lt font-semibold hover:text-white underline-offset-2 hover:underline"
              >
                Privacy
              </Link>
              , and the policies above.{" "}
              <span className="text-white/40">
                Qismat Ventures W.L.L · Bahrain
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-2 order-1 sm:order-2 w-full sm:w-auto sm:shrink-0">
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal to-teal-dk px-4 py-2.5 text-[13px] font-bold text-white shadow-lg hover:brightness-110 active:scale-[0.98] transition-all border border-white/10"
              >
                <Image
                  src="/logo.jpeg"
                  alt=""
                  width={18}
                  height={18}
                  className="rounded-md opacity-95"
                />
                Accept all &amp; continue
              </button>
              <button
                type="button"
                disabled={!allOn}
                onClick={continueIfComplete}
                className={`rounded-xl px-4 py-2.5 text-[13px] font-bold border-2 transition-all ${
                  allOn
                    ? "bg-white text-navy border-white hover:bg-teal-lt"
                    : "bg-white/5 text-white/35 border-white/15 cursor-not-allowed"
                }`}
              >
                I toggled all three →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
