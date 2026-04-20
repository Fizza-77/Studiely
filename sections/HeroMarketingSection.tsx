"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { STUDIELY_APP } from "@/lib/appUrls";

/** Right-column mockup copied from `main:sections/HeroSection.tsx` (RIGHT: MOCKUP). */
function MainBranchHeroMockup() {
  return (
    <div className="mx-auto block w-full max-w-[clamp(320px,92vw,520px)] md:mx-0 md:max-w-none">
      <motion.div
        initial={{ opacity: 0, x: 36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.2 }}
        className="origin-top scale-[0.96] overflow-hidden rounded-[clamp(12px,1.1vw,16px)] border border-border-default bg-white shadow-[0_10px_48px_rgba(0,0,0,0.08)] sm:scale-100"
      >
        <div className="flex items-center gap-2.5 border-b border-border-lt bg-bg-base px-[clamp(14px,1.4vw,18px)] py-[clamp(9px,1vw,12px)]">
          <div className="flex gap-[5px]">
            {["#e5584e", "#e5a73a", "#3cba54"].map((c) => (
              <div key={c} className="h-[9px] w-[9px] rounded-full" style={{ background: c }} />
            ))}
          </div>
          <span className="flex-1 text-center font-mono text-[clamp(10px,0.32vw+9px,12px)] text-[#6f6f7a]">studiely</span>
        </div>

        <div className="p-[clamp(16px,1.8vw,24px)]">
          <div className="mb-[clamp(10px,1.1vw,14px)] grid grid-cols-2 gap-[clamp(8px,0.9vw,12px)]">
            {[
              ["Curriculum", "British Curriculum"],
              ["Board", "Cambridge Intl."],
            ].map(([l, v]) => (
              <div key={l}>
                <label className="mb-[5px] block text-[clamp(9px,0.2vw+8px,11px)] font-semibold uppercase tracking-[0.7px] text-muted">
                  {l}
                </label>
                <div className="flex justify-between rounded-[7px] border border-border-default px-[clamp(10px,0.9vw,12px)] py-[clamp(7px,0.8vw,9px)] text-[clamp(12px,0.35vw+10px,14px)] font-medium text-navy">
                  {v}
                  <span className="text-[clamp(8px,0.2vw+7px,10px)] text-[#ccc]">▾</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-[clamp(12px,1.2vw,16px)] grid grid-cols-2 gap-[clamp(8px,0.9vw,12px)]">
            <div>
              <label className="mb-[5px] block text-[clamp(9px,0.2vw+8px,11px)] font-semibold uppercase tracking-[0.7px] text-muted">
                Grade
              </label>
              <div className="flex justify-between rounded-[7px] border border-border-default px-[clamp(10px,0.9vw,12px)] py-[clamp(7px,0.8vw,9px)] text-[clamp(12px,0.35vw+10px,14px)] font-medium text-navy">
                IGCSE <span className="text-[clamp(8px,0.2vw+7px,10px)] text-[#ccc]">▾</span>
              </div>
            </div>
            <div>
              <label className="mb-[5px] block text-[clamp(9px,0.2vw+8px,11px)] font-semibold uppercase tracking-[0.7px] text-muted">
                Topic
              </label>
              <div className="rounded-[7px] border border-teal px-[clamp(10px,0.9vw,12px)] py-[clamp(7px,0.8vw,9px)] text-[clamp(12px,0.35vw+10px,14px)] font-medium text-navy">
                Photosynthesis
              </div>
            </div>
          </div>

          <button
            type="button"
            className="mb-[clamp(12px,1.2vw,16px)] w-full rounded-lg bg-navy p-[clamp(9px,0.95vw,12px)] text-[clamp(12px,0.35vw+10px,14px)] font-medium text-white"
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
                <div className="mb-[3px] text-[clamp(13px,0.4vw+11px,15px)]">{ic}</div>
                <div className={`text-[clamp(8px,0.25vw+7px,10px)] ${act ? "font-semibold text-teal" : "text-muted"}`}>{lb}</div>
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
      className="border-t border-border-default bg-bg-base pt-[clamp(2rem,3.8vw,3.3rem)]"
      aria-labelledby="hero-marketing-heading"
    >
      <div className="mx-auto w-full max-w-[min(100%,1500px)] px-[clamp(12px,3.8vw,56px)] pb-[clamp(2.1rem,3.9vw,3.4rem)]">
        <div className="grid grid-cols-1 items-start gap-[clamp(1.8rem,3vw,3rem)] md:grid-cols-[minmax(0,13fr)_minmax(0,7fr)] md:gap-[clamp(1.4rem,2.2vw,2.2rem)] lg:gap-[clamp(2rem,2.8vw,3.2rem)]">
          <div className="min-w-0">
            <h1
              id="hero-marketing-heading"
              className="mb-[clamp(1rem,1.8vw,1.75rem)] text-center font-serif tracking-[-0.03em] text-navy lg:text-left"
            >
              <span className="mb-1 block font-bold leading-[1.08] text-[clamp(1.5rem,1.1rem+2.8vw,2.9rem)] xl:whitespace-nowrap max-[380px]:whitespace-normal max-[380px]:text-[clamp(1.35rem,5.2vw,2.15rem)]">
                Study Smarter. Score Higher.
              </span>
              <span className="block text-[clamp(1.9rem,1.1rem+3.9vw,3.8rem)] leading-[1.04]">
                Start in <em className="text-teal-dk">Seconds.</em>
              </span>
            </h1>

            <p className="mx-auto mb-[clamp(1.1rem,2vw,1.8rem)] max-w-[56rem] text-center text-[clamp(0.95rem,0.5vw+0.8rem,1.15rem)] font-light leading-[1.65] text-grey-800 lg:mx-0 lg:max-w-none lg:text-left">
              Select your curriculum and exam board. Type your topic. Studiely instantly generates summary notes,
              flashcards, quizzes and exam practice — calibrated to exactly what your examiner expects.
            </p>

            <div className="mx-auto flex w-full max-w-xl flex-col items-stretch justify-center gap-[clamp(0.55rem,0.9vw,0.85rem)] sm:flex-row lg:mx-0 lg:max-w-none">
              <Button href={STUDIELY_APP.signUp} variant="solid" lg className="min-w-0 flex-1 justify-center sm:flex-initial">
                Get Started Free
              </Button>
              <Link href="#how-it-works" className="min-w-0 flex-1 sm:flex-initial sm:min-w-0">
                <Button variant="outline" lg className="w-full min-w-0 justify-center sm:w-auto">
                  See How It Works
                </Button>
              </Link>
            </div>

            <p className="mt-[clamp(0.85rem,1.4vw,1.25rem)] text-center text-[clamp(0.69rem,0.24vw+0.61rem,0.78rem)] text-gray-500 lg:text-left">
              No credit card required · 5 free one-time credits · Works for GCSE, IB, A-Level, SAT, HSC and more
            </p>
          </div>

          <div className="mx-auto w-full min-w-0 max-w-[clamp(340px,92vw,560px)] md:mx-0 md:max-w-none">
            <div className="lg:sticky lg:top-[calc(66px+20px)]">
              <MainBranchHeroMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
