import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const LIGHT_BLUE_EDGE = "#A8B8FF";

const STEPS = [
  {
    step: "STEP 01",
    badgeBg: BLUE,
    title: "Ask questions in natural language",
    desc: "Type questions the way you would ask a tutor. Nyla adapts the explanation to your specific curriculum, grade, and topic level.",
    progress: "split" as const,
    edgeColor: LIGHT_BLUE_EDGE,
  },
  {
    step: "STEP 02",
    badgeBg: PINK,
    title: "Turn answers into study assets",
    desc: "From any explanation, you can quickly generate summary notes, flashcards, or interactive quizzes so your learning turns into active practice.",
    progress: "full" as const,
    edgeColor: LIME,
  },
] as const;

const DownArrow = () => (
  <svg
    viewBox="0 0 48 48"
    className="h-10 w-10 sm:h-12 sm:w-12"
    fill="none"
    aria-hidden
  >
    <path
      d="M8 12h22M22 12v28M22 40l-8-8M22 40l8-8"
      stroke={LIME}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const NylaStudyFlowSection = () => {
  return (
    <section
      aria-labelledby="nyla-study-flow-heading"
      className="bg-bg-base pb-[clamp(2.5rem,6vw,4rem)]"
    >
      <div className="wrap">
        <Reveal className="relative mb-[clamp(2rem,4vw,3rem)]" y={28}>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
            <div className="max-w-[42rem]">
              <h2
                id="nyla-study-flow-heading"
                className="mb-4 break-words font-heading text-[clamp(1.55rem,7vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#1E1B4B] sm:mb-5"
              >
                <span className="sm:whitespace-nowrap">How Nyla fits into your</span>
                <br />
                <span style={{ color: BLUE }}>study flow</span>
              </h2>
              <p className="m-0 max-w-[36rem] font-sans text-[15px] leading-relaxed text-[#5B5A6A] sm:text-[16px]">
                Nyla is always just one tap away inside Notes, Flashcards, and
                Quizzes so help is available exactly when you get stuck.
              </p>
            </div>

            <div className="relative hidden shrink-0 lg:block">
              <Image
                src="/Nyla-flower-2.png"
                alt=""
                width={280}
                height={280}
                unoptimized
                aria-hidden
                className="h-[200px] w-[200px] object-contain xl:h-[240px] xl:w-[240px]"
              />
              <div className="absolute bottom-2 right-2 translate-x-3">
                <DownArrow />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-end justify-end gap-3 lg:hidden">
            <Image
              src="/Nyla-flower-2.png"
              alt=""
              width={180}
              height={180}
              unoptimized
              aria-hidden
              className="h-[140px] w-[140px] object-contain sm:h-[160px] sm:w-[160px]"
            />
            <DownArrow />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-8">
          {STEPS.map(({ step, badgeBg, title, desc, progress, edgeColor }, index) => (
            <Reveal key={step} className="h-full" delay={index * 0.1} y={30}>
            <article
              className="relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_16px_44px_rgba(30,27,75,0.1)] sm:min-h-[300px] sm:rounded-[32px]"
              style={{ borderBottom: `5px solid ${edgeColor}` }}
            >
              <div className="flex flex-1 flex-col px-5 py-6 sm:px-8 sm:py-8 md:px-9 md:py-9">
                <span
                  className="mb-5 inline-flex w-fit rounded-full px-3.5 py-1.5 font-heading text-[10px] font-bold uppercase tracking-[0.1em] text-white sm:mb-6"
                  style={{ backgroundColor: badgeBg }}
                >
                  {step}
                </span>

                <h3 className="mb-3 font-jakarta text-[clamp(1.2rem,2.2vw,1.45rem)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#1E1B4B] sm:mb-4">
                  {title}
                </h3>

                <p className="m-0 font-sans text-[14px] leading-[1.7] text-[#5B5A6A] sm:text-[15px]">
                  {desc}
                </p>

                {progress === "split" ? (
                  <div className="mt-auto flex h-1.5 w-full overflow-hidden rounded-full">
                    <span className="w-1/2" style={{ backgroundColor: BLUE }} />
                    <span
                      className="w-1/2"
                      style={{ backgroundColor: "rgba(79,53,242,0.14)" }}
                    />
                  </div>
                ) : (
                  <div
                    className="mt-auto h-1.5 w-full rounded-full"
                    style={{ backgroundColor: PINK }}
                  />
                )}
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
