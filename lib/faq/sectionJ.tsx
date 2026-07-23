import Link from "next/link";
import type { FaqSection } from "./types";

export const sectionJ: FaqSection = {
  id: "faq-support",
  title: "J. Support, Feedback & Future Features",
  intro: "Nyla vs Contact Us, response times and the product roadmap.",
  items: [
    {
      question: "How do I get help if I have a problem?",
      schemaText:
        "Studiely offers two support routes. Nyla (AI Study Tutor) — available 24/7 inside the app for academic questions, content clarification, revision guidance and in-app feature help. Contact Us — for account issues, billing questions, technical problems, or anything requiring a response from the Studiely team at studiely.com. We respond within 24 hours. Studiely does not offer live human chat support at this time.",
      answer: (
        <>
          <p>Studiely offers two support routes depending on the type of help you need.</p>
          <p>
            <strong className="text-navy font-semibold">Nyla (AI Study Tutor)</strong> — available 24/7 inside the app
            <br />
            For academic questions, content clarification, revision guidance and in-app feature help, ask Nyla
            directly. She responds instantly and stays connected to your curriculum context.
          </p>
          <p>
            <strong className="text-navy font-semibold">Contact Us</strong> — for everything else
            <br />
            For account issues, billing questions, technical problems, or anything requiring a response from the
            Studiely team, use the{" "}
            <Link href="/contact" className="text-teal hover:text-teal-dk underline underline-offset-2">
              Contact Us
            </Link>{" "}
            page at studiely.com. We respond to all enquiries within 24 hours.
          </p>
          <p>
            Please note that Studiely does not offer live human chat support at this time. The Contact Us form is the
            direct route to our support team for all non-academic queries.
          </p>
        </>
      ),
    },
    {
      question: "What can Nyla help me with?",
      schemaText:
        "Nyla is Studiely's built-in AI study tutor for academic and in-app support — not billing or account issues. Nyla can help with explaining concepts, clarifying generated content, exam question approaches, revision strategies and how to use study tools. For account, billing, or technical issues, use Contact Us.",
      answer: (
        <>
          <p>
            Nyla is Studiely&apos;s built-in AI study tutor and is designed specifically for academic and in-app
            support — not billing or account issues.
          </p>
          <p>Nyla can help with</p>
          <ul>
            <li>Explaining a concept from your curriculum that you found confusing in generated content</li>
            <li>Clarifying how to approach a specific type of exam question</li>
            <li>Suggesting revision strategies for an upcoming assessment</li>
            <li>Answering questions about how to use Studiely&apos;s study tools effectively</li>
            <li>Providing in-context academic guidance during a study session</li>
          </ul>
          <p>
            Nyla is available 24 hours a day, 7 days a week and responds instantly — including the night before an
            exam when a student needs a quick clarification and no teacher is available. This kind of on-demand
            academic support was previously only accessible through private tutoring.
          </p>
          <p>
            For account, billing, or technical issues, please use the{" "}
            <Link href="/contact" className="text-teal hover:text-teal-dk underline underline-offset-2">
              Contact Us
            </Link>{" "}
            form.
          </p>
        </>
      ),
    },
    {
      question: "How quickly does Studiely respond to support requests?",
      schemaText:
        "The Studiely support team aims to respond to all Contact Us enquiries within 24 hours. During peak periods, the wait time may approach the full 24 hours. For immediate academic support, Nyla is available 24/7 within the platform. If your enquiry is urgent, note this clearly in your message and we will prioritise accordingly.",
      answer: (
        <>
          <p>
            The Studiely support team aims to respond to all Contact Us enquiries within 24 hours. During peak periods,
            the wait time may approach the full 24 hours, but we are committed to maintaining this as the maximum
            response time.
          </p>
          <p>
            For immediate academic support at any time of day, Nyla is available 24/7 within the platform and responds
            instantly.
          </p>
          <p>
            If your enquiry is urgent, note this clearly in your message and we will prioritise accordingly.
          </p>
        </>
      ),
    },
    {
      question: "Will Studiely add new features and expand curriculum coverage?",
      schemaText:
        "Yes. Studiely is actively developed. Planned additions include teacher tools for classroom use, assignments and progress tracking. The platform is also continuously expanding subject and topic coverage. Feedback is welcome through the Contact Us page.",
      answer: (
        <>
          <p>
            Yes. Studiely is actively developed and the team is working on several fronts simultaneously.
          </p>
          <p>
            Planned additions include teacher tools — which will allow educators to use Studiely as a classroom
            resource, assign content to students and track progress. This will complement the existing
            student-focused platform and create a stronger connection between lesson delivery and post-class revision.
          </p>
          <p>
            The platform is also continuously expanding subject and topic coverage within existing curriculum systems,
            improving the depth and accuracy of AI outputs and building new tools based on how students and educators
            actually use the platform.
          </p>
          <p>
            If you have a specific feature request, curriculum gap, or subject you would like to see prioritised, we
            welcome feedback through the{" "}
            <Link href="/contact" className="text-teal hover:text-teal-dk underline underline-offset-2">
              Contact Us
            </Link>{" "}
            page. Student and teacher input directly shapes Studiely&apos;s product roadmap.
          </p>
        </>
      ),
    },
  ],
};
