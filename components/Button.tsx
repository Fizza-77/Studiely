import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "teal" | "white" | "gw";
  lg?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "solid", lg, className, ...rest }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-1.5 font-medium rounded-lg border-[1.5px] border-transparent whitespace-nowrap transition-all duration-200 outline-none";
    const sizeClasses = lg ? "py-[14px] px-7 text-[15px]" : "py-[9px] px-5 text-[13px]";

    const variantClasses = {
      solid: "bg-navy text-white border-navy hover:opacity-90",
      outline: "bg-transparent text-navy border-border-default hover:bg-neutral-50",
      teal: "bg-teal text-white hover:opacity-90",
      white: "bg-white text-navy border-white font-semibold hover:bg-gray-50",
      gw: "bg-transparent text-white/70 border-white/30 hover:bg-white/10 hover:border-white/50",
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, sizeClasses, variantClasses[variant], className)}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
