"use client";

import { useState, type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { CUR_DATA } from "@/lib/data";
import { STUDIELY_APP } from "@/lib/appUrls";
import { TOOLS, getGlowColor } from "@/lib/studyTools";

interface StudyToolsSectionProps {
  sectionRef?: React.Ref<HTMLElement>;
}

export const StudyToolsSection = ({ sectionRef }: StudyToolsSectionProps) => {
  const [chosen, setChosen] = useState(false);
  const [sel, setSel] = useState<string | null>(null);

  const tool = sel ? TOOLS.find((t) => t.id === sel) : undefined;

   return (
    <section
      id="features"
      ref={sectionRef}
      className="scroll-mt-[calc(66px+12px)] py-10 sm:py-12 md:py-14 lg:py-16 bg-white"
    >
      <div className="wrap">
        <SectionHeader
          label="AI Study Tools"
          title="Five Tools. One Platform. Every Curriculum."
          sub="Pick your curriculum, type your topic and choose a tool. Content generates in seconds - structured to your exact grade level and exam board."
        />

        {/* Tool chips — full cards live in the hero; this keeps the CTA flow */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-3 sm:mb-4 max-w-[920px] mx-auto">
            {TOOLS.map((t) => {
              const active = sel === t.id;
              const { Icon } = t;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setSel(t.id);
                    setChosen(true);
                  }}
                  className="relative inline-flex items-center gap-2 rounded-full pl-2.5 pr-3.5 py-2 text-left transition-all duration-200 border text-[12.5px] sm:text-[13px] font-medium text-navy max-w-full sm:max-w-[280px]"
                  style={{
                    borderColor: active ? t.color : t.border,
                    background: active ? `linear-gradient(150deg,${t.lt} 0%,#fff 100%)` : "#fafaf8",
                    boxShadow: active ? `0 6px 22px ${t.glow}` : "0 1px 4px rgba(0,0,0,.04)",
                  }}
                >
                  {active && (
                    <span
                      className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                      style={{ background: t.color, boxShadow: `0 0 8px ${t.color}` }}
                    />
                  )}
                  <span className="shrink-0 flex w-9 h-9 items-center justify-center [&_svg]:max-h-9 [&_svg]:max-w-[36px]">
                    <Icon />
                  </span>
                  <span className="leading-snug pr-1">{t.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ── SELECTOR PANEL ── 
        <Reveal delay={0.08}>
          <div className="border border-border-default rounded-[14px] overflow-hidden bg-white shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
            {/* panel header 
            <div className="bg-bg-base border-b border-border-default px-6 py-[13px] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-2 h-2 rounded-full transition-colors duration-250 shrink-0"
                  style={{ background: tool.color }}
                />
                <span className="text-[12.5px] font-semibold text-navy">
                  {tool.label} — Configure
                </span>
              </div>
              <span className="text-[11px] text-body">
                Curriculum-aligned · No uploads needed
              </span>
            </div>

            <div className="p-[22px_24px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
                {/* Col 1 — Curriculum 
                <div>
                  <label
                    className="block text-[10px] font-semibold tracking-[1px] uppercase mb-[7px] transition-colors duration-200"
                    style={{ color: tool.color }}
                  >
                    Curriculum
                  </label>
                  <select
                    value={cur}
                    onChange={(e) => {
                      setCur(e.target.value);
                      setBrd("");
                      setGrd("");
                    }}
                    className="sel-style"
                  >
                    <option value="">Select curriculum…</option>
                    {Object.keys(CUR_DATA).map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                {/* Col 2 — Board 
                <div>
                  <label
                    className="block text-[10px] font-semibold tracking-[1px] uppercase mb-[7px] transition-colors duration-200"
                    style={{ color: tool.color }}
                  >
                    Board / Pathway
                  </label>
                  <select
                    value={brd}
                    onChange={(e) => {
                      setBrd(e.target.value);
                      setGrd("");
                    }}
                    disabled={!cur}
                    className={`sel-style ${!cur && "opacity-45"}`}
                  >
                    <option value="">Select board…</option>
                    {boards.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                {/* Col 3 — Grade 
                <div>
                  <label
                    className="block text-[10px] font-semibold tracking-[1px] uppercase mb-[7px] transition-colors duration-200"
                    style={{ color: tool.color }}
                  >
                    Grade / Year
                  </label>
                  <select
                    value={grd}
                    onChange={(e) => setGrd(e.target.value)}
                    disabled={!brd}
                    className={`sel-style ${!brd && "opacity-45"}`}
                  >
                    <option value="">Select grade…</option>
                    {grades.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                {/* Col 4 — Topic 
                <div>
                  <label
                    className="block text-[10px] font-semibold tracking-[1px] uppercase mb-[7px] transition-colors duration-200"
                    style={{ color: tool.color }}
                  >
                    Topic
                  </label>
                  <input
                    value={top}
                    onChange={(e) => setTop(e.target.value)}
                    placeholder='"e.g. Photosynthesis"'
                    className={`sel-style ${top ? "not-italic text-navy" : "italic text-[#b0b0be]"}`}
                  />
                </div>
              </div>

              {/* Hint text 
              <div className="h-[22px] mt-2.5">
                {!canGo && (
                  <p className="text-[11px] text-[#c0c0c8] m-0">
                    Fill in all 4 fields above to unlock generation.
                  </p>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        
        {/* ── OUTPUT AREA ── 
        <div className="min-h-0">
          <AnimatePresence mode="wait">
            {busy && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="mt-4 rounded-[10px] p-[18px_20px]"
                style={{ border: `1px dashed ${tool.border}`, background: tool.lt }}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-[9px] h-[9px] rounded-full animate-pulse-custom"
                    style={{ background: tool.color }}
                  />
                  <span className="text-[13px] text-body italic">
                    Generating <strong className="text-navy not-italic">{tool.label.toLowerCase()}</strong> for &quot;
                    <strong className="text-navy not-italic">{top}</strong>&quot; ({grd})…
                  </span>
                </div>
                <div className="mt-3.5 flex flex-col gap-2">
                  {[80, 60, 92, 48, 72, 35].map((w, i) => (
                    <div
                      key={i}
                      className="h-[9px] rounded-sm"
                      style={{ width: `${w}%`, background: `${tool.color}28`, animation: `pulse 1.6s ${i * 0.12}s ease infinite` }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
            {done && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 rounded-[10px] overflow-hidden"
                style={{ border: `1px solid ${tool.border}` }}
              >
                <div
                  className="px-4 py-2.5 flex items-center justify-between"
                  style={{ background: tool.lt, borderBottom: `1px solid ${tool.border}` }}
                >
                  <div className="flex flex-row items-center gap-2.5">
                    <tool.Icon />
                    <div className="flex flex-col">
                      <div className="text-[12px] font-semibold text-navy">
                        {tool.previewLabel} — {top}
                      </div>
                      <div className="text-[10px]" style={{ color: tool.color }}>
                        {cur} · {brd} · {grd}
                      </div>
                    </div>
                  </div>
                  <span
                    className="text-[10px] font-semibold bg-white px-2.5 py-[3px] rounded-full"
                    style={{ color: tool.color, border: `1px solid ${tool.border}` }}
                  >
                    PREVIEW
                  </span>
                </div>
                <div className="px-[18px] py-4 bg-white">
                  <pre className="text-[13px] text-body leading-[1.82] font-sans font-light whitespace-pre-wrap m-0">
                    {tool.preview}
                  </pre>
                </div>
                <div className="px-4 py-2.5 bg-bg-base border-t border-border-lt flex gap-2">
                  <button className="py-1.5 px-3.5 bg-navy text-white border-none rounded-md text-[12px] font-medium outline-none">
                    Download PDF
                  </button>
                  <button className="py-1.5 px-3.5 bg-white text-body border border-border-default rounded-md text-[12px] outline-none">
                    Copy Text
                  </button>
                  <button className="py-1.5 px-3.5 bg-white text-body border border-border-default rounded-md text-[12px] outline-none">
                    Generate More
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
*/}
 {/* ── BIG GENERATE BUTTON WITH DYNAMIC COLOR & CARD-LIKE GLOW ── */}
<Reveal delay={0.4}>
  <div className="mt-12 sm:mt-14 md:mt-16 flex justify-center">
    {(() => {
      const ctaStyle: CSSProperties = {
        background: `linear-gradient(135deg, ${
          chosen && tool?.color ? tool.color : "#4F35F2"
        } 0%, ${chosen && tool?.color ? tool.color : "#4338b8"}dd 100%)`,
        boxShadow: `0 8px 28px ${sel ? getGlowColor(sel) : "rgba(26,35,126,0.35)"}`,
      };
      const ctaClass =
        "flex items-center justify-center gap-3 sm:gap-4 text-white border-none rounded-[14px] text-[16px] sm:text-[18px] font-semibold shrink-0 transition-all duration-300 w-full max-w-[480px] h-[72px] sm:h-[84px] overflow-hidden px-4 sm:px-5";
      const inner = (
        <>
          <svg
            width="42"
            height="32"
            viewBox="0 0 90 68"
            fill="none"
            className="shrink-0 transition-opacity duration-300"
            aria-hidden
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
          <motion.div
            key={chosen ? sel : "default"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="min-w-0 w-[220px] sm:w-[260px] flex flex-col justify-center items-start text-left"
          >
            <span className="block text-[11px] font-normal opacity-70 tracking-[0.5px] uppercase mb-[3px]">
              {chosen ? "Ready" : "Select a tool"}
            </span>
            <span className="truncate w-full">{chosen ? tool?.cta : "Start Learning Smarter"}</span>
          </motion.div>
        </>
      );
      if (sel === "common-mistakes") {
        return (
          <motion.div
            role="button"
            aria-disabled
            tabIndex={0}
            className={`${ctaClass} cursor-not-allowed opacity-[0.97]`}
            style={ctaStyle}
          >
            {inner}
          </motion.div>
        );
      }
      return (
        <motion.a
          href={STUDIELY_APP.notes}
          whileHover={{
            scale: 1.025,
            boxShadow: `0 16px 48px ${sel ? getGlowColor(sel) : "rgba(26,35,126,0.5)"}`,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 0.97 }}
          className={`${ctaClass} cursor-pointer no-underline`}
          style={ctaStyle}
        >
          {inner}
        </motion.a>
      );
    })()}
  </div>
</Reveal>
      </div>
    </section>
  );
};
