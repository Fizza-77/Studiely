export const FAQ_CATEGORY_SHORT_LABELS = [
  "Getting Started",
  "Curriculum",
  "Study Tools",
  "AI & Content",
  "Usage Limits",
  "Pricing & Plans",
  "Rewards",
  "Privacy & Data",
  "Technical Issues",
  "Support & Future",
] as const;

export const FAQ_CATEGORY_LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
] as const;

export function getFaqSectionDisplayTitle(title: string) {
  return title.replace(/^[A-J]\.\s*/, "");
}
