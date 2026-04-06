"use client";

import { useEffect } from "react";
import { buildBreadcrumbSchema } from "@/lib/seo";

const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.skyensolutions.eduplayce.eduplayce";
const IOS_URL = "https://apps.apple.com/us/app/eduplayce/id6758246110";
const FALLBACK_URL = "https://studiely.com";
const breadcrumbSchema = buildBreadcrumbSchema("Smartlink", "/smartlink");

export default function SmartlinkPage() {
  useEffect(() => {
    const ua = navigator.userAgent || (navigator as any).vendor || (window as any).opera || "";

    if (/android/i.test(ua)) {
      window.location.replace(ANDROID_URL);
      return;
    }

    if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
      window.location.replace(IOS_URL);
      return;
    }

    window.location.replace(FALLBACK_URL);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <main className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-serif text-[clamp(22px,2.2vw,28px)] text-navy mb-2">
            Redirecting…
          </h1>
          <p className="text-[14px] text-gray-600">
            If you are not redirected, use{" "}
            <a className="underline" href={FALLBACK_URL}>
              Studiely
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
}

