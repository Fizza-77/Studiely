"use client";

import {
  Mail,
  BookOpen,
  Headphones,
  UserRound,
  CreditCard,
  Handshake,
  Settings,
  Zap,
  Users,
  ScrollText,
  Bot,
  GraduationCap,
  Boxes,
  ShieldCheck,
  GraduationCapIcon,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildBreadcrumbSchema } from "@/lib/seo";

const EMAIL = "support@studiely.com";
const breadcrumbSchema = buildBreadcrumbSchema("Contact Us", "/contact");

const supportCards = [
  {
    title: "Email Support",
    text: "Drop us an email anytime.",
    action: EMAIL,
    Icon: Mail,
    iconWrapClass: "bg-emerald-100",
    iconClass: "text-emerald-600",
  },
  {
    title: "Help Centre & FAQs",
    text: "Find answers to common questions.",
    action: "Visit Help Centre",
    Icon: BookOpen,
    iconWrapClass: "bg-violet-100",
    iconClass: "text-violet-600",
  },
  {
    title: "Talk to Our Team",
    text: "We're here Monday to Friday.",
    action: "9:00 AM - 6:00 PM (GMT+3)",
    Icon: Headphones,
    iconWrapClass: "bg-cyan-100",
    iconClass: "text-cyan-600",
  },
];

const helpTopics = [
  {
    title: "Account Help",
    text: "Login, profile & access",
    Icon: UserRound,
    iconWrapClass: "bg-emerald-100",
    iconClass: "text-emerald-600",
  },
  {
    title: "Billing",
    text: "Payments, plans & invoices",
    Icon: CreditCard,
    iconWrapClass: "bg-violet-100",
    iconClass: "text-violet-600",
  },
  {
    title: "Curriculum Questions",
    text: "Subjects & content help",
    Icon: BookOpen,
    iconWrapClass: "bg-cyan-100",
    iconClass: "text-cyan-600",
  },
  {
    title: "Partnerships",
    text: "Schools & collaborations",
    Icon: Handshake,
    iconWrapClass: "bg-indigo-100",
    iconClass: "text-indigo-600",
  },
  {
    title: "Technical Support",
    text: "Issues & troubleshooting",
    Icon: Settings,
    iconWrapClass: "bg-teal-100",
    iconClass: "text-teal-600",
  },
];

const supportHighlights = [
  {
    title: "Fast support",
    text: "Our team typically replies within 24 hours.",
    Icon: Zap,
    iconWrapClass: "bg-violet-100",
    iconClass: "text-violet-600",
  },
  {
    title: "Student-first platform",
    text: "Built to make learning simpler and smarter.",
    Icon: Users,
    iconWrapClass: "bg-cyan-100",
    iconClass: "text-cyan-600",
  },
  {
    title: "Curriculum-aligned learning",
    text: "Trusted by students, parents and schools.",
    Icon: ScrollText,
    iconWrapClass: "bg-emerald-100",
    iconClass: "text-emerald-600",
  },
];

const trustItems = [
  { label: "AI-powered support", Icon: Bot, iconClass: "text-violet-600" },
  { label: "Curriculum-aligned", Icon: GraduationCap, iconClass: "text-cyan-600" },
  { label: "All-in-one", Icon: Boxes, iconClass: "text-emerald-600" },
  { label: "Trusted by learners", Icon: ShieldCheck, iconClass: "text-indigo-600" },
  { label: "Quick response", Icon: Zap, iconClass: "text-teal-600" },
];

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[rgba(99,102,241,0.06)] text-body selection:bg-teal selection:text-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Navbar />

      <main className="relative flex-1 w-full px-4 sm:px-6 md:px-8 pt-0 pb-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.12)_1px,transparent_0)] bg-[size:22px_22px] opacity-40" />
          <div className="absolute top-24 left-[7%] h-24 w-24 rounded-full border border-indigo/20 bg-white/35" />
          <div className="absolute top-40 right-[10%] h-16 w-16 rounded-full border border-indigo/20 bg-white/35" />
          <div className="absolute top-[32rem] left-[20%] h-20 w-20 rounded-full border border-indigo/15 bg-white/25" />
          <div className="absolute top-[26rem] right-[22%] h-12 w-12 rounded-full border border-indigo/15 bg-white/25" />
        </div>

        <section className="mx-auto w-full max-w-6xl rounded-3xl bg-white/70 p-4 sm:p-5 lg:p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border-lt p-5 sm:p-7">
              <p className="inline-flex items-center rounded-full bg-indigo-lt px-3 py-1 text-xs font-medium text-indigo">
                We&apos;re here for you
              </p>
              <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-navy leading-tight">We&apos;d love to help</h1>
              <p className="mt-3 text-sm sm:text-base text-muted max-w-md">
                Have a question, feedback, or need support? Reach out to Studiely and we&apos;ll get back to you as soon
                as possible.
              </p>

              <div className="mt-6 space-y-3">
                {supportHighlights.map(({ title, text, Icon, iconWrapClass, iconClass }) => (
                  <div key={title} className="rounded-xl border border-border-default bg-white p-3">
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${iconWrapClass}`}>
                        <Icon className={`h-4 w-4 ${iconClass}`} aria-hidden />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy">{title}</p>
                        <p className="text-xs text-muted">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border-default bg-white p-5 sm:p-7">
              <h2 className="font-serif text-2xl text-navy">Send us a message</h2>
              <form className="mt-5 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs text-muted mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-border-default bg-white px-3 py-2 text-sm outline-none focus:border-indigo/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full rounded-lg border border-border-default bg-white px-3 py-2 text-sm outline-none focus:border-indigo/40"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-muted mb-1">Subject</label>
                  <select className="w-full rounded-lg border border-border-default bg-white px-3 py-2 text-sm outline-none focus:border-indigo/40">
                    <option>What is this regarding?</option>
                    <option>Account Help</option>
                    <option>Billing</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-muted mb-1">Message</label>
                  <textarea
                    rows={5}
                    maxLength={1000}
                    placeholder="Type your message here..."
                    className="w-full rounded-lg border border-border-default bg-white px-3 py-2 text-sm outline-none focus:border-indigo/40"
                  />
                  <p className="mt-1 text-right text-[11px] text-muted">0 / 1000</p>
                </div>
                <button
                  type="button"
                  className="w-full rounded-lg bg-indigo px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-95"
                >
                  Send Message
                </button>
              </form>
              <p className="mt-3 text-center text-xs text-muted">Your information is safe with us. We never share your details.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-6 w-full max-w-6xl rounded-2xl bg-[rgba(99,102,241,0.07)] p-3 sm:p-4">
          <div className="grid gap-3 md:grid-cols-3">
          {supportCards.map(({ title, text, action, Icon, iconWrapClass, iconClass }) => (
            <article key={title} className="rounded-2xl border border-border-default bg-white p-4 sm:p-5">
              <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full ${iconWrapClass}`}>
                <Icon className={`h-5 w-5 ${iconClass}`} aria-hidden />
              </div>
              <h3 className="font-serif text-lg text-navy">{title}</h3>
              <p className="mt-1 text-sm text-muted">{text}</p>
              <p className="mt-2 text-sm font-medium text-teal">{action}</p>
            </article>
          ))}
          </div>
        </section>

        <section className="mx-auto mt-4 w-full max-w-6xl rounded-2xl border border-border-default bg-[rgba(99,102,241,0.07)] p-4 sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <article className="rounded-xl border border-border-lt bg-white p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-100">
                  <GraduationCapIcon className="h-5 w-5 text-violet-600" aria-hidden />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-navy">About Studiely</h3>
                  <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
                    Studiely is an AI-powered study platform that helps students learn better, faster and with
                    confidence. From summary notes and flashcards to quizzes and exam practice, everything you need is
                    in one smart platform.
                  </p>
                </div>
              </div>
            </article>

            <div className="grid gap-2 text-xs sm:text-sm text-muted sm:grid-cols-2">
              {trustItems.slice(0, 4).map(({ label, Icon, iconClass }) => (
                <p key={`about-${label}`} className="flex items-center gap-2 rounded-lg border border-border-lt bg-white px-3 py-2">
                  <Icon className={`h-4 w-4 ${iconClass}`} aria-hidden />
                  {label}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-4 w-full max-w-6xl rounded-2xl border border-border-default bg-white p-4 sm:p-5">
          <div className="grid gap-2 text-xs sm:text-sm text-muted sm:grid-cols-2 lg:grid-cols-5">
            {trustItems.map(({ label, Icon, iconClass }) => (
              <p key={label} className="flex items-center gap-2">
                <Icon className={`h-4 w-4 ${iconClass}`} aria-hidden />
                {label}
              </p>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-4 w-full max-w-6xl rounded-2xl bg-white/75 p-4 sm:p-5">
          <h2 className="text-center font-serif text-2xl text-navy">What can we help with?</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {helpTopics.map(({ title, text, Icon, iconWrapClass, iconClass }, index) => (
              <article
                key={title}
                className={`rounded-2xl border border-border-default p-4 text-center ${
                  index % 2 === 0 ? "bg-white" : "bg-[rgba(99,102,241,0.06)]"
                }`}
              >
                <div className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full ${iconWrapClass}`}>
                  <Icon className={`h-5 w-5 ${iconClass}`} aria-hidden />
                </div>
                <h3 className="text-sm font-semibold text-navy">{title}</h3>
                <p className="mt-1 text-xs text-muted">{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
