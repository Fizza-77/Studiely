"use client";

import Image from "next/image";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF79B0";

interface SupportedCountriesSectionProps {
  sectionRef?: React.Ref<HTMLElement>;
}

const LimeCheck = () => (
  <span
    className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full"
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

const BlueCheck = () => (
  <span
    className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full"
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

export const SupportedCountriesSection = ({
  sectionRef,
}: SupportedCountriesSectionProps) => {
  return (
    <section
      id="curriculum"
      ref={sectionRef}
      aria-labelledby="curriculum-heading"
      className="relative overflow-hidden bg-bg-base py-[clamp(2.75rem,6vw,5rem)]"
    >
      <div className="wrap relative">
        <div className="relative mb-[clamp(1.75rem,3.5vw,2.75rem)] text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[38%] z-0 h-28 w-44 -translate-y-1/2 translate-x-[32%] rounded-full bg-[#E8FF2F]/45 blur-[56px] sm:h-32 sm:w-52 sm:translate-x-[38%] md:h-36 md:w-60 md:translate-x-[42%]"
          />

          <div className="relative z-[1]">
            <p
              className="mb-4 font-heading text-[11px] font-bold uppercase tracking-[0.14em] sm:mb-5 sm:text-[12px]"
              style={{ color: BLUE }}
            >
              Supported Countries &amp; Curricula
            </p>
            <h2
              id="curriculum-heading"
              className="mx-auto mb-5 font-heading text-[clamp(1.6rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-[#1E1B4B] sm:mb-6"
            >
              <span className="block whitespace-nowrap font-semibold">
                Built for Students Across the
              </span>
              <span className="block font-extrabold" style={{ color: BLUE }}>
                UK, US, IB, Australia &amp; Canada
              </span>
            </h2>
            <p className="mx-auto max-w-[640px] font-sans text-[clamp(0.9rem,1vw,1.05rem)] leading-relaxed text-[#5B5A6A]">
              Every tool is calibrated to your specific exam board, not a generic
              curriculum. Studiely knows exactly what your examiner expects.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-5">
          <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-[minmax(0,1.72fr)_minmax(0,1fr)] lg:gap-5">
          {/* United Kingdom */}
          <article
            className="relative overflow-hidden rounded-[28px] p-6 sm:p-8"
            style={{ backgroundColor: BLUE }}
          >
            <div className="grid min-h-[300px] grid-cols-1 items-stretch gap-6 md:min-h-[340px] md:grid-cols-[minmax(0,42%)_minmax(0,58%)] md:gap-0">
              <div className="relative z-[1] flex flex-col justify-center">
                <Image
                  src="/curriculum-logos/UK.png"
                  alt=""
                  width={32}
                  height={32}
                  className="mb-4 h-8 w-8 rounded-full object-cover ring-2 ring-white/30"
                  aria-hidden
                />
                <h3 className="mb-5 font-heading text-[clamp(2rem,3.8vw,2.85rem)] font-extrabold leading-[1.02] tracking-[-0.02em] text-white">
                  United
                  <br />
                  Kingdom
                </h3>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {[
                    "Cambridge IGCSE, AS, A Level",
                    "Edexcel IGCSE, AS, A Level",
                    "UK National Curriculum",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <LimeCheck />
                      <span className="font-sans text-[13px] leading-snug text-white/90 sm:text-[14px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-[280px] md:-my-4 md:-mr-8 md:min-h-0 lg:-mr-10">
                <div className="relative h-full min-h-[280px] md:min-h-[340px]">
                  <Image
                    src="/US-student.png"
                    alt=""
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 90vw, 50vw"
                    className="origin-bottom-right translate-x-3 translate-y-3 scale-[1.02] object-contain object-bottom object-right sm:translate-x-4 sm:translate-y-4 sm:scale-[1.06] md:translate-x-6 md:translate-y-5 md:scale-[1.1]"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </article>

          {/* United States */}
          <article className="relative rounded-[28px] border-b-[4px] bg-white px-6 py-7 sm:px-7 sm:py-8" style={{ borderColor: PINK }}>
            <div className="mb-5 flex items-center gap-2.5">
              <Image
                src="/curriculum-logos/US.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
                aria-hidden
              />
              <h3
                className="font-heading text-[1.2rem] font-extrabold leading-tight sm:text-[1.35rem]"
                style={{ color: BLUE }}
              >
                United States
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <p
                  className="mb-2 font-heading text-[10px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: BLUE }}
                >
                  Foundational
                </p>
                <div className="flex items-center gap-2.5 rounded-2xl bg-[#FFF6D8] px-4 py-3">
                  <BlueCheck />
                  <span className="font-sans text-[14px] font-medium text-[#1E1B4B]">
                    Common Core
                  </span>
                </div>
              </div>
              <div>
                <p
                  className="mb-2 font-heading text-[10px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: BLUE }}
                >
                  Advanced
                </p>
                <div className="flex items-center gap-2.5 rounded-2xl bg-[#FFF6D8] px-4 py-3">
                  <BlueCheck />
                  <span className="font-sans text-[14px] font-medium text-[#1E1B4B]">
                    AP Subjects
                  </span>
                </div>
              </div>
              <div>
                <p
                  className="mb-2 font-heading text-[10px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: BLUE }}
                >
                  Regional
                </p>
                <div className="flex items-center gap-2.5 rounded-2xl bg-[#FFF6D8] px-4 py-3">
                  <BlueCheck />
                  <span className="font-sans text-[14px] font-medium text-[#1E1B4B]">
                    Digital SAT
                  </span>
                </div>
              </div>
            </div>
          </article>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {/* International Baccalaureate */}
            <article className="rounded-[28px] bg-white px-6 py-7 sm:px-6 sm:py-7">
              <div className="mb-5 flex items-start gap-2.5">
                <Image
                  src="/curriculum-logos/US.png"
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 shrink-0 rounded-full object-cover"
                  aria-hidden
                />
                <h3
                  className="font-heading text-[1.2rem] font-extrabold leading-tight sm:text-[1.35rem]"
                  style={{ color: BLUE }}
                >
                  International
                  <br />
                  Baccalaureate
                </h3>
              </div>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {["PYP", "MYP", "IB Diploma Programme"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <BlueCheck />
                    <span className="font-sans text-[13px] leading-snug text-[#2A2B36] sm:text-[14px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Australia */}
            <article
              className="rounded-[28px] px-6 py-7 sm:px-6 sm:py-7"
              style={{ backgroundColor: LIME }}
            >
              <div className="mb-5 flex items-center gap-2.5">
                <Image
                  src="/curriculum-logos/australia.png"
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                  aria-hidden
                />
                <h3
                  className="font-heading text-[1.2rem] font-extrabold leading-tight sm:text-[1.35rem]"
                  style={{ color: BLUE }}
                >
                  Australia
                </h3>
              </div>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {[
                  "NSW HSC · VCE · QCE · WACE · SACE · TCE",
                  "ACT SSC · NTCET · NAPLAN",
                  "All states and territories",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <BlueCheck />
                    <span className="font-sans text-[13px] leading-snug text-[#1E1B4B] sm:text-[14px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Canada */}
            <article className="rounded-[28px] bg-white px-6 py-7 sm:px-6 sm:py-7">
              <div className="mb-5 flex items-center gap-2.5">
                <Image
                  src="/curriculum-logos/canada.png"
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                  aria-hidden
                />
                <h3
                  className="font-heading text-[1.2rem] font-extrabold leading-tight sm:text-[1.35rem]"
                  style={{ color: BLUE }}
                >
                  Canada
                </h3>
              </div>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                <li className="flex items-start gap-2.5">
                  <BlueCheck />
                  <span className="font-sans text-[13px] leading-snug text-[#2A2B36] sm:text-[14px]">
                    Ontario OSSD · BC Dogwood · Alberta Diploma
                  </span>
                </li>
                {[
                  "Quebec DES · Manitoba · Saskatchewan",
                  "Maritime provinces · Territories",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <BlueCheck />
                    <span className="font-sans text-[13px] leading-snug text-[#2A2B36] sm:text-[14px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
