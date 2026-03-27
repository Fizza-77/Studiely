"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { EduPattern } from "@/components/EduPattern";
import { REVIEWS_1, REVIEWS_2 } from "@/lib/data";

interface RCardProps {
  quote: string;
  name: string;
  role: string;
  initials: string;
  col: string;
}

const RCard = ({ quote, name, role, initials, col }: RCardProps) => (
  <div
    className="bg-white border border-border-default rounded-xl p-5 sm:p-[26px] min-w-[260px] sm:min-w-[290px] max-w-[312px] shrink-0 mr-3 sm:mr-[18px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-shadow duration-180 hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)]"
    style={{ borderTop: `2.5px solid ${col}` }}
  >
    <span className="text-[11px] tracking-[2px] text-[#c9a227] mb-3 block">★★★★★</span>
    <blockquote className="text-[13.5px] leading-[1.75] text-body font-light mb-5  font-normal">
      &quot;{quote}&quot;
    </blockquote>
    <div className="flex items-center gap-2.5">
      <div
        className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0"
        style={{
          background: `color-mix(in srgb, ${col} 18%, transparent)`,
          border: `1px solid color-mix(in srgb, ${col} 28%, transparent)`,
          color: col,
        }}
      >
        {initials}
      </div>
      <div>
        <div className="text-[13px] font-medium text-navy">{name}</div>
        <div className="text-[11px] text-muted mt-[2px]">{role}</div>
      </div>
    </div>
  </div>
);

export const ReviewsSection = () => (
  <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-bg-base overflow-hidden relative">
    <EduPattern opacity={0.045} stroke="#00b09b" />
    <div className="wrap mb-10 sm:mb-12 md:mb-[52px] relative">
    <SectionHeader
  label="Student Reviews"
  title="Loved by Students Worldwide"
  sub="Trusted by 10,000+ students across schools, colleges, and universities."
subClassName="inline-block bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-md shadow-sm mx-auto"/>
    </div>
    <div className="mqw overflow-hidden mb-4">
      <div className="mql w-max flex animate-mql">
        {[...REVIEWS_1, ...REVIEWS_1].map((r, i) => (
          <RCard key={`r1-${i}`} {...r} />
        ))}
      </div>
    </div>
    <div className="mqw overflow-hidden">
      <div className="mqr w-max flex animate-mqr">
        {[...REVIEWS_2, ...REVIEWS_2].map((r, i) => (
          <RCard key={`r2-${i}`} {...r} />
        ))}
      </div>
    </div>
  </section>
);
