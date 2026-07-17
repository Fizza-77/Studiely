"use client";

import Image from "next/image";
import { STUDIELY_APP } from "@/lib/appUrls";

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
    featured: false,
  },
  {
    title: "Flashcards",
    desc: "Revise faster with smart flashcards designed for quick memory practice.",
    href: STUDIELY_APP.flashcards,
    icon: "/flashcards.png",
    iconW: 67,
    iconH: 64,
    featured: false,
  },
  {
    title: "Quiz",
    desc: "Test your knowledge with AI-generated quizzes and instant practice questions.",
    href: STUDIELY_APP.quiz,
    icon: "/quizz.png",
    iconW: 60,
    iconH: 58,
    featured: true,
  },
  {
    title: "Exam Focus",
    desc: "Study the most important topics and prepare better for your exams.",
    href: STUDIELY_APP.examFocus,
    icon: "/focus.png",
    iconW: 57,
    iconH: 58,
    featured: false,
  },
] as const;

export const StudySmarterSection = () => {
  return (
    <section
      id="study-smarter"
      aria-labelledby="study-smarter-heading"
      className="relative z-[1] bg-transparent py-[clamp(2.5rem,6vw,4.5rem)]"
    >
      <div className="wrap relative z-[1]">
        <h2
          id="study-smarter-heading"
          className="mb-[clamp(1.75rem,4vw,3rem)] max-w-[18ch] font-heading text-[clamp(1.75rem,4.2vw,3.25rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.02em]"
        >
          <span className="block text-navy">Study smarter with</span>
          <span className="block" style={{ color: PINK }}>
            Studiely means
          </span>
        </h2>

        <div className="relative mx-auto mb-[clamp(1.75rem,4vw,3rem)] grid max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4 lg:gap-8 xl:max-w-[1040px] xl:gap-9">
          {FEATURES.map(({ title, desc, href, icon, iconW, iconH, featured }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative z-[1] block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F35F2] focus-visible:ring-offset-2 ${
                featured ? "z-10 mt-3 lg:mt-4" : ""
              }`}
            >
              {featured ? (
                <span
                  aria-hidden
                  className="absolute inset-x-[2%] -top-[18%] bottom-[12%] -rotate-[10deg] rounded-[28px] shadow-[0_10px_28px_rgba(79,53,242,0.14)] transition-transform duration-300 group-hover:-top-[20%] group-hover:-rotate-[12deg] motion-reduce:rotate-0 sm:rounded-[32px]"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 45%, #B8FF3A 0%, #E8FF2F 42%, #9AE82A 100%)",
                  }}
                />
              ) : null}

              <div
                className={`relative flex h-full min-h-[220px] flex-col items-center justify-center rounded-[28px] border-b-[5px] border-[#3A24C4] px-5 py-7 text-center shadow-[0_14px_28px_rgba(79,53,242,0.28),0_6px_12px_rgba(79,53,242,0.16)] transition-transform duration-300 sm:min-h-[240px] sm:rounded-[32px] sm:px-6 sm:py-8 lg:aspect-square lg:min-h-0 ${
                  featured
                    ? "rotate-[6deg] group-hover:rotate-[4deg] motion-reduce:rotate-0"
                    : "group-hover:-translate-y-1 motion-reduce:transform-none"
                }`}
                style={{ backgroundColor: PURPLE }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center">
                  <Image
                    src={icon}
                    alt=""
                    width={iconW}
                    height={iconH}
                    unoptimized
                    className="h-12 w-auto object-contain"
                    aria-hidden
                  />
                </div>
                <h3 className="mb-3 font-heading text-[1.35rem] font-extrabold text-white">
                  {title}
                </h3>
                <p className="font-sans text-[14px] leading-relaxed text-white/90">{desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
