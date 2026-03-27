"use client";
import Link from "next/link";

import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NylaAvatar } from "@/components/Icons";
import { HeroSection } from "@/sections/HeroSection";
import { StatsSection } from "@/sections/StatsSection";
import { HowItWorksSection } from "@/sections/HowItWorksSection";
import { StudyToolsSection } from "@/sections/StudyToolsSection";
import { WritingSection } from "@/sections/WritingSection";
import { NylaSection } from "@/sections/NylaSection";
import { ReviewsSection } from "@/sections/ReviewsSection";
import { PricingSection } from "@/sections/PricingSection";
import { CTASection } from "@/sections/CTASection";
import { SisterSection } from "@/sections/SisterSection";
export default function Home() {
  const nylaHref = "/nyla"; // change this for deep-link target
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const howItWorksRef = useRef<HTMLElement>(null);
  const toolsRef = useRef<HTMLElement>(null);
  const writingRef = useRef<HTMLElement>(null);
  const nylaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ORDER = ["tools", "writing", "nyla"];
    const sections = [
      { id: "tools", ref: toolsRef },
      { id: "writing", ref: writingRef },
      { id: "nyla", ref: nylaRef },
    ];

    const observers = sections.map(({ id, ref }) => {
      const o = new IntersectionObserver(
        ([entry]) => {
          setVisibleSections((prev) => {
            if (entry.isIntersecting) {
              if (prev.includes(id)) return prev;
              return ORDER.filter((s) => [...prev, id].includes(s));
            } else {
              return prev.filter((s) => s !== id);
            }
          });
        },
        { threshold: 0.18, rootMargin: "-66px 0px 0px 0px" }
      );
      if (ref.current) o.observe(ref.current);
      return o;
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <Navbar visibleSections={visibleSections} />
      <main role="main">
      <HeroSection />
  <StatsSection />
  <StudyToolsSection sectionRef={toolsRef} />      {/* Features */}
  <WritingSection sectionRef={writingRef} />
  <HowItWorksSection /> {/* How It Works */}
  <NylaSection sectionRef={nylaRef} />
  <ReviewsSection />
        <section
          aria-labelledby="homepage-pricing-heading"
          className="bg-white border-t border-border-default"
        >
          <div className="wrap py-10 sm:py-12 md:py-14 grid gap-6 sm:gap-8 md:grid-cols-[3fr_2fr] items-center">
            <div>
              <h2
                id="homepage-pricing-heading"
                className="font-serif text-[clamp(26px,3vw,32px)] text-navy mb-3"
              >
                Choose a plan that grows with you
              </h2>
              <p className="text-[14px] text-gray-600 max-w-[460px] mb-4">
                Compare free and paid plans, see exactly what&apos;s included, and pick the
                curriculum-aligned AI study toolkit that fits your exam goals and budget.
              </p>
              <p className="text-[13px] text-gray-600">
                Transparent pricing, no hidden fees, and you can cancel anytime.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                href="/pricing"
                className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 rounded-lg bg-navy text-white text-[14px] font-medium shadow-[0_10px_30px_rgba(0,0,0,0.16)] hover:bg-navy/90 hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-all duration-200"
              >
                View Pricing
                <span className="ml-2 text-[15px]">→</span>
              </Link>
            </div>
          </div>
        </section>
        {/*   <PricingSection /> */}
        <SisterSection />
        <CTASection />
      </main>
      <Footer />

      <Link
        href={nylaHref}
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#6d4ede] shadow-[0_10px_25px_rgba(0,0,0,0.26)] transition-transform duration-200 hover:-translate-y-1 active:scale-95"
        aria-label="Go to Nyla"
      >
        <NylaAvatar size={42} noBackground />
      </Link>
    </>
  );
}
