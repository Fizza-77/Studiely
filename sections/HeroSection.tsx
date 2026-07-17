"use client";

import Image from "next/image";
import { STUDIELY_APP } from "@/lib/appUrls";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative z-[1] bg-transparent">
      <div className="wrap relative z-[1] pb-[clamp(1.25rem,3vw,2.5rem)] pt-1 md:pt-2">
        <div
          className="relative overflow-hidden rounded-[28px] px-[clamp(1.25rem,4vw,3.5rem)] py-[clamp(2rem,5vw,4rem)] md:rounded-[40px] lg:rounded-[48px]"
          style={{
            background:
              "linear-gradient(135deg, #4F35F2 0%, #4F35F2 42%, #6350F8 100%)",
          }}
        >
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
            <div className="flex flex-col items-start text-left">
              <h1 className="mb-5 max-w-[16ch] font-heading text-[clamp(2rem,5.2vw,3.75rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white sm:mb-6">
                The
                <br />
                <span className="text-[#E8FF2F]">AI Study Tool</span>
                <br />
                built for you
                <br />
                Exams
              </h1>

              <p className="mb-8 max-w-[34rem] font-sans text-[clamp(0.95rem,1.1vw,1.125rem)] leading-relaxed text-white/90 sm:mb-10">
                Unlock your academic potential with personalized learning paths,
                instant notes, and adaptive quizzes designed to help you master any
                subject.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => window.open(STUDIELY_APP.signUp, "_blank")}
                  className="funky-button inline-flex items-center justify-center rounded-full bg-[#E8FF2F] px-6 py-3.5 text-[15px] font-bold text-[#4F35F2] shadow-[0_8px_24px_rgba(0,0,0,0.18)] sm:px-7"
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
                  className="funky-button inline-flex items-center justify-center rounded-full border border-white/45 bg-transparent px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10 sm:px-7"
                >
                  See How It Works
                </button>
              </div>
            </div>

            <div className="hero-card-float relative mx-auto w-full max-w-[min(100%,470px)] lg:justify-self-end">
              <Image
                src="/Hero-student.png"
                alt="Student giving thumbs up while studying on a laptop"
                width={470}
                height={470}
                priority
                unoptimized
                sizes="(max-width: 1024px) min(90vw, 470px), 470px"
                className="h-auto w-full select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
