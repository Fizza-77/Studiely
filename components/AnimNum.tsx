"use client";

import { useEffect, useRef, useState } from "react";

interface AnimNumProps {
  target: string | number;
  pre?: string;
  suf?: string;
}

function parseTarget(target: string | number): number {
  return parseFloat(String(target).replace(/[^\d.]/g, "")) || 0;
}

function formatValue(n: number): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

/**
 * Count-up on first view. Updates at most ~30 steps to avoid layout thrashing from per-frame text changes.
 */
export const AnimNum = ({ target, pre = "", suf = "" }: AnimNumProps) => {
  const final = parseTarget(target);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const o = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || started.current) return;
        started.current = true;

        const prefersReduced =
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReduced || final === 0) {
          setDisplay(final);
          return;
        }

        const steps = 24;
        const stepMs = 1800 / steps;
        let step = 0;

        const id = window.setInterval(() => {
          step += 1;
          const p = Math.min(step / steps, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(eased * final * 10) / 10);
          if (p >= 1) window.clearInterval(id);
        }, stepMs);
      },
      { threshold: 0.5 }
    );

    o.observe(el);
    return () => o.disconnect();
  }, [final]);

  return (
    <span ref={ref} className="tabular-nums">
      {pre}
      {formatValue(display)}
      {suf}
    </span>
  );
};
