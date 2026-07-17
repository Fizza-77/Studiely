import Image from "next/image";
import {
  Gauge,
  Layers,
  ListChecks,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";

const FEATURES = [
  { label: "AI-powered support", Icon: Sparkles },
  { label: "Curriculum-aligned", Icon: ListChecks },
  { label: "All-in-one", Icon: Layers },
  { label: "Trusted by learners", Icon: ShieldCheck },
] as const;

export const ContactAboutSection = () => {
  return (
    <section
      aria-labelledby="about-studiely-heading"
      className="bg-bg-base pb-[clamp(2.5rem,5vw,3.5rem)]"
    >
      <div className="wrap">
        <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_14px_40px_rgba(30,27,75,0.08)] sm:rounded-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div
              className="relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12"
              style={{ backgroundColor: BLUE }}
            >
              <Image
                src="/about-studiely.png"
                alt=""
                width={140}
                height={140}
                unoptimized
                aria-hidden
                className="pointer-events-none absolute right-4 top-4 z-0 h-[88px] w-[88px] object-contain mix-blend-screen sm:right-6 sm:top-6 sm:h-[110px] sm:w-[110px] md:right-7 md:top-7 md:h-[120px] md:w-[120px]"
              />

              <span
                className="relative z-[1] mb-5 flex h-11 w-11 items-center justify-center rounded-[14px] sm:mb-6"
                style={{ backgroundColor: LIME }}
                aria-hidden
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#1E1B4B"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 10.5v6"
                    stroke="#1E1B4B"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="7.5" r="1.1" fill="#1E1B4B" />
                </svg>
              </span>

              <h2
                id="about-studiely-heading"
                className="relative z-[1] mb-4 max-w-[14ch] font-hanken text-[clamp(1.75rem,3.5vw,2.35rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white"
              >
                About Studiely
              </h2>
              <p className="relative z-[1] m-0 max-w-[420px] font-jakarta text-[14px] leading-[1.75] text-white/90 sm:text-[15px]">
                Studiely is an AI-powered study platform that helps students
                learn better, faster and with confidence. From summary notes and
                flashcards to quizzes and exam practice, everything you need is
                in one smart platform.
              </p>
            </div>

            <div className="bg-white px-6 py-8 sm:px-8 sm:py-10 md:px-9 md:py-11">
              <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
                {FEATURES.map(({ label, Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-[18px] bg-[#FFFBEF] px-4 py-4 shadow-[0_4px_16px_rgba(30,27,75,0.04)]"
                  >
                    <Icon
                      className="h-5 w-5 shrink-0"
                      style={{ color: BLUE }}
                      strokeWidth={2.1}
                      aria-hidden
                    />
                    <span className="font-jakarta text-[13px] font-bold text-[#4F35F2] sm:text-[14px]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="flex items-center gap-3 rounded-full px-5 py-3.5 sm:px-6 sm:py-4"
                style={{ backgroundColor: LIME }}
              >
                <Gauge
                  className="h-5 w-5 shrink-0"
                  style={{ color: BLUE }}
                  strokeWidth={2.2}
                  aria-hidden
                />
                <p className="m-0 font-jakarta text-[13px] font-bold text-[#1E1B4B] sm:text-[14px]">
                  Quick response times guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
