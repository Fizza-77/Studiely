import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { BackButton } from "@/components/BackButton";
import { SITE_URL } from "@/lib/site";
import { STUDIELY_APP } from "@/lib/appUrls";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Log In — Studiely",
  description:
    "Sign in to Studiely to access your saved study tools, streaks, and exam practice.",
  alternates: { canonical: `${SITE_URL}/login` },
  robots: { index: false, follow: true },
};

const breadcrumbSchema = buildBreadcrumbSchema("Log In", "/login");

export default function LoginPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <main className="bg-bg-base min-h-screen pt-[96px] pb-[60px]">
        <div className="absolute top-4 left-4 z-30">
          <BackButton
            href="/"
            label="Home"
            className="bg-white text-black border-black border-[1.5px] hover:bg-black hover:text-white hover:border-black"
          />
        </div>
        <div className="wrap flex items-center justify-center">
          <div className="w-full max-w-[440px] bg-white border border-border-default rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.06)] p-8">
            <div className="mb-6 text-center">
              <p className="text-[11px] uppercase tracking-[2px] text-teal mb-2">
                Welcome back
              </p>
              <h1 className="font-serif text-[26px] text-navy mb-1">
                Log in to Studiely
              </h1>
              <p className="text-[13px] text-muted">
                Access your saved study tools, progress, and exam practice.
              </p>
            </div>

            <form className="space-y-4" noValidate>
              <div>
                <label htmlFor="login-email" className="block text-[12px] font-medium text-muted mb-1.5">
                  Email
                </label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full border border-border-default rounded-lg px-3 py-2.5 text-[13px] text-body outline-none focus:border-teal transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="login-password" className="block text-[12px] font-medium text-muted mb-1.5">
                  Password
                </label>
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="w-full border border-border-default rounded-lg px-3 py-2.5 text-[13px] text-body outline-none focus:border-teal transition-colors"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between text-[12px] text-muted">
                <label htmlFor="login-remember" className="inline-flex items-center gap-1.5">
                  <input
                    id="login-remember"
                    name="remember"
                    type="checkbox"
                    className="w-3.5 h-3.5"
                  />
                  <span>Remember me</span>
                </label>
                <Link href="/reset-password" className="text-teal hover:text-teal-dk">
                  Forgot password?
                </Link>
              </div>

            <Button href={STUDIELY_APP.login} variant="solid" lg className="w-full mt-2">
              Login
            </Button>
            </form>

            <p className="mt-5 text-[12px] text-muted text-center">
              Don&apos;t have an account?{" "}
              <a href={STUDIELY_APP.signUp} className="text-teal hover:text-teal-dk font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

