import { randomUUID } from "crypto";

/** Client IP from proxy header (first hop), if present. */
export function getClientIpFromHeaders(headers: Headers): string | null {
  return headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;
}

/**
 * Stable reactor id for API: IP from `x-forwarded-for`, else a new UUID.
 */
export function resolveReactorId(headers: Headers): string {
  return getClientIpFromHeaders(headers) || randomUUID();
}

/**
 * For SSR: only IP-based id (no random fallback), so we do not assign a new identity every render.
 */
export function reactorIdForSsr(headers: Headers): string | null {
  return getClientIpFromHeaders(headers);
}
