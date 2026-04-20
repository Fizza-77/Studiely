import {
  NotesCardIcon,
  QuizCardIcon,
  FlashcardsCardIcon,
  ExamCardIcon,
  CommonMistakesCardIcon,
} from "@/components/Icons";
import { STUDIELY_APP } from "@/lib/appUrls";

export function getGlowColor(sel: string) {
  switch (sel) {
    case "notes":
      return "rgba(0,255,200,0.35)";
    case "flashcards":
      return "rgba(0,150,255,0.35)";
    case "quiz":
      return "rgba(255, 166, 0, 0.45)";
    case "exam":
    case "exam-writing-mode":
      return "rgba(255, 0, 128, 0.48)";
    case "common-mistakes":
      return "rgba(124, 58, 237, 0.42)";
    default:
      return "rgba(26,35,126,0.35)";
  }
}

/** App-style hero cards (matches `public/studiely_homepage_cards (1).html` app view). */
export type HeroCardTheme = "teal" | "indigo" | "amber" | "coral" | "rose";

export const TOOLS = [
  {
    id: "notes",
    label: "Summary Notes",
    /** Short label + line for app-style hero cards */
    heroLabel: "Summary notes",
    heroShortDesc: "Matched to your curriculum, grade and exam board.",
    heroTheme: "teal" as HeroCardTheme,
    /** Shorter CTA line for compact app-style hero buttons */
    heroCta: "Generate Summary/Revision Notes",
    cta: "Generate Summary/Revision Notes",
    color: "#00b09b",
    lt: "#dff6f2",
    glow: "rgba(0,176,155,.14)",
    border: "rgba(0,176,155,.22)",
    desc: "AI generates fully structured notes for any topic. Depth and length are matched to your curriculum, grade and exam board — not a generic summary. No uploads. No prep. Type your topic and generate.",
    previewLabel: "Summary Notes",
    preview:
      "Photosynthesis is the process by which plants convert light energy into chemical energy stored in glucose.\n\n• Light-dependent reactions occur in the thylakoid membrane\n• Carbon fixation occurs via the Calvin cycle in the stroma\n• Net equation: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂\n• Chlorophyll is the primary photosynthetic pigment",
    Icon: NotesCardIcon,
    /** Same destination as the former AI Study Tools CTA (`STUDIELY_APP.notes`). */
    appHref: STUDIELY_APP.notes,
  },
  {
    id: "flashcards",
    label: "Flashcard Generator",
    heroLabel: "Flashcards",
    heroShortDesc: "Up to 30 spaced-repetition cards. Automatic.",
    heroTheme: "indigo" as HeroCardTheme,
    heroCta: "Generate Flashcards",
    cta: "Create Flashcards",
    color: "#2563eb",
    lt: "#eff6ff",
    glow: "rgba(37,99,235,.13)",
    border: "rgba(37,99,235,.22)",
    desc: "Spaced-repetition decks built automatically from any topic — up to 30 cards per set. Spaced repetition is the most evidence-backed method for long-term memory retention.",
    previewLabel: "Flashcards",
    preview:
      "FRONT: What is the net equation for photosynthesis?\n────────────────────────────────\nBACK: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂\n\n── Card 1 of 12 · Deck: Photosynthesis ──",
    Icon: FlashcardsCardIcon,
    appHref: STUDIELY_APP.notes,
  },
  {
    id: "quiz",
    label: "Quiz Generator",
    heroLabel: "Quiz",
    heroShortDesc: "Multiple-choice questions. Instant feedback.",
    heroTheme: "amber" as HeroCardTheme,
    heroCta: "Start A Quiz",
    cta: "Generate Quiz",
    color: "#d97b2a",
    lt: "#fff1e4",
    glow: "rgba(217,123,42,.13)",
    border: "rgba(217,123,42,.22)",
    desc: "Multiple-choice questions at beginner, intermediate or advanced difficulty. Instant feedback after every question. Syllabus content only — nothing off-topic.",
    previewLabel: "Quiz",
    preview:
      "Q1. What is the primary pigment in photosynthesis?\n  ○ Carotene\n  ● Chlorophyll ✓\n  ○ Xanthophyll\n  ○ Phycocyanin\n\nQ2. Where does the Calvin cycle occur?\n  ● Stroma of the chloroplast ✓\n  ○ Thylakoid membrane\n  ○ Cytoplasm",
    Icon: QuizCardIcon,
    appHref: STUDIELY_APP.notes,
  },
  {
    id: "exam-writing-mode",
    label: "Exam Practice Mode",
    heroLabel: "Exam practice",
    heroShortDesc: "Timed. AI-marked. 3 free trials per account.",
    heroTheme: "rose" as HeroCardTheme,
    heroCta: "Start Exam Practice",
    cta: "Start Exam Practice Mode",
    color: "#c94a72",
    lt: "#ffedf3",
    glow: "rgba(201,74,114,.13)",
    border: "rgba(201,74,114,.22)",
    desc: "Write under timed conditions in the app. Live countdown, word count tracker and AI feedback assessed against your exam board's command words and structure.",
    previewLabel: "Exam Practice Mode",
    preview:
      "Timer: 00:24:10\nWord count: 312\nFeedback: Improve structure around command terms and add one developed evaluation point.",
    Icon: ExamCardIcon,
    appHref: STUDIELY_APP.examPractice,
  },
  {
    id: "common-mistakes",
    label: "Common Mistakes Students Make",
    heroLabel: "Exam focus",
    heroShortDesc:
      "How this topic appears in your exam. Tick Common Mistakes to see what trips students up.",
    heroTheme: "coral" as HeroCardTheme,
    heroCta: "Get Exam Focus",
    cta: "Explore common mistakes",
    color: "#7c3aed",
    lt: "#f5f3ff",
    glow: "rgba(124,58,237,.14)",
    border: "rgba(124,58,237,.22)",
    desc: "See how this topic is examined — the question styles, command words, and mark-scheme expectations specific to your board. Tick Common Mistakes to also surface the errors students most often make on this topic, so you can avoid them before exam day.",
    previewLabel: "Common mistakes",
    preview: "",
    Icon: CommonMistakesCardIcon,
    /** No direct app route — CTA is disabled on the marketing hero. */
    appHref: null,
  },
];

export type StudyToolId = (typeof TOOLS)[number]["id"];
export type StudyTool = (typeof TOOLS)[number];
