import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { BackButton } from "@/components/BackButton";
import { SITE_URL } from "@/lib/site";
import { STUDIELY_APP } from "@/lib/appUrls";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Create Account — Start Free",
  description:
    "Sign up for Studiely: 5 free generations to try notes, quizzes, flashcards, and exam-style questions aligned to your curriculum.",
  alternates: { canonical: `${SITE_URL}/signup` },
  robots: { index: false, follow: true },
};

const breadcrumbSchema = buildBreadcrumbSchema("Sign Up", "/signup");

export default function SignupPage() {
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
          <div className="w-full max-w-[480px] bg-white border border-border-default rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.06)] p-8">
            <div className="mb-6 text-center">
              <p className="text-[11px] uppercase tracking-[2px] text-teal mb-2">
                Get started free
              </p>
              <h1 className="font-serif text-[26px] text-navy mb-1">
                Create your Studiely account
              </h1>
              <p className="text-[13px] text-muted">
                Start with 5 free credits, then upgrade anytime.
              </p>
            </div>

            <form className="space-y-4" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="signup-given-name" className="block text-[12px] font-medium text-muted mb-1.5">
                    First name
                  </label>
                  <input
                    id="signup-given-name"
                    name="given-name"
                    type="text"
                    autoComplete="given-name"
                    className="w-full border border-border-default rounded-lg px-3 py-2.5 text-[13px] text-body outline-none focus:border-teal transition-colors"
                    placeholder="Aisha"
                  />
                </div>
                <div>
                  <label htmlFor="signup-family-name" className="block text-[12px] font-medium text-muted mb-1.5">
                    Last name
                  </label>
                  <input
                    id="signup-family-name"
                    name="family-name"
                    type="text"
                    autoComplete="family-name"
                    className="w-full border border-border-default rounded-lg px-3 py-2.5 text-[13px] text-body outline-none focus:border-teal transition-colors"
                    placeholder="Khan"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="signup-email" className="block text-[12px] font-medium text-muted mb-1.5">
                  Email
                </label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full border border-border-default rounded-lg px-3 py-2.5 text-[13px] text-body outline-none focus:border-teal transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="signup-password" className="block text-[12px] font-medium text-muted mb-1.5">
                  Password
                </label>
                <input
                  id="signup-password"
                  name="new-password"
                  type="password"
                  autoComplete="new-password"
                  className="w-full border border-border-default rounded-lg px-3 py-2.5 text-[13px] text-body outline-none focus:border-teal transition-colors"
                  placeholder="Create a strong password"
                />
              </div>
              <div className="flex items-start gap-2 text-[11px] text-muted">
                <input
                  id="signup-terms"
                  name="terms"
                  type="checkbox"
                  className="mt-[3px] w-3.5 h-3.5 shrink-0"
                />
                <label htmlFor="signup-terms" className="leading-snug">
                <span>
                  I agree to the{" "}
                  <a href="/terms-of-service" className="text-teal hover:text-teal-dk">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy-policy" className="text-teal hover:text-teal-dk">
                    Privacy Policy
                  </a>
                  .
                </span>
                </label>
              </div>

              <Button href={STUDIELY_APP.signUp} variant="solid" lg className="w-full mt-1">
                Sign Up
              </Button>
            </form>

            <p className="mt-5 text-[12px] text-muted text-center">
              Already have an account?{" "}
              <a href={STUDIELY_APP.login} className="text-teal hover:text-teal-dk font-medium">
                Login
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

