"use client";

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
    /** Crop position within notebooks.png sprite (3 notebooks across). */
    pos: "0% 50%",
    light: false,
  },
  {
    n: "2",
    title: "Enter Your Topic",
    desc: "Paste your notes, upload a textbook PDF, or simply type the topic you need help with.",
    pos: "50% 50%",
    light: false,
  },
  {
    n: "3",
    title: "Generate and Study",
    desc: "Get instant AI-powered flashcards, practice questions, and structured summary notes.",
    pos: "100% 50%",
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
    className="bg-bg-base pb-[clamp(2.75rem,6vw,5rem)] pt-[clamp(0.5rem,1.5vw,1rem)]"
  >
    <div className="wrap">
      <div
        className="relative mb-[clamp(1.5rem,3vw,2.25rem)] overflow-hidden rounded-[24px] px-4 py-3 shadow-[0_10px_30px_rgba(79,53,242,0.12)] sm:rounded-[28px] sm:px-6 sm:py-3.5 md:rounded-[32px] md:px-10 md:py-4"
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

      <div className="mx-auto mb-[clamp(2rem,4vw,3rem)] max-w-[760px] text-center">
        <p className="mb-4 font-sans text-[clamp(0.95rem,1.1vw,1.125rem)] font-bold leading-snug text-navy">
          Built to support major curricula and exam boards across the UK, US, Australia, and Canada.
        </p>
        <p className="font-sans text-[clamp(0.82rem,0.9vw,0.95rem)] font-light leading-relaxed text-muted">
          These numbers are live, real, and updated every week. We&apos;re a new platform we&apos;d
          rather show you where we actually are than pretend to be somewhere we&apos;re not. Join us
          early and help us build something genuine.
        </p>
      </div>

      <div className="mb-[clamp(1.5rem,3vw,2.25rem)] text-center">
        <h2 className="mb-3 font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.02em] text-navy">
          How It Works
        </h2>
        <p className="mx-auto max-w-[36rem] font-sans text-[clamp(0.95rem,1.05vw,1.1rem)] leading-relaxed text-muted">
          Three simple steps to supercharge your studying and crush your exams.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4 md:gap-6 lg:gap-8">
        {STEPS.map(({ n, title, desc, pos, light }) => (
          <article key={n} className="relative mx-auto w-full max-w-[320px] sm:max-w-none">
            <div
              className="relative aspect-[3/4] w-full bg-bg-base"
              style={{
                backgroundImage: "url(/notebooks.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "300% 100%",
                backgroundPosition: pos,
              }}
              role="img"
              aria-label={`Step ${n}: ${title}`}
            />
            <div className="pointer-events-none absolute inset-x-[14%] bottom-[8%] top-[26%] flex items-center justify-center">
              <div className="max-w-[210px] text-center lg:max-w-[240px]">
                <h3
                  className={`mb-2.5 font-heading text-[clamp(1.1rem,1.6vw,1.4rem)] font-extrabold leading-snug ${
                    light ? "text-white" : "text-[#1E1B4B]"
                  }`}
                >
                  {n}. {title}
                </h3>
                <p
                  className={`font-heading text-[clamp(0.9rem,1.2vw,1.05rem)] font-medium leading-relaxed ${
                    light ? "text-white/90" : "text-[#1E1B4B]/80"
                  }`}
                >
                  {desc}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
