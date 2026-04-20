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

interface SupportedCountriesSectionProps {
  sectionRef?: React.Ref<HTMLElement>;
}

export const SupportedCountriesSection = ({ sectionRef }: SupportedCountriesSectionProps) => {
  return (
    <section ref={sectionRef} className="section-y border-t border-border-default bg-white">
      <div className="wrap">
        <Reveal>
          <div className="mb-[clamp(1.6rem,2.9vw,2.5rem)] text-center">
            <p className="fluid-eyebrow mb-1.5 font-semibold uppercase text-teal">
              Supported Countries & Curricula
            </p>
            <h2 className="fluid-h2 mb-[clamp(0.6rem,1.15vw,0.95rem)] font-serif text-navy">
              Built for Students Across the UK, US, IB, Australia & Canada
            </h2>
            <p className="fluid-body mx-auto max-w-[760px] font-light text-body">
              Every tool calibrated to your specific exam board - not a generic curriculum. Choose your country and Studiely knows exactly what your examiner expects.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="responsive-card-grid [--card-min:210px] xl:[--card-min:200px]">
            {COUNTRIES.map((country) => (
              <div
                key={country.key}
                className="responsive-card flex flex-col border border-border-default bg-[#fafaf8]"
              >
                <div className="mb-[clamp(0.55rem,1vw,0.8rem)] flex flex-col items-center gap-2 text-center">
                  <Image
                    src={country.flag}
                    alt={country.label}
                    width={28}
                    height={20}
                    sizes="(max-width: 640px) 28px, (max-width: 1280px) 32px, 34px"
                    className="h-[clamp(20px,2vw,24px)] w-[clamp(28px,2.7vw,34px)] object-contain"
                  />
                  <p className="text-[clamp(1rem,0.48vw+0.88rem,1.15rem)] font-semibold text-navy">{country.label}</p>
                </div>
                <p className="text-[clamp(0.84rem,0.28vw+0.76rem,0.96rem)] leading-[1.68] text-body whitespace-pre-line">{country.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
