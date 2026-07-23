import Link from "next/link";
import type { FaqSection } from "./types";

export const sectionI: FaqSection = {
  id: "faq-technical",
  title: "I. Technical Issues & Troubleshooting",
  intro: "Generation issues, performance and reporting bugs.",
  items: [
    {
      question: "Content is not generating — what should I do?",
      schemaText:
        "If Studiely is not generating content, check: (1) Internet connection — try switching Wi-Fi and mobile data; (2) Generation limit — if you have used all free generations or reached your monthly Premium limit, wait for reset or upgrade; (3) App or browser outdated — update the app or use a current browser; (4) Temporary service issue — wait and retry. If none resolve the issue, contact us through the Contact Us page at studiely.com within 24 hours.",
      answer: (
        <>
          <p>If Studiely is not generating content, the most common causes and their solutions are:</p>
          <ol>
            <li>
              <strong className="text-navy font-semibold">Internet connection:</strong> Ensure your device has a
              stable connection. Content generation requires a live connection to Studiely&apos;s servers. Try
              switching between Wi-Fi and mobile data to identify whether the issue is connection-related.
            </li>
            <li>
              <strong className="text-navy font-semibold">Generation limit reached:</strong> If you have used all five
              free generations or reached your monthly Premium limit, new content cannot be generated until the limit
              resets or you upgrade. Check your usage in your account dashboard.
            </li>
            <li>
              <strong className="text-navy font-semibold">App or browser outdated:</strong> Ensure you are using the
              latest version of the Studiely app (check your App Store or Play Store) or a current version of your web
              browser.
            </li>
            <li>
              <strong className="text-navy font-semibold">Temporary service issue:</strong> Occasionally, high demand
              or maintenance may cause brief delays. Waiting a few minutes and retrying usually resolves this.
            </li>
          </ol>
          <p>
            If none of these steps resolve the issue, contact us through the{" "}
            <Link href="/contact" className="text-teal hover:text-teal-dk underline underline-offset-2">
              Contact Us
            </Link>{" "}
            page at studiely.com. We will investigate and respond within 24 hours.
          </p>
        </>
      ),
    },
    {
      question: "The app is running slowly — how do I fix it?",
      schemaText:
        "Try: (1) Update the app from the App Store or Play Store; (2) Check your internet connection; (3) Close background apps on mobile; (4) Clear the app cache on Android or reinstall on iOS; (5) Restart your device. If problems persist, report through Contact Us.",
      answer: (
        <>
          <p>If the Studiely app is running slowly, try the following steps in order:</p>
          <ol>
            <li>
              <strong className="text-navy font-semibold">Update the app:</strong> Install the latest version from the
              App Store or Play Store. Updates frequently include performance improvements.
            </li>
            <li>
              <strong className="text-navy font-semibold">Check your internet connection:</strong> A slow or unstable
              connection directly affects generation speed. Switch to a faster network if available.
            </li>
            <li>
              <strong className="text-navy font-semibold">Close background apps:</strong> On mobile devices, closing
              other running apps frees memory and can improve performance.
            </li>
            <li>
              <strong className="text-navy font-semibold">Clear the app cache:</strong> On Android, clear the cache
              through device app settings. On iOS, reinstalling the app clears cached data.
            </li>
            <li>
              <strong className="text-navy font-semibold">Restart your device:</strong> A simple restart resolves many
              temporary performance issues.
            </li>
          </ol>
          <p>
            If performance problems persist after these steps, please report them through the{" "}
            <Link href="/contact" className="text-teal hover:text-teal-dk underline underline-offset-2">
              Contact Us
            </Link>{" "}
            page so the team can investigate.
          </p>
        </>
      ),
    },
    {
      question: "How do I report a bug?",
      schemaText:
        "Report bugs through the Contact Us page at studiely.com. Include: A description of what happened and what you expected; The device and operating system; Whether you are using the app or web version; Any error messages you saw. The team reviews all bug reports and responds within 24 hours.",
      answer: (
        <>
          <p>
            If you encounter a bug or unexpected behaviour in Studiely, please report it through the{" "}
            <Link href="/contact" className="text-teal hover:text-teal-dk underline underline-offset-2">
              Contact Us
            </Link>{" "}
            page at studiely.com.
          </p>
          <p>When submitting a bug report, it is helpful to include</p>
          <ul>
            <li>A description of what happened and what you expected to happen</li>
            <li>The device and operating system you are using (for example, iPhone 15, iOS 17)</li>
            <li>Whether you are using the app or web version</li>
            <li>Any error messages you saw</li>
          </ul>
          <p>
            Our team reviews all bug reports and uses them to improve the platform. We will acknowledge your report and
            respond within 24 hours.
          </p>
        </>
      ),
    },
  ],
};
