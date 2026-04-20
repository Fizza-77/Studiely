"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { TOOLS, type HeroCardTheme, type StudyTool, type StudyToolId } from "@/lib/studyTools";
import { StatsBar } from "@/sections/StatsSection";

/** `.cta-*` / `--*-btn` from `public/studiely_homepage_cards (1).html` */
const HERO_CTA_BTN: Record<HeroCardTheme, string> = {
  teal: "bg-[#17886A]",
  indigo: "bg-[#4840A8]",
  amber: "bg-[#B47318]",
  coral: "bg-[#C85228]",
  rose: "bg-[#C9352F]",
};

/** `.icon-*` — solid pastel icon wells (Web view `.card-icon`) */
const HERO_WEB_ICON_WELL: Record<HeroCardTheme, string> = {
  teal: "bg-[#E3F5EE]",
  indigo: "bg-[#EEEDFE]",
  amber: "bg-[#FEF3DC]",
  coral: "bg-[#FAECE7]",
  rose: "bg-[#FDEBEB]",
};

/** `.wcard:hover::before` tints — Web view */
const HERO_WEB_HOVER_BEFORE: Record<HeroCardTheme, string> = {
  teal: "before:bg-[linear-gradient(135deg,rgba(29,158,117,0.04)_0%,transparent_60%)]",
  indigo: "before:bg-[linear-gradient(135deg,rgba(83,74,183,0.04)_0%,transparent_60%)]",
  amber: "before:bg-[linear-gradient(135deg,rgba(186,117,23,0.04)_0%,transparent_60%)]",
  coral: "before:bg-[linear-gradient(135deg,rgba(216,90,48,0.04)_0%,transparent_60%)]",
  rose: "before:bg-[linear-gradient(135deg,rgba(201,53,47,0.06)_0%,transparent_60%)]",
};

/** `.badge-*` + `.badge-dot.*` — Web view */
const HERO_WEB_BADGE: Record<HeroCardTheme, { wrap: string; dot: string }> = {
  teal: { wrap: "bg-[#E3F5EE] text-[#0F6E56]", dot: "bg-[#1D9E75]" },
  indigo: { wrap: "bg-[#EEEDFE] text-[#3C3489]", dot: "bg-[#534AB7]" },
  amber: { wrap: "bg-[#FEF3DC] text-[#854F0B]", dot: "bg-[#C07D1A]" },
  coral: { wrap: "bg-[#FAECE7] text-[#993C1D]", dot: "bg-[#D85A30]" },
  rose: { wrap: "bg-[#FDEBEB] text-[#8F1D1A]", dot: "bg-[#C9352F]" },
};

/** `.card-title` copy from Web view HTML (production tool order). */
const WEB_CARD_TITLE: Record<StudyToolId, string> = {
  notes: "Get structured notes on any topic",
  flashcards: "Build your recall deck in just seconds",
  quiz: "Test yourself before the exam does",
  "common-mistakes": "Know exactly how your topic appears in the exam",
  "exam-writing-mode": "Write under timed, exam conditions",
};

/** `.card-desc` copy from Web view HTML (production tool order). */
const WEB_CARD_DESC: Record<StudyToolId, string> = {
  notes:
    "AI generates fully structured notes for any topic. Depth and length are matched to your curriculum, grade and exam board — not a generic summary. No uploads. No prep. Type your topic and generate.",
  flashcards:
    "Spaced-repetition decks built automatically from any topic — up to 30 cards per set. Spaced repetition is the most evidence-backed method for long-term memory retention.",
  quiz:
    "Multiple-choice questions at beginner, intermediate or advanced difficulty. Instant feedback after every question. Syllabus content only — nothing off-topic.",
  "common-mistakes":
    "See how this topic is examined — the question styles, command words, and mark-scheme expectations specific to your board. Tick Common Mistakes to also surface the errors students most often make on this topic, so you can avoid them before exam day.",
  "exam-writing-mode":
    "Write under timed conditions in the app. Live countdown, word count tracker and AI feedback assessed against your exam board's command words and structure.",
};

const HERO_CARD_RIGHT_ICON: Record<StudyToolId, string> = {
  notes: "/icons/sticky-note.png",
  flashcards: "/icons/flashcard.png",
  quiz: "/icons/target.png",
  "common-mistakes": "/icons/magnifier.png",
  "exam-writing-mode": "/icons/creative-writing.png",
};

const HERO_CARD_RIGHT_TONE: Record<HeroCardTheme, string> = {
  teal: "bg-[#F3FBF7]",
  indigo: "bg-[#F6F5FF]",
  amber: "bg-[#FFFAEF]",
  coral: "bg-[#FFF6F2]",
  rose: "bg-[#FFF0EF]",
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
  "col-span-full flex flex-col items-center justify-center px-1 text-center sm:px-2 md:col-span-2 md:row-start-1 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-1 lg:z-[1] lg:max-w-[min(100%,460px)] lg:justify-self-center lg:px-2 lg:py-1";

const HERO_HUB_CARD: string[] = [
  "col-span-full flex min-h-0 min-w-0 md:col-span-1 md:col-start-1 md:row-start-2 md:self-start lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:self-start",
  "col-span-full flex min-h-0 min-w-0 md:col-span-1 md:col-start-2 md:row-start-2 md:self-start lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:self-start",
  "col-span-full flex min-h-0 min-w-0 max-md:-mt-3 md:col-span-1 md:col-start-1 md:row-start-3 md:-mt-0 md:self-start lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:-mt-4 lg:self-start",
  "col-span-full flex min-h-0 min-w-0 max-md:-mt-3 md:col-span-1 md:col-start-2 md:row-start-3 md:-mt-0 md:self-start lg:col-span-1 lg:col-start-3 lg:row-start-2 lg:-mt-4 lg:self-start",
  "col-span-full flex min-h-0 min-w-0 max-md:-mt-3 md:col-span-2 md:col-start-1 md:row-start-4 md:mx-auto md:max-w-2xl md:self-start lg:col-span-1 lg:col-start-2 lg:row-start-2 lg:-mt-4 lg:w-full lg:max-w-full lg:justify-self-center lg:self-start",
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

const heroFlipInnerDefault = `${heroFlipInnerCore} min-h-[clamp(136px,14.6vw,178px)]`;

const heroFlipInnerExam = `${heroFlipInnerCore} min-h-[clamp(150px,15.8vw,196px)]`;

/** Hero tool badge */
const heroBadgeCapsule = (wrap: string) =>
  `inline-flex w-fit max-w-full shrink-0 items-center gap-1 rounded-full py-[clamp(3px,0.55vw,5px)] pl-[clamp(10px,1.1vw,13px)] pr-[clamp(12px,1.2vw,15px)] text-[clamp(10px,0.6vw+8px,13px)] font-semibold tracking-[0.02em] ${wrap}`;

/** Web HTML `.card-desc` — same strings as `public/studiely_homepage_cards (1).html`; bold phrase matches `<strong>Common Mistakes</strong>`. */
function renderWebCardDesc(id: StudyToolId): ReactNode {
  const text = WEB_CARD_DESC[id];
  const term = "Common Mistakes";
  const i = text.indexOf(term);
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <strong className="font-semibold text-[#0F1C35]">{term}</strong>
      {text.slice(i + term.length)}
    </>
  );
}

/** Hero CTA — same palette as `HERO_CTA_BTN`; padding/min-height unchanged from compact layout, larger label type only. */
const ctaBase =
  "relative z-[1] flex w-full min-h-[clamp(46px,5.6vw,56px)] items-center justify-center gap-2 overflow-hidden rounded-[10px] border-0 px-[clamp(12px,1.3vw,16px)] py-[clamp(10px,1.1vw,13px)] text-[clamp(13px,0.35vw+12px,15px)] font-bold leading-tight tracking-[0.02em] text-white shadow-[0_2px_5px_rgba(0,0,0,0.14),0_0_0_1px_rgba(0,0,0,0.05)] ring-1 ring-white/12 transition-[transform,box-shadow,filter] duration-200 ease-out after:pointer-events-none after:absolute after:inset-0 after:bg-transparent after:transition-colors hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:brightness-[1.03] hover:after:bg-white/[0.09] motion-safe:hover:scale-[1.015] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dk/35";

export const HeroSection = () => {
  const [mobileFlippedCards, setMobileFlippedCards] = useState<Partial<Record<StudyToolId, boolean>>>({});

  const handleCardClick = (cardId: StudyToolId, event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;

    if (target.closest("[data-hero-cta='true']")) return;
    if (typeof window !== "undefined" && !window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    setMobileFlippedCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  return (
  <section
    id="hero"
    className="relative flex min-h-0 flex-col overflow-x-hidden overflow-y-visible border-t border-border-default bg-bg-base"
  >
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.45]"
      aria-hidden
      style={{
        background:
          "radial-gradient(ellipse 80% 55% at 70% 20%, rgba(0, 176, 155, 0.09), transparent 55%), radial-gradient(ellipse 60% 45% at 15% 75%, rgba(84, 72, 200, 0.06), transparent 50%)",
      }}
    />

    <div className="wrap relative flex min-h-0 flex-col gap-[clamp(1rem,1.9vw,1.6rem)] pt-[clamp(1rem,3vw,2.2rem)] pb-[clamp(2rem,3.8vw,4.2rem)]">
      <div className="flex w-full shrink-0 flex-col items-center gap-[clamp(0.9rem,1.6vw,1.25rem)] text-center">
        <div className="fluid-eyebrow -mt-1.5 mx-auto flex w-full max-w-full flex-wrap items-center justify-center gap-2 font-semibold uppercase text-teal-dk sm:-mt-2 md:-mt-2.5">
          <span className="h-[1.5px] w-4 shrink-0 bg-teal-dk" />
          AI-Powered Study Tool for Students
        </div>
      </div>

      <div className="mx-auto grid min-h-0 w-full max-w-[min(100%,1320px)] grid-cols-1 content-start gap-[clamp(0.6rem,1vw,0.85rem)] sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-min lg:items-start lg:gap-x-[clamp(0.75rem,1.25vw,1.15rem)] lg:gap-y-[clamp(0.45rem,0.8vw,0.75rem)]">
        <div className={HERO_HUB_HEADING}>
          <h2 className="max-[380px]:text-[19px] font-serif text-[clamp(1.4rem,1.1rem+1.8vw,2.75rem)] font-normal leading-[1.1] tracking-[-0.025em] text-[#0F1C35] md:whitespace-nowrap lg:whitespace-normal">
            What do you want to <em className="italic text-[#0F6E56]">work on today?</em>
          </h2>
          <p className="mx-auto mt-[clamp(0.65rem,1.2vw,0.95rem)] max-w-[min(100%,540px)] text-[clamp(0.75rem,0.4vw+0.64rem,0.95rem)] font-light leading-[1.52] text-body/85 lg:mt-3 lg:max-w-none">
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
          const cardRightIcon = HERO_CARD_RIGHT_ICON[id];
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

          const ctaClass = `${ctaBtn} ${ctaBase}${isExamCard ? " lg:text-[clamp(15px,0.4vw+13px,16px)]" : ""}`;

          const renderCta = () =>
            appHref ? (
              <a
                href={appHref}
                target="_blank"
                rel="noopener noreferrer"
                data-hero-cta="true"
                className={`${ctaClass} shrink-0`}
              >
                {ctaInner}
              </a>
            ) : (
              <span data-hero-cta="true" className={`${ctaClass} shrink-0 cursor-not-allowed opacity-50`}>
                {ctaInner}
              </span>
            );

          const renderExamNote = () =>
            t.id === "exam-writing-mode" ? (
              <p className="shrink-0 text-center text-[8px] font-normal text-[#7585A0] sm:text-[9px]">
                3 free trials per account
              </p>
            ) : null;

          const renderRightIcon = () => (
            <div
              aria-hidden
              className={`pointer-events-none absolute right-0 top-0 bottom-[clamp(58px,6.4vw,74px)] z-[1] flex w-[30%] items-center justify-center border-l border-border-default/70 ${HERO_CARD_RIGHT_TONE[theme]}`}
            >
              <div className="relative h-[clamp(34px,4.6vw,56px)] w-[clamp(34px,4.6vw,56px)] opacity-95">
                <Image
                  src={cardRightIcon}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 92px, 72px"
                  className="object-contain drop-shadow-[0_3px_6px_rgba(0,0,0,0.14)]"
                />
              </div>
            </div>
          );

          return (
            <div
              key={t.id}
              className={`hero-card-float flex min-h-0 w-full ${HERO_HUB_CARD[cardIndex] ?? "col-span-full"}`}
              style={heroCardFloatStyle(cardIndex)}
            >
              <div
                className={`${heroFlipWrap} flex w-full flex-col`}
                onClick={(event) => handleCardClick(id, event)}
              >
                <div
                  className={`${isExamCard ? heroFlipInnerExam : heroFlipInnerDefault}${mobileFlippedCards[id] ? " [transform:rotateY(180deg)]" : ""}`}
                >
                    <div
                      className={`${wcardFaceShell} ${HERO_WEB_HOVER_BEFORE[theme]} [transform:rotateY(0deg)_translateZ(2px)]`}
                    >
                      <div className={`${wcardFaceBody}${isExamCard ? " lg:gap-1.5 lg:px-[clamp(12px,1.15vw,15px)] lg:pb-[clamp(10px,0.95vw,13px)] lg:pt-[clamp(9px,0.9vw,12px)]" : ""}`}>
                      <div className="relative z-[1] flex min-h-0 flex-1 flex-col bg-white">
                        {renderRightIcon()}
                        <div className="flex min-h-0 shrink-0 flex-col pr-[31%]">
                          <div className="flex min-h-0 items-start gap-[clamp(0.4rem,0.65vw,0.6rem)]">
                            {iconEl}
                            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                              <span className={heroBadgeCapsule(badge.wrap)}>
                                <span className={`h-[4px] w-[4px] shrink-0 rounded-full sm:h-1 sm:w-1 ${badge.dot}`} />
                                {t.heroLabel}
                              </span>
                              <p
                                className={`hero-flip-trigger font-semibold leading-[1.08] tracking-[-0.03em] text-[#0F1C35] ${isExamCard ? "line-clamp-3 text-[clamp(13px,0.45vw+10px,16px)]" : "line-clamp-2 text-[clamp(12px,0.38vw+9px,15px)]"}`}
                              >
                                {cardTitle}
                              </p>
                            </div>
                          </div>

                        </div>

                        <div className="mt-auto flex w-full shrink-0 flex-col gap-1.5">
                          {renderExamNote()}
                          {renderCta()}
                        </div>
                      </div>
                      </div>
                    </div>

                    <div
                      className={`${wcardFaceShell} ${HERO_WEB_HOVER_BEFORE[theme]} motion-reduce:hidden [transform:rotateY(180deg)_translateZ(2px)]`}
                    >
                      <div className={`${wcardFaceBody}${isExamCard ? " lg:gap-1.5 lg:px-[clamp(12px,1.15vw,15px)] lg:pb-[clamp(10px,0.95vw,13px)] lg:pt-[clamp(9px,0.9vw,12px)]" : ""}`}>
                      <div className="hero-flip-keep relative flex h-full min-h-0 flex-1 flex-col overflow-hidden bg-white">
                        <div className="relative z-[1] flex min-h-0 flex-1 flex-col gap-2">
                          <p
                            className={`hero-flip-trigger shrink-0 font-semibold leading-[1.08] tracking-[-0.03em] text-[#0F1C35] ${isExamCard ? "line-clamp-3 text-[clamp(12px,0.34vw+9px,14px)]" : "line-clamp-2 text-[clamp(11px,0.3vw+8px,13px)]"}`}
                          >
                            {cardTitle}
                          </p>
                          <p
                            className={`hero-flip-trigger min-h-0 flex-1 text-pretty font-light leading-[1.53] text-[#3D4E6B] ${isExamCard ? "line-clamp-3 text-[clamp(10px,0.3vw+8px,12px)]" : "line-clamp-2 text-[clamp(9px,0.28vw+7px,11px)]"}`}
                          >
                            {renderWebCardDesc(id)}
                          </p>

                          <div className="mt-auto flex w-full shrink-0 flex-col gap-1.5">
                            {renderExamNote()}
                            {renderCta()}
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

      <StatsBar fullBleed compact />
    </div>
  </section>
  );
};
