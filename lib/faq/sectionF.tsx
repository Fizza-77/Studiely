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

const PREMIUM_PLANS = [
  { plan: "Monthly", original: "$14.99", offer: "$9.99" },
  { plan: "3 Months", original: "$44.97", offer: "$29.97" },
  { plan: "6 Months", original: "$89.94", offer: "$59.94" },
  { plan: "1 Year", original: "$179.88", offer: "$119.88" },
] as const;

const OFFER_DISCOUNT = "33.36% Off";

function PremiumPricingTable() {
  return (
    <>
      <div className="faq-pricing-table-wrap overflow-x-auto my-3">
        <table className="faq-pricing-table w-full min-w-[min(100%,520px)] text-[13px] border-collapse">
          <thead>
            <tr className="border-b border-border-default bg-bg-base/80">
              <th className="py-2.5 pr-3 pl-2 font-semibold text-navy text-left">Plan</th>
              <th className="py-2.5 pr-3 font-semibold text-navy text-left">Original Price (USD)</th>
              <th className="py-2.5 pr-3 font-semibold text-navy text-left">Offer Price (USD)</th>
              <th className="py-2.5 pr-2 font-semibold text-navy text-left">Discount</th>
            </tr>
          </thead>
          <tbody>
            {PREMIUM_PLANS.map((row) => (
              <tr key={row.plan} className="border-b border-border-lt last:border-b-0">
                <td className="py-2.5 pr-3 pl-2 text-body font-medium">{row.plan}</td>
                <td className="py-2.5 pr-3 text-muted line-through">{row.original}</td>
                <td className="py-2.5 pr-3 text-navy font-semibold">{row.offer}</td>
                <td className="py-2.5 pr-2 text-teal-dk font-medium">{OFFER_DISCOUNT}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[12px] text-muted">
        Offer pricing reflects a {OFFER_DISCOUNT} discount compared to the original list price. Geo-based pricing may
        vary by region — see the {pricingLink} for your location.
      </p>
    </>
  );
}

export const sectionF: FaqSection = {
  id: "faq-pricing",
  title: "F. Pricing, Plans & Subscriptions",
  intro:
    "Premium plan pricing (USD), discounts, cancellation, renewals, refunds, and Exam Practice.",
  items: [
    {
      question: "What are Studiely's Premium plan prices?",
      schemaText:
        "Studiely Premium plans (USD reference pricing): Monthly original $14.99, offer $9.99; 3 Months original $44.97, offer $29.97; 6 Months original $89.94, offer $59.94; 1 Year original $179.88, offer $119.88. Offer prices reflect a 33.36% discount versus original list price.",
      answer: (
        <>
          <p>
            The table below shows Studiely Premium subscription plans with original and current offer prices in
            USD. All offer prices reflect a <strong className="text-navy font-semibold">{OFFER_DISCOUNT}</strong>{" "}
            discount compared to the original list price.
          </p>
          <PremiumPricingTable />
        </>
      ),
    },
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
            Premium plans are available on monthly, three-month, six-month, and annual billing cycles. Reference USD
            pricing and current offer discounts are listed in the pricing table in this section.
          </p>
          <p>
            Because Studiely applies geo-based pricing, the exact cost you see may reflect your location. To see
            current pricing in your region, visit the {pricingLink} at studiely.com.
          </p>
          <p>
            The Exam Practice add-on is also available as a separate purchase, providing 50 dedicated exam simulation
            generations that do not expire and are independent of the monthly Premium limit.
          </p>
        </>
      ),
    },
    {
      question: "Is there a discount for longer subscription plans?",
      schemaText:
        "Yes. All Premium plans currently include a 33.36% discount off the original list price. Monthly offer $9.99 (was $14.99); 3 months $29.97 (was $44.97); 6 months $59.94 (was $89.94); 1 year $119.88 (was $179.88). Longer plans also offer a lower effective monthly cost than paying month-to-month.",
      answer: (
        <>
          <p>
            Yes. All Premium plans currently include a <strong className="text-navy font-semibold">33.36% off</strong>{" "}
            discount compared to the original list price. See the pricing table above for original and offer prices in
            USD.
          </p>
          <p>
            Three-month, six-month, and annual plans also offer a lower effective monthly cost than paying month-to-month.
            The annual plan typically provides the best value per month for students who plan to use Studiely
            consistently across the academic year.
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
