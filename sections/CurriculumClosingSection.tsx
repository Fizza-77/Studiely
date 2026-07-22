import Image from "next/image";
import { TrendingUp, UsersRound } from "lucide-react";
import { STUDIELY_APP } from "@/lib/appUrls";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";

export const CurriculumClosingSection = () => {
  return (
    <section
      aria-label="More ways to succeed with Studiely"
      className="bg-bg-base pb-[clamp(2.5rem,5vw,3.5rem)] pt-[clamp(1.5rem,3vw,2.25rem)]"
    >
      <div className="wrap">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <article
            className="relative min-h-[245px] overflow-visible rounded-[32px] px-7 py-8 sm:min-h-[270px] sm:rounded-[40px] sm:px-9 sm:py-9"
            style={{ backgroundColor: BLUE }}
          >
            <p className="relative z-[1] m-0 font-jakarta text-[13px] font-medium text-white/70 sm:text-[14px]">
              Expert Tutoring for Global Exams
            </p>

            <a
              href={STUDIELY_APP.examPractice}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-8 left-7 z-[2] inline-flex items-center justify-center rounded-full px-6 py-3 font-jakarta text-[13px] font-bold text-[#1E1B4B] transition-transform hover:scale-[1.02] sm:bottom-9 sm:left-9 sm:px-7 sm:text-[14px]"
              style={{ backgroundColor: LIME }}
            >
              Explore Prep Tools
            </a>

            <Image
              src="/flower.png"
              alt=""
              width={360}
              height={360}
              unoptimized
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -right-8 z-[1] h-auto w-[clamp(12rem,26vw,18rem)] max-w-none select-none drop-shadow-[0_6px_16px_rgba(255,54,198,0.3)] sm:-bottom-12 sm:-right-10 sm:w-[clamp(14rem,28vw,20rem)]"
              draggable={false}
            />
          </article>

          <div className="grid grid-rows-2 gap-4">
            <article
              className="flex min-h-[115px] items-center gap-4 rounded-[32px] px-6 py-5 sm:min-h-[128px] sm:rounded-[40px] sm:px-7"
              style={{ backgroundColor: PINK }}
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white sm:h-[72px] sm:w-[72px]">
                <TrendingUp
                  className="h-7 w-7"
                  style={{ color: PINK }}
                  strokeWidth={2.2}
                  aria-hidden
                />
              </span>
              <div>
                <h2 className="mb-1 font-jakarta text-[15px] font-extrabold leading-tight text-white sm:text-[16px]">
                  Performance Tracking
                </h2>
                <p className="m-0 font-jakarta text-[13px] leading-relaxed text-white/85 sm:text-[14px]">
                  Real-time insights into your study progress.
                </p>
              </div>
            </article>

            <article
              className="flex min-h-[115px] items-center gap-4 rounded-[32px] px-6 py-5 sm:min-h-[128px] sm:rounded-[40px] sm:px-7"
              style={{ backgroundColor: LIME }}
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white sm:h-[72px] sm:w-[72px]">
                <UsersRound
                  className="h-7 w-7"
                  style={{ color: BLUE }}
                  strokeWidth={2.2}
                  aria-hidden
                />
              </span>
              <div>
                <h2 className="mb-1 font-jakarta text-[15px] font-extrabold leading-tight text-[#1E1B4B] sm:text-[16px]">
                  Community Learning
                </h2>
                <p className="m-0 font-jakarta text-[13px] leading-relaxed text-[#1E1B4B]/80 sm:text-[14px]">
                  Connect with students on the same path.
                </p>
              </div>
            </article>
          </div>
        </div>

        <p className="mb-0 mt-14 text-center font-jakarta text-[10px] font-semibold uppercase tracking-[0.04em] text-[#5B5A6A]/65 sm:mt-16 sm:text-[11px]">
          © 2024 Studiely Kinetic. Empowering global students.
        </p>
      </div>
    </section>
  );
};
