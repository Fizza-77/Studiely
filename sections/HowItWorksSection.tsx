"use client";

import Image from "next/image";
import { AnimNum } from "@/components/AnimNum";

const LIME = "#E8FF2F";
const PURPLE = "#4F35F2";
const PINK = "#FF36C6";

const STATS = [
  { n: "5", suf: "K+", label: "STUDENTS" },
  { n: "75", suf: "%", label: "BETTER GRADES" },
  { n: "3", suf: "x", label: "FASTER REVISION" },
  { n: "4.8", suf: "", label: "APP RATING" },
] as const;

const STEPS = [
  {
    n: "1",
    title: "Choose Your Curriculum",
    desc: "Select from GCSE, A-Level, IB, or University level content across dozens of subjects.",
    src: "/Rectangle-yellow.png",
    width: 362,
    height: 433,
    light: false,
  },
  {
    n: "2",
    title: "Enter Your Topic",
    desc: "Paste your notes, upload a textbook PDF, or simply type the topic you need help with.",
    src: "/Rectangle-pink.png",
    width: 363,
    height: 448,
    light: false,
  },
  {
    n: "3",
    title: "Generate and Study",
    desc: "Get instant AI-powered flashcards, practice questions and structured summary notes.",
    src: "/Rectangle-blue.png",
    width: 363,
    height: 433,
    light: true,
  },
] as const;

interface HowItWorksSectionProps {
  sectionRef?: React.Ref<HTMLElement>;
}

export const HowItWorksSection = ({ sectionRef }: HowItWorksSectionProps) => (
  <section
    id="how-it-works"
    ref={sectionRef}
    className="bg-bg-base pb-[clamp(1.75rem,4vw,3rem)] pt-0"
  >
    <div className="wrap">
      <div
        className="relative mb-[clamp(0.75rem,1.5vw,1.15rem)] overflow-hidden rounded-[24px] px-4 py-3 shadow-[0_10px_30px_rgba(79,53,242,0.12)] sm:rounded-[28px] sm:px-6 sm:py-3.5 md:rounded-[32px] md:px-10 md:py-4"
        style={{ backgroundColor: LIME }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-black/5 sm:-right-10 sm:-top-12 sm:h-44 sm:w-44"
        />
        <div className="relative grid grid-cols-2 gap-y-3 font-hanken md:grid-cols-4 md:gap-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-[clamp(1.35rem,3vw,2.1rem)] font-extrabold leading-none tracking-[-0.03em]"
                style={{ color: PURPLE }}
              >
                <AnimNum target={stat.n} suf={stat.suf} />
              </div>
              <div
                className="mt-1 text-[10px] font-bold uppercase tracking-[0.06em] sm:text-[11px] md:text-[12px]"
                style={{ color: PINK }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-[clamp(1.25rem,2.5vw,1.75rem)] w-full text-center">
        <p className="mb-1.5 font-sans text-[clamp(0.78rem,0.65rem+0.55vw,1.125rem)] font-bold leading-snug text-navy sm:mb-3">
          Built to support major curricula and exam boards across the UK, US, Australia and Canada.
        </p>
        <p className="mx-auto max-w-[34rem] font-sans text-[clamp(0.65rem,0.55rem+0.3vw,0.82rem)] font-light leading-snug text-muted sm:max-w-none sm:leading-relaxed">
          These numbers are live, real and updated every week. We&apos;re a new platform we&apos;d
          rather show you where we actually are than pretend to be somewhere we&apos;re not. Join us
          early and help us build something genuine.
        </p>
      </div>

      <div className="mb-[clamp(1rem,2vw,1.5rem)] text-center">
        <h2 className="mb-1.5 font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.02em] text-navy sm:mb-2">
          How It Works
        </h2>
        <p className="mx-auto max-w-[36rem] font-sans text-[clamp(0.65rem,0.55rem+0.3vw,0.82rem)] font-light leading-snug text-muted sm:leading-relaxed">
          Three simple steps to supercharge your studying and crush your exams.
        </p>
      </div>

      <div className="mx-auto grid w-full grid-cols-3 items-stretch gap-1.5 sm:gap-3 md:gap-5 lg:gap-6 xl:gap-8">
        {STEPS.map(({ n, title, desc, src, width, height, light }) => (
          <article key={n} className="relative w-full min-w-0">
            <div className="relative aspect-[362/433] w-full">
              <Image
                src={src}
                alt={`Step ${n}: ${title}`}
                width={width}
                height={height}
                unoptimized
                sizes="(max-width: 640px) 33vw, (max-width: 1536px) 30vw, 480px"
                className="absolute inset-0 h-full w-full select-none object-contain object-center"
                draggable={false}
              />
              {/* Text sits on the notebook cover (below spiral, inside page edges) */}
              <div className="pointer-events-none absolute inset-x-[11%] top-[30%] bottom-[14%] flex items-center justify-center overflow-hidden sm:inset-x-[10%] sm:top-[24%] sm:bottom-[11%] md:inset-x-[10%] md:right-[13%] md:top-[23%] md:bottom-[10%]">
                <div className="flex w-full flex-col items-center px-0.5 text-center sm:px-1 md:px-2">
                  <h3
                    className={`mb-0.5 font-heading text-[clamp(0.55rem,1.9vw,0.78rem)] font-extrabold leading-[1.12] tracking-[-0.015em] sm:mb-1.5 sm:text-[clamp(0.72rem,0.4rem+1.2vw,1.55rem)] sm:leading-[1.15] md:mb-2.5 ${
                      light ? "text-white" : "text-[#1E1B4B]"
                    }`}
                  >
                    {n}. {title}
                  </h3>
                  <p
                    className={`font-heading text-[clamp(0.45rem,1.45vw,0.62rem)] font-medium leading-[1.25] sm:text-[clamp(0.6rem,0.3rem+0.9vw,1.125rem)] sm:leading-[1.4] md:leading-[1.5] ${
                      light ? "text-white/90" : "text-[#1E1B4B]/75"
                    }`}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
