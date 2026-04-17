"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { STUDIELY_APP } from "@/lib/appUrls";
import { TOOLS } from "@/lib/studyTools";
import { StatsBar } from "@/sections/StatsSection";

/** Stronger drift so floating motion reads clearly on the cards. */
const CARD_DRIFT = [
  { x: [0, 14, -11, 9, -7, 0] as const, y: [0, -14, 12, -11, 8, 0] as const, duration: 14, delay: 0 },
  { x: [0, -13, 11, -8, 7, 0] as const, y: [0, 12, -14, 10, -9, 0] as const, duration: 16, delay: 0.35 },
  { x: [0, 12, -13, 8, -9, 0] as const, y: [0, -12, 14, -10, 8, 0] as const, duration: 15, delay: 0.7 },
  { x: [0, -12, 13, -7, 6, 0] as const, y: [0, 13, -12, 9, -10, 0] as const, duration: 17, delay: 1.05 },
  { x: [0, 11, -10, 11, -7, 0] as const, y: [0, -11, 11, -12, 9, 0] as const, duration: 18, delay: 1.4 },
] as const;

export const HeroSection = () => (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-66px)] flex-col overflow-x-hidden overflow-y-visible bg-bg-base border-t border-border-default"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 70% 20%, rgba(0, 176, 155, 0.09), transparent 55%), radial-gradient(ellipse 60% 45% at 15% 75%, rgba(84, 72, 200, 0.06), transparent 50%)",
        }}
      />
      <div className="relative flex flex-1 flex-col min-h-0 w-full max-w-[min(100%,1320px)] mx-auto px-[clamp(12px,4.2vw,48px)] max-lg:pt-0 lg:pt-0 xl:pt-0 pb-4 sm:pb-5">
        {/* max-lg: flex-none avoids a gap between cards + stats. lg+: flex-1 + spacer below grid (not justify-end) avoids a huge gap under the navbar (e.g. iPad Pro). */}
        <div className="flex min-h-0 flex-col justify-start pt-1 pb-0 sm:pt-2 max-lg:flex-none max-lg:pb-1 lg:flex-1 lg:min-h-0 lg:pt-4 lg:pb-0 xl:pt-5">
        <div className="grid shrink-0 grid-cols-1 items-start gap-6 sm:gap-7 md:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-stretch lg:gap-6 xl:gap-7">
          {/* LEFT: TEXT — column stretches with cards; body copy flexes to fill space on lg+ */}
          <div className="flex min-h-0 w-full min-w-0 flex-col lg:h-full lg:pt-0">
            <div className="flex w-fit mx-auto items-center justify-center gap-2 text-[9px] sm:text-[10px] font-semibold tracking-[1.2px] uppercase text-teal-dk text-center mb-4 sm:mb-5">
              <span className="w-4 h-[1.5px] bg-teal-dk block shrink-0" />
              AI-Powered Study Tool for Students
            </div>

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

            <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-2 sm:gap-2.5 mb-3 sm:mb-3.5 w-full">
              <Button href={STUDIELY_APP.home} variant="solid">
                Get Started Free
              </Button>

              <Link href="#how-it-works">
                <Button variant="outline">
                  See How It Works
                </Button>
              </Link>
            </div>

            <p className="text-[11px] sm:text-[11.5px] text-gray-500 text-center lg:text-left leading-snug">
              No credit card required · 5 free one-time credits · Works for GCSE, IB, A-Level, SAT,
              HSC and more
            </p>
          </div>

          {/* RIGHT: FLIP CARDS — extra vertical room below lg so drift has space */}
          <div className="mx-auto w-full min-w-0 overflow-visible py-2 sm:max-lg:py-3 lg:mx-0 lg:py-0">
            <div className="grid grid-cols-2 gap-2 overflow-visible px-0 pt-0 pb-0 sm:gap-2.5 sm:px-0.5 max-lg:pb-3 sm:max-lg:pb-4">
              {TOOLS.map((t, i) => {
                const { Icon, appHref } = t;
                const d = CARD_DRIFT[i] ?? CARD_DRIFT[0];
                const isWide = i === TOOLS.length - 1;
                const shellClass =
                  "group block h-[clamp(82px,16vw,110px)] sm:h-[clamp(88px,18vw,118px)] [perspective:900px] rounded-[8px] sm:rounded-[10px] outline-none";
                const flipInner = (
                  <div
                    className="relative h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]"
                  >
                        {/* Front */}
                        <div
                          className="absolute inset-0 flex flex-col items-center justify-center rounded-[8px] sm:rounded-[10px] px-1.5 py-1.5 sm:px-2 sm:py-2 text-center [backface-visibility:hidden] border shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                          style={{
                            borderColor: t.border,
                            background: `linear-gradient(155deg, ${t.lt} 0%, #ffffff 92%)`,
                            boxShadow: `0 6px 22px ${t.glow}`,
                          }}
                        >
                          <div className="mb-0.5 flex shrink-0 items-center justify-center [&_svg]:max-h-[min(28px,6.5vw)] min-[400px]:[&_svg]:max-h-[32px] sm:[&_svg]:max-h-[36px]">
                            <Icon />
                          </div>
                          <div
                            className="h-[2px] w-5 rounded-sm mb-0.5 sm:mb-1 shrink-0"
                            style={{ background: t.color }}
                          />
                          <h3 className="text-[10px] min-[400px]:text-[11px] sm:text-[12px] font-medium text-navy leading-tight tracking-[-0.1px] m-0 line-clamp-3">
                            {t.label}
                          </h3>
                        </div>

                        {/* Back */}
                        <div
                          className="absolute inset-0 flex flex-col rounded-[8px] sm:rounded-[10px] p-2 sm:p-2.5 text-left [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden border"
                          style={{
                            borderColor: t.border,
                            background: `linear-gradient(165deg, #ffffff 0%, ${t.lt} 100%)`,
                            boxShadow: `0 8px 28px ${t.glow}`,
                          }}
                        >
                          <p className="text-[10px] sm:text-[11.5px] text-body leading-[1.45] font-light m-0 overflow-y-auto pr-0.5 flex-1 [scrollbar-width:thin]">
                            {t.desc}
                          </p>
                          <span
                            className="mt-1.5 shrink-0 text-[9.5px] sm:text-[11px] font-semibold uppercase tracking-[0.4px] line-clamp-2"
                            style={{ color: t.color }}
                          >
                            {t.label}
                          </span>
                        </div>
                      </div>
                );
                return (
                  <motion.div
                    key={t.id}
                    className={isWide ? "col-span-2" : undefined}
                    initial={false}
                    animate={{ x: [...d.x], y: [...d.y] }}
                    transition={{
                      duration: d.duration,
                      delay: d.delay,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                  >
                    {appHref ? (
                      <a
                        href={appHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${shellClass} no-underline text-inherit cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-dk/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base`}
                        aria-label={`Open ${t.label} in the Studiely app`}
                      >
                        {flipInner}
                      </a>
                    ) : (
                      <div
                        className={`${shellClass} cursor-default`}
                        tabIndex={0}
                        aria-label={`${t.label} — preview only; open study tools in the app`}
                      >
                        {flipInner}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        {/* lg+: absorbs extra viewport height below the grid so content stays near the top; hidden below lg (flex-none column has no spare height). */}
        <div className="hidden min-h-0 min-w-0 flex-1 shrink lg:block" aria-hidden />
        </div>

        <div className="mt-4 sm:mt-5 shrink-0 w-full flex justify-center pb-2 sm:pb-3">
          <StatsBar />
        </div>
      </div>
    </section>
);
