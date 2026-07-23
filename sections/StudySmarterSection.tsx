"use client";

import Image from "next/image";
import { STUDIELY_APP } from "@/lib/appUrls";
import { HOME_SHELL } from "@/lib/homeShell";

const PURPLE = "#4F35F2";
const PINK = "#FF36C6";

const FEATURES = [
  {
    title: "Notes",
    desc: "Create clear AI summary notes from any topic, lesson, or curriculum content.",
    href: STUDIELY_APP.summaryNotes,
    icon: "/notes.png",
    iconW: 60,
    iconH: 68,
  },
  {
    title: "Flashcards",
    desc: "Revise faster with smart flashcards designed for quick memory practice.",
    href: STUDIELY_APP.flashcards,
    icon: "/flashcards.png",
    iconW: 67,
    iconH: 64,
  },
  {
    title: "Quiz",
    desc: "Test your knowledge with AI-generated quizzes and instant practice questions.",
    href: STUDIELY_APP.quiz,
    icon: "/quizz.png",
    iconW: 60,
    iconH: 58,
  },
  {
    title: "Exam Focus",
    desc: "Study the most important topics and prepare better for your exams.",
    href: STUDIELY_APP.examFocus,
    icon: "/focus.png",
    iconW: 57,
    iconH: 58,
  },
] as const;

export const StudySmarterSection = () => {
  return (
    <section
      id="study-smarter"
      aria-labelledby="study-smarter-heading"
      className="relative z-[1] bg-transparent pb-[clamp(0.75rem,2vw,1.25rem)] pt-0"
    >
      <div className={`${HOME_SHELL} relative z-[1]`}>
        <h2
          id="study-smarter-heading"
          className="mb-[clamp(0.55rem,1.5vw,1rem)] text-center font-heading text-[clamp(1.1rem,0.85rem+1.1vw,2.15rem)] font-extrabold uppercase leading-[1.15] tracking-[-0.02em] text-navy"
        >
          Choose a tool to <span style={{ color: PINK }}>get started</span>
        </h2>

        <div className="relative mx-auto grid w-full max-w-full grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4 lg:gap-3 xl:gap-3.5">
          {FEATURES.map(({ title, desc, href, icon, iconW, iconH }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative z-[1] block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F35F2] focus-visible:ring-offset-2 hover:z-10"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 origin-bottom rotate-0 rounded-[28px] shadow-[0_8px_22px_rgba(79,53,242,0.12)] transition-transform duration-500 ease-out will-change-transform group-hover:-rotate-[5deg] motion-reduce:rotate-0 motion-reduce:transition-none sm:rounded-[32px]"
                style={{
                  background:
                    "radial-gradient(circle at 50% 45%, #B8FF3A 0%, #E8FF2F 42%, #9AE82A 100%)",
                }}
              />

              <div
                className="relative flex h-full min-h-[clamp(140px,14vw,190px)] flex-col items-center justify-center overflow-visible rounded-[28px] border-b-[4px] border-[#3A24C4] px-[clamp(0.65rem,1vw,1rem)] py-[clamp(0.75rem,1.3vw,1.25rem)] text-center shadow-[0_10px_22px_rgba(79,53,242,0.26),0_4px_10px_rgba(79,53,242,0.14)] transition-transform duration-500 ease-out origin-bottom rotate-0 group-hover:rotate-[5deg] motion-reduce:transform-none motion-reduce:transition-none sm:rounded-[32px]"
                style={{ backgroundColor: PURPLE }}
              >
                <Image
                  src="/flower.png"
                  alt=""
                  width={80}
                  height={80}
                  unoptimized
                  aria-hidden
                  className="pointer-events-none absolute right-0 top-0 z-[3] h-auto w-[clamp(7rem,14vw,10rem)] max-w-none translate-x-[42%] -translate-y-[48%] scale-90 select-none opacity-0 drop-shadow-[0_4px_10px_rgba(255,54,198,0.35)] transition-[opacity,transform] duration-500 ease-out group-hover:translate-x-[42%] group-hover:-translate-y-[48%] group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none sm:w-[clamp(8rem,15vw,11rem)]"
                  draggable={false}
                />
                <div className="mb-2 flex h-[clamp(2rem,2.8vw,2.75rem)] w-[clamp(2rem,2.8vw,2.75rem)] items-center justify-center">
                  <Image
                    src={icon}
                    alt=""
                    width={iconW}
                    height={iconH}
                    unoptimized
                    className="h-[clamp(1.65rem,2.4vw,2.35rem)] w-auto object-contain"
                    aria-hidden
                  />
                </div>
                <h3 className="mb-1 font-heading text-[clamp(0.95rem,0.8rem+0.35vw,1.2rem)] font-extrabold text-white">
                  {title}
                </h3>
                <p className="font-sans text-[clamp(0.7rem,0.6rem+0.25vw,0.85rem)] leading-snug text-white/90">
                  {desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
