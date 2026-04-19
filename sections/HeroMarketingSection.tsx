"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { STUDIELY_APP } from "@/lib/appUrls";
import { StatsBar } from "@/sections/StatsSection";

/** Right-column mockup copied from `main:sections/HeroSection.tsx` (RIGHT: MOCKUP). */
function MainBranchHeroMockup() {
  return (
    <div className="mx-auto block max-w-[420px] lg:mx-0 lg:max-w-none">
      <motion.div
        initial={{ opacity: 0, x: 36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.2 }}
        className="origin-top scale-[0.94] overflow-hidden rounded-[14px] border border-border-default bg-white shadow-[0_10px_48px_rgba(0,0,0,0.08)] sm:scale-100"
      >
        <div className="flex items-center gap-2.5 border-b border-border-lt bg-bg-base px-4 py-[11px]">
          <div className="flex gap-[5px]">
            {["#e5584e", "#e5a73a", "#3cba54"].map((c) => (
              <div key={c} className="h-[9px] w-[9px] rounded-full" style={{ background: c }} />
            ))}
          </div>
          <span className="flex-1 text-center font-mono text-[11px] text-[#6f6f7a]">studiely</span>
        </div>

        <div className="p-[20px]">
          <div className="mb-2.5 grid grid-cols-2 gap-2.5">
            {[
              ["Curriculum", "British Curriculum"],
              ["Board", "Cambridge Intl."],
            ].map(([l, v]) => (
              <div key={l}>
                <label className="mb-[5px] block text-[10px] font-semibold uppercase tracking-[0.7px] text-muted">
                  {l}
                </label>
                <div className="flex justify-between rounded-[7px] border border-border-default px-[11px] py-2 text-[13px] font-medium text-navy">
                  {v}
                  <span className="text-[9px] text-[#ccc]">▾</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-[14px] grid grid-cols-2 gap-2.5">
            <div>
              <label className="mb-[5px] block text-[10px] font-semibold uppercase tracking-[0.7px] text-muted">
                Grade
              </label>
              <div className="flex justify-between rounded-[7px] border border-border-default px-[11px] py-2 text-[13px] font-medium text-navy">
                IGCSE <span className="text-[9px] text-[#ccc]">▾</span>
              </div>
            </div>
            <div>
              <label className="mb-[5px] block text-[10px] font-semibold uppercase tracking-[0.7px] text-muted">
                Topic
              </label>
              <div className="rounded-[7px] border border-teal px-[11px] py-2 text-[13px] font-medium text-navy">
                Photosynthesis
              </div>
            </div>
          </div>

          <button
            type="button"
            className="mb-[14px] w-full rounded-lg bg-navy p-2.5 text-[13px] font-medium text-white"
          >
            Generate Study Content →
          </button>

          <div className="flex gap-[6px]">
            {[
              ["📝", "Notes", true],
              ["🧠", "Quiz", false],
              ["🗂️", "Cards", false],
              ["📋", "Exam", false],
            ].map(([ic, lb, act]) => (
              <div
                key={lb as string}
                className={`flex-1 rounded-[7px] border py-2 px-1 text-center ${
                  act ? "border-teal bg-teal-lt" : "border-border-default bg-white"
                }`}
              >
                <div className="mb-[3px] text-[14px]">{ic}</div>
                <div className={`text-[9px] ${act ? "font-semibold text-teal" : "text-muted"}`}>{lb}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/** Former hero left column + right-side mockup from `main` hero (below #hero). */
export const HeroMarketingSection = () => {
  return (
    <section
      id="hero-marketing"
      className="border-t border-border-default bg-bg-base pt-8 sm:pt-10 md:pt-12"
      aria-labelledby="hero-marketing-heading"
    >
      <div className="mx-auto w-full max-w-[min(100%,1320px)] px-[clamp(12px,4.2vw,48px)] pb-8 sm:pb-10 md:pb-12">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,400px)] lg:gap-10 xl:gap-12">
          <div className="min-w-0">
            <h1
              id="hero-marketing-heading"
              className="mb-5 font-serif text-navy tracking-[-1px] text-center lg:text-left sm:mb-6 md:mb-7"
            >
              <span className="mb-1 block font-bold leading-[1.08] text-[clamp(26px,5vw,40px)] whitespace-nowrap max-[380px]:whitespace-normal max-[380px]:text-[clamp(22px,5.2vw,34px)]">
                Study Smarter. Score Higher.
              </span>
              <span className="block text-[clamp(30px,6.2vw,56px)] leading-[1.06]">
                Start in <em className="text-teal-dk">Seconds.</em>
              </span>
            </h1>

            <p className="mx-auto mb-6 max-w-[52rem] text-center text-[14px] font-light leading-[1.55] text-grey-800 sm:mb-7 sm:text-[15px] md:text-[16px] md:leading-[1.65] lg:mx-0 lg:max-w-none lg:text-left">
              Select your curriculum and exam board. Type your topic. Studiely instantly generates summary notes,
              flashcards, quizzes and exam practice — calibrated to exactly what your examiner expects.
            </p>

            <div className="mx-auto flex w-full max-w-xl flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:gap-3 lg:mx-0 lg:max-w-none">
              <Button href={STUDIELY_APP.signUp} variant="solid" lg className="min-w-0 flex-1 justify-center sm:flex-initial">
                Get Started Free
              </Button>
              <Link href="#how-it-works" className="min-w-0 flex-1 sm:flex-initial sm:min-w-0">
                <Button variant="outline" lg className="w-full min-w-0 justify-center sm:w-auto">
                  See How It Works
                </Button>
              </Link>
            </div>

            <p className="mt-4 text-center text-[11px] text-gray-500 sm:mt-5 sm:text-[11.5px] lg:text-left">
              No credit card required · 5 free one-time credits · Works for GCSE, IB, A-Level, SAT, HSC and more
            </p>
          </div>

          <div className="mx-auto w-full min-w-0 max-w-md lg:mx-0 lg:max-w-none">
            <div className="lg:sticky lg:top-[calc(66px+20px)]">
              <MainBranchHeroMockup />
            </div>
          </div>
        </div>
      </div>

      <StatsBar fullBleed />
    </section>
  );
};
