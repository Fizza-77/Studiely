"use client";

import Link from "next/link";
import { STUDIELY_APP } from "@/lib/appUrls";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";

const PurpleCheck = () => (
  <span
    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
    style={{ backgroundColor: BLUE }}
    aria-hidden
  >
    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
      <path
        d="M2.5 6.2 4.8 8.5 9.5 3.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const LimeCheck = () => (
  <span
    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
    style={{ backgroundColor: LIME }}
    aria-hidden
  >
    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
      <path
        d="M2.5 6.2 4.8 8.5 9.5 3.5"
        stroke={BLUE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const MissCheck = () => (
  <span
    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E4E4EA]"
    aria-hidden
  >
    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
      <path
        d="M3.5 3.5 8.5 8.5M8.5 3.5 3.5 8.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

interface HomePricingSectionProps {
  sectionRef?: React.Ref<HTMLElement>;
}

export const HomePricingSection = ({ sectionRef }: HomePricingSectionProps) => {
  return (
    <section
      id="pricing"
      ref={sectionRef}
      aria-labelledby="homepage-pricing-heading"
      className="bg-bg-base pb-[clamp(1.75rem,4vw,3rem)] pt-0"
    >
      <div className="wrap">
        <h2
          id="homepage-pricing-heading"
          className="mb-[clamp(1.15rem,2.25vw,1.65rem)] text-center font-heading text-[clamp(2rem,3.8vw,3rem)] font-bold tracking-[-0.02em] text-[#1E1B4B]"
        >
          Pricing
        </h2>

        <div className="mx-auto grid max-w-[920px] grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-10">
          {/* Base Camp — tilts left on hover (div avoids site-funky article rotate override) */}
          <div
            role="article"
            className="flex h-full origin-bottom flex-col rounded-[36px] border border-[#ECECF2] bg-white px-8 py-9 shadow-[0_16px_36px_rgba(30,27,75,0.14)] transition-[translate,rotate,scale] duration-600 ease-[cubic-bezier(0.22,1.15,0.36,1)] will-change-[translate,rotate,scale] hover:z-10 hover:-translate-y-2 hover:-rotate-[5deg] hover:scale-[1.07] motion-reduce:transition-none motion-reduce:hover:translate-none motion-reduce:hover:rotate-none motion-reduce:hover:scale-100 sm:px-10 sm:py-10"
          >
            <h3 className="mb-4 font-jakarta text-[1.5rem] font-extrabold text-[#1E1B4B] sm:text-[1.65rem]">
              Base Camp
            </h3>

            <div className="mb-8 flex items-end gap-1">
              <span className="font-hanken text-[clamp(2.75rem,5vw,3.5rem)] font-extrabold leading-none tracking-[-0.03em] text-[#1E1B4B]">
                $0
              </span>
              <span className="mb-1.5 font-sans text-[15px] text-[#9B9BA8]">/mo</span>
            </div>

            <ul className="m-0 mb-10 flex list-none flex-col gap-4 p-0">
              <li className="flex items-start gap-3">
                <PurpleCheck />
                <span className="font-sans text-[15px] leading-snug text-[#2A2B36]">
                  3 Study sets per week
                </span>
              </li>
              <li className="flex items-start gap-3">
                <PurpleCheck />
                <span className="font-sans text-[15px] leading-snug text-[#2A2B36]">
                  Basic AI Tutor access
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MissCheck />
                <span className="font-sans text-[15px] leading-snug text-[#B8B8C4] line-through">
                  Offline study mode
                </span>
              </li>
            </ul>

            <Link
              href={STUDIELY_APP.signUp}
              className="mt-auto inline-flex w-full items-center justify-center rounded-full border-2 px-6 py-3.5 text-[15px] font-bold transition-colors hover:bg-[#4F35F2]/5"
              style={{ borderColor: BLUE, color: BLUE }}
            >
              Get Started
            </Link>
          </div>

          {/* Scholar Pro — tilts right on hover */}
          <div
            role="article"
            className="relative flex h-full origin-bottom flex-col rounded-[36px] px-8 py-9 shadow-[0_20px_44px_rgba(30,27,75,0.28)] transition-[translate,rotate,scale] duration-600 ease-[cubic-bezier(0.22,1.15,0.36,1)] will-change-[translate,rotate,scale] hover:z-10 hover:-translate-y-2 hover:rotate-[5deg] hover:scale-[1.07] motion-reduce:transition-none motion-reduce:hover:translate-none motion-reduce:hover:rotate-none motion-reduce:hover:scale-100 sm:px-10 sm:py-10"
            style={{ backgroundColor: BLUE }}
          >
            <span
              className="absolute -right-2 -top-3 rounded-full px-4 py-1.5 font-heading text-[10px] font-extrabold uppercase tracking-[0.12em] shadow-[0_4px_12px_rgba(30,27,75,0.15)] sm:right-2"
              style={{ backgroundColor: LIME, color: BLUE }}
            >
              Most Popular
            </span>

            <h3 className="mb-4 font-jakarta text-[1.5rem] font-extrabold text-white sm:text-[1.65rem]">
              Scholar Pro
            </h3>

            <div className="mb-8 flex items-end gap-1">
              <span
                className="font-hanken text-[clamp(2.75rem,5vw,3.5rem)] font-extrabold leading-none tracking-[-0.03em]"
                style={{ color: LIME }}
              >
                $12
              </span>
              <span className="mb-1.5 font-sans text-[15px] text-white/70">/mo</span>
            </div>

            <ul className="m-0 mb-10 flex list-none flex-col gap-4 p-0">
              {[
                "Unlimited Study sets",
                "Advanced AI Tutor features",
                "Offline study mode",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <LimeCheck />
                  <span className="font-sans text-[15px] leading-snug text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href={STUDIELY_APP.pricing}
              className="mt-auto inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-[15px] font-bold text-[#1E1B4B] transition-opacity hover:opacity-90"
              style={{ backgroundColor: LIME }}
            >
              Go Pro Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
