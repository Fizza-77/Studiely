import Link from "next/link";
import type { FaqSection } from "./types";

export const sectionC: FaqSection = {
  id: "faq-study-tools",
  title: "C. Study Tools — How They Work",
  intro: "Summary Notes, Flashcards, Quiz, Exam Practice, Common Mistakes, Worked Examples, and Nyla.",
  items: [
    {
      question: "What is the Summary Notes tool?",
      schemaText:
        "Summary Notes is Studiely's flagship study tool. It generates structured, curriculum-aligned revision notes for any topic within the student's chosen subject and exam board. Rather than producing a broad explanation that could come from any textbook, Summary Notes is generated specifically for the student's academic route. Notes are concept-first — they explain the topic clearly before introducing exam-relevant framing. They are structured for readability with clear organisation, key definitions highlighted, and logical flow. Premium users can export Summary Notes as PDF or Word documents for offline revision. Notes can also be regenerated to get a different angle or greater depth on a topic.",
      answer: (
        <>
          <p>
            Summary Notes is Studiely&apos;s flagship study tool. It generates structured, curriculum-aligned revision
            notes for any topic within the student&apos;s chosen subject and exam board.
          </p>
          <p>
            Rather than producing a broad explanation that could come from any textbook, Summary Notes is generated
            specifically for the student&apos;s academic route. A Cambridge Checkpoint student gets notes matched to
            the Checkpoint framework. A Cambridge IGCSE student gets notes built around Cambridge&apos;s specification
            scope and terminology. An IB Diploma student gets notes shaped around the DP subject guide. Each is
            different — because each student&apos;s route is different.
          </p>
          <p>
            Notes are concept-first — they explain the topic clearly before introducing exam-relevant framing. They are
            structured for readability with clear organisation, key definitions highlighted, and logical flow — so
            they serve as a genuine revision foundation rather than a wall of undifferentiated text.
          </p>
          <p>
            Premium users can export Summary Notes as PDF or Word documents for offline revision. Notes can also be
            regenerated to get a different angle or greater depth on a topic.
          </p>
        </>
      ),
    },
    {
      question: "How does the Flashcard tool work?",
      schemaText:
        "Studiely's Flashcard tool generates a set of revision flashcards for any topic in your chosen curriculum. Each flashcard presents a question or key term on one side and the answer or definition on the other — following the principles of active recall. Typically, Studiely generates between 10 and 30 flashcards per request, depending on the topic's scope. Cards are exam-board aware. Premium users can download flashcard sets in Anki-compatible format.",
      answer: (
        <>
          <p>
            Studiely&apos;s Flashcard tool generates a set of revision flashcards for any topic in your chosen
            curriculum. Each flashcard presents a question or key term on one side and the answer or definition on
            the other — following the principles of active recall, one of the most evidence-backed revision techniques
            available.
          </p>
          <p>
            Typically, Studiely generates between 10 and 30 flashcards per request, depending on the topic&apos;s
            scope. Cards are exam-board aware, meaning the question framing and answer depth reflect the expectations
            of the student&apos;s specific curriculum.
          </p>
          <p>
            Active recall through flashcards is substantially more effective for long-term retention than passive
            re-reading. Studiely generates flashcard sets that are immediately ready to use — removing the hours
            students often spend creating cards manually.
          </p>
          <p>
            Premium users can download flashcard sets in Anki-compatible format, making Studiely&apos;s AI flashcard
            generator one of the most versatile tools available for students who use digital spaced repetition systems.
          </p>
        </>
      ),
    },
    {
      question: "How does the Quiz tool work?",
      schemaText:
        "Studiely's Quiz tool generates exam-style questions for the student's chosen topic, curriculum, and difficulty level. Each quiz includes instant feedback and clear explanations for every answer. Quizzes are calibrated to the curriculum's assessment style. Students can select from beginner, intermediate, and advanced difficulty levels. Unlike static past-paper question banks, Studiely's AI quiz generator creates fresh questions for each request.",
      answer: (
        <>
          <p>
            Studiely&apos;s Quiz tool generates exam-style questions for the student&apos;s chosen topic, curriculum,
            and difficulty level. Each quiz includes instant feedback and clear explanations for every answer —
            helping students understand not just whether they were right or wrong but why.
          </p>
          <p>
            Quizzes are calibrated to the curriculum&apos;s assessment style. For exam-based curricula like IGCSE,
            GCSE, and IB DP, questions reflect the thinking and language used in real assessments. For conceptual
            programmes like IB PYP, quizzes focus on understanding rather than exam technique.
          </p>
          <p>
            Students can select from beginner, intermediate, and advanced difficulty levels — building confidence
            on a topic before progressing to harder questions.
          </p>
          <p>
            Unlike static past-paper question banks, Studiely&apos;s AI quiz generator creates fresh questions for
            each request. Students can practise the same topic multiple times without repetition — which is
            particularly valuable for subjects where consistent practice, such as Mathematics, Sciences, and
            Languages, directly drives performance improvement.
          </p>
        </>
      ),
    },
    {
      question: "What is the Exam Practice add-on?",
      schemaText:
        "Exam Practice is a dedicated exam simulation feature available as a separate add-on for both Free and Premium Studiely users. It is purchased independently of the main subscription. The add-on provides exam-style questions structured around your specific exam board's format, AI-powered feedback on responses, and a higher-intensity preparation mode. The add-on comes as a pack of 50 Exam Practice generations. These do not expire. Exam Practice generations are completely separate from the monthly Premium allowance and do not count toward it. Exam Practice covers the full breadth of Studiely's curriculum systems. Within each curriculum, students can select by paper, component, or task type. For Cambridge A Level, Pearson Edexcel A Level, and selected IB DP Internal Assessment components, the Exam Practice feature operates in practice mode only for coursework-based tasks.",
      answer: (
        <>
          <p>
            Exam Practice is a dedicated exam simulation feature available as a separate add-on for both Free and
            Premium Studiely users. It is purchased independently of the main subscription.
          </p>
          <p>The Exam Practice add-on provides</p>
          <ul>
            <li>Exam-style questions structured around your specific exam board&apos;s format</li>
            <li>AI-powered feedback on responses, including mark scheme-style commentary</li>
            <li>A higher-intensity preparation mode for students approaching high-stakes assessments</li>
          </ul>
          <p>
            The add-on comes as a pack of 50 Exam Practice generations. These do not expire — you use them at your own
            pace. Once finished, you can purchase another pack. Exam Practice generations are completely separate from
            the monthly Premium allowance and do not count toward it.
          </p>
          <p>
            Exam Practice covers the full breadth of Studiely&apos;s curriculum systems:{" "}
            <strong className="text-navy font-semibold">British:</strong> Cambridge Primary Checkpoint, Cambridge
            Lower Secondary Checkpoint, Cambridge IGCSE, Cambridge AS Level, Cambridge A Level; Pearson Edexcel GCSE,
            Pearson Edexcel AS Level, Pearson Edexcel A Level. <strong className="text-navy font-semibold">IB:</strong>{" "}
            IB MYP Year 4, IB MYP Year 5, IB Diploma Programme (all Groups 1–5, Standard Level and Higher Level).{" "}
            <strong className="text-navy font-semibold">US:</strong> US High School (including AP course-level
            subjects) and Digital SAT (Reading &amp; Writing, full simulation).{" "}
            <strong className="text-navy font-semibold">Canadian</strong> — all provinces and territories: Ontario
            (OSSD), British Columbia (Dogwood Diploma), Alberta, Quebec (DES), Manitoba, Saskatchewan, Maritimes (New
            Brunswick, Nova Scotia, PEI), and Territories (Yukon, Northwest Territories, Nunavut).{" "}
            <strong className="text-navy font-semibold">Australian</strong> — all states and territories: NAPLAN (Years
            3, 5, 7, 9), NSW HSC, VCE, QCE, WACE, SACE, TCE, ACT SSC, NTCET, and ATAR.
          </p>
          <p>
            Within each curriculum, students can select by paper, component, or task type. Exam Practice includes timed
            simulations at official exam durations, paper-specific question formats (such as structured responses,
            data analysis, essay, and complete paper practice), and AI feedback that reflects mark scheme thinking.
          </p>
          <p>
            Please note that for Cambridge A Level, Pearson Edexcel A Level, and selected IB DP Internal Assessment
            components, the Exam Practice feature operates in practice mode only — it does not simulate a formal exam
            environment for these coursework-based tasks. All other components are available in full exam simulation
            mode.
          </p>
        </>
      ),
    },
    {
      question: "What does the Common Mistakes feature show?",
      schemaText:
        "The Common Mistakes feature highlights the most frequent errors and misconceptions students make on a given topic. These are informed by patterns in exam performance and commonly observed student misunderstandings in the relevant subject area. For exam-based curricula, Common Mistakes is particularly valuable because many marks are lost not through a lack of knowledge but through predictable, recurring errors. Reviewing Common Mistakes before a quiz or exam helps students actively target these weak spots rather than discovering them under pressure on the day.",
      answer: (
        <>
          <p>
            The Common Mistakes feature highlights the most frequent errors and misconceptions students make on a
            given topic. These are informed by patterns in exam performance and commonly observed student
            misunderstandings in the relevant subject area.
          </p>
          <p>
            For exam-based curricula, Common Mistakes is particularly valuable because many marks are lost not
            through a lack of knowledge but through predictable, recurring errors — incorrect unit usage in Science,
            misidentified techniques in English Literature, sign errors in Mathematics, and similar slip-ups that
            students repeat without realising.
          </p>
          <p>
            Reviewing Common Mistakes before a quiz or exam helps students actively target these weak spots rather
            than discovering them under pressure on the day.
          </p>
        </>
      ),
    },
    {
      question: "What are Worked Examples?",
      schemaText:
        "Worked Examples show students how to solve problems or answer questions using a clear, step-by-step method. Each example walks through the process from start to finish, including the reasoning behind each step — not just the final answer. For subjects where method is assessed alongside the answer — such as Mathematics, Physics, and Chemistry — Worked Examples are critical for understanding how to communicate working in a way that earns marks under exam conditions. Where exam marking is applicable, Worked Examples include guidance on how marks would be awarded at each stage.",
      answer: (
        <>
          <p>
            Worked Examples show students how to solve problems or answer questions using a clear, step-by-step
            method. Each example walks through the process from start to finish, including the reasoning behind each
            step — not just the final answer.
          </p>
          <p>
            For subjects where method is assessed alongside the answer — such as Mathematics, Physics, and Chemistry
            — Worked Examples are critical for understanding how to communicate working in a way that earns marks
            under exam conditions.
          </p>
          <p>
            Where exam marking is applicable, Worked Examples include guidance on how marks would be awarded at each
            stage, helping students understand the direct link between their method and their potential score.
          </p>
        </>
      ),
    },
    {
      question: "Who is Nyla, and what can she help with?",
      schemaText:
        "Nyla is Studiely's built-in AI study tutor. She is available to all users and provides contextual academic support within the platform, at any time of day. Students can ask Nyla to explain a concept from their curriculum, clarify something in the revision content Studiely generated for them, help them understand how to approach a particular type of exam question, suggest a revision strategy for an upcoming assessment, or answer questions about how to use any of Studiely's study tools. Nyla stays connected to the student's chosen curriculum context. Nyla is available 24 hours a day.",
      answer: (
        <>
          <p>
            Nyla is Studiely&apos;s built-in AI study tutor. She is available to all users and provides contextual
            academic support within the platform, at any time of day.
          </p>
          <p>Students can ask Nyla to</p>
          <ul>
            <li>Explain a concept from their curriculum that they found confusing</li>
            <li>Clarify something in the revision content Studiely generated for them</li>
            <li>Help them understand how to approach a particular type of exam question</li>
            <li>Suggest a revision strategy for an upcoming assessment</li>
            <li>Answer questions about how to use any of Studiely&apos;s study tools</li>
          </ul>
          <p>
            Nyla stays connected to the student&apos;s chosen curriculum context, meaning her responses reflect the
            student&apos;s specific academic route rather than generic subject knowledge.
          </p>
          <p>
            Nyla is available 24 hours a day — including the night before an exam when a student realises they need to
            clarify something and no teacher is available. Access to that kind of on-demand academic support was
            previously only possible through private tutoring. Nyla exists to change that.
          </p>
          <p>
            Learn more on our{" "}
            <Link href="/nyla" className="text-teal hover:text-teal-dk underline underline-offset-2">
              Nyla
            </Link>{" "}
            page.
          </p>
        </>
      ),
    },
  ],
};
