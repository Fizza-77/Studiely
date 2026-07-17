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
    accent: false,
  },
  {
    n: "2",
    title: "Enter Your Topic",
    desc: "Paste your notes, upload a textbook PDF, or simply type the topic you need help with.",
    accent: true,
  },
  {
    n: "3",
    title: "Generate and Study",
    desc: "Get instant AI-powered flashcards, practice questions, and structured summary notes.",
    accent: false,
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
        className="relative mb-[clamp(1.5rem,3vw,2.25rem)] overflow-hidden rounded-[24px] px-4 py-6 shadow-[0_10px_30px_rgba(79,53,242,0.12)] sm:rounded-[28px] sm:px-6 sm:py-7 md:rounded-[32px] md:px-10 md:py-8"
        style={{ backgroundColor: LIME }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-black/5 sm:-right-10 sm:-top-12 sm:h-44 sm:w-44"
        />
        <div className="relative grid grid-cols-2 gap-y-6 font-hanken md:grid-cols-4 md:gap-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-none tracking-[-0.03em]"
                style={{ color: PURPLE }}
              >
                <AnimNum target={stat.n} suf={stat.suf} />
              </div>
              <div
                className="mt-2 text-[11px] font-bold uppercase tracking-[0.06em] sm:text-[12px] md:text-[13px]"
                style={{ color: PINK }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mb-[clamp(2.5rem,5vw,4rem)] max-w-[760px] text-center">
        <p className="mb-4 font-sans text-[clamp(0.95rem,1.1vw,1.125rem)] font-bold leading-snug text-navy">
          Built to support major curricula and exam boards across the UK, US, Australia, and Canada.
        </p>
        <p className="font-sans text-[clamp(0.82rem,0.9vw,0.95rem)] font-light italic leading-relaxed text-muted">
          These numbers are live, real, and updated every week. We&apos;re a new platform we&apos;d
          rather show you where we actually are than pretend to be somewhere we&apos;re not. Join us
          early and help us build something genuine.
        </p>
      </div>

      <div className="mb-[clamp(1.5rem,3vw,2.25rem)] text-center">
        <h2 className="mb-3 font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.02em] text-navy">
          Your Path to Mastery
        </h2>
        <p className="mx-auto max-w-[36rem] font-sans text-[clamp(0.95rem,1.05vw,1.1rem)] leading-relaxed text-muted">
          Three simple steps to supercharge your studying and crush your exams.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {STEPS.map(({ n, title, desc, accent }) => (
          <article
            key={n}
            className={`rounded-[22px] border-b-[4px] px-6 py-7 shadow-[0_12px_28px_rgba(79,53,242,0.14),0_4px_12px_rgba(0,0,0,0.08)] sm:px-7 sm:py-8 ${
              accent ? "border-[#B8D912]" : "border-[#c8c8d2] bg-white"
            }`}
            style={accent ? { backgroundColor: LIME } : undefined}
          >
            <div
              className="mb-5 flex h-11 w-11 items-center justify-center rounded-full text-[17px] font-bold text-white sm:h-12 sm:w-12 sm:text-[18px]"
              style={{ backgroundColor: PURPLE }}
            >
              {n}
            </div>
            <h3 className="mb-3 text-[1.2rem] font-extrabold leading-snug text-navy">{title}</h3>
            <p
              className={`font-sans text-[14px] leading-relaxed ${
                accent ? "text-navy/80" : "text-muted"
              }`}
            >
              {desc}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
