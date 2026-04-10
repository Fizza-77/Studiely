import type { ReactNode } from "react";

export type FaqEntry = {
  question: string;
  /** Plain text for JSON-LD (mirrors visible content) */
  schemaText: string;
  answer: ReactNode;
};

export type FaqSection = {
  id: string;
  title: string;
  intro: string;
  items: FaqEntry[];
};
