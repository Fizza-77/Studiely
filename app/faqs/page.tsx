import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import { STUDIELY_APP } from "@/lib/appUrls";
import { FaqItem } from "@/components/FaqItem";
import { PageHeader } from "@/components/PageHeader";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { FAQ_PAGE_JSON_LD } from "@/lib/faqSchema";

const faqTitle = "Studiely FAQs — AI Study Assistant, IGCSE Tutor & Student Tools";
const faqDescription =
  "Answers about Studiely: AI learning, flashcards, exam practice, IGCSE and international curricula, " +
  "free credits, Premium plans, Nyla AI tutor, and account security — for students and parents.";

export const metadata: Metadata = {
  title: faqTitle,
  description: faqDescription,
  alternates: { canonical: `${SITE_URL}/faqs` },
  openGraph: {
    title: "Studiely FAQs — AI Study Tools & Exam Practice",
    description: faqDescription,
    url: `${SITE_URL}/faqs`,
    type: "website",
    siteName: "Studiely",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studiely FAQs — AI Learning & Student Tools",
    description: faqDescription,
  },
};

const breadcrumbSchema = buildBreadcrumbSchema("FAQs", "/faqs");

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_PAGE_JSON_LD) }}
      />
      <PageHeader
        label="Support & Help"
        title="Frequently Asked Questions (FAQ)"
        sub="Find answers about Studiely AI study tools, pricing, notes generator, quizzes, flashcards, and exam-style practice questions."
        variant="compact"
      />
      <main className="bg-bg-base min-h-screen pt-[32px] pb-[40px]">
        <div className="wrap max-w-[1120px] mx-auto px-4">
          <section
            className="mb-8 bg-white border border-border-default rounded-xl p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.03)]"
            aria-labelledby="faq-intro-heading"
          >
            <h2 id="faq-intro-heading" className="font-serif text-[20px] md:text-[22px] text-navy mb-3">
              AI study assistant &amp; exam prep — how Studiely helps students
            </h2>
            <div className="text-[13px] md:text-[14px] text-body leading-[1.75] space-y-4">
              <p>
                Studiely is an{" "}
                <strong className="font-semibold text-navy">AI study assistant</strong> built for real school
                workloads: revision notes,{" "}
                <Link href="/features" className="text-teal hover:text-teal-dk underline underline-offset-2">
                  flashcards
                </Link>
                , quizzes, and{" "}
                <strong className="font-semibold text-navy">exam practice</strong> aligned to your curriculum and exam
                board. Whether you are preparing for{" "}
                <strong className="font-semibold text-navy">IGCSE</strong>, GCSE, IB, AP, or national programs, the
                tools are designed to feel like{" "}
                <strong className="font-semibold text-navy">student tools</strong> you can use every week—not generic
                chat that ignores your syllabus.
              </p>
              <p>
                This FAQ explains how accounts, credits, and subscriptions work; how{" "}
                <Link href="/nyla" className="text-teal hover:text-teal-dk underline underline-offset-2">
                  Nyla
                </Link>
                , our built-in tutor, fits into revision; and how Exam Practice and fair-usage limits apply. For plan
                options and billing, see our{" "}
                <a
                  href={STUDIELY_APP.pricing}
                  className="text-teal hover:text-teal-dk underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pricing page
                </a>
                . For study tips and curriculum guides, browse the{" "}
                <Link href="/blog" className="text-teal hover:text-teal-dk underline underline-offset-2">
                  Studiely blog
                </Link>
                . New here? Start from the{" "}
                <Link href="/" className="text-teal hover:text-teal-dk underline underline-offset-2">
                  homepage
                </Link>{" "}
                to explore features, or jump into the sections below.
              </p>
            </div>
          </section>
          {/*    <SectionHeader
            label="Support & Help"
            title="Studiely — Frequently Asked Questions (FAQ)"
            sub="Version: v1.3 (Launch) — Updated 25th March 2026"
          />

          {/* A. Getting Started & Account */}
          <section
            aria-labelledby="faq-getting-started"
            className="bg-white border border-border-default rounded-xl p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.03)] mb-8"
          >
            <h2
              id="faq-getting-started"
              className="text-[18px] md:text-[20px] font-serif text-navy mb-1.5"
            >
              A. Getting Started &amp; Account
            </h2>
            <p className="text-[12px] text-muted mb-5">
              Learn what Studiely is, who it is for, and how accounts, access, and security work.
            </p>
            <dl className="space-y-3">
              <FaqItem question="What is Studiely?">
                Studiely is an AI-powered learning platform designed to help students understand concepts, revise
                effectively, and prepare for assessments across multiple international curricula using smart study
                tools.
              </FaqItem>
              <FaqItem question="Who is Studiely for?">
                Studiely is designed for students studying under British, IB, American, Canadian, and Australian
                curricula.
              </FaqItem>
              <FaqItem question="Is Studiely free?">
                Yes. Studiely offers a free Starter experience so students can explore the platform before upgrading.
                Free access includes 5 free credits total.
              </FaqItem>
              <FaqItem question="What’s the difference between Free and Premium?">
                Free includes 5 total credits with full access during that initial usage. Premium unlocks ongoing access
                to the full Study Tools experience (notes, flashcards, quizzes, and exam-style questions) within a fair
                usage policy, plus exports and priority support.
              </FaqItem>
              <FaqItem question="Do I need a teacher to use Studiely?">
                No. Studiely is fully self-guided and can be used independently by students.
              </FaqItem>
              <FaqItem question="Which devices are supported?">
                Studiely works on web browsers and mobile devices (Android and iOS).
              </FaqItem>
              <FaqItem question="Is Studiely available on web and mobile?">
                Yes. You can access Studiely on the web and through our mobile applications.
              </FaqItem>
              <FaqItem question="How do I create an account?">
                You can sign up using your email address and create a secure password directly in the app or on the
                website.
              </FaqItem>
              <FaqItem question="Can I use Studiely without signing up?">
                No. An account is required to save progress, manage credits, and ensure data security.
              </FaqItem>
              <FaqItem question="How do I change my password?">
                Go to Profile → Account Settings → Change Password and follow the instructions.
              </FaqItem>
              <FaqItem question="I forgot my password — what do I do?">
                Use the “Forgot Password” option on the login screen to reset your password via email.
              </FaqItem>
              <FaqItem question="Can I delete my account?">
                Yes. You can request account deletion through the Account Deletion page listed in our Help Center.
              </FaqItem>
              <FaqItem question="What happens to my data if I delete my account?">
                All personal data and generated content associated with your account are permanently deleted in
                accordance with our Privacy Policy.
              </FaqItem>
            </dl>
          </section>

          {/* B. Curriculum & Academic Scope */}
          <section
            aria-labelledby="faq-curriculum"
            className="bg-white border border-border-default rounded-xl p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.03)] mb-8"
          >
            <h2
              id="faq-curriculum"
              className="text-[18px] md:text-[20px] font-serif text-navy mb-1.5"
            >
              B. Curriculum &amp; Academic Scope
            </h2>
            <p className="text-[12px] text-muted mb-5">
              Understand which curricula, grades, and exam boards Studiely currently supports.
            </p>
            <dl className="space-y-3">
              <FaqItem question="Which curricula does Studiely support?">
                Studiely supports: British (IGCSE / GCSE), IB (PYP, MYP, DP), American, Canadian, and Australian.
              </FaqItem>
              <FaqItem question="Which grades and year levels are covered?">
                Coverage varies by curriculum and subject, following official syllabus structures.
              </FaqItem>
              <FaqItem question="Can I switch between curricula?">
                Yes. You can change your curriculum selection at any time from the settings or credit screen.
              </FaqItem>
              <FaqItem question="Is content aligned with official exam boards?">
                Yes. Content is aligned with official curriculum frameworks and exam board expectations.
              </FaqItem>
              <FaqItem question="Does Studiely support IGCSE exam preparation?">
                Yes. Studiely includes exam-focused tools specifically designed for IGCSE and similar exam-based
                curricula.
              </FaqItem>
              <FaqItem question="Does Studiely support IB (PYP / MYP / DP)?">
                Yes. Studiely follows IB philosophy strictly: PYP focuses on conceptual understanding (no exams), while
                MYP and DP include assessment-aligned content where appropriate.
              </FaqItem>
              <FaqItem question="Why are exam-style questions disabled for PYP?">
                IB PYP does not have formal examinations. Studiely respects IB philosophy and avoids exam-focused
                content where it is not appropriate.
              </FaqItem>
              <FaqItem question="Can I study multiple subjects at once?">
                Yes. You can generate content for different subjects and topics as needed.
              </FaqItem>
            </dl>
          </section>

          {/* C. Feature-Specific FAQs */}
          <section
            aria-labelledby="faq-features"
            className="bg-white border border-border-default rounded-xl p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.03)] mb-8"
          >
            <h2
              id="faq-features"
              className="text-[18px] md:text-[20px] font-serif text-navy mb-1.5"
            >
              C. Feature-Specific FAQs
            </h2>
            <p className="text-[12px] text-muted mb-5">
              Learn how each core study tool works, from Summary Notes to Exam Practice.
            </p>

            <div className="space-y-6">
              {/* Summary Notes */}
              <div>
                <h3 className="font-semibold text-[14px] text-navy mb-1.5">Summary Notes</h3>
                <dl className="space-y-3">
                  <FaqItem question="What are Summary Notes?">
                    Clear, structured explanations of key concepts, definitions, and formulas for quick understanding.
                  </FaqItem>
                  <FaqItem question="How long are the notes?">
                    Length varies by plan, ranging from around 250 to 600 words (and may vary by topic).
                  </FaqItem>
                  <FaqItem question="Are they exam-oriented or concept-based?">
                    They are concept-first, with exam relevance added where appropriate.
                  </FaqItem>
                  <FaqItem question="Can I regenerate notes?">
                    Yes. You can regenerate content to improve clarity or depth.
                  </FaqItem>
                  <FaqItem question="Can I export notes as PDF?">
                    Yes. PDF, Word, and print-friendly exports are available on Premium.
                  </FaqItem>
                  <FaqItem question="Are notes plagiarism-free?">
                    Yes. All content is original and AI-generated uniquely for each request.
                  </FaqItem>
                </dl>
              </div>

              {/* Flashcards */}
              <div>
                <h3 className="font-semibold text-[14px] text-navy mb-1.5">Flashcards</h3>
                <dl className="space-y-3">
                  <FaqItem question="How do flashcards work?">
                    They present bite-sized questions and answers to support memorisation and revision.
                  </FaqItem>
                  <FaqItem question="How many flashcards are generated?">
                    Typically 10–30 depending on your plan and request.
                  </FaqItem>
                  <FaqItem question="Are flashcards downloadable?">
                    Yes. Flashcards are downloadable, including Anki-compatible formats on Premium.
                  </FaqItem>
                </dl>
              </div>

              {/* Quiz */}
              <div>
                <h3 className="font-semibold text-[14px] text-navy mb-1.5">Quiz</h3>
                <dl className="space-y-3">
                  <FaqItem question="Are quizzes exam-style?">
                    Yes, for exam-based curricula. PYP quizzes focus on understanding, not exams.
                  </FaqItem>
                  <FaqItem question="Do quizzes include answers?">
                    Yes, with instant feedback and explanations.
                  </FaqItem>
                  <FaqItem question="Can I retake quizzes?">
                    Yes. You can regenerate or retry quizzes anytime.
                  </FaqItem>
                  <FaqItem question="How is difficulty decided?">
                    Based on your selected difficulty level and curriculum standards.
                  </FaqItem>
                </dl>
              </div>

              {/* Exam Focus */}
              <div>
                <h3 className="font-semibold text-[14px] text-navy mb-1.5">Exam Focus (Premium Only)</h3>
                <dl className="space-y-3">
                  <FaqItem question="What is Exam Focus?">
                    A breakdown of how a topic appears in exams and how marks are awarded.
                  </FaqItem>
                  <FaqItem question="Which exams does it cover?">
                    Primarily IGCSE, GCSE, MYP, DP, and equivalent systems.
                  </FaqItem>
                  <FaqItem question="Why is it not available for all curricula?">
                    Some curricula do not use formal exams.
                  </FaqItem>
                </dl>
              </div>

              {/* Common Mistakes */}
              <div>
                <h3 className="font-semibold text-[14px] text-navy mb-1.5">Common Mistakes</h3>
                <dl className="space-y-3">
                  <FaqItem question="What kind of mistakes are shown?">
                    Frequent student errors and misconceptions related to the topic.
                  </FaqItem>
                  <FaqItem question="Are these based on real exams?">
                    They are informed by common examiner observations and student patterns.
                  </FaqItem>
                </dl>
              </div>

              {/* Worked Examples */}
              <div>
                <h3 className="font-semibold text-[14px] text-navy mb-1.5">Worked Examples</h3>
                <dl className="space-y-3">
                  <FaqItem question="Are solutions step-by-step?">
                    Yes. Each example shows a clear method from start to finish.
                  </FaqItem>
                  <FaqItem question="Do examples include marking guidance?">
                    Yes, where exam marking is applicable.
                  </FaqItem>
                </dl>
              </div>

              {/* Exam Practice */}
              <div>
                <h3 className="font-semibold text-[14px] text-navy mb-1.5">Exam Practice (Add-on)</h3>
                <dl className="space-y-3">
                  <FaqItem question="Is Exam Practice included in Premium?">
                    No. Exam Practice is offered as a separate in-app purchase (add-on).
                  </FaqItem>
                  <FaqItem question="How does the Exam Practice pack work?">
                    You can purchase 50 Exam Practice credits for a fixed price of $50 USD. These credits do not expire.
                    Once you use them all, you can purchase the pack again.
                  </FaqItem>
                  <FaqItem question="Do Exam Practice credits count in my monthly fair-usage cap?">
                    No. Exam Practice uses its own separate credit pack and does not affect your monthly Study Tools
                    limit.
                  </FaqItem>
                </dl>
              </div>

              {/* Rewards & Referrals */}
              <div>
                <h3 className="font-semibold text-[14px] text-navy mb-1.5">
                  Rewards, Achievements &amp; Referrals
                </h3>
                <dl className="space-y-3">
                  <FaqItem question="What are Achievements?">
                    Achievements track your learning streaks and mastery progress, and unlock medals, certificates, and
                    rewards as you improve.
                  </FaqItem>
                  <FaqItem question="What rewards can I earn?">
                    Depending on your milestones, you can unlock profile badges/frames, certificates, bonus Writing
                    Practice credits, discount coupons, and referral rewards. Example streak rewards: 15 days unlocks a
                    badge, 30 days unlocks an exclusive profile frame, 60 days unlocks +5 Writing Practice credits, and
                    90 days unlocks +10 Writing Practice credits plus a 20% discount coupon and a Platinum badge.
                  </FaqItem>
                  <FaqItem question="Do certificates give rewards too?">
                    Certificates themselves are a reward, and some milestones can include micro-rewards. For example, at
                    70% mastery you may unlock a “Topic Pro” certificate (+1 Writing Practice credit), and at 90%
                    mastery you may unlock a “Mastery Award” with a celebration screen and share prompt.
                  </FaqItem>
                  <FaqItem question="Where do I see my medals, certificates, and rewards?">
                    You can view them on the Dashboard under “My Achievements” and in Profile → Achievements (Medals /
                    Certificates / Rewards).
                  </FaqItem>
                  <FaqItem question="How does Refer & Earn work?">
                    You can invite friends from Profile → Refer &amp; Earn. The app will show your target (for example,
                    “Invite 2 more friends to earn 1 FREE month”). When you achieve the target, you’ll see a
                    celebration and the reward will show as activated with an end date.
                  </FaqItem>
                </dl>
              </div>
            </div>
          </section>

          {/* D. AI & Content Generation */}
          <section
            aria-labelledby="faq-ai"
            className="bg-white border border-border-default rounded-xl p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.03)] mb-8"
          >
            <h2
              id="faq-ai"
              className="text-[18px] md:text-[20px] font-serif text-navy mb-1.5"
            >
              D. AI &amp; Content Generation
            </h2>
            <p className="text-[12px] text-muted mb-5">
              How Studiely uses AI to generate curriculum-aligned content and how you can control it.
            </p>
            <dl className="space-y-3">
              <FaqItem question="How does Studiely generate content?">
                Studiely uses advanced AI models guided by curriculum-specific rules and prompts.
              </FaqItem>
              <FaqItem question="Is AI content accurate?">
                Content is designed to be curriculum-aligned and educationally sound. You can regenerate or refine
                outputs anytime.
              </FaqItem>
              <FaqItem question="Why do outputs differ sometimes?">
                AI adapts to your inputs, difficulty level, and curriculum selection.
              </FaqItem>
              <FaqItem question="Can I control difficulty level?">
                Yes. You can choose easy, medium and hard levels.
              </FaqItem>
            </dl>
          </section>

          {/* E. Usage Limits & Fair Usage Policy */}
          <section
            aria-labelledby="faq-usage"
            className="bg-white border border-border-default rounded-xl p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.03)] mb-8"
          >
            <h2
              id="faq-usage"
              className="text-[18px] md:text-[20px] font-serif text-navy mb-1.5"
            >
              E. Usage Limits &amp; Fair Usage Policy
            </h2>
            <p className="text-[12px] text-muted mb-5">
              Understand how credits, monthly limits, and fair usage work for Study Tools.
            </p>
            <dl className="space-y-3">
              <FaqItem question='What does “100 credits per month” mean?'>
                Each time you generate content (or regenerate it) in the main Study Tools counts as one credit. Study
                Tools include Summary Notes, Flashcards, Quiz, and Exam Style Questions. Premium access is “unlimited”
                within a fair usage policy, capped at 100 total credits per month across these tools combined (not 100
                for each tool).
              </FaqItem>
              <FaqItem question="What happens if I exceed my limit?">
                If you reach the monthly fair-usage cap, you’ll be asked to wait until your next monthly reset to
                continue generating in the main Study Tools.
              </FaqItem>
              <FaqItem question="Do regenerations count?">
                Yes. Each regeneration counts as a new credit.
              </FaqItem>
            </dl>
          </section>

          {/* F. Pricing, Payments & Subscriptions */}
          <section
            aria-labelledby="faq-pricing"
            className="bg-white border border-border-default rounded-xl p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.03)] mb-8"
          >
            <h2
              id="faq-pricing"
              className="text-[18px] md:text-[20px] font-serif text-navy mb-1.5"
            >
              F. Pricing, Payments &amp; Subscriptions
            </h2>
            <p className="text-[12px] text-muted mb-5">
              Details on Free vs Premium, subscription terms, and the Exam Practice add-on.
            </p>
            <dl className="space-y-3">
             <FaqItem question="How much does Studiely cost?">
  <p>
    Studiely offers Free and Premium plans with monthly, quarterly (3 months),
    biannual (6 months), and yearly options.
  </p>

  <p className="mt-2">Free plan includes 5 free credits total.</p>

  <p className="mt-4">
    For full{" "}
    <a href={STUDIELY_APP.pricing} className="underline" target="_blank" rel="noopener noreferrer">
      pricing
    </a>
    , please see the pricing page.
  </p>
</FaqItem>
              <FaqItem question="Can I cancel my subscription?">
                Yes. You can cancel anytime through your app store subscription settings or your account settings (web).
              </FaqItem>
              <FaqItem question="Will I be charged automatically?">
                Yes. Subscriptions renew automatically unless cancelled before the renewal date.
              </FaqItem>
              <FaqItem question="Are refunds available?">
                Refunds are handled according to platform policies (Google Play, Apple App Store, or Web).
              </FaqItem>
            </dl>
          </section>

          {/* G. Privacy, Security & Compliance */}
          <section
            aria-labelledby="faq-privacy"
            className="bg-white border border-border-default rounded-xl p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.03)] mb-8"
          >
            <h2
              id="faq-privacy"
              className="text-[18px] md:text-[20px] font-serif text-navy mb-1.5"
            >
              G. Privacy, Security &amp; Compliance
            </h2>
            <p className="text-[12px] text-muted mb-5">
              How Studiely handles your data, privacy, and account deletion requests.
            </p>
            <dl className="space-y-3">
              <FaqItem question="Is my data safe?">
                Yes. Studiely follows strict data protection and security practices.
              </FaqItem>
              <FaqItem question="Does Studiely share my data?">
                No personal data is sold or shared without consent.
              </FaqItem>
              <FaqItem question="Where can I read the Privacy Policy?">
                The Privacy Policy is available in the Help Center and website footer.
              </FaqItem>
              <FaqItem question="How do I request account deletion?">
                Use the Account Deletion Request page linked in the Help Center.
              </FaqItem>
            </dl>
          </section>

          {/* H. Technical Issues & Troubleshooting */}
          <section
            aria-labelledby="faq-technical"
            className="bg-white border border-border-default rounded-xl p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.03)] mb-8"
          >
            <h2
              id="faq-technical"
              className="text-[18px] md:text-[20px] font-serif text-navy mb-1.5"
            >
              H. Technical Issues &amp; Troubleshooting
            </h2>
            <p className="text-[12px] text-muted mb-5">
              Common issues, performance questions, and how to report bugs.
            </p>
            <dl className="space-y-3">
              <FaqItem question="Content is not generating — what should I do?">
                Check your internet connection and retry. If the issue persists, contact support.
              </FaqItem>
              <FaqItem question="The app is slow — how can I fix it?">
                Ensure you’re using the latest app version and a stable connection.
              </FaqItem>
              <FaqItem question="How do I report a bug?">
                Use the support chat or contact form in the Help Center.
              </FaqItem>
            </dl>
          </section>

          {/* I. Feedback, Support & Future Features */}
          <section
            aria-labelledby="faq-feedback"
            className="bg-white border border-border-default rounded-xl p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.03)]"
          >
            <h2
              id="faq-feedback"
              className="text-[18px] md:text-[20px] font-serif text-navy mb-1.5"
            >
              I. Feedback, Support &amp; Future Features
            </h2>
            <p className="text-[12px] text-muted mb-5">
              How to get help, talk to a human, and what&apos;s planned for the future.
            </p>
            <dl className="space-y-3">
              <FaqItem question="How do I contact support?">
                Premium users can chat instantly. Free users can submit a support request form.
              </FaqItem>
              <FaqItem question="Can I talk to a real person?">
                Yes. Human support is available for complex or account-related issues.
              </FaqItem>
              <FaqItem question="How fast does support respond?">
                AI responses are instant. Human response times vary based on availability.
              </FaqItem>
              <FaqItem question="Will teacher features be added?">
                Yes. Teacher tools are planned for future releases.
              </FaqItem>
            </dl>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}