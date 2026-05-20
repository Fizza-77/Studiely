const GA_MEASUREMENT_ID = "G-NXQX4TMW7X";
const ADS_MEASUREMENT_ID = "AW-17975031252";

let analyticsLoadStarted = false;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Load GA4 + Google Ads only after cookie consent (or prior consent in localStorage). */
export function loadGoogleAnalytics(): void {
  if (typeof window === "undefined" || analyticsLoadStarted) return;
  analyticsLoadStarted = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);
  window.gtag("config", ADS_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);
}
