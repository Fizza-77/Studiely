"use client";
import Link from "next/link";

import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export const CTASection = () => (
  <section className="bg-navy py-[80px] text-center relative overflow-hidden">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0,176,155,.1) 0%, transparent 65%)",
      }}
    />
    <div className="wrap relative">
      <SectionHeader
        label="Get Started Today"
        title="Studiely"
        sub="AI Powered study tools for students."
        labelColor="rgba(255, 255, 255, 0.9)"
        titleColor="#fff"
        subColor="rgba(255, 255, 255, 0.9)"
      />
      <Reveal delay={0.2}>
        <div className="flex gap-3 justify-center mb-5 flex-wrap -mt-5">
          <Link href="/signup">
            <Button
              variant="white"
              lg
              className="transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_10px_22px_rgba(0,0,0,0.12)]"
            >
              Get Started Free
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="gw" lg>
              Login
            </Button>
          </Link>
        </div>
      </Reveal>
      <Reveal delay={0.28}>
        <p className="text-[12px] text-white/80">
          Free Trial · Instant Setup · Cancel Anytime
        </p>
      </Reveal>
    </div>
  </section>
);
