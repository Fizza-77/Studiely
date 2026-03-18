"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FaqItemProps {
  question: string;
  children: React.ReactNode;
}

export const FaqItem = ({ question, children }: FaqItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border-lt rounded-lg overflow-hidden bg-white/60">
      <dt>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between gap-3 px-3.5 py-3 text-left hover:bg-bg-base/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60"
          aria-expanded={open}
        >
          <span className="text-[13px] md:text-[14px] font-semibold text-navy">
            {question}
          </span>
          <span
            aria-hidden="true"
            className={`inline-flex items-center justify-center w-5 h-5 rounded-full border border-border-default text-[11px] text-muted transition-transform duration-200 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </button>
      </dt>
      <AnimatePresence initial={false}>
        {open && (
          <motion.dd
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="px-3.5 pb-3.5 pt-0 text-[13px] text-muted leading-[1.7] border-t border-border-lt"
          >
            {children}
          </motion.dd>
        )}
      </AnimatePresence>
    </div>
  );
};

