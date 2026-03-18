import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Sign Up – Studiely",
  description: "Create your Studiely account to start using AI-powered notes, quizzes, flashcards and exam tools.",
};

export default function SignupPage() {
  return (
    <>
      <main className="bg-bg-base min-h-screen pt-[96px] pb-[60px]">
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

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-medium text-muted mb-1.5">
                    First name
                  </label>
                  <input
                    className="w-full border border-border-default rounded-lg px-3 py-2.5 text-[13px] text-body outline-none focus:border-teal transition-colors"
                    placeholder="Aisha"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-muted mb-1.5">
                    Last name
                  </label>
                  <input
                    className="w-full border border-border-default rounded-lg px-3 py-2.5 text-[13px] text-body outline-none focus:border-teal transition-colors"
                    placeholder="Khan"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-medium text-muted mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-border-default rounded-lg px-3 py-2.5 text-[13px] text-body outline-none focus:border-teal transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-[12px] font-medium text-muted mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full border border-border-default rounded-lg px-3 py-2.5 text-[13px] text-body outline-none focus:border-teal transition-colors"
                  placeholder="Create a strong password"
                />
              </div>
              <div className="flex items-start gap-2 text-[11px] text-muted">
                <input type="checkbox" className="mt-[3px] w-3.5 h-3.5" />
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
              </div>

              <Button type="submit" variant="solid" lg className="w-full mt-1">
                Sign Up
              </Button>
            </form>

            <p className="mt-5 text-[12px] text-muted text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-teal hover:text-teal-dk font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

