"use client";

import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
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
const SWIRL_VIEW_W = 280;

/** Offset from the viewport top used to decide which section is "current". */
const SCROLL_SPY_OFFSET = 140;

const CategoriesIcon = () => (
  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden>
    <path d="M3 5.5h10M3 10h14M3 14.5h8" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/** Shared DNA helix geometry — locked strands twist around one axis. */
const DNA_TURNS = 8;
const DNA_RADIUS = 86;
const DNA_CX = SWIRL_VIEW_W / 2;

const dnaBounds = (height: number) => {
  const startY = Math.min(560, Math.max(200, height * 0.2));
  const endY = Math.max(height - 36, startY + 120);
  return { startY, endY, travel: endY - startY };
};

const helixPoint = (
  t: number,
  phase: number,
  startY: number,
  travel: number,
  radius = DNA_RADIUS
) => {
  const angle = t * Math.PI * 2 * DNA_TURNS + phase;
  return {
    x: DNA_CX + Math.sin(angle) * radius,
    y: startY + t * travel,
    depth: Math.cos(angle),
  };
};

/** Smooth helix strand (Catmull-Rom). */
const buildHelixPath = (height: number, phase: number, radius = DNA_RADIUS) => {
  const { startY, travel } = dnaBounds(height);
  const steps = Math.max(80, Math.round(travel / 16));
  const points: { x: number; y: number }[] = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const p = helixPoint(t, phase, startY, travel, radius);
    points.push({ x: p.x, y: p.y });
  }

  let d = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }

  return d;
};

/** Base-pair rungs between opposite helix strands. */
const buildDnaRungsPath = (height: number) => {
  const { startY, travel } = dnaBounds(height);
  // One rung per half-turn so it reads as a ladder
  const rungCount = DNA_TURNS * 2;
  const parts: string[] = [];

  for (let i = 0; i <= rungCount; i++) {
    const t = i / rungCount;
    const a = helixPoint(t, 0, startY, travel);
    const b = helixPoint(t, Math.PI, startY, travel);
    parts.push(
      `M ${a.x.toFixed(2)} ${a.y.toFixed(2)} L ${b.x.toFixed(2)} ${b.y.toFixed(2)}`
    );
  }

  return parts.join(" ");
};

const DNA_STRANDS = [
  { id: "strand-a", color: BLUE, width: 9, opacity: 0.95, phase: 0, dotR: 7 },
  { id: "strand-b", color: LIME, width: 9, opacity: 0.92, phase: Math.PI, dotR: 7 },
] as const;

const SwirlLine = ({
  d,
  color,
  width,
  opacity,
  pathLength,
  drawProgress,
  dotR,
}: {
  d: string;
  color: string;
  width: number;
  opacity: number;
  pathLength: ReturnType<typeof useTransform<number, number>>;
  drawProgress: ReturnType<typeof useTransform<number, number>>;
  dotR: number;
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const tipX = useMotionValue(0);
  const tipY = useMotionValue(0);

  const syncTip = (progress: number) => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    if (!len) return;
    const pt = path.getPointAtLength(Math.max(0, Math.min(1, progress)) * len);
    tipX.set(pt.x);
    tipY.set(pt.y);
  };

  useMotionValueEvent(drawProgress, "change", syncTip);

  useEffect(() => {
    const id = requestAnimationFrame(() => syncTip(drawProgress.get()));
    return () => cancelAnimationFrame(id);
  }, [d, drawProgress]);

  return (
    <g>
      <motion.path
        ref={pathRef}
        d={d}
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#faq-line-glow)"
        style={{ pathLength }}
        opacity={opacity}
      />
      <motion.circle
        cx={tipX}
        cy={tipY}
        r={dotR + 4}
        fill={color}
        opacity={0.28}
        filter="url(#faq-tip-soft)"
      />
      <motion.circle cx={tipX} cy={tipY} r={dotR} fill={color} opacity={0.95} />
      <motion.circle
        cx={tipX}
        cy={tipY}
        r={Math.max(2.2, dotR * 0.35)}
        fill="#FFFFFF"
        opacity={0.85}
      />
    </g>
  );
};

const FaqScrollSwirl = ({
  trackRef,
}: {
  trackRef: RefObject<HTMLElement | null>;
}) => {
  const [trackHeight, setTrackHeight] = useState(900);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.35", "end end"],
  });

  // Slightly slower than scroll so the tips ease down the page
  const drawProgress = useTransform(scrollYProgress, (p) => Math.pow(p, 1.16));
  const pathLength = useTransform(drawProgress, [0, 1], [0.004, 1]);

  // Whole helix sways / twists together like one DNA structure
  const helixSway = useTransform(scrollYProgress, (p) => Math.sin(p * Math.PI * 3.2) * 18);
  const helixTwist = useTransform(scrollYProgress, (p) => Math.sin(p * Math.PI * 2.4) * 4);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => setTrackHeight(Math.max(el.offsetHeight, 600));
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [trackRef]);

  const strandPaths = useMemo(
    () => DNA_STRANDS.map((strand) => buildHelixPath(trackHeight, strand.phase)),
    [trackHeight]
  );
  const rungsPath = useMemo(() => buildDnaRungsPath(trackHeight), [trackHeight]);

  return (
    <div
      className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-full max-w-[300px] overflow-visible lg:block"
      aria-hidden
    >
      <svg
        viewBox={`0 0 ${SWIRL_VIEW_W} ${trackHeight}`}
        width="100%"
        height={trackHeight}
        className="overflow-visible"
        fill="none"
      >
        <defs>
          <filter id="faq-line-glow" x="-40%" y="-20%" width="180%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="faq-tip-soft" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.g
          style={{
            x: helixSway,
            rotate: helixTwist,
            transformOrigin: `${DNA_CX}px ${trackHeight * 0.45}px`,
          }}
        >
          {/* Base-pair rungs */}
          <motion.path
            d={rungsPath}
            stroke="#6B54FF"
            strokeWidth={3}
            strokeLinecap="round"
            style={{ pathLength }}
            opacity={0.55}
          />

          {DNA_STRANDS.map((strand, index) => (
            <SwirlLine
              key={strand.id}
              d={strandPaths[index]}
              color={strand.color}
              width={strand.width}
              opacity={strand.opacity}
              pathLength={pathLength}
              drawProgress={drawProgress}
              dotR={strand.dotR}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
};

interface FaqPageContentProps {
  sections: FaqSection[];
}

export const FaqPageContent = ({ sections }: FaqPageContentProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const faqTrackRef = useRef<HTMLDivElement>(null);
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
    <div className="wrap pb-[clamp(2.5rem,5vw,3.5rem)] pt-[clamp(1rem,2vw,1.25rem)]">
      <div
        ref={faqTrackRef}
        className="relative grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-8 xl:gap-10"
      >
        <FaqScrollSwirl trackRef={faqTrackRef} />

        <div className="relative z-[2]">
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
        </div>

        <div className="relative z-[2] space-y-10 sm:space-y-12">
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
