import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { BackButton } from "@/components/BackButton";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Log In — Studiely",
  description:
    "Sign in to Studiely to access your saved study tools, streaks, and exam practice.",
  alternates: { canonical: `${SITE_URL}/login` },
  robots: { index: false, follow: true },
};

export default function LoginPage() {
  return (
    <>
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

            <form className="space-y-4">
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
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between text-[12px] text-muted">
                <label className="inline-flex items-center gap-1.5">
                  <input type="checkbox" className="w-3.5 h-3.5" />
                  <span>Remember me</span>
                </label>
                <Link href="/reset-password" className="text-teal hover:text-teal-dk">
                  Forgot password?
                </Link>
              </div>

            <Button type="submit" variant="solid" lg className="w-full mt-2">
              Login
            </Button>
            </form>

            <p className="mt-5 text-[12px] text-muted text-center">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-teal hover:text-teal-dk font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

