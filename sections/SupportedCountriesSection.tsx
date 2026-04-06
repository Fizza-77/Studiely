"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const COUNTRIES = [
  {
    key: "uk",
    label: "United Kingdom",
    flag: "/curriculum-logos/UK.png",
    body:
      "Cambridge IGCSE · AS & A Level\nPearson Edexcel GCSE · IGCSE · AS & A Level\nUK National Curriculum",
  },
  {
    key: "us",
    label: "United States",
    flag: "/curriculum-logos/US.png",
    body: "Common Core · AP (Advanced Placement) · Digital SAT",
  },
  {
    key: "au",
    label: "Australia",
    flag: "/curriculum-logos/australia.png",
    body:
      "NSW HSC · VCE · QCE · WACE · SACE · TCE\nACT SSC · NTCET · NAPLAN\nAll states and territories",
  },
  {
    key: "ca",
    label: "Canada",
    flag: "/curriculum-logos/canada.png",
    body:
      "Ontario OSSD · BC Dogwood · Alberta Diploma\nQuebec DES · Manitoba · Saskatchewan\nMaritime provinces · Territories",
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
              Built for Students Across Four Countries
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[1.75] text-body font-light max-w-[760px] mx-auto">
              Every tool calibrated to your specific exam board - not a generic curriculum. Choose your country and Studiely knows exactly what your examiner expects.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
            {COUNTRIES.map((country) => (
              <div
                key={country.key}
                className="rounded-xl border border-border-default bg-[#fafaf8] px-5 py-5 sm:py-6 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-2.5">
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
