import { sectionA } from "./sectionA";
import { sectionB } from "./sectionB";
import { sectionC } from "./sectionC";
import { sectionD } from "./sectionD";
import { sectionE } from "./sectionE";
import { sectionF } from "./sectionF";
import { sectionG } from "./sectionG";
import { sectionH } from "./sectionH";
import { sectionI } from "./sectionI";
import { sectionJ } from "./sectionJ";
import type { FaqSection } from "./types";

export const FAQ_SECTIONS: FaqSection[] = [
  sectionA,
  sectionB,
  sectionC,
  sectionD,
  sectionE,
  sectionF,
  sectionG,
  sectionH,
  sectionI,
  sectionJ,
];

export type { FaqSection, FaqEntry } from "./types";

export function buildFaqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_SECTIONS.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.schemaText,
        },
      })),
    ),
  };
}
