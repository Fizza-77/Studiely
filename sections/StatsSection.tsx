"use client";

import { AnimNum } from "@/components/AnimNum";
import { Reveal } from "@/components/Reveal";

export const STATS_ITEMS = [
  { n: "1", pre: "", suf: "K+", label: "Students Trust Studiely", col: "var(--color-navy)" },
  { n: "75", pre: "", suf: "%", label: "Study Time Saved", col: "var(--color-teal)" },
  { n: "3", pre: "", suf: "x", label: "Faster Exam Prep", col: "var(--color-navy)" },
  { n: "4.8", pre: "★ ", suf: "", label: "Average Student Rating", col: "var(--color-amber)" },
] as const;

type StatsBarProps = {
  /** Tighter padding when used in a contained card-style strip. */
  compact?: boolean;
  /** Full viewport width — e.g. below hero tool cards. */
  fullBleed?: boolean;
};

/** Trust indicators (numbers + labels). */
export const StatsBar = ({ compact, fullBleed }: StatsBarProps) => {
  const outer = fullBleed
    ? "w-full min-w-full max-w-none overflow-hidden border-y border-border-default bg-white"
    : "mx-auto w-full max-w-[min(100%,1536px)] overflow-hidden rounded-md border border-border-default bg-white shadow-[0_1px_10px_rgba(0,0,0,0.04)] sm:rounded-lg";

  const cell = fullBleed
    ? compact
      ? "px-1.5 py-1.5 sm:px-2 sm:py-2 md:px-3 md:py-2.5"
      : "px-2 py-2.5 sm:px-3 sm:py-3 md:px-4 md:py-3.5"
    : compact
      ? "px-1.5 py-1.5 sm:px-2 sm:py-2"
      : "px-4 py-5 sm:px-5 sm:py-6 md:py-8";

  const num = fullBleed
    ? compact
      ? "mb-0.25 text-[clamp(13px,3.1vw,22px)] sm:mb-0.5"
      : "mb-0.5 text-[clamp(16px,3.8vw,28px)] sm:mb-1"
    : compact
      ? "mb-0 text-[clamp(12px,2.4vw,16px)]"
      : "mb-1 text-[clamp(20px,4.5vw,36px)]";

  const label = fullBleed
    ? compact
      ? "mx-auto max-w-[min(100%,180px)] px-0.5 text-[8px] font-medium leading-snug text-body sm:max-w-[min(100%,210px)] sm:text-[9px] md:text-[10px] md:leading-tight"
      : "mx-auto max-w-[min(100%,200px)] px-0.5 text-[9px] font-medium leading-snug text-body sm:max-w-[min(100%,240px)] sm:text-[10px] md:text-[11px] md:leading-tight"
    : compact
      ? "mx-auto max-w-[110px] text-[8px] leading-[1.25] text-body sm:max-w-[120px] sm:text-[8.5px]"
      : "mx-auto max-w-[160px] text-[11px] leading-[1.4] text-body sm:max-w-[190px] sm:text-[12px]";

  return (
    <div className={outer}>
      <div className="grid grid-cols-2 border-border-default border-l lg:grid-cols-4">
        {STATS_ITEMS.map((s, i) => (
          <Reveal
            key={i}
            delay={i * 0.06}
            className={`h-full min-h-0 border-b border-r border-border-default bg-white text-center ${cell}`}
          >
            <div className={`font-semibold tracking-[-0.4px] leading-none ${num}`} style={{ color: s.col }}>
              <AnimNum target={s.n} pre={s.pre} suf={s.suf} />
            </div>

            <div className={`line-clamp-2 ${label}`}>{s.label}</div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

/**
 * Explanatory copy only (no stat numbers) — first content below the hero fold.
 * Scroll lands here after the full-screen hero + trust bar.
 */
export const StatsSection = () => (
  <div id="stats-trust-copy" className="scroll-mt-[calc(66px+12px)] w-full bg-bg-base">
    <div className="w-full border-y border-border-default bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
      <div
        className="wrap flex flex-col items-center gap-[clamp(0.85rem,1.6vw,1.4rem)] py-[clamp(1rem,2vw,1.65rem)] text-center sm:gap-[clamp(1rem,1.8vw,1.5rem)] sm:py-[clamp(1.15rem,2.2vw,1.8rem)] md:py-[clamp(1.3rem,2.4vw,2rem)]"
      >
        <p className="m-0 max-w-[720px] text-center text-[13px] leading-[1.65] text-body sm:text-[14px] md:text-[15px]">
          Built to support major curricula and exam boards across the UK, US, Australia and Canada.
        </p>
        <p className="m-0 max-w-[820px] text-center text-[11.5px] font-light italic leading-[1.7] text-body/85 sm:text-[12.5px] md:text-[13px]">
          These numbers are live, real and updated every week. We&apos;re a new platform — we&apos;d rather show you
          where we actually are than pretend to be somewhere we&apos;re not. Join us early and help us build something
          genuine.
        </p>
      </div>
    </div>
  </div>
);
