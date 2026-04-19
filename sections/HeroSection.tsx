"use client";

import type { CSSProperties, ReactNode } from "react";
import { TOOLS, type HeroCardTheme, type StudyTool, type StudyToolId } from "@/lib/studyTools";

/** `.cta-*` / `--*-btn` from `public/studiely_homepage_cards (1).html` */
const HERO_CTA_BTN: Record<HeroCardTheme, string> = {
  teal: "bg-[#17886A]",
  indigo: "bg-[#4840A8]",
  amber: "bg-[#B47318]",
  coral: "bg-[#C85228]",
  rose: "bg-[#C44B74]",
};

/** `.icon-*` — solid pastel icon wells (Web view `.card-icon`) */
const HERO_WEB_ICON_WELL: Record<HeroCardTheme, string> = {
  teal: "bg-[#E3F5EE]",
  indigo: "bg-[#EEEDFE]",
  amber: "bg-[#FEF3DC]",
  coral: "bg-[#FAECE7]",
  rose: "bg-[#FBEAF0]",
};

/** `.wcard:hover::before` tints — Web view */
const HERO_WEB_HOVER_BEFORE: Record<HeroCardTheme, string> = {
  teal: "before:bg-[linear-gradient(135deg,rgba(29,158,117,0.04)_0%,transparent_60%)]",
  indigo: "before:bg-[linear-gradient(135deg,rgba(83,74,183,0.04)_0%,transparent_60%)]",
  amber: "before:bg-[linear-gradient(135deg,rgba(186,117,23,0.04)_0%,transparent_60%)]",
  coral: "before:bg-[linear-gradient(135deg,rgba(216,90,48,0.04)_0%,transparent_60%)]",
  rose: "before:bg-[linear-gradient(135deg,rgba(212,83,126,0.04)_0%,transparent_60%)]",
};

/** `.badge-*` + `.badge-dot.*` — Web view */
const HERO_WEB_BADGE: Record<HeroCardTheme, { wrap: string; dot: string }> = {
  teal: { wrap: "bg-[#E3F5EE] text-[#0F6E56]", dot: "bg-[#1D9E75]" },
  indigo: { wrap: "bg-[#EEEDFE] text-[#3C3489]", dot: "bg-[#534AB7]" },
  amber: { wrap: "bg-[#FEF3DC] text-[#854F0B]", dot: "bg-[#C07D1A]" },
  coral: { wrap: "bg-[#FAECE7] text-[#993C1D]", dot: "bg-[#D85A30]" },
  rose: { wrap: "bg-[#FBEAF0] text-[#993556]", dot: "bg-[#D4537E]" },
};

/** `.card-title` copy from Web view HTML (production tool order). */
const WEB_CARD_TITLE: Record<StudyToolId, string> = {
  notes: "Get structured notes on any topic",
  flashcards: "Build your recall deck in seconds",
  quiz: "Test yourself before the exam does",
  "common-mistakes": "Know exactly how your topic appears in the exam",
  "exam-writing-mode": "Write under timed, exam conditions",
};

const HERO_TOOL_IDS: StudyToolId[] = [
  "notes",
  "flashcards",
  "quiz",
  "common-mistakes",
  "exam-writing-mode",
];

/** Per-card float: different duration, delay, and amplitude so motion stays out of sync (matches `HERO_TOOL_IDS` order). */
const HERO_CARD_FLOAT_DURATION_S = [5.4, 4.6, 5.9, 4.35, 5.15] as const;
const HERO_CARD_FLOAT_DELAY_S = [0, 0.42, 1.05, 0.18, 0.78] as const;
const HERO_CARD_FLOAT_Y = ["-6px", "-8px", "-5.5px", "-7.5px", "-6px"] as const;

function heroCardFloatStyle(cardIndex: number): CSSProperties {
  const i = Math.min(cardIndex, HERO_CARD_FLOAT_DURATION_S.length - 1);
  return {
    "--hero-float-dur": `${HERO_CARD_FLOAT_DURATION_S[i]}s`,
    "--hero-float-delay": `${HERO_CARD_FLOAT_DELAY_S[i]}s`,
    "--hero-float-y": HERO_CARD_FLOAT_Y[i],
  } as CSSProperties;
}

/** Desktop hub: row1 notes | heading | flashcards; row2 quiz | exam practice | common mistakes. */
const HERO_HUB_HEADING =
  "col-span-full flex flex-col items-center justify-center px-1 text-center sm:px-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-1 lg:z-[1] lg:max-w-[min(100%,460px)] lg:justify-self-center lg:px-2 lg:py-1";

const HERO_HUB_CARD: string[] = [
  "col-span-full flex min-h-0 min-w-0 lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:self-start",
  "col-span-full flex min-h-0 min-w-0 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:self-start",
  "col-span-full flex min-h-0 min-w-0 max-lg:-mt-2 lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:-mt-3 lg:self-start",
  "col-span-full flex min-h-0 min-w-0 max-lg:-mt-2 lg:col-span-1 lg:col-start-3 lg:row-start-2 lg:-mt-3 lg:self-start",
  "col-span-full flex min-h-0 min-w-0 max-lg:-mt-2 sm:col-span-2 sm:mx-auto sm:max-w-xl md:max-w-2xl lg:col-span-1 lg:col-start-2 lg:row-start-2 lg:-mt-3 lg:w-full lg:max-w-full lg:justify-self-center lg:self-start",
];

function CtaSvgNotes() {
  return (
    <svg className="h-4 w-4 shrink-0 sm:h-[17px] sm:w-[17px]" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 2v12M2 8l6 6 6-6"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CtaSvgFlashcards() {
  return (
    <svg className="h-4 w-4 shrink-0 sm:h-[17px] sm:w-[17px]" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="2" y="2" width="5.5" height="7.5" rx="1.5" stroke="white" strokeWidth="1.7" />
      <rect x="8.5" y="6.5" width="5.5" height="7.5" rx="1.5" stroke="white" strokeWidth="1.7" />
    </svg>
  );
}

function CtaSvgQuiz() {
  return (
    <svg className="h-4 w-4 shrink-0 sm:h-[17px] sm:w-[17px]" viewBox="0 0 16 16" fill="none" aria-hidden>
      <polygon points="4,2 13,8 4,14" fill="white" />
    </svg>
  );
}

function CtaSvgFocus() {
  return (
    <svg className="h-4 w-4 shrink-0 sm:h-[17px] sm:w-[17px]" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="6.5" stroke="white" strokeWidth="1.6" />
      <path d="M8 5v4M8 11v.5" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function CtaSvgExam() {
  return (
    <svg className="h-4 w-4 shrink-0 sm:h-[17px] sm:w-[17px]" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="6.5" stroke="white" strokeWidth="1.6" />
      <path d="M8 5v3.5l2 2" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const CTA_SVG: Record<StudyToolId, ReactNode> = {
  notes: <CtaSvgNotes />,
  flashcards: <CtaSvgFlashcards />,
  quiz: <CtaSvgQuiz />,
  "common-mistakes": <CtaSvgFocus />,
  "exam-writing-mode": <CtaSvgExam />,
};

/** Flip face shell: no `overflow-hidden` here (it can break `backface-visibility` with 3D). Padding lives in `wcardFaceBody`. */
const wcardFaceShell =
  "absolute inset-0 isolate flex h-full min-h-0 flex-col rounded-[10px] bg-white [backface-visibility:hidden] [-webkit-backface-visibility:hidden] before:pointer-events-none before:absolute before:inset-0 before:rounded-[10px] before:opacity-0 before:transition-opacity before:duration-[220ms] group-hover/flip:before:opacity-100";

const wcardFaceBody =
  "flex min-h-0 flex-1 flex-col gap-1 overflow-hidden bg-white px-[10px] pb-[10px] pt-[10px] sm:gap-1.5 sm:px-3 sm:pb-[10px] sm:pt-2.5 lg:gap-1 lg:px-2 lg:pb-[10px] lg:pt-1.5";

const heroFlipWrap =
  "group/flip perspective-[1200px] w-full min-h-0 rounded-[10px] shadow-[0_2px_8px_rgba(15,28,53,0.05),0_0_0_1px_rgba(15,28,53,0.07)] transition-[box-shadow] duration-[220ms] group-hover/flip:shadow-[0_5px_18px_rgba(15,28,53,0.09),0_0_0_1px_rgba(15,28,53,0.09)]";

/** Shared 3D flip mechanics (min-height variants size the shell to ~content so little gap under CTA). */
const heroFlipInnerCore =
  "relative w-full [transform-style:preserve-3d] [-webkit-transform-style:preserve-3d] transition-transform duration-[620ms] ease-[cubic-bezier(0.34,0.7,0.2,1)] motion-reduce:transition-none group-hover/flip:[transform:rotateY(180deg)] motion-reduce:group-hover/flip:[transform:none]";

const heroFlipInnerDefault = `${heroFlipInnerCore} min-h-[154px] sm:min-h-[158px] lg:min-h-[162px]`;

const heroFlipInnerExam = `${heroFlipInnerCore} min-h-[168px] sm:min-h-[172px] lg:min-h-[180px]`;

/** Hero tool badge */
const heroBadgeCapsule = (wrap: string) =>
  `inline-flex w-fit max-w-full shrink-0 items-center gap-1 rounded-full py-0.5 pl-2 pr-2.5 text-[9px] font-semibold tracking-[0.02em] sm:gap-1.5 sm:py-1 sm:pl-2.5 sm:pr-3 sm:text-[10px] ${wrap}`;

/** Web HTML `.card-desc` — same strings as `public/studiely_homepage_cards (1).html`; bold phrase matches `<strong>Common Mistakes</strong>`. */
function renderWebCardDesc(t: StudyTool): ReactNode {
  const term = "Common Mistakes";
  const i = t.desc.indexOf(term);
  if (i === -1) return t.desc;
  return (
    <>
      {t.desc.slice(0, i)}
      <strong className="font-semibold text-[#0F1C35]">{term}</strong>
      {t.desc.slice(i + term.length)}
    </>
  );
}

/** Hero CTA — same palette as `HERO_CTA_BTN`; padding/min-height unchanged from compact layout, larger label type only. */
const ctaBase =
  "relative z-[1] flex w-full min-h-[42px] items-center justify-center gap-2 overflow-hidden rounded-[8px] border-0 px-3 py-2.5 text-[13px] font-bold leading-tight tracking-[0.02em] text-white shadow-[0_2px_5px_rgba(0,0,0,0.14),0_0_0_1px_rgba(0,0,0,0.05)] ring-1 ring-white/12 transition-[transform,box-shadow,filter] duration-200 ease-out after:pointer-events-none after:absolute after:inset-0 after:bg-transparent after:transition-colors hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:brightness-[1.03] hover:after:bg-white/[0.09] motion-safe:hover:scale-[1.015] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dk/35 sm:min-h-[44px] sm:gap-2 sm:px-3.5 sm:py-3 sm:text-[14px] lg:min-h-[44px] lg:py-3 lg:text-[15px]";

export const HeroSection = () => (
  <section
    id="hero"
    className="relative flex min-h-[calc(100dvh-66px)] flex-col overflow-x-hidden overflow-y-visible bg-bg-base border-t border-border-default"
  >
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.45]"
      aria-hidden
      style={{
        background:
          "radial-gradient(ellipse 80% 55% at 70% 20%, rgba(0, 176, 155, 0.09), transparent 55%), radial-gradient(ellipse 60% 45% at 15% 75%, rgba(84, 72, 200, 0.06), transparent 50%)",
      }}
    />
    <div className="relative mx-auto flex min-h-0 w-full max-w-[min(100%,1320px)] flex-1 flex-col gap-6 px-[clamp(12px,4.2vw,48px)] pt-6 pb-10 sm:gap-8 sm:pt-8 sm:pb-12 md:pt-10 md:pb-14 lg:gap-8 lg:pt-10 lg:pb-16">
      <div className="flex w-full shrink-0 flex-col items-center gap-4 text-center sm:gap-5">
        <div className="-mt-1.5 mx-auto flex w-full max-w-full flex-wrap items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[1.15px] text-teal-dk sm:-mt-2 sm:text-[11px] md:-mt-2.5">
          <span className="h-[1.5px] w-4 shrink-0 bg-teal-dk" />
          AI-Powered Study Tool for Students
        </div>
      </div>

      <div className="mx-auto grid min-h-0 w-full max-w-[min(100%,1200px)] flex-1 grid-cols-1 content-start gap-2.5 sm:grid-cols-2 sm:gap-3 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:grid-rows-2 lg:items-start lg:gap-x-4 lg:gap-y-3 xl:max-w-[1180px] xl:gap-x-4">
        <div className={HERO_HUB_HEADING}>
          <h2 className="max-[380px]:text-[19px] font-serif text-[clamp(20px,3.2vw,30px)] font-normal leading-[1.12] tracking-[-0.5px] text-[#0F1C35] sm:text-[clamp(24px,3.9vw,40px)] md:whitespace-nowrap lg:whitespace-normal lg:text-[clamp(26px,3.1vw,44px)]">
            What do you want to <em className="italic text-[#0F6E56]">work on today?</em>
          </h2>
          <p className="mx-auto mt-3 max-w-[min(100%,520px)] text-[11px] font-light leading-[1.5] text-body/85 sm:mt-4 sm:text-[12px] md:mt-4 md:text-[13px] lg:mt-3 lg:max-w-none lg:text-[12px] lg:leading-snug">
            Pick a tool below, type your topic and generate. Everything is matched to your curriculum, grade and exam
            board.
          </p>
        </div>

        {HERO_TOOL_IDS.map((id, cardIndex) => {
          const t = TOOLS.find((x) => x.id === id) as StudyTool;
          const theme = t.heroTheme;
          const ctaBtn = HERO_CTA_BTN[theme];
          const ctaText = t.heroCta ?? t.cta;
          const { Icon, appHref } = t;
          const badge = HERO_WEB_BADGE[theme];
          const cardTitle = WEB_CARD_TITLE[id];
          const isExamCard = t.id === "exam-writing-mode";

          const iconEl = (
            <span
              className={`flex shrink-0 items-center justify-center rounded-md transition-transform duration-[220ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/flip:scale-[1.05] ${HERO_WEB_ICON_WELL[theme]} ${isExamCard ? "h-[30px] w-[30px] sm:h-[34px] sm:w-[34px] [&_svg]:h-[14px] [&_svg]:w-[14px] sm:[&_svg]:h-[16px] sm:[&_svg]:w-[16px]" : "h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] [&_svg]:h-[13px] [&_svg]:w-[13px] sm:[&_svg]:h-[14px] sm:[&_svg]:w-[14px]"}`}
            >
              <Icon />
            </span>
          );

          const ctaInner = (
            <>
              <span
                className="flex shrink-0 items-center justify-center self-center [&_svg]:!h-4 [&_svg]:!w-4 sm:[&_svg]:!h-[15px] sm:[&_svg]:!w-[15px]"
              >
                {CTA_SVG[id]}
              </span>
              <span className="min-w-0 flex-1 text-pretty text-center leading-snug">{ctaText}</span>
            </>
          );

          const ctaClass = `${ctaBtn} ${ctaBase}${isExamCard ? " lg:text-[16px]" : ""}`;

          const renderCta = () =>
            appHref ? (
              <a
                href={appHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaClass} shrink-0`}
              >
                {ctaInner}
              </a>
            ) : (
              <span className={`${ctaClass} shrink-0 cursor-not-allowed opacity-50`}>{ctaInner}</span>
            );

          const renderExamNote = () =>
            t.id === "exam-writing-mode" ? (
              <p className="shrink-0 text-center text-[8px] font-normal text-[#7585A0] sm:text-[9px]">
                3 free trials per account
              </p>
            ) : null;

          return (
            <div
              key={t.id}
              className={`hero-card-float flex min-h-0 w-full ${HERO_HUB_CARD[cardIndex] ?? "col-span-full"}`}
              style={heroCardFloatStyle(cardIndex)}
            >
              <div className={`${heroFlipWrap} flex w-full flex-col`}>
                <div className={isExamCard ? heroFlipInnerExam : heroFlipInnerDefault}>
                    <div
                      className={`${wcardFaceShell} ${HERO_WEB_HOVER_BEFORE[theme]} [transform:rotateY(0deg)_translateZ(2px)]`}
                    >
                      <div className={`${wcardFaceBody}${isExamCard ? " lg:gap-1.5 lg:px-3.5 lg:pb-[10px] lg:pt-2.5" : ""}`}>
                      <div className="relative z-[1] flex min-h-0 flex-1 flex-col bg-white">
                        <div className="flex min-h-0 shrink-0 flex-col">
                          <div className="flex min-h-0 items-start gap-1.5 sm:gap-2">
                            {iconEl}
                            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                              <span className={heroBadgeCapsule(badge.wrap)}>
                                <span className={`h-[4px] w-[4px] shrink-0 rounded-full sm:h-1 sm:w-1 ${badge.dot}`} />
                                {t.heroLabel}
                              </span>
                              <p
                                className={`font-semibold leading-snug tracking-[-0.2px] text-[#0F1C35] sm:text-[12px] ${isExamCard ? "line-clamp-3 text-[12px] lg:text-[13px]" : "line-clamp-2 text-[11px]"}`}
                              >
                                {cardTitle}
                              </p>
                            </div>
                          </div>

                          <p
                            className={`mt-1 text-pretty font-light leading-[1.45] text-[#3D4E6B] motion-reduce:hidden sm:leading-[1.5] ${isExamCard ? "line-clamp-3 text-[10px] sm:text-[11px]" : "line-clamp-2 text-[9px] sm:text-[10px]"}`}
                          >
                            {t.heroShortDesc}
                          </p>
                        <p className="mt-1 hidden text-pretty text-[11px] font-light leading-[1.45] text-[#3D4E6B] motion-reduce:block sm:text-[12px] sm:leading-[1.5] lg:text-[13px] lg:leading-[1.55]">
                          {renderWebCardDesc(t)}
                        </p>
                        </div>

                        <div className="mt-auto flex w-full shrink-0 flex-col gap-1.5">
                          {renderExamNote()}
                          {renderCta()}
                        </div>
                      </div>
                      </div>
                    </div>

                    <div
                      aria-hidden
                      className={`${wcardFaceShell} ${HERO_WEB_HOVER_BEFORE[theme]} motion-reduce:hidden [transform:rotateY(180deg)_translateZ(2px)]`}
                    >
                      <div className={`${wcardFaceBody}${isExamCard ? " lg:gap-1.5 lg:px-3.5 lg:pb-[10px] lg:pt-2.5" : ""}`}>
                      <div className="relative flex h-full min-h-0 flex-1 flex-col overflow-hidden bg-white">
                        <div className="relative z-[1] flex min-h-0 flex-1 flex-col gap-2">
                          <p
                            className={`shrink-0 font-semibold leading-snug tracking-[-0.2px] text-[#0F1C35] ${isExamCard ? "line-clamp-3 text-[11px] sm:text-[12px]" : "line-clamp-2 text-[10px] sm:text-[11px]"}`}
                          >
                            {cardTitle}
                          </p>
                          <div className="min-h-0 flex-1 overflow-y-auto text-pretty text-[11px] font-light leading-[1.5] text-[#3D4E6B] sm:text-[12px] sm:leading-[1.55] lg:text-[13px]">
                            {renderWebCardDesc(t)}
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
