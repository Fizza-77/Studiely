"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

const NumBadge = ({ n }: { n: number }) => (
  <span
    className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full font-heading text-[11px] font-bold text-white"
    style={{ backgroundColor: BLUE }}
    aria-hidden
  >
    {n}
  </span>
);

const CardFlag = ({ src }: { src: string }) => (
  <Image
    src={src}
    alt=""
    width={64}
    height={44}
    unoptimized
    className="h-10 w-[3.5rem] object-contain sm:h-11 sm:w-16"
    aria-hidden
  />
);

const CardTitle = ({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle: string;
}) => (
  <div className="mb-5 flex flex-col items-start gap-1.5">
    {children}
    <p className="m-0 font-heading text-[13px] font-bold leading-snug text-[#1E1B4B] sm:text-[14px]">
      {subtitle}
    </p>
  </div>
);

const CountryHeading = ({ children }: { children: React.ReactNode }) => (
  <h3
    className="font-heading text-[1.2rem] font-extrabold leading-tight sm:text-[1.35rem]"
    style={{ color: BLUE }}
  >
    {children}
  </h3>
);

const NumberedRow = ({ n, children }: { n: number; children: React.ReactNode }) => (
  <li className="flex items-start gap-2.5">
    <NumBadge n={n} />
    <span className="font-sans text-[13px] leading-snug text-[#2A2B36] sm:text-[14px]">
      {children}
    </span>
  </li>
);

const ReadMoreBtn = ({
  expanded,
  onToggle,
}: {
  expanded: boolean;
  onToggle: () => void;
}) => (
  <button
    type="button"
    onClick={onToggle}
    className="mt-4 font-heading text-[13px] font-bold transition-opacity hover:opacity-80 sm:text-[14px]"
    style={{ color: BLUE }}
  >
    {expanded ? "Show less" : "Read more...."}
  </button>
);

const AUSTRALIA_ITEMS = [
  "New South Wales – Higher School Certificate (HSC)",
  "Victoria – Victorian Certificate of Education (VCE)",
  "Queensland – Queensland Certificate of Education (QCE)",
  "Western Australia – Western Australian Certificate of Education (WACE)",
  "South Australia – South Australian Certificate of Education (SACE)",
  "Tasmania – Tasmanian Certificate of Education (TCE)",
  "Australian Capital Territory – ACT Senior Secondary Certificate (ACT SSC)",
  "Northern Territory – Northern Territory Certificate of Education and Training (NTCET)",
] as const;

const CANADA_ITEMS = [
  "Ontario – Ontario Secondary School Diploma (OSSD)",
  "British Columbia – Dogwood Diploma",
  "Alberta – Alberta High School Diploma",
  "Québec – Diplôme d'études secondaires (DES)",
  "Manitoba – Manitoba High School Diploma",
  "Saskatchewan – Saskatchewan Grade 12 Diploma",
  "Atlantic Provinces",
  "Northern Territories",
] as const;

const expandTransition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as const,
};

const PREVIEW_COUNT = 3;

const openDelay = (i: number) => Math.min(i * 0.045, 0.25);

const ExpandableExtras = ({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) => (
  <AnimatePresence initial={false}>
    {open ? (
      <motion.div
        key="extras"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={expandTransition}
        className="overflow-hidden"
      >
        <motion.div
          initial={{ y: -12 }}
          animate={{ y: 0 }}
          exit={{ y: -8 }}
          transition={expandTransition}
          className="pt-3"
        >
          {children}
        </motion.div>
      </motion.div>
    ) : null}
  </AnimatePresence>
);

export const SupportedCountriesSection = ({
  sectionRef,
}: SupportedCountriesSectionProps) => {
  const [ausExpanded, setAusExpanded] = useState(false);
  const [canadaExpanded, setCanadaExpanded] = useState(false);

  const ausPreview = AUSTRALIA_ITEMS.slice(0, PREVIEW_COUNT);
  const ausExtra = AUSTRALIA_ITEMS.slice(PREVIEW_COUNT);
  const canadaPreview = CANADA_ITEMS.slice(0, PREVIEW_COUNT);
  const canadaExtra = CANADA_ITEMS.slice(PREVIEW_COUNT);

  return (
    <section
      id="curriculum"
      ref={sectionRef}
      aria-labelledby="curriculum-heading"
      className="relative overflow-x-clip overflow-y-visible bg-bg-base pb-[clamp(1.75rem,4vw,3rem)] pt-[clamp(0.5rem,1.5vw,1rem)]"
    >
      <div className="wrap relative">
        <div className="relative mb-[clamp(1.15rem,2.25vw,1.65rem)] text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[38%] z-0 h-28 w-44 -translate-y-1/2 translate-x-[32%] rounded-full bg-[#E8FF2F]/45 blur-[56px] sm:h-32 sm:w-52 sm:translate-x-[38%] md:h-36 md:w-60 md:translate-x-[42%]"
          />

          <div className="relative z-[1]">
            <p
              className="mb-3 font-heading text-[11px] font-bold uppercase tracking-[0.14em] sm:mb-4 sm:text-[12px]"
              style={{ color: BLUE }}
            >
              Supported Countries &amp; Curricula
            </p>
            <h2
              id="curriculum-heading"
              className="relative mx-auto mb-3 font-heading text-[clamp(1.6rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-[#1E1B4B] sm:mb-4"
            >
              <span className="block whitespace-nowrap font-semibold">
                Built for Students Across the
              </span>
              <span className="relative block font-extrabold" style={{ color: BLUE }}>
                UK, US, IB, Australia &amp; Canada
                <Image
                  src="/finger.png"
                  alt=""
                  width={800}
                  height={800}
                  unoptimized
                  aria-hidden
                  className="pointer-events-none absolute right-0 top-1/2 z-[2] h-auto w-[min(32vw,19rem)] max-w-none -translate-x-[22%] -translate-y-[52%] select-none mix-blend-screen sm:w-[min(28vw,21rem)] md:w-[min(25vw,24rem)] md:-translate-y-[62%] lg:-translate-y-[68%]"
                  draggable={false}
                />
              </span>
            </h2>
            <p className="mx-auto w-full max-w-[34rem] text-center font-sans text-[clamp(0.85rem,0.7rem+0.45vw,1.05rem)] leading-snug text-[#5B5A6A] sm:max-w-none sm:whitespace-nowrap sm:text-[clamp(0.9rem,0.55rem+0.9vw,1.05rem)]">
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
                  <CardFlag src="/UK.png" />
                  <h3 className="mb-1 mt-2 font-heading text-[clamp(2rem,3.8vw,2.85rem)] font-extrabold leading-[1.02] tracking-[-0.02em] text-white">
                    United
                    <br />
                    Kingdom
                  </h3>
                  <p className="mb-5 font-heading text-[13px] font-bold text-white/90 sm:text-[14px]">
                    Secondary to A Level
                  </p>
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
                    <svg
                      viewBox="0 0 100 100"
                      aria-hidden
                      className="pointer-events-none absolute right-[12%] top-[16%] z-[1] h-auto w-[clamp(4rem,8vw,6rem)] opacity-45"
                    >
                      <path
                        fill="#1B1468"
                        d="M50 4 L61.2 36.2 L95 38.5 L68.5 59.5 L77.5 92 L50 74.5 L22.5 92 L31.5 59.5 L5 38.5 L38.8 36.2 Z"
                      />
                    </svg>
                    <Image
                      src="/US-student.png"
                      alt=""
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 90vw, 50vw"
                      className="z-[2] origin-bottom-right -translate-x-2 translate-y-3 scale-[1.02] object-contain object-bottom object-right sm:-translate-x-3 sm:translate-y-4 sm:scale-[1.06] md:-translate-x-4 md:translate-y-5 md:scale-[1.1]"
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
            </article>

            {/* United States */}
            <article
              className="relative rounded-[28px] border-b-[5px] border-r-[5px] bg-white px-6 py-7 sm:px-7 sm:py-8"
              style={{ borderColor: PINK }}
            >
              <CardTitle subtitle="Kindergarten to College Admissions">
                <CardFlag src="/USA.png" />
                <CountryHeading>United States</CountryHeading>
              </CardTitle>

              <ul className="m-0 flex list-none flex-col gap-4 p-0">
                {[
                  {
                    title: "Foundational",
                    item: "Common Core State Standards",
                  },
                  {
                    title: "Advanced",
                    item: "Advanced Placement (AP)",
                  },
                  {
                    title: "Admissions",
                    item: "Digital SAT",
                  },
                ].map((row, i) => (
                  <li key={row.title} className="flex items-start gap-2.5">
                    <NumBadge n={i + 1} />
                    <div className="min-w-0">
                      <p className="m-0 font-heading text-[14px] font-bold text-[#1E1B4B]">
                        {row.title}
                      </p>
                      <p className="m-0 mt-1 flex items-start gap-2 font-sans text-[13px] leading-snug text-[#2A2B36] sm:text-[14px]">
                        <span
                          className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: BLUE }}
                          aria-hidden
                        />
                        {row.item}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-3 md:gap-5">
            {/* International Baccalaureate */}
            <article className="rounded-[28px] bg-white px-6 py-7 sm:px-6 sm:py-7">
              <CardTitle subtitle="Primary to Diploma Programme">
                <CardFlag src="/USA.png" />
                <CountryHeading>
                  International
                  <br />
                  Baccalaureate
                </CountryHeading>
              </CardTitle>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                <NumberedRow n={1}>Primary Years Programme (PYP)</NumberedRow>
                <NumberedRow n={2}>Middle Years Programme (MYP)</NumberedRow>
                <NumberedRow n={3}>Diploma Programme (DP)</NumberedRow>
              </ul>
            </article>

            {/* Australia */}
            <motion.article
              layout
              transition={expandTransition}
              className="rounded-[28px] px-6 py-7 sm:px-6 sm:py-7"
              style={{ backgroundColor: LIME }}
            >
              <CardTitle subtitle="Primary to Senior Secondary">
                <CardFlag src="/Aus.png" />
                <CountryHeading>Australia</CountryHeading>
              </CardTitle>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {ausPreview.map((item, i) => (
                  <NumberedRow key={item} n={i + 1}>
                    {item}
                  </NumberedRow>
                ))}
              </ul>
              <ExpandableExtras open={ausExpanded}>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {ausExtra.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{
                        ...expandTransition,
                        delay: openDelay(i),
                      }}
                      className="flex items-start gap-2.5"
                    >
                      <NumBadge n={PREVIEW_COUNT + i + 1} />
                      <span className="font-sans text-[13px] leading-snug text-[#2A2B36] sm:text-[14px]">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-5">
                  <p className="mb-3 font-heading text-[14px] font-bold text-[#1E1B4B]">
                    National Assessments
                  </p>
                  <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    <NumberedRow n={1}>NAPLAN</NumberedRow>
                  </ul>
                </div>
              </ExpandableExtras>
              <ReadMoreBtn
                expanded={ausExpanded}
                onToggle={() => setAusExpanded((v) => !v)}
              />
            </motion.article>

            {/* Canada */}
            <motion.article
              layout
              transition={expandTransition}
              className="rounded-[28px] bg-white px-6 py-7 sm:px-6 sm:py-7"
            >
              <CardTitle subtitle="Primary to High School Graduation">
                <CardFlag src="/Canada.png" />
                <CountryHeading>Canada</CountryHeading>
              </CardTitle>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {canadaPreview.map((item, i) => (
                  <NumberedRow key={item} n={i + 1}>
                    {item}
                  </NumberedRow>
                ))}
              </ul>
              <ExpandableExtras open={canadaExpanded}>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {canadaExtra.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{
                        ...expandTransition,
                        delay: openDelay(i),
                      }}
                      className="flex items-start gap-2.5"
                    >
                      <NumBadge n={PREVIEW_COUNT + i + 1} />
                      <span className="font-sans text-[13px] leading-snug text-[#2A2B36] sm:text-[14px]">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </ExpandableExtras>
              <ReadMoreBtn
                expanded={canadaExpanded}
                onToggle={() => setCanadaExpanded((v) => !v)}
              />
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
};
