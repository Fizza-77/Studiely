"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Button";

interface BackButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

export const BackButton = ({ label = "Back", href, className }: BackButtonProps) => {
  const router = useRouter();

  return (
    <Button
      type="button"
      variant="outline"
      className={`!py-1.5 !px-2 text-[12px] gap-1.5 ${className ?? "text-white/80 hover:bg-white hover:text-navy"}`}
      onClick={() => {
        if (href) {
          router.push(href);
          return;
        }
        router.back();
      }}
      aria-label={label}
    >
      <span aria-hidden="true" className="text-[13px] leading-none">
        ←
      </span>
      <span className="hidden sm:inline">{label}</span>
    </Button>
  );
};