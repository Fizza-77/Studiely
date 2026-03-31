"use client";

import { AnimNum } from "@/components/AnimNum";
import { Reveal } from "@/components/Reveal";

export const StatsSection = () => (
  <div className="border-t border-b border-border-default bg-white">
    <div className="wrap">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-border-default">
        
        {[
          { n: "100", pre: "", suf: "+", label: "Students Trust Studiely", col: "var(--color-navy)" },
          { n: "75", pre: "", suf: "%", label: "Study Time Saved", col: "var(--color-teal)" },
          { n: "3", pre: "", suf: "×", label: "Faster Exam Prep", col: "var(--color-navy)" },
          { n: "4.8", pre: "★ ", suf: "", label: "Average Student Rating", col: "var(--color-amber)" },
        ].map((s, i) => (
          
          <Reveal
            key={i}
            delay={i * 0.06}
            className="bg-white text-center py-6 sm:py-7 px-4 border-r border-b border-border-default h-full"
          >
            
            <div
              className="font-serif text-[clamp(20px,4.5vw,28px)] font-normal mb-1 tracking-[-0.5px]"
              style={{ color: s.col }}
            >
              <AnimNum target={s.n} pre={s.pre} suf={s.suf} />
            </div>

            <div className="text-[11.5px] sm:text-[12px] text-muted leading-[1.4] max-w-[180px] mx-auto">
              {s.label}
            </div>

          </Reveal>
        ))}

        {/* fillers for 3-column tablet view to keep grid lines consistent */}
        <div className="hidden md:block lg:hidden border-r border-b border-border-default bg-white" />
        <div className="hidden md:block lg:hidden border-r border-b border-border-default bg-white" />

      </div>
      <div className="text-center py-5 sm:py-6 px-4">
        <p className="text-[13px] sm:text-[14px] text-muted max-w-[800px] mx-auto leading-relaxed">
          These numbers are live, real, and updated every week. We're a new platform — we'd rather show you where we actually are than pretend to be somewhere we're not. Join us early and help us build something genuine.
        </p>
      </div>
    </div>
  </div>
);