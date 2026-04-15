"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { WritingNavIcon } from "@/components/Icons";
import { STUDIELY_APP } from "@/lib/appUrls";

interface WritingSectionProps {
  sectionRef?: React.Ref<HTMLElement>;
}

export const WritingSection = ({ sectionRef }: WritingSectionProps) => {
  const [secs, setSecs] = useState(2700);
  const [running, setRun] = useState(false);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setSecs((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [running]);

  const fmt = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  const pct = (2700 - secs) / 2700;
  const words = answer.split(/\s+/).filter(Boolean).length;

  return (
    <section
      id="writing-practice"
      aria-label="AI exam writing practice with timer and feedback"
      ref={sectionRef}
      className="py-14 sm:py-16 md:py-20 bg-bg-base relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 72% 48%, rgba(217,123,42,.06) 0%, transparent 55%)",
        }}
      />

      <div className="wrap relative">
        <SectionHeader
          label="Exam Practice Mode"
          title="Practice Exam Like It's Real"
          sub="Authentic exam-style questions. A live countdown. AI feedback on your writing — structured exactly like your exam board requires."
          labelColor="var(--color-amber)"
        />

        <div className="two-col grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 lg:gap-[72px] items-center">
          <div>
            <ul className="flex flex-col gap-3.5 list-none p-0 m-0">
              {[
                ["Curriculum-aligned question generation", "var(--color-teal)"],
                ["Built-in countdown exam timer", "var(--color-amber)"],
                ["Real exam format & mark scheme structure", "var(--color-indigo)"],
                ["AI feedback on your written response", "var(--color-teal)"],
                ["Track your writing improvement over time", "var(--color-amber)"],
              ].map(([b, col], i) => (
                <li key={b} className="text-[14.5px] text-body font-light leading-[1.62]">
                  <Reveal delay={i * 0.07} className="flex gap-[11px] items-start">
                    <span
                      className="mt-[2px] shrink-0 font-semibold text-[13px]"
                      style={{ color: col }}
                    >
                      ✓
                    </span>
                    <span>{b}</span>
                  </Reveal>
                </li>
              ))}
            </ul>

    {/*        <Reveal delay={0.32}>
              <div className="mt-7">
                <Link href="/signup">
                  <Button variant="solid" lg>
                    Try Exam Practice Free →
                  </Button>
                </Link>
              </div>
            </Reveal> */}
          </div>

          <div>
            <Reveal delay={0.1}>
              <div className="bg-white border border-border-default rounded-[14px] overflow-hidden shadow-[0_6px_32px_rgba(0,0,0,0.07)]">
                <div className="bg-bg-base border-b border-border-default px-[18px] py-[13px] flex justify-between items-center">
                  <div className="flex items-center gap-[9px]">
                    <WritingNavIcon size={24} />
                    <span className="text-[13px] font-medium text-navy">
                      Exam Practice
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-[14px] font-bold border rounded-[7px] px-[11px] py-1 ${
                        secs < 300
                          ? "text-rose bg-rose-lt border-[#f5b0c8]"
                          : "text-amber bg-amber-lt border-[#f0d0b0]"
                      }`}
                    >
                      ⏱ {fmt(secs)}
                    </span>

                    <button
                      onClick={() => setRun((r) => !r)}
                      className="text-[11px] px-2.5 py-1 border border-border-default rounded-md bg-white text-body font-medium outline-none"
                    >
                      {running ? "⏸ Pause" : "▶ Start"}
                    </button>
                  </div>
                </div>

                <div className="h-[3px] bg-border-lt w-full">
                  <motion.div
                    animate={{ width: `${pct * 100}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-amber rounded-sm"
                  />
                </div>

                <div className="p-[18px_18px_20px]">
                  <div className="bg-amber-lt border border-[#f5d0a8] rounded-lg p-[13px_15px] mb-3.5">
                    <div className="text-[10px] font-bold uppercase tracking-[1px] text-amber mb-[7px]">
                      Exam Question
                    </div>

                    <p className="text-[14px] text-navy leading-[1.65]">
                      Evaluate the impact of photosynthesis on global ecosystems.
                      <span className="font-semibold"> [20 marks]</span>
                    </p>

                    <div className="mt-2 flex gap-1.5">
                      <span className="text-[11px] px-2 py-[2px] bg-white border border-[#f0c898] rounded-full text-amber">
                        IGCSE Biology
                      </span>

                      <span className="text-[11px] px-2 py-[2px] bg-white border border-[#f0c898] rounded-full text-amber">
                        45 min suggested
                      </span>
                    </div>
                  </div>

                  <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Type your answer here…"
                    className="w-full border border-border-default rounded-lg px-[13px] py-[11px] text-[13px] text-body leading-[1.75] resize-y min-h-[120px] outline-none font-sans font-light transition-colors duration-150 focus:border-amber"
                  />

                  <div className="flex justify-between mt-[7px] mb-2.5">
                    <span className="text-[11px] text-body">{words} words</span>
                    <span
                      className={`text-[11px] ${
                        words >= 300 ? "text-teal" : "text-body"
                      }`}
                    >
                      Aim: 300–450 words
                    </span>
                  </div>

                  <a href={STUDIELY_APP.examPractice} className="block">
                    <span className="flex w-full p-2.5 bg-navy text-white text-[13px] font-medium rounded-lg items-center justify-center hover:bg-navy/90 transition-colors">
                      Submit for AI Feedback →
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

       {/* BIG SEO CTA BUTTON */}
<Reveal delay={0.4}>
  <div className="mt-12 sm:mt-14 md:mt-16 flex justify-center">
    <motion.a
      href={STUDIELY_APP.examPractice}
      aria-label="Start AI exam writing practice"
      whileHover={{
        scale: 1.025,
        boxShadow: "0 16px 48px rgba(217,123,42,.35)",
      }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center justify-center gap-3 sm:gap-4 text-white border-none rounded-[14px] text-[18px] sm:text-[20px] md:text-[22px] font-semibold shrink-0 transition-all duration-300 w-full max-w-[480px] h-[72px] sm:h-[84px] overflow-hidden cursor-pointer px-4 sm:px-5"
      style={{
        background: "linear-gradient(135deg,#d97b2a 0%,#b86420 100%)",
        boxShadow: "0 8px 28px rgba(217,123,42,.28)",
      }}
    >
      {/* SVG icon */}
      <svg
        width="42"
        height="32"
        viewBox="0 0 90 68"
        fill="none"
        className="shrink-0 transition-opacity duration-300"
      >
        <rect x="2" y="52" width="62" height="8" rx="2.5" fill="currentColor" opacity=".9" />
        <rect x="8" y="60" width="8" height="6" rx="1.5" fill="currentColor" opacity=".7" />
        <rect x="30" y="60" width="8" height="6" rx="1.5" fill="currentColor" opacity=".7" />
        <rect x="8" y="14" width="14" height="38" rx="2" fill="currentColor" opacity=".85" />
        <rect x="10" y="19" width="10" height="6" rx="1" fill="white" opacity=".25" />
        <rect x="10" y="32" width="10" height="3" rx="1" fill="white" opacity=".18" />
        <rect x="10" y="37" width="7" height="3" rx="1" fill="white" opacity=".18" />
        <rect x="24" y="20" width="13" height="32" rx="2" fill="currentColor" opacity=".7" />
        <rect x="26" y="25" width="9" height="5" rx="1" fill="white" opacity=".25" />
        <g transform="rotate(-12 42 52)">
          <rect x="36" y="18" width="12" height="34" rx="2" fill="currentColor" opacity=".55" />
          <rect x="38" y="23" width="8" height="4" rx="1" fill="white" opacity=".22" />
          <rect x="38" y="30" width="6" height="3" rx="1" fill="white" opacity=".18" />
        </g>
        <path d="M62 28 L80 22 L62 16 L44 22 Z" fill="currentColor" opacity=".9" />
        <path d="M53 25 L53 38 Q53 42 62 44 Q71 42 71 38 L71 25" fill="currentColor" opacity=".6" />
        <line x1="80" y1="22" x2="80" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".8" />
        <circle cx="80" cy="36" r="2.8" fill="currentColor" opacity=".8" />
        <line x1="80" y1="38" x2="78" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
        <line x1="80" y1="38" x2="80" y2="45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
        <line x1="80" y1="38" x2="82" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
      </svg>

      {/* Button text */}
      Start Exam Practice
    </motion.a>
  </div>
</Reveal>
      </div>
    </section>
  );
};