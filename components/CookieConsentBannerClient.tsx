"use client";

import dynamic from "next/dynamic";

const CookieConsentBanner = dynamic(
  () => import("@/components/CookieConsentBanner").then((m) => m.CookieConsentBanner),
  { ssr: false }
);

export function CookieConsentBannerClient() {
  return <CookieConsentBanner />;
}
