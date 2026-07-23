import Link from "next/link";
import { LEGAL_ROUTES, complianceLinkClass } from "@/lib/legalRoutes";
import type { FaqSection } from "./types";

export const sectionH: FaqSection = {
  id: "faq-privacy",
  title: "H. Privacy, Security & Data",
  intro: "How we protect data, sharing and deletion requests.",
  items: [
    {
      question: "Is my personal data safe with Studiely?",
      schemaText:
        "Yes. Studiely follows strict data protection and security practices in line with applicable privacy regulations. Personal data is stored securely using industry-standard encryption for data in transit and at rest. Studiely does not sell personal data to third parties. Student data is treated with particular care. For students under 13, parental or guardian consent is required in accordance with our Terms of Service and applicable children's data protection laws. The full Privacy Policy is available in the Help Center and the website footer at studiely.com.",
      answer: (
        <>
          <p>
            Yes. Studiely follows strict data protection and security practices in line with applicable privacy
            regulations. Personal data is stored securely using industry-standard encryption for data in transit and
            at rest.
          </p>
          <p>
            Studiely does not sell personal data to third parties. Student data is treated with particular care and the
            platform is built with compliance with major data protection frameworks in mind.
          </p>
          <p>
            For students under 13, parental or guardian consent is required in accordance with our{" "}
            <Link href={LEGAL_ROUTES.termsOfService} className={complianceLinkClass}>
              Terms of Service
            </Link>{" "}
            and applicable children&apos;s data protection laws.
          </p>
          <p>
            The full{" "}
            <Link href={LEGAL_ROUTES.privacyPolicy} className={complianceLinkClass}>
              Privacy Policy
            </Link>{" "}
            is available in the{" "}
            <Link href={LEGAL_ROUTES.legalIndex} className={complianceLinkClass}>
              Help Center
            </Link>{" "}
            and the website footer at{" "}
            <Link href="/" className={complianceLinkClass}>
              studiely.com
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      question: "Does Studiely share my data with anyone?",
      schemaText:
        "No. Studiely does not sell or share personal data with third parties for advertising or commercial purposes. Data may be processed by trusted third-party service providers who support platform operations — such as cloud hosting, analytics and payment processing — but only to the extent necessary to deliver the service and under strict data processing agreements. Full details are set out in Studiely's Privacy Policy at studiely.com.",
      answer: (
        <>
          <p>
            No. Studiely does not sell or share personal data with third parties for advertising or commercial
            purposes.
          </p>
          <p>
            Data may be processed by trusted third-party service providers who support platform operations — such as
            cloud hosting, analytics and payment processing — but only to the extent necessary to deliver the service
            and under strict data processing agreements.
          </p>
          <p>
            Full details of how data is handled are set out in Studiely&apos;s{" "}
            <Link href={LEGAL_ROUTES.privacyPolicy} className={complianceLinkClass}>
              Privacy Policy
            </Link>{" "}
            at{" "}
            <Link href="/" className={complianceLinkClass}>
              studiely.com
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      question: "How do I request deletion of my data?",
      schemaText:
        "You can request deletion of your personal data at any time through the Account Deletion page in the Studiely Help Center. Once confirmed, all personal data and AI-generated content associated with your account will be permanently and irreversibly deleted in accordance with our Privacy Policy and applicable data protection regulations. We recommend downloading any study materials you wish to keep before submitting the request. If you are a Premium subscriber, we recommend cancelling your subscription first to avoid further billing.",
      answer: (
        <>
          <p>
            You can request deletion of your personal data at any time through the{" "}
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
            permanently and irreversibly deleted in accordance with our{" "}
            <Link href={LEGAL_ROUTES.privacyPolicy} className={complianceLinkClass}>
              Privacy Policy
            </Link>{" "}
            and applicable data protection regulations.
          </p>
          <p>
            We recommend downloading any study materials you wish to keep before submitting the request, as deletion
            cannot be undone. If you are a Premium subscriber, we recommend cancelling your subscription first to
            avoid further billing.
          </p>
        </>
      ),
    },
  ],
};
