"use client";

import Link from "next/link";
import Image from "next/image";
import { STUDIELY_APP } from "@/lib/appUrls";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";

const AskIcon = () => (
  <svg viewBox="0 0 64 64" className="h-10 w-10 sm:h-11 sm:w-11" fill="none" aria-hidden>
    <path
      d="M12 27v22h25"
      stroke={BLUE}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="23" y="12" width="31" height="31" rx="5" fill={BLUE} />
    <path
      d="M34 23.4c.45-3.15 2.75-5.1 6.2-5.1 3.75 0 6.3 2.15 6.3 5.45 0 2.55-1.25 3.85-3.35 5.25-2.15 1.45-2.85 2.4-2.85 4.4"
      stroke={LIME}
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <circle cx="40.3" cy="37.7" r="2" fill={LIME} />
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 64 64" className="h-10 w-10 sm:h-11 sm:w-11" fill="none" aria-hidden>
    <path
      d="M9 18.5c7.1-2.7 14.3-1.7 21.5 3v27C23.3 44 16.1 43 9 45.7V18.5Z"
      fill="white"
    />
    <path
      d="M30.5 21.5c7.2-4.7 14.4-5.7 21.5-3v27.2C44.9 43 37.7 44 30.5 48.5v-27Z"
      fill="white"
    />
    <path
      d="M35.5 25.5c4.1-2.2 8.1-2.9 12-2M35.5 31c4.1-2.2 8.1-2.9 12-2M35.5 36.5c4.1-2.2 8.1-2.9 12-2"
      stroke={PINK}
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path d="M30.5 21.5v27" stroke={PINK} strokeWidth="2" opacity="0.35" />
  </svg>
);

const DevicesIcon = () => (
  <svg viewBox="0 0 64 64" className="h-10 w-10 sm:h-11 sm:w-11" fill="none" aria-hidden>
    <rect x="8" y="17" width="38" height="27" rx="3.5" fill={LIME} />
    <rect x="13" y="22" width="28" height="17" rx="1.5" fill={BLUE} />
    <path d="M5.5 49h40" stroke={LIME} strokeWidth="5" strokeLinecap="round" />
    <rect x="39" y="22" width="17" height="30" rx="4" fill={LIME} />
    <rect x="44" y="27" width="7" height="18" rx="1.5" fill={BLUE} />
    <circle cx="47.5" cy="48.5" r="1.5" fill={BLUE} />
  </svg>
);

const FEATURES = [
  {
    title: "Ask anything",
    desc: "About your syllabus get instant, relevant answers that actually match what you need to know.",
    bg: LIME,
    glow: "rgba(232,255,47,0.5)",
    Icon: AskIcon,
  },
  {
    title: "Knows your curriculum",
    desc: "Exam board and grade level automatically from your profile settings.",
    bg: PINK,
    glow: "rgba(255,54,198,0.38)",
    Icon: BookIcon,
  },
  {
    title: "Available everywhere",
    desc: "Across every tool. Whether you're in the Notes or Quiz tab, Nyla is a click away.",
    bg: BLUE,
    glow: "rgba(79,53,242,0.38)",
    Icon: DevicesIcon,
  },
] as const;

export const NylaMeetSection = () => {
  return (
    <section
      aria-labelledby="nyla-meet-heading"
      className="bg-bg-base pb-[clamp(2.5rem,6vw,4rem)]"
    >
      <div className="wrap">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
            <div
              aria-hidden
              className="absolute inset-6 rounded-[32px] bg-[#E8FF2F]/55 sm:inset-4"
              style={{ transform: "rotate(-7deg)" }}
            />

            <div
              className="relative z-[1] overflow-hidden rounded-[24px] bg-white shadow-[0_20px_50px_rgba(30,27,75,0.14)] sm:rounded-[28px]"
              style={{ transform: "rotate(4deg)" }}
            >
              <div className="flex items-start justify-between gap-3 border-b border-[#F0F0F4] px-4 py-4 sm:px-5">
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full"
                    style={{ backgroundColor: BLUE }}
                  >
                    <Image
                      src="/Nyla.png"
                      alt=""
                      width={22}
                      height={20}
                      unoptimized
                      className="h-[18px] w-auto brightness-0 invert"
                      aria-hidden
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="font-heading text-[15px] font-bold leading-none text-[#1E1B4B]">
                      Nyla AI
                    </p>
                    <p className="mt-1.5 font-sans text-[11px] font-medium" style={{ color: PINK }}>
                      Online — AI Study Tutor
                    </p>
                  </div>
                </div>
                <span
                  className="shrink-0 rounded-full px-3 py-1 font-heading text-[9px] font-bold uppercase tracking-[0.1em] text-[#1E1B4B]"
                  style={{ backgroundColor: "#ECEAFF" }}
                >
                  IGCSE Biology
                </span>
              </div>

              <div className="space-y-3 bg-white px-4 py-4 sm:px-5">
                <div
                  className="ml-auto max-w-[88%] rounded-[16px] rounded-tr-sm px-4 py-3 font-sans text-[12.5px] leading-[1.55] text-white sm:text-[13px]"
                  style={{ backgroundColor: BLUE }}
                >
                  Can you explain photosynthesis for IGCSE?
                </div>

                <div className="max-w-[92%] rounded-[16px] rounded-tl-sm bg-[#ECEAFF] px-4 py-3 font-sans text-[12.5px] leading-[1.55] text-[#2A2B36] sm:text-[13px]">
                  <p className="m-0 mb-2">
                    Of course! 🌿 For <strong>IGCSE Biology</strong>: Photosynthesis
                    is the process by which plants manufacture carbohydrates from
                    raw materials using energy from light.
                  </p>
                  <div className="mb-2 rounded-xl bg-white px-3 py-2 text-center text-[11px] font-medium text-[#1E1B4B]">
                    6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂
                  </div>
                  <p className="m-0">
                    Plants convert light energy into glucose stored in chemical
                    bonds. Want me to generate a flashcard deck on this?
                  </p>
                </div>
              </div>

              <div className="border-t border-[#F0F0F4] bg-white px-4 py-4 sm:px-5">
                <div className="flex items-center gap-2 rounded-full bg-[#F3F3F7] px-2 py-1.5 pl-4">
                  <span className="flex-1 font-sans text-[12.5px] text-[#8B8D9A]">
                    Ask Nyla anything...
                  </span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: BLUE }}
                    aria-hidden
                  >
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none">
                      <path
                        d="M10 14V6M10 6l-3.5 3.5M10 6l3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span
              className="mb-5 inline-flex rounded-full px-4 py-1.5 font-heading text-[10px] font-bold uppercase tracking-[0.12em] text-white"
              style={{ backgroundColor: PINK }}
            >
              Nyla — AI Study Tutor
            </span>

            <h2
              id="nyla-meet-heading"
              className="mb-4 font-heading text-[clamp(1.85rem,3.8vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#1E1B4B]"
            >
              Meet Nyla. Your AI Tutor,{" "}
              <span style={{ color: BLUE }}>Always On.</span>
            </h2>

            <p className="mb-8 max-w-[34rem] font-sans text-[15px] leading-relaxed text-[#5B5A6A] sm:mb-10">
              Most AI assistants give generic answers. Nyla doesn&apos;t. She knows
              your curriculum, your exam board and your grade level before you ask
              your first question.
            </p>

            <ul className="m-0 mb-10 flex list-none flex-col gap-5 p-0 sm:gap-6">
              {FEATURES.map(({ title, desc, bg, glow, Icon }) => (
                <li key={title} className="flex gap-4 sm:gap-5">
                  <span
                    className="funky-icon mt-0.5 flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] sm:h-[72px] sm:w-[72px] sm:rounded-[24px]"
                    style={{ backgroundColor: bg, boxShadow: `0 10px 28px ${glow}` }}
                  >
                    <Icon />
                  </span>
                  <div>
                    <p className="mb-1 font-heading text-[15px] font-bold text-[#1E1B4B] sm:text-[16px]">
                      {title}
                    </p>
                    <p className="m-0 font-sans text-[14px] leading-relaxed text-[#5B5A6A]">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href={STUDIELY_APP.nyla}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_28px_rgba(79,53,242,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: BLUE }}
            >
              Chat with Nyla
              <Image
                src="/Nyla.png"
                alt=""
                width={18}
                height={16}
                unoptimized
                className="h-4 w-auto brightness-0 invert"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
