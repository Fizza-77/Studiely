"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";

export default function ContactUs() {
  const whatsappNumber = "97338048045";
  const emailAddress = "support@studiely.com";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'm interested in learning more.")}`;
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent("Studiely Support Request")}`;

  return (
    <div className="min-h-screen bg-bg-base text-body selection:bg-teal selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-24 flex flex-col items-center justify-center relative">

        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo/10 rounded-full blur-[120px] -z-10" />

        <div className="w-full mb-12 flex justify-start">
          <BackButton
            label="Go Back"
            className="bg-white text-body border border-border-default hover:text-navy hover:bg-teal-lt hover:border-teal/50 backdrop-blur-sm"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="text-5xl lg:text-7xl font-serif tracking-tight bg-gradient-to-br from-navy via-indigo to-teal bg-clip-text text-transparent">
            Let's Talk!
          </h1>
          <p className="text-lg text-muted max-w-xl mx-auto leading-relaxed">
            Need help or have a question? We're here for you. Reach out to us instantly via WhatsApp or drop us an email anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* WhatsApp Card */}
          <motion.a
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl bg-white border border-border-default p-8 flex flex-col items-center text-center hover:border-teal/40 transition-all duration-300 shadow-[0_14px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-lt/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="w-20 h-20 rounded-full bg-teal-lt flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-all duration-500 mb-6 shadow-[0_0_26px_rgba(0,176,155,0.22)]">
              <MessageCircle size={40} />
            </div>

            <h3 className="text-2xl font-serif text-navy mb-2">WhatsApp Us</h3>
            <p className="text-muted mb-6">Get an instant reply from our support team.</p>

            <div className="mt-auto flex items-center text-teal font-medium group-hover:translate-x-2 transition-transform duration-300">
              <span>Start Chat</span>
              <ArrowRight size={18} className="ml-2" />
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.a
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href={mailtoLink}
            className="group relative overflow-hidden rounded-3xl bg-white border border-border-default p-8 flex flex-col items-center text-center hover:border-indigo/40 transition-all duration-300 shadow-[0_14px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-lt/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="w-20 h-20 rounded-full bg-indigo-lt flex items-center justify-center text-indigo group-hover:bg-indigo group-hover:text-white transition-all duration-500 mb-6 shadow-[0_0_26px_rgba(84,72,200,0.22)]">
              <Mail size={40} />
            </div>

            <h3 className="text-2xl font-serif text-navy mb-2">Email Us</h3>
            <p className="text-muted mb-1">Send us your queries anytime at:</p>
            <p className="text-body font-medium mb-6">{emailAddress}</p>

            <div className="mt-auto flex items-center text-indigo font-medium group-hover:translate-x-2 transition-transform duration-300">
              <span>Send Email</span>
              <ArrowRight size={18} className="ml-2" />
            </div>
          </motion.a>
        </div>

      </main>

      <Footer />
    </div>
  );
}
