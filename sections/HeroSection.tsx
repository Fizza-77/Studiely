"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
export const HeroSection = () => (
  <section className="relative overflow-hidden pt-[66px] md:pt-[88px] pb-[70px] md:pb-[90px] bg-bg-base border-t border-border-default">
    
    {/* Background glow removed */}
    <div className="wrap relative">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[40px] lg:gap-[72px] items-center">
        
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

          {/* Headline */}
          {["Study Smarter.", "Score Higher.", null].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 + i * 0.1 }}
            >
              {line ? (
                <p className="font-serif font-bold text-[clamp(26px,5vw,40px)] leading-[1.1] text-navy tracking-[-1px] mb-1">
                  {line}
                </p>
              ) : (
                <h1 className="font-serif text-[clamp(32px,7vw,62px)] leading-[1.08] text-navy tracking-[-1px] mb-5 md:mb-6">
                  In <em className="text-teal">Minutes.</em>
                </h1>
              )}
            </motion.div>
          ))}

          {/* Description */}
         <motion.p
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.42 }}
  className="text-[15px] md:text-[16.5px] leading-[1.75] text-grey-800 font-light mb-7 md:mb-9 max-w-[100%] md:max-w-[460px]"
>
            Select your curriculum, pick your grade and topic — Studiely instantly generates notes,
            quizzes, flashcards, and exam questions aligned to your exact board.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.54 }}
            className="flex flex-col sm:flex-row gap-2.5 mb-[18px] md:mb-[22px]"
          >
            <Link href="/signup">
              <Button variant="solid" lg>
                Get Started Free →
              </Button>
            </Link>
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
            className="text-[12px] text-gray-500"
          >
            🔒 No credit card required · Free Trial · Cancel Anytime
          </motion.p>
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

              <button className="w-full p-2.5 bg-navy text-white text-[13px] font-medium rounded-lg mb-[14px]">
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