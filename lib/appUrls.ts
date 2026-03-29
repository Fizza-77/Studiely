/**
 * Flutter web app (deep links). Override origin for local/staging tests.
 * Example: NEXT_PUBLIC_STUDIELY_APP_ORIGIN=http://localhost:8080
 */
export const STUDIELY_APP_ORIGIN =
  process.env.NEXT_PUBLIC_STUDIELY_APP_ORIGIN?.replace(/\/$/, "") ?? "https://studiely.com";

export const STUDIELY_APP = {
  login: `${STUDIELY_APP_ORIGIN}/app/login`,
  signUp: `${STUDIELY_APP_ORIGIN}/app/sign-up`,
  library: `${STUDIELY_APP_ORIGIN}/app/library`,
  examPractice: `${STUDIELY_APP_ORIGIN}/app/exam-practice`,
  notes: `${STUDIELY_APP_ORIGIN}/app/notes`,
} as const;
