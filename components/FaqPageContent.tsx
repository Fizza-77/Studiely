"use client";

import { useEffect, useRef, useState } from "react";
import { FaqItem } from "@/components/FaqItem";
import { FaqBottomCards } from "@/components/FaqBottomCards";
import {
  FAQ_CATEGORY_LETTERS,
  FAQ_CATEGORY_SHORT_LABELS,
  getFaqSectionDisplayTitle,
} from "@/lib/faq/categories";
import type { FaqSection } from "@/lib/faq";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";

/** Offset from the viewport top used to decide which section is "current". */
const SCROLL_SPY_OFFSET = 140;

const CategoriesIcon = () => (
  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden>
    <path d="M3 5.5h10M3 10h14M3 14.5h8" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

interface FaqPageContentProps {
  sections: FaqSection[];
}

export const FaqPageContent = ({ sections }: FaqPageContentProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  // Suppresses scroll-spy updates while smooth-scrolling to a clicked category.
  const clickScrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isClickScrollingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (isClickScrollingRef.current) return;

      let current = 0;
      sectionRefs.current.forEach((el, index) => {
        if (el && el.getBoundingClientRect().top <= SCROLL_SPY_OFFSET) {
          current = index;
        }
      });
      setActiveIndex(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (clickScrollTimerRef.current) {
        clearTimeout(clickScrollTimerRef.current);
      }
    };
  }, []);

  const scrollToSection = (index: number) => {
    const el = sectionRefs.current[index];
    if (!el) return;

    setActiveIndex(index);
    isClickScrollingRef.current = true;

    const top =
      el.getBoundingClientRect().top + window.scrollY - (SCROLL_SPY_OFFSET - 20);
    window.scrollTo({ top, behavior: "smooth" });

    if (clickScrollTimerRef.current) {
      clearTimeout(clickScrollTimerRef.current);
    }
    clickScrollTimerRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 800);
  };

  return (
    <div className="wrap pb-[clamp(2.5rem,5vw,3.5rem)] pt-[clamp(1.75rem,3.5vw,2.5rem)]">
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-8 xl:gap-10">
        <aside className="h-fit rounded-[24px] bg-white px-5 py-5 shadow-[0_10px_32px_rgba(30,27,75,0.08)] sm:px-6 sm:py-6 lg:sticky lg:top-24">
          <div className="mb-4 flex items-center gap-2 sm:mb-5">
            <CategoriesIcon />
            <h2
              className="m-0 font-hanken text-[15px] font-bold sm:text-[16px]"
              style={{ color: BLUE }}
            >
              Categories
            </h2>
          </div>

          <div className="rounded-[20px] border border-[#ECEEF6] bg-[#FAFAFC] px-3 py-4 sm:px-4 sm:py-5">
            <p className="mb-3 px-1 font-jakarta text-[12px] font-medium text-[#8B8D9A] sm:mb-4">
              Categories
            </p>

            <nav aria-label="FAQ categories" className="flex flex-col gap-1">
              {sections.map((section, index) => {
                const isActive = index === activeIndex;
                const letter = FAQ_CATEGORY_LETTERS[index];
                const label = FAQ_CATEGORY_SHORT_LABELS[index];

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(index)}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex w-full items-center gap-2.5 rounded-full px-2 py-2 text-left transition-colors sm:gap-3 sm:px-2.5 sm:py-2.5 ${
                      isActive ? "font-semibold text-black" : "text-[#4F35F2] hover:bg-white/70"
                    }`}
                    style={isActive ? { backgroundColor: LIME } : undefined}
                  >
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-jakarta text-[12px] font-bold sm:h-8 sm:w-8 sm:text-[13px]"
                      style={{
                        backgroundColor: isActive ? "#E2E2E8" : "#ECEAFF",
                        color: isActive ? "#1E1B4B" : BLUE,
                      }}
                    >
                      {letter}
                    </span>
                    <span className="font-jakarta text-[13px] leading-snug sm:text-[14px]">
                      {label}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        <div className="space-y-10 sm:space-y-12">
          {sections.map((section, index) => (
            <section
              key={section.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              aria-labelledby={`${section.id}-title`}
            >
              <header className="mb-5 sm:mb-6">
                <div className="mb-2 flex items-start gap-3 sm:mb-3 sm:gap-4">
                  <span
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-jakarta text-[15px] font-bold text-white sm:h-11 sm:w-11 sm:text-[16px]"
                    style={{ backgroundColor: BLUE }}
                    aria-hidden
                  >
                    {FAQ_CATEGORY_LETTERS[index]}
                  </span>
                  <div>
                    <h2
                      id={`${section.id}-title`}
                      className="m-0 font-jakarta text-[clamp(1.35rem,2.5vw,1.75rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#4F35F2]"
                    >
                      {getFaqSectionDisplayTitle(section.title)}
                    </h2>
                    <p className="mt-2 font-jakarta text-[13px] leading-relaxed text-[#5B5A6A] sm:text-[14px]">
                      {section.intro}
                    </p>
                  </div>
                </div>
              </header>

              <div className="space-y-3 sm:space-y-3.5">
                {section.items.map((item) => (
                  <FaqItem key={item.question} question={item.question} variant="marketing">
                    {item.answer}
                  </FaqItem>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <FaqBottomCards />
    </div>
  );
};
