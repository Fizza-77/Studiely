"use client";

import Image from "next/image";
import { STUDIELY_APP } from "@/lib/appUrls";
import { TOOLS, type StudyTool } from "@/lib/studyTools";
import { StatsBar } from "@/sections/StatsSection";

/**
 * Proof checkmark icon component.
 */
const CheckIcon = () => (
  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-[#e8f5ee] text-[11px] text-[#2E8B57]">
    ✓
  </div>
);

/**
 * Right-side tool list arrow.
 */
const ToolArrow = ({ color = "#ccc" }: { color?: string }) => (
  <span className="ml-auto text-[18px] leading-none transition-transform group-hover:translate-x-0.5" style={{ color }}>
    ›
  </span>
);

export const HeroSection = () => {
  // Reorder tools to match the mockup: Notes, Flashcards, Quiz, Focus, Practice
  const orderedTools = [
    TOOLS.find((t) => t.id === "notes"),
    TOOLS.find((t) => t.id === "flashcards"),
    TOOLS.find((t) => t.id === "quiz"),
    TOOLS.find((t) => t.id === "common-mistakes"),
    TOOLS.find((t) => t.id === "exam-writing-mode"),
  ].filter(Boolean) as StudyTool[];

  return (
    <section id="hero" className="relative border-t border-border-default bg-bg-base">
      <div className="wrap relative pt-[clamp(0.5rem,1.5vw,1.25rem)] pb-[clamp(0.5rem,2vw,1.5rem)]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
          
          {/* Left Column: Messaging & Proof */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#b8dfc8] bg-[#e8f5ee] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#1a6e3c]">
              <span className="text-[12px]">✦</span> AI-powered · Free to start
            </div>
            
            <h1 className="mb-6 font-serif text-[clamp(2rem,4vw,2.5rem)] leading-[1.15] text-navy">
              The AI study tool that <strong className="font-serif italic font-normal text-teal">knows your exam</strong>
            </h1>
            
            <p className="mb-8 max-w-[540px] text-[clamp(15px,1.1vw,17px)] leading-relaxed text-gray-600">
              Notes, flashcards, quizzes, and practice papers — all matched to your curriculum, grade, and exam board automatically.
            </p>
            
            <div className="mb-10 flex flex-wrap gap-3">
              <button 
                onClick={() => window.open(STUDIELY_APP.signUp, "_blank")}
                className="rounded-xl bg-navy px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-navy/90 active:scale-[0.98]"
              >
                Start studying free →
              </button>
              <button 
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-xl border border-border-default bg-white px-6 py-3.5 text-[15px] font-semibold text-navy transition-all hover:bg-gray-50 active:scale-[0.98]"
              >
                See how it works
              </button>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-[14px] text-gray-600">
                <CheckIcon /> UK, US, Australia and Canada curricula
              </div>
              <div className="flex items-center gap-3 text-[14px] text-gray-600">
                <CheckIcon /> ★★★★★ 4.8 average student rating
              </div>
              <div className="flex items-center gap-3 text-[14px] text-gray-600">
                <CheckIcon /> 1K+ students saving 75% of their study time
              </div>
              <div className="flex items-center gap-3 text-[14px] text-gray-600">
                <CheckIcon /> No credit card required to start
              </div>
            </div>
          </div>

          {/* Right Column: Tool List */}
          <div className="flex flex-col justify-center rounded-2xl bg-white/50 p-6 ring-1 ring-black/5 backdrop-blur-sm lg:bg-transparent lg:p-0 lg:ring-0 lg:backdrop-blur-none">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-gray-400">
              Choose a tool to get started
            </p>
            
            <div className="flex flex-col gap-2.5">
              {orderedTools.map((tool) => {
                const isPremium = tool.id === "exam-writing-mode";
                const iconBg = isPremium ? "#D94F4F" : tool.color;
                const cardBorder = isPremium ? "border-[#D94F4F]" : "border-border-default";
                const cardBg = isPremium ? "bg-[#fff8f8]" : "bg-white";

                return (
                  <button
                    key={tool.id}
                    onClick={() => window.open(tool.appHref, "_blank")}
                    className={`group flex items-center gap-4 rounded-xl border p-3.5 text-left transition-all hover:shadow-md hover:border-gray-300 ${cardBorder} ${cardBg} active:scale-[0.99]`}
                  >
                    <div 
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white text-[20px] shadow-sm"
                      style={{ backgroundColor: iconBg }}
                    >
                      {/* Use tool label first character or emoji if we had it, but let's use the actual tool icon images if available, or just emojis for now to match mockup precisely */}
                      {tool.id === "notes" && "📝"}
                      {tool.id === "flashcards" && "🃏"}
                      {tool.id === "quiz" && "🎯"}
                      {tool.id === "common-mistakes" && "🔍"}
                      {tool.id === "exam-writing-mode" && "✍️"}
                    </div>
                    
                    <div className="flex flex-col">
                      <h4 className="text-[14px] font-bold text-navy">{tool.heroLabel}</h4>
                      <p className="text-[12px] text-gray-500 line-clamp-1">{tool.heroShortDesc}</p>
                    </div>
                    
                    <ToolArrow color={isPremium ? "#D94F4F" : undefined} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar Integrated at bottom of Hero - Full Bleed */}
      <div className="mt-0">
        <StatsBar fullBleed={true} />
      </div>
    </section>
  );
};
