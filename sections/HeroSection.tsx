"use client";

import Link from "next/link";
import { Button } from "@/components/Button";
import { STUDIELY_APP } from "@/lib/appUrls";
import { TOOLS, type HeroCardTheme, type StudyTool, type StudyToolId } from "@/lib/studyTools";
import { StatsBar } from "@/sections/StatsSection";

const HERO_CTA_BTN: Record<HeroCardTheme, string> = {
  teal: "bg-[#17886A]",
  indigo: "bg-[#4840A8]",
  amber: "bg-[#B47318]",
  coral: "bg-[#C85228]",
  rose: "bg-[#C44B74]",
};

/** App mock `acard-icon` / `.aicon-*` — `public/studiely_homepage_cards (1).html` */
const HERO_ICON_BG: Record<HeroCardTheme, string> = {
  teal: "bg-[rgba(29,158,117,0.18)]",
  indigo: "bg-[rgba(83,74,183,0.2)]",
  amber: "bg-[rgba(192,125,26,0.2)]",
  coral: "bg-[rgba(216,90,48,0.18)]",
  rose: "bg-[rgba(212,83,126,0.18)]",
};

/** Same order as app mockup HTML (Exam practice wide is last). */
const HERO_TOOL_IDS: StudyToolId[] = [
  "notes",
  "flashcards",
  "quiz",
  "common-mistakes",
  "exam-writing-mode",
];

export const HeroSection = () => (
    <section
      id="hero"
      className="relative flex min-h-0 flex-col overflow-x-hidden overflow-y-visible bg-bg-base border-t border-border-default"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 70% 20%, rgba(0, 176, 155, 0.09), transparent 55%), radial-gradient(ellipse 60% 45% at 15% 75%, rgba(84, 72, 200, 0.06), transparent 50%)",
        }}
      />
      <div className="relative flex w-full max-w-[min(100%,1320px)] flex-col min-h-0 mx-auto px-[clamp(12px,4.2vw,48px)] max-lg:pt-0 lg:pt-0 xl:pt-0 pb-4 sm:pb-5">
        {/* No flex-1 spacer below lg — avoids a tall empty band on tablet / iPad Pro between tools and StatsBar. */}
        <div className="flex min-h-0 flex-col justify-start overflow-visible pt-1 pb-0 sm:pt-2 max-lg:pb-1 lg:pt-4 lg:pb-0 xl:pt-5">
        {/* Rows are content-sized only — avoid 1fr here (resize/viewport bugs with row-span). */}
        <div className="grid shrink-0 grid-cols-1 items-start gap-4 sm:gap-7 md:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start lg:gap-6 xl:gap-7 lg:[grid-template-rows:auto_auto]">
          {/* LEFT (row 1 on lg): headline + body — mobile order-1 */}
          <div className="order-1 flex min-h-0 w-full min-w-0 flex-col lg:order-none lg:col-start-1 lg:row-start-1 lg:min-h-0 lg:pt-0">
            <div className="mx-auto mb-4 flex w-fit max-w-full items-center justify-center gap-2 text-center text-[9px] font-semibold uppercase tracking-[1.2px] text-teal-dk sm:mb-5 sm:text-[10px] lg:mb-3 lg:w-full lg:max-w-none lg:flex-wrap lg:justify-center lg:pt-2.5">
              <span className="h-[1.5px] w-4 shrink-0 bg-teal-dk" />
              AI-Powered Study Tool for Students
            </div>

            <div className="mt-3 sm:mt-4 md:mt-5 lg:flex lg:min-h-0 lg:flex-1 lg:flex-col">
              <h1 className="mb-5 font-serif text-navy tracking-[-1px] text-center sm:mb-6 md:mb-7 w-full">
                <span className="mb-1 block font-bold leading-[1.08] text-[clamp(26px,5vw,40px)] whitespace-nowrap max-[380px]:whitespace-normal max-[380px]:text-[clamp(22px,5.2vw,34px)]">
                  Study Smarter. Score Higher.
                </span>
                <span className="block text-[clamp(30px,6.2vw,56px)] leading-[1.06]">
                  Start in <em className="text-teal-dk">Seconds.</em>
                </span>
              </h1>

              <p className="mt-2 mb-4 w-full max-w-none text-center text-[14px] font-light leading-[1.55] text-grey-800 sm:mt-3 sm:mb-5 sm:text-[15px] md:text-[16px] lg:mb-5 lg:min-h-0 lg:flex-1 lg:text-left lg:leading-[1.65]">
                Select your curriculum and exam board. Type your topic. Studiely instantly generates
                summary notes, flashcards, quizzes and exam practice — calibrated to exactly what your
                examiner expects.
              </p>
            </div>
          </div>

          {/* App-style tool cards — mobile order-3 (after hero CTAs) */}
          <div className="order-3 mx-auto w-full min-w-0 max-w-[min(100%,440px)] overflow-visible md:max-w-full lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:justify-self-end lg:self-start">
            <div className="mb-3 text-center sm:mb-3.5 lg:mb-3 lg:pt-0 lg:text-left">
              <h2 className="max-[380px]:text-[15px] font-serif text-[clamp(16px,2.4vw,22px)] font-normal leading-[1.18] tracking-[-0.5px] text-[#0F1C35] sm:text-[clamp(18px,3vw,28px)] md:whitespace-nowrap lg:text-[clamp(20px,2.6vw,32px)]">
                What do you want to{" "}
                <em className="italic text-[#0F6E56]">work on today?</em>
              </h2>
              <p className="mt-1.5 text-[10px] font-light leading-[1.55] text-body/85 sm:text-[11px] md:text-[12px] md:leading-relaxed">
                Pick a tool below, type your topic and generate. Everything is matched to your curriculum, grade and exam board.
              </p>
            </div>

            <div className="grid min-h-0 w-full grid-cols-2 gap-1.5 [grid-auto-rows:min-content] sm:gap-2 md:grid-cols-3 lg:grid-cols-2">
                {HERO_TOOL_IDS.map((id) => {
                  const t = TOOLS.find((x) => x.id === id) as StudyTool;
                  const theme = t.heroTheme;
                  const ctaBtn = HERO_CTA_BTN[theme];
                  const ctaText = t.heroCta ?? t.cta;
                  const { Icon, appHref } = t;
                  const isWide = t.id === "exam-writing-mode";

                  const iconEl = (
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] [&_svg]:h-4 [&_svg]:w-4 ${HERO_ICON_BG[theme]}`}
                    >
                      <Icon />
                    </span>
                  );

                  const ctaInner = (
                    <span className="inline-block min-w-0 text-center leading-tight">{ctaText}</span>
                  );

                  const ctaClass = `${ctaBtn} rounded-md px-2 py-1.5 text-center text-[9px] font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dk/40 sm:px-2.5 sm:py-2 sm:text-[10px]`;

                  if (isWide) {
                    return (
                      <div
                        key={t.id}
                        className="col-span-2 flex flex-col gap-2.5 border border-solid p-2.5 sm:flex-row sm:items-center sm:gap-4 sm:p-3 md:col-span-2 md:col-start-2 md:row-start-2 lg:col-span-2 lg:col-start-auto lg:row-start-auto"
                        style={{ borderColor: t.border }}
                      >
                        <div className="flex shrink-0 items-center gap-2">
                          {iconEl}
                          <p className="font-semibold leading-tight text-navy text-[12px] sm:text-[13px]">
                            {t.heroLabel}
                          </p>
                        </div>
                        <p className="min-w-0 flex-1 text-[10px] font-light leading-snug text-body sm:text-[11px] sm:leading-relaxed">
                          {t.heroShortDesc}
                        </p>
                        {appHref ? (
                          <a
                            href={appHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`shrink-0 whitespace-nowrap sm:self-center ${ctaClass} sm:px-4`}
                          >
                            {ctaInner}
                          </a>
                        ) : (
                          <span className={`shrink-0 cursor-default opacity-50 sm:self-center ${ctaClass} sm:px-4`}>
                            {ctaInner}
                          </span>
                        )}
                      </div>
                    );
                  }

                  return (
                    <div
                      key={t.id}
                      className="flex min-h-0 w-full min-w-0 flex-col gap-1.5 border border-solid p-2.5 sm:gap-2 sm:p-3"
                      style={{ borderColor: t.border }}
                    >
                      <div className="flex shrink-0 items-center gap-2">
                        {iconEl}
                        <p className="min-w-0 flex-1 font-semibold leading-[1.2] text-navy text-[12px] sm:text-[13px] md:text-[14px]">
                          {t.heroLabel}
                        </p>
                      </div>
                      <p className="min-h-0 flex-1 line-clamp-3 text-[9px] font-light leading-[1.45] text-body sm:line-clamp-4 sm:text-[10px]">
                        {t.heroShortDesc}
                      </p>
                      <div className="mt-auto shrink-0 pt-0.5">
                        {appHref ? (
                          <a
                            href={appHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex w-full items-center justify-center ${ctaClass}`}
                          >
                            {ctaInner}
                          </a>
                        ) : (
                          <span className={`flex w-full cursor-default items-center justify-center opacity-50 ${ctaClass}`}>
                            {ctaInner}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="order-2 flex w-full min-w-0 flex-col lg:order-none lg:col-start-1 lg:row-start-2">
            <div className="flex w-full flex-nowrap items-stretch justify-center gap-2 sm:gap-3 mb-3 sm:mb-3.5">
              <Button
                href={STUDIELY_APP.home}
                variant="solid"
                className="min-w-0 flex-1 justify-center py-2 px-2.5 text-[11px] leading-tight sm:flex-initial sm:py-[14px] sm:px-7 sm:text-[15px]"
              >
                Get Started Free
              </Button>

              <Link href="#how-it-works" className="min-w-0 flex-1 sm:flex-initial sm:min-w-0">
                <Button
                  variant="outline"
                  className="w-full min-w-0 justify-center py-2 px-2.5 text-[11px] leading-tight sm:w-auto sm:py-[14px] sm:px-7 sm:text-[15px]"
                >
                  See How It Works
                </Button>
              </Link>
            </div>

            <p className="text-[11px] sm:text-[11.5px] text-gray-500 text-center lg:text-left leading-snug">
              No credit card required · 5 free one-time credits · Works for GCSE, IB, A-Level, SAT,
              HSC and more
            </p>
          </div>
        </div>
        </div>

        <div className="mt-4 sm:mt-5 shrink-0 w-full flex justify-center pb-2 sm:pb-3">
          <StatsBar />
        </div>
      </div>
    </section>
);
