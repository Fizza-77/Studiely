import type { FaqSection } from "./types";

export const sectionE: FaqSection = {
  id: "faq-usage",
  title: "E. Usage Limits & Fair Usage Policy",
  intro: "What counts as a generation, monthly limits, and regenerations.",
  items: [
    {
      question: "What does '100 generations per month' mean?",
      schemaText:
        "A generation is counted each time content is created or regenerated using Studiely's main Study Tools — Summary Notes, Flashcards, Quiz, or Exam Style Questions. Each request, including each regeneration, counts as one generation from the monthly allowance. Premium plans include 100 generations per month as a shared pool across all Study Tools combined — this is not 100 per tool, but 100 total. The Free plan includes five generations in total, with no monthly reset. Exam Practice generations are entirely separate from the monthly Study Tools allowance and do not count toward it.",
      answer: (
        <>
          <p>
            A generation is counted each time content is created or regenerated using Studiely&apos;s main Study
            Tools — Summary Notes, Flashcards, Quiz, or Exam Style Questions. Each request, including each
            regeneration, counts as one generation from the monthly allowance.
          </p>
          <p>
            Premium plans include 100 generations per month as a shared pool across all Study Tools combined — this is
            not 100 per tool, but 100 total.
          </p>
          <p>
            To put this in context: a student revising five topics per week, generating notes and a quiz for each,
            would use approximately 40–50 generations per month — comfortably within the 100-generation limit for a
            structured revision schedule.
          </p>
          <p>
            The Free plan includes five generations in total, with no monthly reset. Exam Practice generations are
            entirely separate from the monthly Study Tools allowance and do not count toward it.
          </p>
        </>
      ),
    },
    {
      question: "What happens when I reach my monthly generation limit?",
      schemaText:
        "If you reach the 100-generation monthly limit, you will be prompted to wait until your next billing cycle reset before generating new Study Tools content. All previously generated content remains fully accessible — only new generation is paused. Exam Practice generations have their own independent pack and are not affected by the monthly Study Tools limit.",
      answer: (
        <>
          <p>
            If you reach the 100-generation monthly limit, you will be prompted to wait until your next billing cycle
            reset before generating new Study Tools content. All previously generated content remains fully accessible
            — only new generation is paused.
          </p>
          <p>
            For most students following a consistent revision schedule, the 100-generation monthly limit is more than
            sufficient. During intensive exam preparation periods, spreading usage steadily across the month is more
            effective than concentrating generations in the final days before an exam.
          </p>
          <p>
            Exam Practice generations have their own independent pack and are not affected by the monthly Study Tools
            limit.
          </p>
        </>
      ),
    },
    {
      question: "Does regenerating content count toward my monthly limit?",
      schemaText:
        "Yes. Each regeneration counts as one generation from your monthly allowance, the same as an original request. This applies whether you are regenerating because the first output was unclear, you want a different approach, or you simply want a fresh version. To make the most of your monthly allowance, review generated content carefully before regenerating. If one specific part is unclear, asking Nyla to clarify that point is often more efficient than using a full generation to recreate the entire piece.",
      answer: (
        <>
          <p>
            Yes. Each regeneration counts as one generation from your monthly allowance, the same as an original
            request. This applies whether you are regenerating because the first output was unclear, you want a
            different approach, or you simply want a fresh version.
          </p>
          <p>
            To make the most of your monthly allowance, review generated content carefully before regenerating. If
            one specific part is unclear, asking Nyla to clarify that point is often more efficient than using a full
            generation to recreate the entire piece.
          </p>
        </>
      ),
    },
  ],
};
