"use client";

import { useEffect } from "react";

const SPARK_COLORS = ["#4F35F2", "#FF36C6", "#E8FF2F"];

export const SiteInteractions = () => {
  useEffect(() => {
    const enabled = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    if (!enabled.matches) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest("a, button, summary, [role='button']")) return;

      for (let index = 0; index < 6; index += 1) {
        const spark = document.createElement("span");
        const angle = (Math.PI * 2 * index) / 6;
        const distance = 22 + Math.random() * 18;

        spark.className = "funky-spark";
        spark.style.left = `${event.clientX}px`;
        spark.style.top = `${event.clientY}px`;
        spark.style.setProperty("--spark-x", `${Math.cos(angle) * distance}px`);
        spark.style.setProperty("--spark-y", `${Math.sin(angle) * distance}px`);
        spark.style.setProperty(
          "--spark-color",
          SPARK_COLORS[index % SPARK_COLORS.length],
        );

        document.body.appendChild(spark);
        spark.addEventListener("animationend", () => spark.remove(), {
          once: true,
        });
      }
    };

    window.addEventListener("pointerdown", onPointerDown, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      document.querySelectorAll(".funky-spark").forEach((spark) => spark.remove());
    };
  }, []);

  return null;
};
