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
    <div ref={ref} className={cn("text-center mb-[52px]", className)}>
      <span
        style={{
          color: labelColor,
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(12px)",
          transition: getTransition(0),
        }}
        className="block text-[10px] font-semibold tracking-[1.5px] uppercase mb-3.5"
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
        className="font-serif text-[clamp(26px,3vw,42px)] font-normal leading-[1.16] tracking-[-0.4px]"
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
  "text-base leading-[1.75] font-light max-w-[540px] mx-auto mt-3",
  subClassName
)}        >
          {sub}
        </p>
      )}
    </div>
  );
};
