"use client";

import { useEffect, useRef, useState } from "react";

interface AnimNumProps {
  target: string | number;
  pre?: string;
  suf?: string;
}

export const AnimNum = ({ target, pre = "", suf = "" }: AnimNumProps) => {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const n = parseFloat(String(target).replace(/[^\d.]/g, ""));
          const t0 = Date.now(),
            dur = 1800;

          const tick = () => {
            const p = Math.min((Date.now() - t0) / dur, 1);
            const ea = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setV(Math.round(ea * n * 10) / 10);
            if (p < 1) requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.5 }
    );

    o.observe(el);
    return () => o.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {pre}
      {Number.isInteger(v) ? v : v.toFixed(1)}
      {suf}
    </span>
  );
};
