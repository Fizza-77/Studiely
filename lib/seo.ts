import { SITE_URL } from "@/lib/site";

/** WebPage for /nyla — complements breadcrumb and clarifies the tutor feature. */
export function buildNylaFeatureSchema() {
  const url = `${SITE_URL}/nyla`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: "Nyla — AI Tutor for IGCSE, IB & Exam Prep",
    description:
      "Nyla is Studiely’s curriculum-aware AI tutor: instant help for syllabus questions, linked to notes, flashcards, and exam practice for AI learning.",
    isPartOf: { "@type": "WebSite", name: "Studiely", url: SITE_URL },
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "Nyla",
      applicationCategory: "EducationalApplication",
      description:
        "Curriculum-aware AI tutor inside Studiely for syllabus-aligned explanations and follow-up study actions.",
    },
  };
}

export function buildBreadcrumbSchema(currentName: string, currentPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: currentName,
        item: `${SITE_URL}${currentPath}`,
      },
    ],
  };
}