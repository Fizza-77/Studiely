"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { STUDIELY_APP } from "@/lib/appUrls";
export const HeroSection = () => (
  <section className="relative overflow-hidden pt-[66px] sm:pt-[72px] md:pt-[88px] pb-14 sm:pb-16 md:pb-20 lg:pb-24 bg-bg-base border-t border-border-default">
    
    {/* Background glow removed */}
    <div className="wrap relative">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 sm:gap-10 lg:gap-[72px] items-center">
        
        {/* LEFT: TEXT */}
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[1.4px] uppercase text-teal mb-[18px] md:mb-[22px]"
          >
            <span className="w-5 h-[1.5px] bg-teal block" />
            AI-Powered Study Tool for Students
          </motion.div>

          {/* Headline — single H1 for SEO; visual hierarchy preserved with spans */}
          <h1 className="font-serif text-navy tracking-[-1px] mb-5 md:mb-6 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="block font-bold text-[clamp(26px,5vw,40px)] leading-[1.1] mb-1 whitespace-nowrap max-[380px]:whitespace-normal max-[380px]:text-[clamp(22px,5vw,36px)]"
            >
              Study Smarter. Score Higher.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.28 }}
              className="block text-[clamp(32px,7vw,62px)] leading-[1.08]"
            >
              Start in <em className="text-teal">Seconds.</em>
            </motion.span>
          </h1>

          {/* Description */}
         <motion.p
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.42 }}
  className="text-[15px] md:text-[16.5px] leading-[1.75] text-grey-800 font-light mb-7 md:mb-9 max-w-[100%] md:max-w-[460px]"
>
            Select your curriculum and exam board. Type your topic. Studiely instantly generates
            revision notes, flashcards, quizzes and exam practice — calibrated to exactly what your
            examiner expects.
          </motion.p>

<motion.div
  initial={{ opacity: 0, y: 14 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.54 }}
  className="flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start gap-2.5 mb-[18px] md:mb-[22px]"
>
  <Button href={STUDIELY_APP.home} variant="solid" lg>
    Get Started Free
  </Button>

  <Link href="#how-it-works">
    <Button variant="outline" lg>
      See How It Works
    </Button>
  </Link>
</motion.div>

          {/* Trust text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.68 }}
            className="text-[12px] text-gray-500 text-center lg:text-left"
          >
            No credit card required · 5 free one-time credits · Works for GCSE, IB, A-Level, SAT,
            HSC and more
          </motion.p>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.76 }}
            aria-label="Popular pages"
            className="mt-4 text-[12px] text-muted text-center lg:text-left leading-relaxed"
          >
            <span className="text-gray-500">Popular:</span>{" "}
            <Link href="/faqs" className="text-teal hover:text-teal-dk underline underline-offset-2">
              FAQs
            </Link>
            {" · "}
            <Link href="/nyla" className="text-teal hover:text-teal-dk underline underline-offset-2">
              Nyla AI tutor
            </Link>
            {" · "}
            <Link href="/blog" className="text-teal hover:text-teal-dk underline underline-offset-2">
              Blog
            </Link>
            {" · "}
            <Link href="/app/pricing" className="text-teal hover:text-teal-dk underline underline-offset-2">
              Pricing
            </Link>
          </motion.nav>
        </div>

        {/* RIGHT: MOCKUP */}
        <div className="block max-w-[420px] mx-auto lg:max-w-none lg:mx-0">
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="scale-[0.94] sm:scale-100 origin-top bg-white border border-border-default rounded-[14px] overflow-hidden shadow-[0_10px_48px_rgba(0,0,0,0.08)]"
          >
            {/* Top bar */}
            <div className="flex items-center gap-2.5 px-4 py-[11px] border-b border-border-lt bg-bg-base">
              <div className="flex gap-[5px]">
                {["#e5584e", "#e5a73a", "#3cba54"].map((c) => (
                  <div key={c} className="w-[9px] h-[9px] rounded-full" style={{ background: c }} />
                ))}
              </div>
              <span className="flex-1 text-center text-[11px] text-[#6f6f7a] font-mono">
                studiely
              </span>
            </div>

            {/* Mock content */}
            <div className="p-[20px]">
              <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                {[
                  ["Curriculum", "British Curriculum"],
                  ["Board", "Cambridge Intl."],
                ].map(([l, v]) => (
                  <div key={l}>
                    <label className="text-[10px] font-semibold uppercase tracking-[0.7px] text-muted block mb-[5px]">
                      {l}
                    </label>
                    <div className="flex justify-between border border-border-default rounded-[7px] py-2 px-[11px] text-[13px] text-navy font-medium">
                      {v}
                      <span className="text-[#ccc] text-[9px]">▾</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2.5 mb-[14px]">
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.7px] text-muted block mb-[5px]">
                    Grade
                  </label>
                  <div className="flex justify-between border border-border-default rounded-[7px] py-2 px-[11px] text-[13px] text-navy font-medium">
                    IGCSE <span className="text-[#ccc] text-[9px]">▾</span>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.7px] text-muted block mb-[5px]">
                    Topic
                  </label>
                  <div className="border border-teal rounded-[7px] py-2 px-[11px] text-[13px] text-navy font-medium">
                    Photosynthesis
                  </div>
                </div>
              </div>

              <Button
                href={STUDIELY_APP.notes}
                variant="solid"
                className="w-full py-2.5 px-2.5 text-[13px] font-medium rounded-lg mb-[14px]"
              >
                Generate Study Content →
              </Button>

              <div className="flex gap-[6px]">
                {[
                  ["📝", "Notes", true],
                  ["🧠", "Quiz", false],
                  ["🗂️", "Cards", false],
                  ["📋", "Exam", false],
                ].map(([ic, lb, act]) => (
                  <div
                    key={lb as string}
                    className={`flex-1 border rounded-[7px] py-2 px-1 text-center ${
                      act ? "border-teal bg-teal-lt" : "border-border-default bg-white"
                    }`}
                  >
                    <div className="text-[14px] mb-[3px]">{ic}</div>
                    <div
                      className={`text-[9px] ${
                        act ? "text-teal font-semibold" : "text-muted"
                      }`}
                    >
                      {lb}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);