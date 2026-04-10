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

export const sectionF: FaqSection = {
  id: "faq-pricing",
  title: "F. Pricing, Plans & Subscriptions",
  intro: "Costs, geo-based pricing, discounts, cancellation, renewals, refunds, and Exam Practice.",
  items: [
    {
      question: "How much does Studiely cost?",
      schemaText:
        "Studiely offers a free plan and several Premium subscription options. The free plan includes five complete generations at no cost — no credit card required. Premium plans are available on monthly, three-month, six-month, and annual billing cycles. Because Studiely applies geo-based pricing, the exact cost reflects your location. To see current pricing, visit studiely.com. The Exam Practice add-on is also available as a separate purchase, providing 50 dedicated exam simulation generations that do not expire and are independent of the monthly Premium limit.",
      answer: (
        <>
          <p>
            Studiely offers a free plan and several Premium subscription options designed to suit different budgets
            and study needs.
          </p>
          <p>
            The free plan includes five complete generations at no cost — no credit card required. This gives
            students genuine access to the platform before committing to a subscription.
          </p>
          <p>
            Premium plans are available on monthly, three-month, six-month, and annual billing cycles. Because Studiely
            applies geo-based pricing, the exact cost you see will reflect your location — the platform is designed to
            be accessible to students across different countries and economies, not just those in the highest-income
            markets.
          </p>
          <p>
            To see current pricing, please visit the {pricingLink} at studiely.com.
          </p>
          <p>
            The Exam Practice add-on is also available as a separate purchase, providing 50 dedicated exam simulation
            generations that do not expire and are independent of the monthly Premium limit.
          </p>
        </>
      ),
    },
    {
      question: "Why does Studiely use geo-based pricing?",
      schemaText:
        "Studiely applies geo-based pricing because we believe quality AI-powered revision support should be accessible to students around the world — not just those in high-income markets. Geo-based pricing means that the cost you see when you visit studiely.com reflects purchasing power in your region. To see the pricing available in your location, visit studiely.com/pricing.",
      answer: (
        <>
          <p>
            Studiely applies geo-based pricing because we believe quality AI-powered revision support should be
            accessible to students around the world — not just those in high-income markets.
          </p>
          <p>
            A student in the UK, the US, or Australia faces different economic circumstances from a student in
            Southeast Asia, the Middle East, or Latin America. Charging a single global price would make Studiely
            unaffordable for many of the students who need it most.
          </p>
          <p>
            Geo-based pricing means that the cost you see when you visit studiely.com reflects purchasing power in
            your region. This approach is how Studiely stays true to its mission: to give every student access to
            curriculum-specific, high-quality revision support, regardless of background.
          </p>
          <p>
            To see the pricing available in your location, visit{" "}
            <a
              href={STUDIELY_APP.pricing}
              className="text-teal hover:text-teal-dk underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              studiely.com/pricing
            </a>
            .
          </p>
        </>
      ),
    },
    {
      question: "Is there a discount for longer subscription plans?",
      schemaText:
        "Yes. Studiely's three-month, six-month, and annual plans offer a lower effective monthly cost compared to the monthly plan. The annual plan typically provides the best value per month for students who plan to use Studiely consistently across the academic year. Current pricing and plan comparisons are shown on the Pricing page at studiely.com.",
      answer: (
        <>
          <p>
            Yes. Studiely&apos;s three-month, six-month, and annual plans offer a lower effective monthly cost
            compared to the monthly plan. The annual plan typically provides the best value per month for students who
            plan to use Studiely consistently across the academic year.
          </p>
          <p>
            Current pricing and plan comparisons are shown on the {pricingLink}, where you can see all available
            options in your region.
          </p>
        </>
      ),
    },
    {
      question: "Can I cancel my subscription?",
      schemaText:
        "Yes. You can cancel your Premium subscription at any time without penalty. If you subscribed through the iOS App Store or Google Play Store, manage and cancel your subscription through your device's subscription settings. If you subscribed on the web, cancel through your account settings on studiely.com. When you cancel, your Premium access continues until the end of the current billing period. Your account and any saved content remain accessible on the free plan after cancellation.",
      answer: (
        <>
          <p>
            Yes. You can cancel your Premium subscription at any time without penalty.
          </p>
          <p>
            If you subscribed through the iOS App Store or Google Play Store, manage and cancel your subscription
            through your device&apos;s subscription settings. If you subscribed on the web, cancel through your account
            settings on studiely.com.
          </p>
          <p>
            When you cancel, your Premium access continues until the end of the current billing period. You will not
            be charged for the next cycle. Your account and any saved content remain accessible on the free plan after
            cancellation.
          </p>
        </>
      ),
    },
    {
      question: "Do subscriptions renew automatically?",
      schemaText:
        "Yes. Studiely Premium subscriptions renew automatically at the end of each billing cycle unless cancelled before the renewal date. You will receive a notification reminder before renewal.",
      answer: (
        <>
          <p>
            Yes. Studiely Premium subscriptions renew automatically at the end of each billing cycle unless cancelled
            before the renewal date.
          </p>
          <p>
            You will receive a notification reminder before renewal. If you know you will not be using the platform
            during a particular period — such as a long school holiday — we recommend setting a personal reminder to
            review your subscription in advance.
          </p>
        </>
      ),
    },
    {
      question: "What is Studiely's refund policy?",
      schemaText:
        "Refunds are handled according to the policy of the platform through which you subscribed: Apple App Store (submitted directly to Apple), Google Play Store (through Google's Play Store refund policy), Web subscriptions (assessed case by case in line with Studiely's refund terms in the Terms of Service at studiely.com). If you believe you have been charged in error or experienced a technical issue, contact us through the Contact Us page.",
      answer: (
        <>
          <p>Refunds are handled according to the policy of the platform through which you subscribed:</p>
          <ul>
            <li>
              <strong className="text-navy font-semibold">Apple App Store:</strong> Refund requests are submitted
              directly to Apple through the{" "}
              <a
                href="https://support.apple.com/en-us/HT204084"
                className={complianceLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store&apos;s standard refund process
              </a>
            </li>
            <li>
              <strong className="text-navy font-semibold">Google Play Store:</strong> Refund requests are submitted
              through{" "}
              <a
                href="https://support.google.com/googleplay/answer/2479637"
                className={complianceLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s Play Store refund policy
              </a>
            </li>
            <li>
              <strong className="text-navy font-semibold">Web subscriptions:</strong> Assessed case by case in line
              with Studiely&apos;s refund terms, available in our{" "}
              <Link href={LEGAL_ROUTES.refundPolicyWeb} className={complianceLinkClass}>
                Refund Policy
              </Link>{" "}
              and{" "}
              <Link href={LEGAL_ROUTES.termsOfService} className={complianceLinkClass}>
                Terms of Service
              </Link>{" "}
              at{" "}
              <Link href="/" className={complianceLinkClass}>
                studiely.com
              </Link>
            </li>
          </ul>
          <p>
            If you believe you have been charged in error or experienced a technical issue that prevented you from
            using the service, contact us through the{" "}
            <Link href="/contact" className="text-teal hover:text-teal-dk underline underline-offset-2">
              Contact Us
            </Link>{" "}
            page. We will review your case and respond within 24 hours.
          </p>
        </>
      ),
    },
    {
      question: "How does the Exam Practice add-on work?",
      schemaText:
        "The Exam Practice add-on is a one-time purchase providing 50 dedicated exam simulation generations. These generations do not expire — use them at your own pace throughout your exam preparation period. The add-on covers every curriculum system Studiely supports. Exam Practice generations are completely independent of your monthly Premium Study Tools allowance. Once 50 generations are used, you can purchase another pack. Pricing for the add-on is shown on the Pricing page at studiely.com and reflects geo-based pricing.",
      answer: (
        <>
          <p>
            The Exam Practice add-on is a one-time purchase providing 50 dedicated exam simulation generations.
            These generations do not expire — use them at your own pace throughout your exam preparation period.
          </p>
          <p>
            The add-on covers every curriculum system Studiely supports: Cambridge (Checkpoint through A Level),
            Pearson Edexcel (GCSE through A Level), IB (MYP Year 4 and 5, Diploma Programme SL and HL), US High
            School and Digital SAT, all Canadian provinces and territories, and all Australian states and territories.
            Within each curriculum, students can select by specific paper, component, and task type — including timed
            simulations at full official exam durations.
          </p>
          <p>
            Exam Practice generations are completely independent of your monthly Premium Study Tools allowance. Using
            Exam Practice does not reduce your monthly generation count, and the monthly limit does not affect your
            Exam Practice pack.
          </p>
          <p>
            Once 50 generations are used, you can purchase another pack. Pricing for the add-on is shown on the{" "}
            {pricingLink} at studiely.com and reflects geo-based pricing in the same way as subscription plans.
          </p>
        </>
      ),
    },
  ],
};
