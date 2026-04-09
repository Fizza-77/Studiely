"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const COUNTRIES = [
  {
    key: "uk",
    label: "United Kingdom",
    flag: "/curriculum-logos/UK.png",
    body:
      "1. Cambridge IGCSE · AS & A Level\n2. Pearson Edexcel GCSE · IGCSE · AS & A Level\n3. UK National Curriculum",
  },
  {
    key: "us",
    label: "United States",
    flag: "/curriculum-logos/US.png",
    body: "1. Common Core\n2. AP (Advanced Placement)\n3. Digital SAT",
  },
  {
    key: "ib",
    label: "IB",
    flag: "/curriculum-logos/US.png",
    body: "1. PYP\n2. MYP\n3. IB Diploma",
  },
  {
    key: "au",
    label: "Australia",
    flag: "/curriculum-logos/australia.png",
    body:
      "1. NSW HSC · VCE · QCE · WACE · SACE · TCE\n2. ACT SSC · NTCET · NAPLAN\n3. All states and territories",
  },
  {
    key: "ca",
    label: "Canada",
    flag: "/curriculum-logos/canada.png",
    body:
      "1. Ontario OSSD · BC Dogwood · Alberta Diploma\n2. Quebec DES · Manitoba · Saskatchewan\n3. Maritime provinces · Territories",
  },
];

export const SupportedCountriesSection = () => {
  return (
    <section className="py-10 sm:py-12 md:py-14 bg-white border-t border-border-default">
      <div className="wrap">
        <Reveal>
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-[11px] uppercase tracking-[1.4px] font-semibold text-teal mb-1.5">
              Supported Countries & Curricula
            </p>
            <h2 className="font-serif text-[clamp(26px,3.2vw,36px)] text-navy mb-3">
              Built for Students Across the UK, US, IB, Australia & Canada
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[1.75] text-body font-light max-w-[760px] mx-auto">
              Every tool calibrated to your specific exam board - not a generic curriculum. Choose your country and Studiely knows exactly what your examiner expects.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
            {COUNTRIES.map((country) => (
              <div
                key={country.key}
                className="rounded-xl border border-border-default bg-[#fafaf8] px-5 py-5 sm:py-6 flex flex-col"
              >
                <div className="flex flex-col items-center text-center gap-2 mb-2.5">
                  <Image
                    src={country.flag}
                    alt={country.label}
                    width={28}
                    height={20}
                    className="w-7 h-5 object-contain"
                  />
                  <p className="text-[16px] text-navy font-semibold">{country.label}</p>
                </div>
                <p className="text-[13px] text-muted leading-[1.65] whitespace-pre-line">{country.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
