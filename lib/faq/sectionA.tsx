import Link from "next/link";
import { STUDIELY_APP } from "@/lib/appUrls";
import { LEGAL_ROUTES, complianceLinkClass } from "@/lib/legalRoutes";
import type { FaqSection } from "./types";

const pricingLink = (
  <a
    href={STUDIELY_APP.pricing}
    className="text-teal hover:text-teal-dk underline underline-offset-2"
    target="_blank"
    rel="noopener noreferrer"
  >
    Pricing page
  </a>
);

export const sectionA: FaqSection = {
  id: "faq-getting-started",
  title: "A. Getting Started & Account",
  intro:
    "What Studiely is, who it is for, free vs Premium, devices, accounts, passwords and deletion.",
  items: [
    {
      question: "What is Studiely?",
      schemaText:
        "Studiely is an AI-powered study platform built specifically for school students. Unlike generic AI tools that produce broad, unfocused answers, Studiely starts with the student's exact academic route — curriculum, exam board, grade level, subject and topic — then generates revision support that is aligned to how they are actually being assessed. The platform brings four core study tools into one place: Summary Notes, Flashcards, Quiz and Exam Practice. Students move through the full revision cycle — from first understanding a concept, through to exam-style practice — without leaving the app or switching between separate resources. Studiely supports five major curriculum systems: British (IGCSE and GCSE), International Baccalaureate (IB), US, Canadian and Australian. That makes it one of the most curriculum-inclusive AI study platforms available to school students today. The platform works on web, iOS and Android — so students can revise at home, on the go, or anywhere in between.",
      answer: (
        <>
          <p>
            Studiely is an AI-powered study platform built specifically for school students. Unlike generic AI
            tools that produce broad, unfocused answers, Studiely starts with the student&apos;s exact academic
            route — curriculum, exam board, grade level, subject and topic — then generates revision support that
            is aligned to how they are actually being assessed.
          </p>
          <p>
            The platform brings four core study tools into one place: Summary Notes, Flashcards, Quiz and Exam
            Practice. Students move through the full revision cycle — from first understanding a concept, through
            to exam-style practice — without leaving the app or switching between separate resources.
          </p>
          <p>
            Studiely supports five major curriculum systems: British (IGCSE and GCSE), International Baccalaureate
            (IB), US, Canadian and Australian. That makes it one of the most curriculum-inclusive AI study
            platforms available to school students today.
          </p>
          <p>
            The platform works on web, iOS and Android — so students can revise at home, on the go, or anywhere
            in between.
          </p>
        </>
      ),
    },
    {
      question: "Who is Studiely designed for?",
      schemaText:
        "Studiely is designed for students from Grade 1 through Grade 12 who want structured, curriculum-specific study support rather than generic content. This covers primary through pre-university learners across all five supported curriculum systems. It is especially well-suited for students studying under the British curriculum (IGCSE, GCSE, A Level pathways), the International Baccalaureate (IB PYP, MYP and Diploma Programme), the US curriculum (AP courses and Common Core-aligned content), the Canadian curriculum (province-aligned content from Grade 1 through Grade 12) and the Australian curriculum (NAPLAN, HSC, VCE, QCE, WACE, SACE, TCE, ACT SSC, NTCET and ATAR). Students in international schools, homeschool environments and those preparing for high-stakes exams independently will find Studiely particularly useful — because it removes the need to search for and filter revision materials from multiple sources. Everything is generated to match the student's specific route. Studiely is also the right platform for students who cannot access or afford private tutoring. Quality AI-powered revision support should not be a privilege. Studiely exists to change that.",
      answer: (
        <>
          <p>
            Studiely is designed for students from Grade 1 through Grade 12 who want structured,
            curriculum-specific study support rather than generic content. This covers primary through
            pre-university learners across all five supported curriculum systems.
          </p>
          <p>It is especially well-suited for students studying under</p>
          <ul>
            <li>The British curriculum (IGCSE, GCSE, A Level pathways)</li>
            <li>The International Baccalaureate (IB PYP, MYP and Diploma Programme)</li>
            <li>The US curriculum (AP courses and Common Core-aligned content)</li>
            <li>The Canadian curriculum (province-aligned content from Grade 1 through Grade 12)</li>
            <li>
              The Australian curriculum (NAPLAN, HSC, VCE, QCE, WACE, SACE, TCE, ACT SSC, NTCET and ATAR)
            </li>
          </ul>
          <p>
            Students in international schools, homeschool environments and those preparing for high-stakes exams
            independently will find Studiely particularly useful — because it removes the need to search for and
            filter revision materials from multiple sources. Everything is generated to match the student&apos;s
            specific route.
          </p>
          <p>
            Studiely is also the right platform for students who cannot access or afford private tutoring. Quality
            AI-powered revision support should not be a privilege. Studiely exists to change that.
          </p>
        </>
      ),
    },
    {
      question: "Is Studiely free to use?",
      schemaText:
        "Yes. Studiely includes a free plan that gives students genuine access to the platform before committing to a subscription. The free plan includes five complete generations — meaning you can generate Summary Notes, Flashcards, or a Quiz for five separate topics at no cost. No credit card is required to sign up and no trial period expires. Each free generation uses the same full AI engine as Premium, so the quality of content is identical. This is not a restricted demo. It is real revision support, offered freely, because we believe every student deserves to see what curriculum-aligned AI study looks like before deciding whether to invest further. Once the five free generations are used, students can continue with a Premium plan on monthly, three-month, six-month, or annual billing cycles. Pricing varies by region — visit our Pricing page at studiely.com to see the options available in your location.",
      answer: (
        <>
          <p>
            Yes. Studiely includes a free plan that gives students genuine access to the platform before
            committing to a subscription.
          </p>
          <p>
            The free plan includes five complete generations — meaning you can generate Summary Notes, Flashcards,
            or a Quiz for five separate topics at no cost. No credit card is required to sign up and no trial
            period expires. Each free generation uses the same full AI engine as Premium, so the quality of content
            is identical.
          </p>
          <p>
            This is not a restricted demo. It is real revision support, offered freely, because we believe every
            student deserves to see what curriculum-aligned AI study looks like before deciding whether to invest
            further.
          </p>
          <p>
            Once the five free generations are used, students can continue with a Premium plan on monthly,
            three-month, six-month, or annual billing cycles. Pricing varies by region — visit our {pricingLink} to
            see the options available in your location.
          </p>
        </>
      ),
    },
    {
      question: "What is the difference between the Free plan and Premium?",
      schemaText:
        "The Free plan gives students five complete generations to explore the platform. This is enough to generate revision materials for five topics across any of Studiely's study tools — which gives a genuine feel for the platform's quality. Premium unlocks ongoing access within a fair usage policy of 100 generations per month. For most students following a structured revision schedule, this provides substantial capacity across multiple subjects throughout the academic year. Premium users also get: Full access to all four core study tools (Summary Notes, Flashcards, Quiz, Exam Style Questions); PDF export option for offline revision; Anki-compatible flashcard downloads for spaced repetition study; Ability to regenerate and refine any output; Full access to Nyla, Studiely's built-in AI study tutor; Complete Achievements, Rewards and Refer & Earn programme access. The Exam Practice add-on is available separately for both Free and Premium users — it provides exam simulation with AI feedback and has its own independent generation pack that does not count toward the monthly limit. For students revising across multiple subjects in the lead-up to exams, Premium offers the consistent, structured study support that makes a measurable difference over time.",
      answer: (
        <>
          <p>
            The Free plan gives students five complete generations to explore the platform. This is enough to
            generate revision materials for five topics across any of Studiely&apos;s study tools — which gives a
            genuine feel for the platform&apos;s quality.
          </p>
          <p>
            Premium unlocks ongoing access within a fair usage policy of 100 generations per month. For most
            students following a structured revision schedule, this provides substantial capacity across multiple
            subjects throughout the academic year.
          </p>
          <p>Premium users also get</p>
          <ul>
            <li>Full access to all four core study tools (Summary Notes, Flashcards, Quiz, Exam Style Questions)</li>
            <li>PDF export option for offline revision</li>
            <li>Anki-compatible flashcard downloads for spaced repetition study</li>
            <li>Ability to regenerate and refine any output</li>
            <li>Full access to Nyla, Studiely&apos;s built-in AI study tutor</li>
            <li>Complete Achievements, Rewards and Refer &amp; Earn programme access</li>
          </ul>
          <p>
            The Exam Practice add-on is available separately for both Free and Premium users — it provides exam
            simulation with AI feedback and has its own independent generation pack that does not count toward the
            monthly limit.
          </p>
          <p>
            For students revising across multiple subjects in the lead-up to exams, Premium offers the consistent,
            structured study support that makes a measurable difference over time.
          </p>
        </>
      ),
    },
    {
      question: "Do I need a teacher or tutor to use Studiely?",
      schemaText:
        "No. Studiely is fully self-guided. Students can sign up, select their curriculum and subject and start generating study materials within minutes — without any teacher setup, school integration, or parental management. This makes Studiely especially useful for students revising independently during school holidays or exam season; students in international or remote environments where additional academic support is limited; students who prefer to study outside of school hours on their own schedule; and students who cannot access or afford private tutoring. Studiely's built-in AI study tutor, Nyla, provides an additional layer of on-demand support. Students can ask Nyla to clarify a concept, explain an approach to a particular question type, or guide them on how to structure revision for an upcoming exam — all without needing a teacher present. Many students also use Studiely alongside regular classroom learning — generating notes after a lesson to consolidate what was taught, or practising topic quizzes before a test. It works effectively as a standalone platform and as a classroom supplement.",
      answer: (
        <>
          <p>
            No. Studiely is fully self-guided. Students can sign up, select their curriculum and subject and start
            generating study materials within minutes — without any teacher setup, school integration, or parental
            management.
          </p>
          <p>This makes Studiely especially useful for</p>
          <ul>
            <li>Students revising independently during school holidays or exam season</li>
            <li>Students in international or remote environments where additional academic support is limited</li>
            <li>Students who prefer to study outside of school hours on their own schedule</li>
            <li>Students who cannot access or afford private tutoring</li>
          </ul>
          <p>
            Studiely&apos;s built-in AI study tutor, Nyla, provides an additional layer of on-demand support.
            Students can ask Nyla to clarify a concept, explain an approach to a particular question type, or guide
            them on how to structure revision for an upcoming exam — all without needing a teacher present.
          </p>
          <p>
            Many students also use Studiely alongside regular classroom learning — generating notes after a lesson
            to consolidate what was taught, or practising topic quizzes before a test. It works effectively as a
            standalone platform and as a classroom supplement.
          </p>
        </>
      ),
    },
    {
      question: "Which devices does Studiely work on?",
      schemaText:
        "Studiely works across all major devices and platforms. Web: Accessible on any modern web browser (Chrome, Safari, Firefox, Edge) on desktops and laptops — no software installation required. iOS: Available as an app on iPhone and iPad through the Apple App Store. Android: Available as an app on Android phones and tablets through the Google Play Store. The platform is designed to deliver the same full experience on mobile as on desktop. Students can generate summary notes, practise flashcards and take quizzes from their phone just as effectively as from a laptop. Your account and all generated content sync across devices when you are logged in, so there is no need to regenerate materials if you switch from phone to laptop during a revision session.",
      answer: (
        <>
          <p>Studiely works across all major devices and platforms.</p>
          <ul>
            <li>
              <strong className="text-navy font-semibold">Web:</strong> Accessible on any modern web browser
              (Chrome, Safari, Firefox, Edge) on desktops and laptops — no software installation required
            </li>
            <li>
              <strong className="text-navy font-semibold">iOS:</strong> Available as an app on iPhone and iPad
              through the Apple App Store
            </li>
            <li>
              <strong className="text-navy font-semibold">Android:</strong> Available as an app on Android phones
              and tablets through the Google Play Store
            </li>
          </ul>
          <p>
            The platform is designed to deliver the same full experience on mobile as on desktop. Students can
            generate summary notes, practise flashcards and take quizzes from their phone just as effectively as
            from a laptop.
          </p>
          <p>
            Your account and all generated content sync across devices when you are logged in, so there is no need
            to regenerate materials if you switch from phone to laptop during a revision session.
          </p>
        </>
      ),
    },
    {
      question: "How do I create a Studiely account?",
      schemaText:
        "Creating a Studiely account takes under two minutes. You can sign up through the Studiely website at studiely.com or through the mobile app on iOS or Android. All you need is a valid email address and a password of your choice. Once registered, you can immediately select your curriculum, subject and topic and start generating study materials. There is no waiting period, no approval process and no requirement to connect a school account. Students under 13 should have parental or guardian consent before registering, in line with our Terms of Service and applicable data protection laws.",
      answer: (
        <>
          <p>Creating a Studiely account takes under two minutes.</p>
          <p>
            You can sign up through the Studiely website at{" "}
            <Link href="/" className="text-teal hover:text-teal-dk underline underline-offset-2">
              studiely.com
            </Link>{" "}
            or through the mobile app on iOS or Android. All you need is:
          </p>
          <ul>
            <li>A valid email address</li>
            <li>A password of your choice</li>
          </ul>
          <p>
            Once registered, you can immediately select your curriculum, subject and topic and start generating
            study materials. There is no waiting period, no approval process and no requirement to connect a school
            account.
          </p>
          <p>
            Students under 13 should have parental or guardian consent before registering, in line with our{" "}
            <Link href={LEGAL_ROUTES.termsOfService} className={complianceLinkClass}>
              Terms of Service
            </Link>{" "}
            and applicable data protection laws.
          </p>
        </>
      ),
    },
    {
      question: "Can I use Studiely without an account?",
      schemaText:
        "No. An account is required to use Studiely. The platform saves your curriculum settings, tracks your generation usage, stores your revision history and manages your rewards and achievements — none of which is possible without an account. Signing up is free and takes under two minutes. You do not need to provide payment information to create an account or access the free plan. Your free plan generations are available immediately after registration.",
      answer: (
        <>
          <p>
            No. An account is required to use Studiely. The platform saves your curriculum settings, tracks your
            generation usage, stores your revision history and manages your rewards and achievements — none of
            which is possible without an account.
          </p>
          <p>
            Signing up is free and takes under two minutes. You do not need to provide payment information to create
            an account or access the free plan. Your free plan generations are available immediately after
            registration.
          </p>
        </>
      ),
    },
    {
      question: "How do I reset my password?",
      schemaText:
        'If you have forgotten your password, select "Forgot Password" on the Studiely login screen. Enter the email address linked to your account and a password reset link will be sent to you. Follow the instructions in the email to set a new password. If you are already logged in and want to update your password, go to Profile → Account Settings → Change Password. If you do not receive the reset email within a few minutes, check your spam or junk folder. If it still does not arrive, contact us through the Contact Us page at studiely.com and we will assist you within 24 hours.',
      answer: (
        <>
          <p>
            If you have forgotten your password, select &quot;Forgot Password&quot; on the Studiely login screen.
            Enter the email address linked to your account and a password reset link will be sent to you. Follow
            the instructions in the email to set a new password.
          </p>
          <p>
            If you are already logged in and want to update your password, go to Profile → Account Settings → Change
            Password.
          </p>
          <p>
            If you do not receive the reset email within a few minutes, check your spam or junk folder. If it still
            does not arrive, contact us through the{" "}
            <Link href="/contact" className="text-teal hover:text-teal-dk underline underline-offset-2">
              Contact Us
            </Link>{" "}
            page at studiely.com and we will assist you within 24 hours.
          </p>
        </>
      ),
    },
    {
      question: "Can I delete my account?",
      schemaText:
        "Yes. You can request account deletion at any time through the Account Deletion page in the Studiely Help Center. Once confirmed, all personal data and AI-generated content associated with your account will be permanently deleted in accordance with our Privacy Policy and applicable data protection regulations. This cannot be undone. We recommend downloading any revision content you wish to keep before submitting a deletion request. If you are a Premium subscriber, we also recommend cancelling your subscription first through your app store or account settings to avoid any further billing.",
      answer: (
        <>
          <p>
            Yes. You can request account deletion at any time through the{" "}
            <Link href={LEGAL_ROUTES.deleteAccount} className={complianceLinkClass}>
              Account Deletion
            </Link>{" "}
            page in the{" "}
            <Link href={LEGAL_ROUTES.legalIndex} className={complianceLinkClass}>
              Studiely Help Center
            </Link>
            .
          </p>
          <p>
            Once confirmed, all personal data and AI-generated content associated with your account will be
            permanently deleted in accordance with our{" "}
            <Link href={LEGAL_ROUTES.privacyPolicy} className={complianceLinkClass}>
              Privacy Policy
            </Link>{" "}
            and applicable data protection regulations. This cannot be undone.
          </p>
          <p>
            We recommend downloading any revision content you wish to keep before submitting a deletion request. If
            you are a Premium subscriber, we also recommend cancelling your subscription first through your app
            store or account settings to avoid any further billing.
          </p>
        </>
      ),
    },
  ],
};
