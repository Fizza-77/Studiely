"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  sub?: string;
  labelColor?: string;
  titleColor?: string;
  subColor?: string;
  delay?: number;
  className?: string;
  subClassName?: string;
}

export const SectionHeader = ({
  label,
  title,
  sub,
  labelColor = "var(--color-teal)",
  titleColor = "var(--color-navy)",
  subColor =  "#2f333a",
  delay = 0,
  className,
  subClassName,
}: SectionHeaderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          o.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    o.observe(el);
    return () => o.disconnect();
  }, []);

  const getTransition = (d: number) =>
    `opacity 0.65s ease ${delay + d}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay + d}s`;

  return (
    <div ref={ref} className={cn("mb-[clamp(2rem,3.1vw,3.25rem)] text-center", className)}>
      <span
        style={{
          color: labelColor,
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(12px)",
          transition: getTransition(0),
        }}
        className="fluid-eyebrow mb-[clamp(0.55rem,1vw,0.9rem)] block font-semibold uppercase"
      >
        {label}
      </span>
      <h2
        style={{
          color: titleColor,
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(16px)",
          transition: getTransition(0.08),
        }}
        className="font-serif text-[clamp(1.6rem,1.15rem+1.95vw,2.7rem)] font-normal leading-[1.13] tracking-[-0.02em]"
      >
        {title}
      </h2>
      {sub && (
        <p
          style={{
            color: subColor,
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(12px)",
            transition: getTransition(0.16),
          }}
          className={cn(
            "mx-auto mt-[clamp(0.65rem,1.1vw,0.95rem)] max-w-[560px] text-[clamp(0.94rem,0.4vw+0.82rem,1.08rem)] font-light leading-[1.72]",
            subClassName
          )}
        >
          {sub}
        </p>
      )}
    </div>
  );
};
