"use client";

import { useEffect } from "react";
import { loadGoogleAnalytics } from "@/lib/gtag";

const CONSENT_STORAGE_KEY = "studiely_policies_consent_v2";

/** Loads gtag after the user has already accepted cookies on a previous visit. */
export function GoogleAnalytics() {
  useEffect(() => {
    try {
      if (localStorage.getItem(CONSENT_STORAGE_KEY)) {
        loadGoogleAnalytics();
      }
    } catch {
      /* private mode / blocked storage */
    }
  }, []);

  return null;
}
