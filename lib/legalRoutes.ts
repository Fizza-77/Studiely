/**
 * Marketing-site paths for legal & compliance documents (aligned with Footer).
 */
export const LEGAL_ROUTES = {
  privacyPolicy: "/privacy-policy",
  termsOfService: "/terms-of-service",
  cookiePolicy: "/cookie-policy",
  acceptableUse: "/acceptable-use",
  disclaimer: "/disclaimer",
  /** Index of app-store / web legal HTML documents */
  legalIndex: "/legal",
  deleteAccount: "/legal/delete-account-and-data",
  refundPolicyWeb: "/legal/web/refund-policy",
} as const;

export const complianceLinkClass =
  "text-teal hover:text-teal-dk underline underline-offset-2";
