"use client";

import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { StudySmarterSection } from "@/sections/StudySmarterSection";

const HowItWorksSection = dynamic(
  () => import("@/sections/HowItWorksSection").then((m) => m.HowItWorksSection),
  { ssr: true }
);
const NylaSection = dynamic(() => import("@/sections/NylaSection").then((m) => m.NylaSection), {
  ssr: true,
});
const SupportedCountriesSection = dynamic(
  () => import("@/sections/SupportedCountriesSection").then((m) => m.SupportedCountriesSection),
  { ssr: true }
);
const RewardsProgressSection = dynamic(
  () => import("@/sections/RewardsProgressSection").then((m) => m.RewardsProgressSection),
  { ssr: true }
);
const ReviewsSection = dynamic(() => import("@/sections/ReviewsSection").then((m) => m.ReviewsSection), {
  ssr: true,
});
const HomePricingSection = dynamic(
  () => import("@/sections/HomePricingSection").then((m) => m.HomePricingSection),
  { ssr: true }
);
const SisterSection = dynamic(() => import("@/sections/SisterSection").then((m) => m.SisterSection), {
  ssr: true,
});
const CTASection = dynamic(() => import("@/sections/CTASection").then((m) => m.CTASection), {
  ssr: true,
});

type HomePageContentProps = {
  /** When true (e.g. `/features` route), scroll to the hero after mount. */
  scrollToHeroOnMount?: boolean;
};

export function HomePageContent({ scrollToHeroOnMount = false }: HomePageContentProps) {
  const nylaRef = useRef<HTMLElement>(null);
  const curriculumRef = useRef<HTMLElement>(null);
  const rewardsRef = useRef<HTMLElement>(null);
  const reviewsRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const sisterRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!scrollToHeroOnMount) return;
    const scroll = () => {
      document.getElementById("hero")?.scrollIntoView({ behavior: "instant", block: "start" });
    };
    const frame = window.requestAnimationFrame(scroll);
    return () => window.cancelAnimationFrame(frame);
  }, [scrollToHeroOnMount]);

  return (
    <>
      <main role="main">
        <div className="relative bg-bg-base">
          {/* One continuous glow behind hero→cards so no clipped seam */}
          <div
            className="pointer-events-none absolute left-1/2 top-[42%] z-0 aspect-square w-[min(130vw,860px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8FF2F]/28 blur-[120px]"
            aria-hidden
          />
          <HeroSection />
          <StudySmarterSection />
        </div>
        <HowItWorksSection />
        <NylaSection sectionRef={nylaRef} />
        <SupportedCountriesSection sectionRef={curriculumRef} />
        <RewardsProgressSection sectionRef={rewardsRef} />
        <ReviewsSection sectionRef={reviewsRef} />
        <HomePricingSection sectionRef={pricingRef} />
        <SisterSection sectionRef={sisterRef} />
        <CTASection />
      </main>
      <Footer variant="marketing" />
    </>
  );
}
