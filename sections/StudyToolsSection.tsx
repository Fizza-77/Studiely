"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { NotesCardIcon, QuizCardIcon, FlashcardsCardIcon, ExamCardIcon } from "@/components/Icons";
import { CUR_DATA } from "@/lib/data";
import { STUDIELY_APP } from "@/lib/appUrls";
// Map the selected option to a glow color
function getGlowColor(sel: string) {
  switch (sel) {
    case "notes":
      return "rgba(0,255,200,0.35)"; // sea green
    case "flashcards":
         return "rgba(0,150,255,0.35)"; // light blue
      case "quiz":
      return "rgba(255, 166, 0, 0.45)"; // orange

    case "exam":
      return "rgba(255, 0, 128, 0.48)"; // pink
    default:
      return "rgba(26,35,126,0.35)"; // dark blue fallback
  }
}
const TOOLS = [
  {
    id: "notes",
    label: "Generate Notes",
    cta: "Generate Notes",
    color: "#00b09b",
    lt: "#dff6f2",
    glow: "rgba(0,176,155,.14)",
    border: "rgba(0,176,155,.22)",
    desc: "AI creates detailed, structured study notes for any subject and topic — tailored to your curriculum and grade level.",
    previewLabel: "Study Notes",
    preview:
      "Photosynthesis is the process by which plants convert light energy into chemical energy stored in glucose.\n\n• Light-dependent reactions occur in the thylakoid membrane\n• Carbon fixation occurs via the Calvin cycle in the stroma\n• Net equation: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂\n• Chlorophyll is the primary photosynthetic pigment",
    Icon: NotesCardIcon,
  },
   {
    id: "flashcards",
    label: "Create Flashcards",
    cta: "Create Flashcards",
    color: "#2563eb",
    lt: "#eff6ff",
    glow: "rgba(37,99,235,.13)",
    border: "rgba(37,99,235,.22)",
    desc: "Build spaced-repetition flashcard decks from key concepts to boost memory retention and active recall.",
    previewLabel: "Flashcards",
    preview:
      "FRONT: What is the net equation for photosynthesis?\n────────────────────────────────\nBACK: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂\n\n── Card 1 of 12 · Deck: Photosynthesis ──",
    Icon: FlashcardsCardIcon,
  },
    {
    id: "quiz",
    label: "Generate Quiz",
    cta: "Generate Quiz",
    color: "#d97b2a",
    lt: "#fff1e4",
    glow: "rgba(217,123,42,.13)",
    border: "rgba(217,123,42,.22)",
    desc: "Auto-create topic-based quizzes — multiple choice, true/false, short-answer — at your chosen difficulty level.",
    previewLabel: "Quiz",
    preview:
      "Q1. What is the primary pigment in photosynthesis?\n  ○ Carotene\n  ● Chlorophyll ✓\n  ○ Xanthophyll\n  ○ Phycocyanin\n\nQ2. Where does the Calvin cycle occur?\n  ● Stroma of the chloroplast ✓\n  ○ Thylakoid membrane\n  ○ Cytoplasm",
    Icon: QuizCardIcon,
  },
  {
    id: "exam",
    label: "Exam Questions",
    cta: "Generate Exam Questions",
    color: "#c94a72",
    lt: "#ffedf3",
    glow: "rgba(201,74,114,.13)",
    border: "rgba(201,74,114,.22)",
    desc: "Practice with structured, exam-style questions with guided answers — formatted to match your specific exam board.",
    previewLabel: "Exam Question",
    preview:
      "[IGCSE Biology — 8 marks]\nDescribe the light-dependent stage of photosynthesis, including the role of chlorophyll and the products formed.\n\nMark Scheme:\n✓ Chlorophyll absorbs light energy [1]\n✓ Water molecules split via photolysis [1]\n✓ ATP and reduced NADP (NADPH) are produced [2]\n✓ Oxygen released as a by-product [1]",
    Icon: ExamCardIcon,
  },
];

interface StudyToolsSectionProps {
  sectionRef?: React.Ref<HTMLElement>;
}
const COUNTRIES = [
  { key: "uk", label: "United Kingdom", flag: "/curriculum-logos/UK.png" },
  { key: "us", label: "United States", flag: "/curriculum-logos/US.png" },
  { key: "au", label: "Australia", flag: "/curriculum-logos/australia.png" },
  { key: "ca", label: "Canada", flag: "/curriculum-logos/canada.png" },
];

export const StudyToolsSection = ({ sectionRef }: StudyToolsSectionProps) => {
  const [chosen, setChosen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [sel, setSel] = useState<string | null>(null);
  const router = useRouter();

  const tool = TOOLS.find((t) => t.id === sel)!;
  const canGo = chosen; // button active as soon as a card is selected
  const go = () => {
    if (!canGo) return;
    setBusy(true);
    setDone(false);
    setTimeout(() => {
      setBusy(false);
      setDone(true);
    }, 1800);
  };

   return (
    <section id="features" ref={sectionRef} className="py-14 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="wrap">
        <SectionHeader
          label="AI Study Tools"
          title="4 Powerful Tools — One Platform"
          sub="Select your curriculum and topic, pick a tool, and generate perfectly curriculum-aligned content in seconds."
        />

      {/* ── TOOL CARDS ── */}
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] mb-8">
            {TOOLS.map((t) => {
              const active = sel === t.id;
              const { Icon } = t;
              return (
                <motion.div
                  key={t.id}
                  whileHover={{ y: -6 }}
                  onClick={() => {
                    setSel(t.id);
                    setChosen(true);
                    setDone(false);
                  }}
                  transition={{ duration: 0.18 }}
                  className="rounded-[14px] p-[24px_20px_44px] cursor-pointer relative shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-colors duration-200"
                  style={{
                    border: `1.5px solid ${active ? t.color : t.border}`,
                    background: active ? `linear-gradient(150deg,${t.lt} 0%,#fff 100%)` : "#fafaf8",
                    boxShadow: active ? `0 8px 32px ${t.glow}` : "0 2px 8px rgba(0,0,0,.04)",
                  }}
                >
                  {active && (
                    <motion.div
                      layoutId="selDot"
                      transition={{ type: "spring", stiffness: 500, damping: 28 }}
                      className="absolute top-3 right-3 w-[9px] h-[9px] rounded-full"
                      style={{ background: t.color, boxShadow: `0 0 10px ${t.color}` }}
                    />
                  )}
                  <div className="mb-[14px]">
                    <Icon />
                  </div>
                  <div
                    className="w-5 h-[2.5px] rounded-sm mb-[11px] transition-opacity duration-200"
                    style={{ background: t.color, opacity: active ? 1 : 0.4 }}
                  />
                  <h3 className="font-serif text-[17px] font-normal text-navy mb-[7px] tracking-[-0.15px]">
                    {t.label}
                  </h3>
                  <p className="text-[12.5px] text-muted leading-[1.68] font-light">{t.desc}</p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-3.5 left-5 inline-flex items-center gap-[5px] text-[11px] font-semibold pointer-events-none"
                    style={{ color: t.color }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full inline-block"
                      style={{ background: t.color }}
                    />
                    Selected
                  </motion.div>
                </motion.div>
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
              <span className="text-[11px] text-muted">
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
                  <span className="text-[13px] text-muted italic">
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
                  <button className="py-1.5 px-3.5 bg-white text-muted border border-border-default rounded-md text-[12px] outline-none">
                    Copy Text
                  </button>
                  <button className="py-1.5 px-3.5 bg-white text-muted border border-border-default rounded-md text-[12px] outline-none">
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
    <motion.button
      type="button"
      whileHover={{
        scale: 1.025,
        boxShadow: `0 16px 48px ${
          sel
            ? getGlowColor(sel) // glow matches selected card
            : "rgba(26,35,126,0.5)" // idle dark blue if nothing selected
        }`,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      whileTap={canGo ? { scale: 0.97 } : {}}
   onClick={() => {
  if (sel === "notes") {
    window.location.assign(STUDIELY_APP.library);
    return;
  }
  router.push(`/start-learning-smarter${sel ? `?tool=${sel}` : ""}`);
}}
      className={`flex items-center justify-center gap-3 sm:gap-4 text-white border-none rounded-[14px] text-[16px] sm:text-[18px] font-semibold shrink-0 transition-all duration-300 w-full max-w-[480px] h-[72px] sm:h-[84px] overflow-hidden px-4 sm:px-5 ${
        canGo ? "cursor-pointer" : "cursor-default"
      }`}
      style={{
        background: `linear-gradient(135deg, ${
          chosen ? tool?.color : "#5448c8"
        } 0%, ${chosen ? tool?.color : "#4338b8"}dd 100%)`,
        // Always-on glow
        boxShadow: `0 8px 28px ${
          sel
            ? getGlowColor(sel) // glow matches selected card
            : "rgba(26,35,126,0.35)" // idle subtle dark blue glow
        }`,
      }}
    >
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

      {/* Stateful text */}
      <motion.div
        key={busy ? "busy" : chosen ? sel : "default"}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.22 }}
        className="min-w-0 w-[220px] sm:w-[260px] flex flex-col justify-center items-start text-left"
      >
        {busy ? (
          <span>Generating…</span>
        ) : (
          <>
            <span className="block text-[11px] font-normal opacity-70 tracking-[0.5px] uppercase mb-[3px]">
              {chosen ? "Ready" : "Select a tool above"}
            </span>
            <span className="truncate w-full">{chosen ? tool?.cta : "Start Learning Smarter"}</span>
          </>
        )}
      </motion.div>
    </motion.button>
  </div>
</Reveal>
<Reveal delay={0.18}>
  <div className="w-full mt-10 sm:mt-12 px-0 sm:px-2 md:px-6">
    
    {/* Section title */}
    <div className="text-center mb-8">
      <h2 className="text-lg font-semibold text-slate-800">
        Supported Countries
      </h2>
      <p className="text-sm text-slate-500 mt-1">
        Full curriculum coverage across major education systems
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-4xl mx-auto">
      {COUNTRIES.map((item) => (
        <div
          key={item.key}
          className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
        >
          {/* Flag */}
          <div className="h-12 w-12 overflow-hidden rounded-full border border-indigo-100">
            <Image
              src={item.flag}
              alt={`${item.label} flag`}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Country */}
          <span className="text-sm font-semibold text-slate-800 text-center">
            {item.label}
          </span>

          {/* Subtext */}
          <span className="text-xs text-slate-500">
            All Curricula
          </span>
        </div>
      ))}
    </div>
  </div>
</Reveal>
      </div>
    </section>
  );
};
