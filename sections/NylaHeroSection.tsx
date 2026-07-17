"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { STUDIELY_APP } from "@/lib/appUrls";

const BLUE = "#4F35F2";

export const NylaHeroSection = () => {
  return (
    <section className="relative bg-bg-base pb-[clamp(2.5rem,6vw,4rem)] pt-[clamp(1rem,3vw,2rem)]">
      <div className="wrap">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          <Reveal className="flex flex-col items-start text-left" y={22}>
            <span
              className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 font-heading text-[11px] font-bold uppercase tracking-[0.12em]"
              style={{ backgroundColor: "#ECEAFF", color: BLUE }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: BLUE }}
                aria-hidden
              />
              Nyla AI
            </span>

            <h1 className="mb-5 font-heading text-[clamp(2rem,4.8vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#1E1B4B] sm:mb-6">
              Your Personal AI
              <br />
              <span style={{ color: BLUE }}>Study Assistant</span>
            </h1>

            <p className="mb-8 max-w-[34rem] font-sans text-[clamp(0.95rem,1.1vw,1.05rem)] leading-relaxed text-[#5B5A6A] sm:mb-10">
              Nyla understands your specific curriculum and helps you master
              complex topics through smart summaries, interactive flashcards,
              and personalized quizzes.
            </p>

            <div className="flex w-full flex-col gap-3 min-[430px]:w-auto min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:items-center sm:gap-4">
              <a
                href={STUDIELY_APP.nyla}
                target="_blank"
                rel="noopener noreferrer"
                className="funky-button inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_28px_rgba(79,53,242,0.35)] min-[430px]:w-auto sm:px-7"
                style={{ backgroundColor: BLUE }}
              >
                Chat with Nyla Now
                <span aria-hidden>→</span>
              </a>
              <Link
                href="/#how-it-works"
                className="funky-button inline-flex w-full items-center justify-center rounded-full border-2 bg-transparent px-6 py-3.5 text-[15px] font-semibold transition-colors hover:bg-[#4F35F2]/5 min-[430px]:w-auto sm:px-7"
                style={{ borderColor: BLUE, color: BLUE }}
              >
                How it works
              </Link>
            </div>
          </Reveal>

          <Reveal
            className="hero-card-float relative mx-auto w-full max-w-[min(100%,441px)] lg:justify-self-end"
            delay={0.12}
            y={28}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 top-4 z-[2] text-[28px] text-[#7DD3FC] drop-shadow-[0_0_10px_rgba(125,211,252,0.85)] sm:right-0 sm:top-2 sm:text-[32px]"
            >
              ✦
            </span>
            <Image
              src="/nyla-flower.png"
              alt=""
              width={72}
              height={72}
              unoptimized
              aria-hidden
              className="pointer-events-none absolute -bottom-4 -left-4 z-[2] h-14 w-14 sm:-bottom-5 sm:-left-5 sm:h-16 sm:w-16"
            />

            <div className="relative overflow-hidden rounded-[32px] shadow-[0_18px_48px_rgba(79,53,242,0.22)] sm:rounded-[40px]">
              <Image
                src="/nyla-ai-hero.png"
                alt="Student using Nyla AI on a laptop"
                width={441}
                height={375}
                priority
                unoptimized
                sizes="(max-width: 640px) calc(100vw - 24px), 441px"
                className="h-auto w-full select-none contrast-[1.03] saturate-[1.04]"
                draggable={false}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
