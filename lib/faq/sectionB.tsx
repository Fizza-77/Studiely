import type { FaqSection } from "./types";

export const sectionB: FaqSection = {
  id: "faq-curriculum",
  title: "B. Curriculum & Academic Scope",
  intro: "Curricula, grades, exam boards, IGCSE, IB, provinces, states, and switching routes.",
  items: [
    {
      question: "Which curricula does Studiely support?",
      schemaText:
        "Studiely supports five major curriculum systems used by students from Grade 1 through Grade 12 worldwide. British Curriculum: Cambridge Checkpoint, IGCSE (Cambridge and Pearson Edexcel), GCSE, and pathway content covering Grade 1 through to pre-university level. International Baccalaureate (IB): Full support for PYP, MYP, and DP. US Curriculum: AP, Digital SAT preparation contexts, and US High School content aligned to Common Core standards. Canadian Curriculum: Province-specific content covering Grade 1 through Grade 12 across every Canadian province and territory. Australian Curriculum: State-specific content covering Grade 1 through Grade 12 across every Australian state and territory. Studiely generates curriculum-differentiated output — meaning a Cambridge Checkpoint student receives content shaped differently from a Cambridge IGCSE student, and both receive content shaped differently from a VCE student, even when studying the same topic.",
      answer: (
        <>
          <p>
            Studiely supports five major curriculum systems used by students from Grade 1 through Grade 12 worldwide.
          </p>
          <p>
            <strong className="text-navy font-semibold">British Curriculum</strong>
            <br />
            Cambridge Checkpoint, IGCSE (Cambridge and Pearson Edexcel), GCSE, and pathway content covering Grade 1
            through to pre-university level. Output is structured around each stage&apos;s scope, terminology, and
            assessment expectations — from early primary all the way through to the final exam years.
          </p>
          <p>
            <strong className="text-navy font-semibold">International Baccalaureate (IB)</strong>
            <br />
            Full support for PYP (Primary Years Programme), MYP (Middle Years Programme), and DP (Diploma Programme).
            Content adapts to IB educational philosophy — PYP is inquiry-led and conceptual; MYP and DP content is
            assessment-aware where appropriate.
          </p>
          <p>
            <strong className="text-navy font-semibold">US Curriculum</strong>
            <br />
            AP (Advanced Placement), Digital SAT preparation contexts, and US High School content aligned to Common
            Core standards.
          </p>
          <p>
            <strong className="text-navy font-semibold">Canadian Curriculum</strong>
            <br />
            Province-specific content covering Grade 1 through Grade 12 across every Canadian province and territory —
            making Studiely the only AI study platform with this depth of Canadian curriculum coverage:
          </p>
          <ul>
            <li>Ontario (OSSD — Ontario Secondary School Diploma)</li>
            <li>British Columbia (Dogwood Diploma)</li>
            <li>Alberta (Alberta High School Diploma)</li>
            <li>Quebec (Diplôme d&apos;Études Secondaires — DES)</li>
            <li>Manitoba (Manitoba High School Diploma)</li>
            <li>Saskatchewan (Saskatchewan High School Diploma)</li>
            <li>Maritimes (New Brunswick, Nova Scotia, and PEI — Maritime High School Diploma)</li>
            <li>Territories (Yukon, Northwest Territories, and Nunavut — Territorial Secondary Diploma)</li>
          </ul>
          <p>
            No other AI study platform covers every Canadian province and territory. For Canadian students, Studiely
            offers curriculum-specific study support aligned to the exact diploma pathway and provincial expectations
            of their school.
          </p>
          <p>
            <strong className="text-navy font-semibold">Australian Curriculum</strong>
            <br />
            State-specific content covering Grade 1 through Grade 12 across every Australian state and territory —
            making Studiely the only AI study platform with this depth of Australian curriculum coverage: NAPLAN
            (Years 3, 5, 7, and 9); NSW HSC (New South Wales); VCE (Victoria); QCE (Queensland); WACE (Western
            Australia); SACE (South Australia); TCE (Tasmania); ACT SSC (Australian Capital Territory); NTCET
            (Northern Territory); and ATAR (Year 12 cross-state). No other AI study platform covers every Australian
            state and territory. For Australian students, Studiely generates study content matched to their specific
            state exam board.
          </p>
          <p>
            Studiely generates curriculum-differentiated output — meaning a Cambridge Checkpoint student receives
            content shaped differently from a Cambridge IGCSE student, and both receive content shaped differently from
            a VCE student, even when studying the same topic. This is the core difference from generic AI tools.
          </p>
        </>
      ),
    },
    {
      question: "Which year groups and grade levels are covered?",
      schemaText:
        "Studiely covers Grade 1 through Grade 12 across all five supported curriculum systems. Coverage follows the official syllabus structures of each curriculum at every stage. British: Grade 1–12 (Cambridge Checkpoint from Grade 3; Cambridge IGCSE and GCSE from Grade 9; A Level pathway through Grade 12). IB: Grade 1–12 (IB PYP covers Grades 1–5; IB MYP covers Grades 6–10; IB DP covers Grades 11–12). US: Grade 1–12, including AP course-level content from Grade 11. Canadian: Grade 1–12, aligned to provincial curriculum structures. Australian: Grade 1–12 (NAPLAN from Grade 3; HSC, VCE, QCE, WACE, SACE, TCE, ACT SSC, NTCET, and ATAR in Grades 11–12). The best way to check whether your specific subject and level are covered is to select your curriculum, subject, and topic inside the platform. If content generates successfully, your route is supported. Studiely continuously expands subject and topic coverage as new syllabi are incorporated.",
      answer: (
        <>
          <p>
            Studiely covers Grade 1 through Grade 12 across all five supported curriculum systems. Coverage follows
            the official syllabus structures of each curriculum at every stage.
          </p>
          <ul>
            <li>
              <strong className="text-navy font-semibold">British:</strong> Grade 1–12 (Cambridge Checkpoint from
              Grade 3; Cambridge IGCSE and GCSE from Grade 9; A Level pathway through Grade 12)
            </li>
            <li>
              <strong className="text-navy font-semibold">IB:</strong> Grade 1–12 (IB PYP covers Grades 1–5; IB MYP
              covers Grades 6–10; IB DP covers Grades 11–12)
            </li>
            <li>
              <strong className="text-navy font-semibold">US:</strong> Grade 1–12, including AP course-level content
              from Grade 11
            </li>
            <li>
              <strong className="text-navy font-semibold">Canadian:</strong> Grade 1–12, aligned to provincial
              curriculum structures
            </li>
            <li>
              <strong className="text-navy font-semibold">Australian:</strong> Grade 1–12 (NAPLAN from Grade 3; HSC,
              VCE, QCE, WACE, SACE, TCE, ACT SSC, NTCET, and ATAR in Grades 11–12)
            </li>
          </ul>
          <p>
            The best way to check whether your specific subject and level are covered is to select your curriculum,
            subject, and topic inside the platform. If content generates successfully, your route is supported.
            Studiely continuously expands subject and topic coverage as new syllabi are incorporated.
          </p>
        </>
      ),
    },
    {
      question: "Can I switch between different curricula?",
      schemaText:
        "Yes. You can change your curriculum selection at any time — from your account settings or directly from the generation screen. This is useful for students who study across more than one curriculum context, are transitioning between school systems, or want to compare how a topic is approached under different frameworks. Previously generated content from a different curriculum remains accessible in your study library. Switching your curriculum only affects new generations going forward.",
      answer: (
        <>
          <p>
            Yes. You can change your curriculum selection at any time — from your account settings or directly from
            the generation screen.
          </p>
          <p>
            This is useful for students who study across more than one curriculum context, are transitioning
            between school systems, or want to compare how a topic is approached under different frameworks.
          </p>
          <p>
            Previously generated content from a different curriculum remains accessible in your study library.
            Switching your curriculum only affects new generations going forward.
          </p>
        </>
      ),
    },
    {
      question: "Is Studiely's content aligned to official exam boards?",
      schemaText:
        "Yes. Studiely's AI is guided by curriculum-specific rules that reflect the scope, terminology, and assessment expectations of each supported exam board. Content is not just subject-accurate — it is structured to reflect how each exam board approaches the topic, including appropriate depth and framing. For example, a Cambridge Checkpoint student generating notes on Living Organisms receives output structured around the Checkpoint framework — while a Cambridge IGCSE Biology student studying the same topic receives output shaped around the IGCSE specification and mark scheme thinking. Neither gets a generalised biology explanation. Studiely's content is intended as a study and revision aid. Students should always cross-reference with their school's official materials and past papers from the exam board's official website, particularly where precise mark scheme language is critical.",
      answer: (
        <>
          <p>
            Yes. Studiely&apos;s AI is guided by curriculum-specific rules that reflect the scope, terminology, and
            assessment expectations of each supported exam board. Content is not just subject-accurate — it is
            structured to reflect how each exam board approaches the topic, including appropriate depth and framing.
          </p>
          <p>
            For example, a Cambridge Checkpoint student generating notes on Living Organisms receives output
            structured around the Checkpoint framework — while a Cambridge IGCSE Biology student studying the same
            topic receives output shaped around the IGCSE specification and mark scheme thinking. Neither gets a
            generalised biology explanation.
          </p>
          <p>
            Studiely&apos;s content is intended as a study and revision aid. Students should always cross-reference
            with their school&apos;s official materials and past papers from the exam board&apos;s official website,
            particularly where precise mark scheme language is critical.
          </p>
        </>
      ),
    },
    {
      question: "Does Studiely support IGCSE exam preparation?",
      schemaText:
        "Yes. Cambridge Checkpoint and IGCSE preparation are among the most common use cases on Studiely. The platform supports Cambridge Checkpoint (from Grade 3), Cambridge IGCSE, and Pearson Edexcel IGCSE across a wide range of subjects — giving students a consistent study platform from their earliest structured assessments through to their final pre-secondary exams. For IGCSE students, Studiely provides Summary Notes structured around IGCSE specification content; Flashcards covering key definitions, formulas, and concepts; Quizzes with IGCSE-style questions and instant feedback; Exam Practice (add-on) for extended exam simulation with AI feedback. IGCSE exams typically fall in May and June. Using Studiely consistently in the months before exams allows students to cover topics systematically, test recall, and practise exam responses — all in one place, without the cost of private tutoring.",
      answer: (
        <>
          <p>
            Yes. Cambridge Checkpoint and IGCSE preparation are among the most common use cases on Studiely. The
            platform supports Cambridge Checkpoint (from Grade 3), Cambridge IGCSE, and Pearson Edexcel IGCSE across a
            wide range of subjects — giving students a consistent study platform from their earliest structured
            assessments through to their final pre-secondary exams.
          </p>
          <p>For IGCSE students, Studiely provides</p>
          <ul>
            <li>Summary Notes structured around IGCSE specification content</li>
            <li>Flashcards covering key definitions, formulas, and concepts</li>
            <li>Quizzes with IGCSE-style questions and instant feedback</li>
            <li>Exam Practice (add-on) for extended exam simulation with AI feedback</li>
          </ul>
          <p>
            IGCSE exams typically fall in May and June. Using Studiely consistently in the months before exams allows
            students to cover topics systematically, test recall, and practise exam responses — all in one place,
            without the cost of private tutoring.
          </p>
        </>
      ),
    },
    {
      question: "Does Studiely support the IB (PYP, MYP, and Diploma)?",
      schemaText:
        "Yes. Studiely provides full support across all three IB programmes, with content tailored to the philosophy and assessment structure of each. IB PYP (Primary Years Programme): Content is inquiry-led and conceptual. Exam-style questions are disabled because PYP does not use formal examinations. Studiely respects IB educational philosophy and generates material focused on understanding rather than exam technique. IB MYP (Middle Years Programme): Content is assessment-aware, reflecting MYP criteria and the interdisciplinary nature of the programme. IB DP (Diploma Programme): The most exam-intensive IB level. Notes, flashcards, quizzes, and exam practice content are all structured around DP subject guides and assessment objectives. IB Diploma students manage a significant workload — multiple demanding subjects alongside the Extended Essay, Theory of Knowledge, and CAS requirements. Studiely gives DP students efficient, curriculum-accurate revision support that reduces the time spent building materials from scratch and leaves more time for the work that matters.",
      answer: (
        <>
          <p>
            Yes. Studiely provides full support across all three IB programmes, with content tailored to the
            philosophy and assessment structure of each.
          </p>
          <p>
            <strong className="text-navy font-semibold">IB PYP (Primary Years Programme)</strong>
            <br />
            Content is inquiry-led and conceptual. Exam-style questions are disabled because PYP does not use formal
            examinations. Studiely respects IB educational philosophy and generates material focused on understanding
            rather than exam technique.
          </p>
          <p>
            <strong className="text-navy font-semibold">IB MYP (Middle Years Programme)</strong>
            <br />
            Content is assessment-aware, reflecting MYP criteria and the interdisciplinary nature of the programme.
          </p>
          <p>
            <strong className="text-navy font-semibold">IB DP (Diploma Programme)</strong>
            <br />
            The most exam-intensive IB level. Notes, flashcards, quizzes, and exam practice content are all structured
            around DP subject guides and assessment objectives.
          </p>
          <p>
            IB Diploma students manage a significant workload — multiple demanding subjects alongside the Extended
            Essay, Theory of Knowledge, and CAS requirements. Studiely gives DP students efficient,
            curriculum-accurate revision support that reduces the time spent building materials from scratch and
            leaves more time for the work that matters.
          </p>
        </>
      ),
    },
    {
      question: "Can I study multiple subjects at the same time?",
      schemaText:
        "Yes. Studiely does not limit you to one subject at a time. You can generate revision content for as many different subjects as your plan's generation allowance supports. Many students use Studiely to manage revision across all of their exam subjects — generating Biology notes in one session, then switching to History or Mathematics in the next. Each generation is tracked against your monthly allowance regardless of subject, giving you complete flexibility over how to distribute your study time. This multi-subject flexibility is especially valuable during exam season, when students are preparing several papers simultaneously and need structured revision support across different subject areas without spending time building materials manually.",
      answer: (
        <>
          <p>
            Yes. Studiely does not limit you to one subject at a time. You can generate revision content for as many
            different subjects as your plan&apos;s generation allowance supports.
          </p>
          <p>
            Many students use Studiely to manage revision across all of their exam subjects — generating Biology notes
            in one session, then switching to History or Mathematics in the next. Each generation is tracked against
            your monthly allowance regardless of subject, giving you complete flexibility over how to distribute
            your study time.
          </p>
          <p>
            This multi-subject flexibility is especially valuable during exam season, when students are preparing
            several papers simultaneously and need structured revision support across different subject areas without
            spending time building materials manually.
          </p>
        </>
      ),
    },
    {
      question: "Which specific curricula, provinces, and states are covered across all of Studiely?",
      schemaText:
        "Studiely covers five curriculum systems from Grade 1 through Grade 12. Below is the full coverage across every system — including every Canadian province and territory, and every Australian state and territory. British Curriculum: Cambridge Primary Checkpoint, Cambridge Lower Secondary Checkpoint, Cambridge IGCSE, Cambridge AS Level, Cambridge A Level, Pearson Edexcel GCSE, Pearson Edexcel AS Level, Pearson Edexcel A Level, UK National Curriculum (Key Stages 1–4). International Baccalaureate (IB): IB PYP (Grades 1–5), IB MYP (Grades 6–10, including MYP Year 4 and Year 5 eAssessment), IB Diploma Programme (Grades 11–12, all Groups 1–5, Standard Level and Higher Level). US Curriculum: US High School (Grades 9–12, including AP courses), Digital SAT (US College Board), Common Core-aligned content (Grades 1–8). Canadian Curriculum — All Provinces and Territories: Ontario (OSSD), British Columbia (Dogwood Diploma), Alberta (Alberta High School Diploma), Quebec (Diplôme d'Études Secondaires — DES), Manitoba (Manitoba High School Diploma), Saskatchewan (Saskatchewan High School Diploma), Maritimes — New Brunswick, Nova Scotia, and PEI (Maritime High School Diploma), Territories — Yukon, Northwest Territories, and Nunavut (Territorial Secondary Diploma). Australian Curriculum — All States and Territories: NAPLAN (Years 3, 5, 7, and 9 — national), NSW HSC, VCE (Victoria), QCE (Queensland), WACE (Western Australia), SACE (South Australia), TCE (Tasmania), ACT SSC (Australian Capital Territory), NTCET (Northern Territory), ATAR (Year 12, cross-state). Studiely is the only AI study platform that covers every single Canadian province and territory and every Australian state and territory.",
      answer: (
        <>
          <p>
            Studiely covers five curriculum systems from Grade 1 through Grade 12. Below is the full coverage across
            every system — including every Canadian province and territory, and every Australian state and territory.
            This breadth of coverage is a deliberate competitive advantage: no other AI study platform offers this
            level of provincial and state-specific alignment.
          </p>
          <p>
            <strong className="text-navy font-semibold">British Curriculum</strong>
            <br />
            Cambridge Primary Checkpoint • Cambridge Lower Secondary Checkpoint • Cambridge IGCSE • Cambridge AS Level
            • Cambridge A Level • Pearson Edexcel GCSE • Pearson Edexcel AS Level • Pearson Edexcel A Level • UK
            National Curriculum (Key Stages 1–4)
          </p>
          <p>
            <strong className="text-navy font-semibold">International Baccalaureate (IB)</strong>
            <br />
            IB PYP (Grades 1–5) • IB MYP (Grades 6–10, including MYP Year 4 and Year 5 eAssessment) • IB Diploma
            Programme (Grades 11–12, all Groups 1–5, Standard Level and Higher Level)
          </p>
          <p>
            <strong className="text-navy font-semibold">US Curriculum</strong>
            <br />
            US High School (Grades 9–12, including AP courses) • Digital SAT (US College Board) • Common Core-aligned
            content (Grades 1–8)
          </p>
          <p>
            <strong className="text-navy font-semibold">Canadian Curriculum — All Provinces and Territories</strong>
            <br />
            Ontario (OSSD) • British Columbia (Dogwood Diploma) • Alberta (Alberta High School Diploma) • Quebec
            (Diplôme d&apos;Études Secondaires — DES) • Manitoba (Manitoba High School Diploma) • Saskatchewan
            (Saskatchewan High School Diploma) • Maritimes — New Brunswick, Nova Scotia, and PEI (Maritime High School
            Diploma) • Territories — Yukon, Northwest Territories, and Nunavut (Territorial Secondary Diploma)
          </p>
          <p>
            Studiely is the only AI study platform that covers every single Canadian province and territory — from the
            Northwest Territories to Quebec. For Canadian students, this means genuinely relevant, diploma-specific
            study support regardless of where they live and study.
          </p>
          <p>
            <strong className="text-navy font-semibold">Australian Curriculum — All States and Territories</strong>
            <br />
            NAPLAN (Years 3, 5, 7, and 9 — national) • NSW HSC • VCE (Victoria) • QCE (Queensland) • WACE (Western
            Australia) • SACE (South Australia) • TCE (Tasmania) • ACT SSC (Australian Capital Territory) • NTCET
            (Northern Territory) • ATAR (Year 12, cross-state)
          </p>
          <p>
            Studiely is the only AI study platform that covers every Australian state and territory — from NAPLAN in
            primary school through to the HSC in New South Wales, VCE in Victoria, and NTCET in the Northern
            Territory. No student in any part of Australia is left with a generic study tool that does not
            understand their specific state exam board.
          </p>
        </>
      ),
    },
  ],
};
