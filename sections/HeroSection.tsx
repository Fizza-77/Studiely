"use client";

import Image from "next/image";
import { useState } from "react";
import type { KeyboardEvent, MouseEvent, ReactNode } from "react";
import { TOOLS, type HeroCardTheme, type StudyTool, type StudyToolId } from "@/lib/studyTools";
import { StatsBar } from "@/sections/StatsSection";

const HERO_CARD_BG_COLOR: Record<HeroCardTheme, string> = {
  teal: "#17886A",
  indigo: "#6D4EDE",
  amber: "#D4A017",
  coral: "#E07A3F",
  rose: "#C9352F",
};

/** `.card-title` copy from Web view HTML (production tool order). */
const WEB_CARD_TITLE: Record<StudyToolId, string> = {
  notes: "Get structured notes on any topic",
  flashcards: "Build your recall deck in just seconds",
  quiz: "Test yourself before the exam does",
  "common-mistakes": "Know exactly how your topic appears in the exam",
  "exam-writing-mode": "Write under timed, exam conditions",
};

/** Memorized long-form supporting copy shown in tooltip. */
const WEB_CARD_DESC: Record<StudyToolId, string> = {
  notes:
    "AI generates fully structured notes for any topic. Depth and length are matched to your curriculum, grade and exam board.",
  flashcards:
    "Spaced-repetition decks are built automatically from any topic so recall stays stronger over time.",
  quiz:
    "Multiple-choice questions are generated at multiple difficulty levels with instant feedback after each answer.",
  "common-mistakes":
    "See how your topic appears in real exam questions and which mistakes students commonly make for this topic.",
  "exam-writing-mode":
    "Write under timed exam conditions with countdown, word tracking, and AI feedback aligned to exam expectations.",
};

const HERO_CARD_RIGHT_ICON: Record<StudyToolId, string> = {
  notes: "/icons/sticky-note.png",
  flashcards: "/icons/flashcard.png",
  quiz: "/icons/target.png",
  "common-mistakes": "/icons/magnifier.png",
  "exam-writing-mode": "/icons/creative-writing.png",
};

const HERO_TOOL_IDS: StudyToolId[] = [
  "notes",
  "flashcards",
  "quiz",
  "common-mistakes",
  "exam-writing-mode",
];

/** Hero heading spans full row, cards follow in 2+2+1 layout. */
const HERO_HUB_HEADING =
  "col-span-full flex flex-col items-center justify-center px-1 text-center sm:px-2";

const HERO_HUB_CARD: string[] = [
  "col-span-full flex min-h-0 min-w-0 md:col-span-1",
  "col-span-full flex min-h-0 min-w-0 md:col-span-1",
  "col-span-full flex min-h-0 min-w-0 md:col-span-1",
  "col-span-full flex min-h-0 min-w-0 md:col-span-1",
  "col-span-full flex min-h-0 min-w-0 md:col-span-2",
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

const heroCardShell =
  "group/card relative flex w-full flex-col overflow-visible rounded-[12px] p-[5px] sm:p-[6px] shadow-[0_4px_12px_rgba(15,28,53,0.14)] ring-1 ring-black/8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_7px_16px_rgba(15,28,53,0.2)]";

const heroCtaBtn =
  "mt-auto inline-flex w-full sm:w-[78%] md:w-[72%] self-center flex-col items-center justify-center gap-0.5 rounded-[8px] bg-transparent px-1 py-0 text-[clamp(11px,0.7vw,13px)] font-semibold text-white transition-all duration-150 hover:text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70";

export const HeroSection = () => {
  const [activeTooltip, setActiveTooltip] = useState<StudyToolId | null>(null);

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

    <div className="wrap relative flex min-h-0 flex-col gap-[clamp(0.55rem,1vw,0.85rem)] pt-[clamp(0.55rem,1.2vw,0.9rem)] pb-[clamp(0.9rem,1.5vw,1.35rem)]">
      <div className="flex w-full shrink-0 flex-col items-center gap-[clamp(0.45rem,0.8vw,0.7rem)] text-center">
        <div className="fluid-eyebrow -mt-1.5 mx-auto flex w-full max-w-full flex-wrap items-center justify-center gap-2 font-semibold uppercase text-teal-dk sm:-mt-2 md:-mt-2.5">
          <span className="h-[1.5px] w-4 shrink-0 bg-teal-dk" />
          AI-Powered Study Tool for Students
        </div>
      </div>

      <div className="mx-auto grid min-h-0 w-full max-w-[min(100%,1320px)] grid-cols-1 content-start gap-[clamp(0.4rem,0.7vw,0.6rem)] md:grid-cols-2 lg:auto-rows-min lg:items-start lg:gap-x-[clamp(0.55rem,0.9vw,0.85rem)] lg:gap-y-[clamp(0.35rem,0.55vw,0.5rem)]">
        <div className={HERO_HUB_HEADING}>
          <h2 className="max-[380px]:text-[19px] font-serif text-[clamp(1.22rem,0.96rem+1.25vw,2.1rem)] font-normal leading-[1.1] tracking-[-0.025em] text-[#0F1C35] lg:whitespace-nowrap">
            What do you want to <em className="italic text-[#0F6E56]">work on today?</em>
          </h2>
          <p className="mx-auto mt-[clamp(0.3rem,0.55vw,0.5rem)] max-w-[min(100%,860px)] text-[clamp(0.67rem,0.25vw+0.6rem,0.82rem)] font-light leading-[1.4] text-body/85 lg:whitespace-nowrap lg:mt-1.5">
            Pick a tool below, type your topic and generate. Everything is matched to your curriculum, grade and exam
            board.
          </p>
        </div>

        {HERO_TOOL_IDS.map((id, cardIndex) => {
          const t = TOOLS.find((x) => x.id === id) as StudyTool;
          const theme = t.heroTheme;
          const isExamCard = t.id === "exam-writing-mode";
          const ctaText = t.heroCta ?? t.cta;
          const { appHref } = t;
          const cardTitle = WEB_CARD_TITLE[id];
          const tooltipText = WEB_CARD_DESC[id];
          const cardRightIcon = HERO_CARD_RIGHT_ICON[id];
          const tooltipOpen = activeTooltip === id;

          const renderExamNote = () =>
            t.id === "exam-writing-mode" ? (
              <p className="shrink-0 text-center text-[clamp(10px,0.55vw,11px)] font-medium text-white/85">
                3 free trials per account
              </p>
            ) : null;

          return (
            <div
              key={t.id}
              className={`flex min-h-0 w-full ${HERO_HUB_CARD[cardIndex] ?? "col-span-full"}`}
            >
              <article
                className={`${heroCardShell} ${appHref ? "cursor-pointer" : "cursor-default"}`}
                style={{ backgroundColor: HERO_CARD_BG_COLOR[theme] }}
                role={appHref ? "link" : undefined}
                tabIndex={appHref ? 0 : undefined}
                aria-label={appHref ? `${ctaText} (opens in new tab)` : undefined}
                onClick={(event: MouseEvent<HTMLElement>) => {
                  if (!appHref) return;
                  const target = event.target as HTMLElement;
                  if (target.closest("[data-tooltip-trigger='true']")) return;
                  window.open(appHref, "_blank", "noopener,noreferrer");
                }}
                onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
                  if (!appHref) return;
                  if (event.key !== "Enter" && event.key !== " ") return;
                  event.preventDefault();
                  window.open(appHref, "_blank", "noopener,noreferrer");
                }}
              >
                <div className="mb-0.5 flex items-start justify-end gap-1">
                  <button
                    type="button"
                    aria-label={`More info about ${ctaText}`}
                    data-tooltip-trigger="true"
                    onMouseEnter={() => setActiveTooltip(id)}
                    onMouseLeave={() => setActiveTooltip((prev) => (prev === id ? null : prev))}
                    onFocus={() => setActiveTooltip(id)}
                    onBlur={() => setActiveTooltip((prev) => (prev === id ? null : prev))}
                    onClick={(event) => {
                      event.stopPropagation();
                      setActiveTooltip((prev) => (prev === id ? null : id));
                    }}
                    className="relative z-10 inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border border-white/45 bg-black/20 text-[11px] font-semibold text-white/95 transition-colors hover:bg-black/30"
                  >
                    i
                  </button>
                </div>

                <div className="mb-0.5 flex min-h-[46px] items-stretch gap-1">
                  <div
                    className={`relative shrink-0 ${
                      isExamCard ? "w-[64px] sm:w-[72px] md:w-[76px]" : "w-[48px] sm:w-[52px] md:w-[56px]"
                    }`}
                  >
                    <Image
                      src={cardRightIcon}
                      alt=""
                      fill
                      sizes={
                        isExamCard
                          ? "(max-width: 640px) 64px, (max-width: 768px) 72px, 76px"
                          : "(max-width: 640px) 48px, (max-width: 768px) 52px, 56px"
                      }
                      className="object-contain drop-shadow-[0_3px_6px_rgba(0,0,0,0.14)]"
                    />
                  </div>
                  <p className="flex flex-1 items-center justify-center pt-0.5 text-center text-[clamp(15px,1.4vw,17px)] font-semibold leading-[1.14] text-white">
                    {cardTitle}
                  </p>
                </div>

                <div className="mt-auto flex w-full shrink-0 flex-col gap-0">
                  {renderExamNote()}
                  <span className={`${heroCtaBtn} ${appHref ? "" : "cursor-not-allowed opacity-60"}`}>
                    <span className="h-px w-[65%] bg-white/55" aria-hidden />
                    <span>{ctaText}</span>
                  </span>
                </div>

                <div
                  className={`absolute left-2 right-2 sm:left-3 sm:right-3 top-9 sm:top-10 z-20 rounded-[9px] border border-black/10 bg-black/78 px-2 py-1.5 sm:px-2.5 text-[clamp(10px,0.6vw,11px)] leading-[1.35] text-white shadow-[0_8px_22px_rgba(0,0,0,0.25)] transition-all duration-200 ${
                    tooltipOpen ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"
                  }`}
                >
                  <span className="absolute -top-1 left-5 h-2 w-2 rotate-45 border-l border-t border-black/10 bg-black/78" />
                  <p className="line-clamp-3 text-center">{tooltipText}</p>
                </div>
              </article>
            </div>
          );
        })}
      </div>

      <StatsBar fullBleed compact />
    </div>
  </section>
  );
};
