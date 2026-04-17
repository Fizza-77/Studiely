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

export const TOOLS = [
  {
    id: "notes",
    label: "Summary Notes",
    cta: "Generate Summary Notes",
    color: "#00b09b",
    lt: "#dff6f2",
    glow: "rgba(0,176,155,.14)",
    border: "rgba(0,176,155,.22)",
    desc: "AI generates fully structured notes for any topic. Depth and length are matched to your curriculum, grade and exam board - not a generic summary. No uploads. No prep. Type your topic and generate.",
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
    cta: "Create Flashcards",
    color: "#2563eb",
    lt: "#eff6ff",
    glow: "rgba(37,99,235,.13)",
    border: "rgba(37,99,235,.22)",
    desc: "Spaced-repetition decks built automatically from any topic - up to 30 cards per set. Spaced repetition is the most evidence-backed method for long-term memory retention. Export to Anki on Premium.",
    previewLabel: "Flashcards",
    preview:
      "FRONT: What is the net equation for photosynthesis?\n────────────────────────────────\nBACK: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂\n\n── Card 1 of 12 · Deck: Photosynthesis ──",
    Icon: FlashcardsCardIcon,
    appHref: STUDIELY_APP.notes,
  },
  {
    id: "quiz",
    label: "Quiz Generator",
    cta: "Generate Quiz",
    color: "#d97b2a",
    lt: "#fff1e4",
    glow: "rgba(217,123,42,.13)",
    border: "rgba(217,123,42,.22)",
    desc: "Multiple-choice, true/false and short-answer questions at beginner, intermediate or advanced difficulty. Instant feedback after every question. Syllabus content only - nothing off-topic.",
    previewLabel: "Quiz",
    preview:
      "Q1. What is the primary pigment in photosynthesis?\n  ○ Carotene\n  ● Chlorophyll ✓\n  ○ Xanthophyll\n  ○ Phycocyanin\n\nQ2. Where does the Calvin cycle occur?\n  ● Stroma of the chloroplast ✓\n  ○ Thylakoid membrane\n  ○ Cytoplasm",
    Icon: QuizCardIcon,
    appHref: STUDIELY_APP.notes,
  },
  {
    id: "exam-writing-mode",
    label: "Exam Practice Mode",
    cta: "Start Exam Practice Mode",
    color: "#c94a72",
    lt: "#ffedf3",
    glow: "rgba(201,74,114,.13)",
    border: "rgba(201,74,114,.22)",
    desc: "Write under timed conditions in the app. Live countdown, word count tracker and AI feedback assessed against your exam board's command words and structure. Three one-time free trials per account.",
    previewLabel: "Exam Practice Mode",
    preview:
      "Timer: 00:24:10\nWord count: 312\nFeedback: Improve structure around command terms and add one developed evaluation point.",
    Icon: ExamCardIcon,
    appHref: STUDIELY_APP.examPractice,
  },
  {
    id: "common-mistakes",
    label: "Common Mistakes Students Make",
    cta: "Explore common mistakes",
    color: "#7c3aed",
    lt: "#f5f3ff",
    glow: "rgba(124,58,237,.14)",
    border: "rgba(124,58,237,.22)",
    desc: "Students often lose marks by misunderstanding command words, skipping key steps in long-answer methods, and mixing up core terms. Many write answers that are correct in idea but not aligned to what examiners award marks for.",
    previewLabel: "Common mistakes",
    preview: "",
    Icon: CommonMistakesCardIcon,
    /** Former section left this tool without a launch URL (disabled CTA). */
    appHref: null,
  },
] as const;

export type StudyToolId = (typeof TOOLS)[number]["id"];
