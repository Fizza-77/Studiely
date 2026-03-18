"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  style?: CSSProperties;
  className?: string;
}

export const Reveal = ({ children, delay = 0, y = 22, style: sx, className }: RevealProps) => {
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
      { threshold: 0.06, rootMargin: "0px 0px -16px 0px" }
    );

    o.observe(el);
    return () => o.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity .7s cubic-bezier(.22,1,.36,1) ${delay}s, transform .7s cubic-bezier(.22,1,.36,1) ${delay}s`,
        ...sx,
      }}
      className={cn(className)}
    >
      {children}
    </div>
  );
};
