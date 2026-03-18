"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Button";

interface BackButtonProps {
  label?: string;
}

export const BackButton = ({ label = "Back" }: BackButtonProps) => {
  const router = useRouter();

  return (
    <Button
      type="button"
      variant="outline" // ✅ use a valid variant
      className="!py-1.5 !px-2 text-[12px] gap-1.5 text-white/70 hover:text-white"
      onClick={() => router.back()}
      aria-label={label}
    >
      <span aria-hidden="true" className="text-[13px] leading-none">
        ←
      </span>
      <span className="hidden sm:inline">{label}</span>
    </Button>
  );
};