import { SITE_URL } from "@/lib/site";

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