/**
 * Flutter web app (deep links). Override origin for local/staging tests.
 * Example: NEXT_PUBLIC_STUDIELY_APP_ORIGIN=http://localhost:8080
 */
export const STUDIELY_APP_ORIGIN =
  process.env.NEXT_PUBLIC_STUDIELY_APP_ORIGIN?.replace(/\/$/, "") ?? "https://www.studiely.app";

export const STUDIELY_APP = {
  /** Flutter web shell landing (dashboard home), base-href `/app/`. */
  home: `${STUDIELY_APP_ORIGIN}/app/`,
  login: `${STUDIELY_APP_ORIGIN}/app/login`,
  signUp: `${STUDIELY_APP_ORIGIN}/app/sign-up`,
  library: `${STUDIELY_APP_ORIGIN}/app/library`,
  /** Canonical Flutter route is `/exampractice` (hyphenated URL redirects in-app). */
  examPractice: `${STUDIELY_APP_ORIGIN}/app/exampractice`,
  notes: `${STUDIELY_APP_ORIGIN}/app/notes`,
  nyla: `${STUDIELY_APP_ORIGIN}/app/nyla`,
  pricing: `${STUDIELY_APP_ORIGIN}/app/pricing`,
} as const;
