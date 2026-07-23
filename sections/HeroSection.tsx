"use client";

import Image from "next/image";
import { STUDIELY_APP } from "@/lib/appUrls";
import { HOME_SHELL } from "@/lib/homeShell";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative z-[1] bg-transparent">
      <div className={`${HOME_SHELL} relative z-[1] pb-3 pt-[5px] md:pb-4`}>
        <div
          className="relative overflow-visible rounded-[28px] px-[clamp(1.15rem,3vw,3.75rem)] py-2 sm:py-2.5 md:rounded-[40px] md:py-3 lg:rounded-[48px] xl:py-4"
          style={{
            background:
              "linear-gradient(115deg, #4F35F2 0%, #4F35F2 40%, #3B6BFF 100%)",
          }}
        >
          <div className="relative grid w-full items-center gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-[clamp(1.5rem,3vw,3rem)]">
            <div className="flex min-w-0 flex-col items-start pl-[clamp(0.75rem,2vw,2.5rem)] text-left">
              <h1 className="mb-3 max-w-full font-heading text-[clamp(1.45rem,1.2rem+1.8vw,3.35rem)] font-extrabold leading-[1.18] tracking-[-0.02em] text-white sm:mb-3.5">
                <span className="block">
                  The <span className="text-[#E8FF2F]">AI Study Tool</span>
                </span>
                <span className="mt-1 block">Built For Your Exams</span>
              </h1>

              <p className="mb-3 max-w-[min(36rem,100%)] font-sans text-[clamp(0.85rem,0.7rem+0.45vw,1.1rem)] leading-relaxed text-white/90 sm:mb-4 xl:max-w-[42rem]">
                Unlock your academic potential with personalized learning paths,
                instant notes and adaptive quizzes designed to help you master any
                subject.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => window.open(STUDIELY_APP.signUp, "_blank")}
                  className="funky-button inline-flex items-center justify-center rounded-full bg-[#E8FF2F] px-6 py-3 text-[clamp(0.9rem,0.8rem+0.25vw,1.05rem)] font-bold text-[#4F35F2] shadow-[0_8px_24px_rgba(0,0,0,0.18)] sm:px-7"
                >
                  Start Studying Free
                </button>
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("how-it-works")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="funky-button inline-flex items-center justify-center rounded-full border border-white/45 bg-transparent px-6 py-3 text-[clamp(0.9rem,0.8rem+0.25vw,1.05rem)] font-semibold text-white transition-colors hover:bg-white/10 sm:px-7"
                >
                  See How It Works
                </button>
              </div>
            </div>

            <div className="relative mx-auto w-full min-w-0 max-w-[min(100%,clamp(280px,32vw,520px))] -translate-y-2 translate-x-2 sm:-translate-y-3 sm:translate-x-3 lg:-translate-y-4 lg:translate-x-4 lg:justify-self-end">
              <Image
                src="/hero-img.png"
                alt="Student studying with Studiely AI tools on a laptop"
                width={1040}
                height={1040}
                priority
                unoptimized
                sizes="(max-width: 1024px) min(80vw, 380px), min(32vw, 520px)"
                className="h-auto max-h-[clamp(220px,28vw,360px)] w-full select-none object-contain"
                draggable={false}
              />
              <Image
                src="/hero-star.png"
                alt=""
                width={140}
                height={140}
                priority
                unoptimized
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 z-[2] h-auto w-[clamp(3.5rem,6vw,6rem)] -translate-x-[48%] -translate-y-[22%] select-none drop-shadow-[0_0_14px_rgba(255,255,255,0.55)]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
