"use client";

import { AnimNum } from "@/components/AnimNum";
import { Reveal } from "@/components/Reveal";

export const STATS_ITEMS = [
  { n: "400", pre: "", suf: " +", label: "Students Trust Studiely", col: "var(--color-navy)" },
  { n: "75", pre: "", suf: "%", label: "Study Time Saved", col: "var(--color-teal)" },
  { n: "3", pre: "", suf: "x", label: "Faster Exam Prep", col: "var(--color-navy)" },
  { n: "4.8", pre: "★ ", suf: "", label: "Average Student Rating", col: "var(--color-amber)" },
] as const;

/** Trust indicators only — lives inside the hero (first screen). */
export const StatsBar = () => (
  <div className="w-full max-w-[min(100%,1240px)] mx-auto border border-border-default bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-[0_2px_14px_rgba(0,0,0,0.04)]">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-border-default">
      {STATS_ITEMS.map((s, i) => (
        <Reveal
          key={i}
          delay={i * 0.06}
          className="bg-white text-center py-3.5 sm:py-4 md:py-[1.125rem] px-3 sm:px-4 border-r border-b border-border-default h-full min-h-[5.25rem] sm:min-h-[5.5rem]"
        >
          <div
            className="text-[clamp(17px,3.4vw,24px)] font-medium mb-1 tracking-[-0.35px] leading-none"
            style={{ color: s.col }}
          >
            <AnimNum target={s.n} pre={s.pre} suf={s.suf} />
          </div>

          <div className="text-[10px] sm:text-[10.5px] text-body leading-[1.3] max-w-[160px] mx-auto line-clamp-2">
            {s.label}
          </div>
        </Reveal>
      ))}

      <div className="hidden md:block lg:hidden border-r border-b border-border-default bg-white" />
      <div className="hidden md:block lg:hidden border-r border-b border-border-default bg-white" />
    </div>
  </div>
);

/**
 * Explanatory copy only (no stat numbers) — first content below the hero fold.
 * Scroll lands here after the full-screen hero + trust bar.
 */
export const StatsSection = () => (
  <div id="stats-trust-copy" className="scroll-mt-[calc(66px+12px)] w-full bg-bg-base">
    <div className="w-full border-y border-border-default bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
      <div
        className="grid w-full max-w-[min(100%,1320px)] grid-cols-1 items-start gap-6 px-[clamp(12px,4.2vw,48px)] py-8 sm:gap-8 sm:py-10 md:grid-cols-2 md:gap-12 lg:gap-16 lg:py-12 xl:gap-20 mx-auto"
      >
        <p className="m-0 max-md:text-center text-left text-[13px] leading-[1.65] text-body sm:text-[14px] md:text-[15px]">
          Built to support major curricula and exam boards across the UK, US, Australia, and Canada.
        </p>
        <p className="m-0 max-md:text-center text-left text-[11.5px] font-light italic leading-[1.7] text-body/85 sm:text-[12.5px] md:text-[13px]">
          These numbers are live, real, and updated every week. We&apos;re a new platform — we&apos;d rather show you
          where we actually are than pretend to be somewhere we&apos;re not. Join us early and help us build something
          genuine.
        </p>
      </div>
    </div>
  </div>
);
