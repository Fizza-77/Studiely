"use client";

import Image from "next/image";
import { AnimNum } from "@/components/AnimNum";
import { HOME_SHELL, HOME_TOOLS_BAND_INSET } from "@/lib/homeShell";

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
    src: "/lemonnote.svg",
    width: 357,
    height: 425,
    light: false,
  },
  {
    n: "2",
    title: "Enter Your Topic",
    desc: "Paste your notes, upload a textbook PDF, or simply type the topic you need help with.",
    src: "/pinknote.svg?v=3",
    width: 357,
    height: 425,
    light: false,
  },
  {
    n: "3",
    title: "Generate and Study",
    desc: "Get instant AI-powered flashcards, practice questions and structured summary notes.",
    src: "/bluenote.svg?v=2",
    width: 357,
    height: 425,
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
    <div className={HOME_SHELL}>
      <div
        className={`@container relative mb-[clamp(1rem,2vw,1.5rem)] overflow-hidden rounded-[20px] px-4 py-3 shadow-[0_10px_30px_rgba(79,53,242,0.12)] sm:rounded-[24px] sm:px-6 sm:py-3.5 md:rounded-[28px] md:px-10 md:py-4 ${HOME_TOOLS_BAND_INSET}`}
        style={{ backgroundColor: LIME }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-black/5 sm:-right-10 sm:-top-12 sm:h-44 sm:w-44"
        />
        <div className="relative grid grid-cols-2 gap-y-2 font-hanken md:grid-cols-4 md:gap-2">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-[clamp(1.2rem,2.6vw,1.85rem)] font-extrabold leading-none tracking-[-0.03em]"
                style={{ color: PURPLE }}
              >
                <AnimNum target={stat.n} suf={stat.suf} />
              </div>
              <div
                className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.06em] sm:text-[10px] md:text-[11px]"
                style={{ color: PINK }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-2.5 w-full text-center sm:mt-3">
          <p
            className="mb-1 whitespace-normal break-words font-sans font-bold leading-snug text-navy sm:whitespace-nowrap sm:leading-none"
            style={{ fontSize: "clamp(0.55rem, calc(100cqw / 72), 0.95rem)" }}
          >
            Built to support major curricula and exam boards across the UK, US, Australia and Canada.
          </p>
          <p
            className="mx-auto w-full max-w-full whitespace-normal break-words px-0.5 font-sans font-light leading-snug text-navy/70 sm:whitespace-nowrap sm:px-0 sm:leading-none"
            style={{ fontSize: "clamp(0.4rem, calc(100cqw / 155), 0.78rem)" }}
          >
            These numbers are live, real and updated every week. We&apos;re a new platform we&apos;d
            rather show you where we actually are than pretend to be somewhere we&apos;re not. Join us
            early and help us build something genuine.
          </p>
        </div>
      </div>
    </div>

    <div className="wrap">
      <div className="mb-[clamp(1rem,2vw,1.5rem)] text-center">
        <h2 className="mb-1.5 font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.02em] text-navy sm:mb-2">
          How It Works
        </h2>
        <p className="mx-auto max-w-[36rem] font-sans text-[clamp(0.65rem,0.55rem+0.3vw,0.82rem)] font-light leading-snug text-muted sm:leading-relaxed">
          Three simple steps to supercharge your studying and crush your exams.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-[56rem] flex-nowrap items-stretch justify-center gap-2 sm:gap-3 md:max-w-[68rem] md:gap-5 lg:max-w-[78rem] lg:gap-7 xl:max-w-[88rem] xl:gap-8">
        {STEPS.map(({ n, title, desc, src, width, height, light }) => (
          <article
            key={n}
            className="group relative flex w-0 min-w-0 flex-1 flex-col"
          >
            {/* Identical frame size for all three SVGs */}
            <div className="@container relative aspect-[357/425] w-full overflow-visible shadow-[0_14px_32px_rgba(30,27,75,0)] transition-[translate,filter] duration-300 ease-out will-change-[translate] group-hover:z-10 group-hover:-translate-y-1.5 group-hover:drop-shadow-[0_20px_40px_rgba(30,27,75,0.18)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
              <Image
                src={src}
                alt={`Step ${n}: ${title}`}
                width={width}
                height={height}
                unoptimized
                sizes="(max-width: 640px) 30vw, (max-width: 1280px) 28vw, 360px"
                className="absolute inset-0 h-full w-full select-none object-contain object-center"
                draggable={false}
              />
              {/* Blue star overlaid — kept out of SVG height so all notebooks match */}
              {n === "3" && (
                <svg
                  viewBox="0 0 90 90"
                  className="pointer-events-none absolute bottom-[2%] right-[-2%] z-[1] h-[16%] w-auto select-none"
                  aria-hidden
                >
                  <path
                    d="M45 8C52.7 33.7 63.6 41.3 90.4 39.8C64.7 47.5 57.1 58.4 58.6 85.2C50.9 59.5 40 51.9 13.2 53.4C38.9 45.7 46.5 34.8 45 8Z"
                    fill="#FFFFFF"
                    stroke="#111111"
                    strokeWidth="1.8"
                  />
                </svg>
              )}
              {/* Text scales with card width via container queries; kept inside the cover */}
              <div className="pointer-events-none absolute left-[10%] right-[13%] top-[33%] bottom-[7%] flex flex-col overflow-hidden sm:left-[11%] sm:right-[15%] sm:top-[38%] sm:bottom-[9%] md:left-[12%] md:right-[16%]">
                <h3
                  className={`flex h-[2.4em] w-full shrink-0 items-start justify-center text-center font-heading text-[clamp(0.6rem,5.6cqi,1.65rem)] font-extrabold leading-[1.12] tracking-[-0.02em] sm:h-[2.5em] sm:leading-[1.15] ${
                    light ? "text-white" : "text-[#1E1B4B]"
                  }`}
                >
                  <span className="mx-auto block w-full text-center">{n}. {title}</span>
                </h3>
                <p
                  className={`mt-[0.2em] w-full flex-1 text-center font-heading text-[clamp(0.42rem,3.9cqi,1.2rem)] font-medium leading-[1.3] sm:mt-[0.35em] sm:leading-[1.75] ${
                    light ? "text-white/90" : "text-[#1E1B4B]/75"
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
