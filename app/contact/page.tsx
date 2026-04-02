"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";

const EMAIL = "support@studiely.com";
const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent("Studiely — Support request")}`;

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-bg-base text-body selection:bg-teal selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full px-4 sm:px-6 md:px-8 relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[min(100%,28rem)] h-56 sm:h-64 bg-teal/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[15%] right-[5%] w-40 h-40 sm:w-56 sm:h-56 bg-indigo/10 rounded-full blur-[90px]" />
        </div>

        <div className="mx-auto w-full max-w-lg py-10 sm:py-14 md:py-16 lg:py-20 flex flex-col">
          <div className="mb-8 sm:mb-10 w-full">
            <BackButton
              label="Go Back"
              className="bg-white text-body border border-border-default hover:text-navy hover:bg-teal-lt hover:border-teal/50 backdrop-blur-sm"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10"
          >
            <h1 className="font-serif text-[clamp(1.75rem,5vw,3rem)] leading-[1.15] tracking-tight bg-gradient-to-br from-navy via-indigo to-teal bg-clip-text text-transparent px-1">
              Contact us
            </h1>
            <p className="text-sm sm:text-base text-muted max-w-md mx-auto leading-relaxed px-1">
              Questions or help with Studiely? Email us — we&apos;ll get back to you as soon as we can.
            </p>
          </motion.div>

          <motion.a
            href={mailtoHref}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.99 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-border-default p-6 sm:p-8 md:p-10 flex flex-col items-center text-center hover:border-indigo/35 transition-all duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo/40"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-lt/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-indigo-lt flex items-center justify-center text-indigo group-hover:bg-indigo group-hover:text-white transition-all duration-300 mb-5 sm:mb-6 shadow-[0_0_22px_rgba(84,72,200,0.18)]">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={1.75} aria-hidden />
            </div>

            <h2 className="relative font-serif text-lg sm:text-xl md:text-2xl text-navy mb-2">
              Email
            </h2>
            <p className="relative text-xs sm:text-sm text-muted mb-4 max-w-[280px] sm:max-w-none">
              Tap to open your email app, or copy the address below.
            </p>
            <p className="relative text-[15px] sm:text-base md:text-lg font-medium text-navy break-all sm:break-normal px-1">
              {EMAIL}
            </p>

            <div className="relative mt-6 sm:mt-8 inline-flex items-center gap-2 text-sm sm:text-base text-indigo font-medium group-hover:gap-3 transition-all duration-300">
              <span>Send email</span>
              <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0" aria-hidden />
            </div>
          </motion.a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
