"use client";

import Link from "next/link";
import { STUDIELY_APP } from "@/lib/appUrls";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { NylaAvatar } from "@/components/Icons";

interface NylaSectionProps {
  sectionRef?: React.Ref<HTMLElement>;
}

export const NylaSection = ({ sectionRef }: NylaSectionProps) => {
  const msgs = [
    { from: "u", text: "Can you explain photosynthesis for IGCSE?" },
    {
      from: "n",
      text: "Of course! 🌿 For IGCSE Biology:\n\n6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂\n\nPlants convert light energy into glucose stored in chemical bonds. Want me to generate a flashcard deck on this?",
    },
    { from: "u", text: "Yes! And can you make an exam question too?" },
    {
      from: "n",
      text: "Done! ✨ Added 12 flashcards to your deck and queued an IGCSE-style exam question under Exam Practice.",
    },
  ];

  return (
    <section ref={sectionRef} className="pt-6 md:pt-8 pb-14 sm:pb-16 md:pb-20 lg:pb-24 bg-white relative overflow-hidden">
      {/* subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 28% 50%, rgba(84,72,200,.05) 0%, transparent 55%)",
        }}
      />

      <div className="wrap relative">
        <SectionHeader
          label="Nyla - AI Study Tutor"
          title="Meet Nyla. Your AI Tutor, Always On."
          sub=""
        />

        <Reveal delay={0.03}>
          <p className="text-center text-[15px] sm:text-[16px] leading-[1.75] text-body font-light max-w-[860px] mx-auto mb-10 sm:mb-12">
            Most AI assistants give generic answers. Nyla doesn&apos;t. She knows your curriculum,
            your exam board and your grade level before you ask your first question. Ask her to
            explain a concept, walk through a topic, generate a practice question or clarify what
            your mark scheme actually wants - and every answer is grounded in your syllabus.
            Available 24/7. No booking. No waiting for a reply.
          </p>
        </Reveal>


        <div className="two-col grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 lg:gap-[72px] items-center">
          <div>
            <Reveal delay={0.05}>
              <div className="border border-[#dddaf8] rounded-[14px] overflow-hidden shadow-[0_8px_40px_rgba(84,72,200,0.1)]">
                <div className="bg-indigo-lt border-b border-[#dddaf8] px-[18px] py-[14px] flex items-center gap-3">
                  <NylaAvatar size={46} />
                  <div>
                    <div className="text-[15px] font-semibold text-navy">Nyla</div>
                    <div className="text-[11px] text-teal flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
                      Online — AI Study Assistant
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span className="text-[10px] px-[9px] py-[3px] bg-indigo text-white rounded-full font-medium">
                      IGCSE Biology
                    </span>
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-3 max-h-[310px] overflow-y-auto bg-[#f8f8fc]">
                  {msgs.map((m, i) => (
                    <Reveal key={i} delay={i * 0.1}>
                      <div
                        className={`flex items-end gap-2 ${
                          m.from === "u" ? "justify-end" : "justify-start"
                        }`}
                      >
                        {m.from === "n" && (
                          <div className="shrink-0 mb-[2px]">
                            <NylaAvatar size={28} />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] px-[14px] py-[10px] text-[13px] leading-[1.65] font-light whitespace-pre-wrap ${
                            m.from === "u"
                              ? "bg-navy text-white rounded-[14px_14px_4px_14px] border-none"
                              : "bg-white text-body rounded-[14px_14px_14px_4px] border border-border-default shadow-[0_1px_8px_rgba(0,0,0,0.05)]"
                          }`}
                        >
                          {m.text}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                  <div className="flex items-center gap-2 mt-1">
                    <NylaAvatar size={26} />
                    <div className="flex gap-[5px] px-[14px] py-[10px] bg-white border border-border-default rounded-[14px_14px_14px_4px] w-fit">
                      {[0, 1, 2].map((d) => (
                        <div
                          key={d}
                          className="w-1.5 h-1.5 rounded-full bg-indigo animate-db"
                          style={{ animationDelay: `${d * 0.16}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-[14px] py-[10px] border-t border-border-default flex gap-2 bg-white">
                  <input
                    id="nyla-preview-message"
                    name="nyla_preview_message"
                    type="text"
                    placeholder="Ask Nyla anything…"
                    autoComplete="off"
                    aria-label="Message to Nyla (preview)"
                    className="flex-1 border border-border-default rounded-[7px] px-[13px] py-[9px] text-[13px] text-body outline-none min-w-0 font-sans transition-colors duration-150 focus:border-indigo"
                  />
                  <Link href={STUDIELY_APP.nyla} className="shrink-0">
                    <button className="bg-indigo text-white px-4 py-[9px] rounded-[7px] border-none text-[15px] font-medium shrink-0 outline-none hover:bg-indigo/90">
                      →
                    </button>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <ul className="flex flex-col gap-3.5 list-none p-0 m-0">
              {[
                ["Ask anything about your syllabus - get instant, relevant answers", "var(--color-teal)"],
                ["Knows your curriculum, exam board and grade level automatically", "var(--color-indigo)"],
                ["Available on every page, across every tool", "var(--color-amber)"],
                ["Answers calibrated to your exact grade - no irrelevant detail", "var(--color-teal)"],
                ["Priority responses for Premium subscribers", "var(--color-indigo)"],
              ].map(([b, col], i) => (
                <li key={b} className="text-[14.5px] text-body font-light leading-[1.62]">
                  <Reveal delay={i * 0.07} className="flex gap-[11px] items-start">
                    <span className="mt-[2px] shrink-0 font-bold text-[12px]" style={{ color: col }}>
                      ✦
                    </span>
                    <span>{b}</span>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal delay={0.3}>
              <div className="mt-7 flex flex-col sm:flex-row gap-2.5 items-center justify-center w-full lg:items-start lg:justify-start">
                <Link href={STUDIELY_APP.nyla} className="inline-flex shrink-0">
                  <Button variant="solid" lg className="bg-indigo border-indigo hover:opacity-90">
                    Chat with Nyla →
                  </Button>
                </Link>
           {/* <Link href="/app-nyla-learn-more">
                  <Button variant="outline" lg>
                    Learn More
                  </Button>
                </Link> */}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};