"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { GraduationCap, Zap, type LucideIcon } from "lucide-react";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const INPUT_BG = "#FFFBEF";

type Highlight =
  | {
      title: string;
      text: string;
      Icon: LucideIcon;
      imageSrc?: never;
      iconBg: string;
      iconColor: string;
    }
  | {
      title: string;
      text: string;
      imageSrc: string;
      Icon?: never;
      iconBg: string;
      iconColor?: never;
    };

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Fast support",
    text: "Our team typically replies within 24 hours.",
    Icon: Zap,
    iconBg: LIME,
    iconColor: "#1E1B4B",
  },
  {
    title: "Student-first platform",
    text: "Built to make learning simpler and smarter.",
    Icon: GraduationCap,
    iconBg: PINK,
    iconColor: "white",
  },
  {
    title: "Curriculum-aligned learning",
    text: "Trusted by students, parents and schools.",
    imageSrc: "/curricula-aligned.png",
    iconBg: LIME,
  },
];

const StarBadge = () => (
  <span
    aria-hidden
    className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full sm:right-6 sm:top-6 sm:h-10 sm:w-10"
    style={{ backgroundColor: LIME }}
  >
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill={BLUE} aria-hidden>
      <path d="M8 1.5l1.55 4.45L14 7.5l-3.45 1.55L8 13.5 5.45 9.05 2 7.5l4.45-1.55L8 1.5Z" />
    </svg>
  </span>
);

export const ContactHeroSection = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    const composedMessage = [
      fullName.trim() ? `Name: ${fullName.trim()}` : null,
      subject.trim() ? `Subject: ${subject.trim()}` : null,
      "",
      message.trim(),
    ]
      .filter((line) => line !== null)
      .join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), message: composedMessage }),
      });

      if (!response.ok) throw new Error("Failed to send");

      setStatus("success");
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="bg-bg-base pb-[clamp(1.25rem,3vw,2rem)] pt-[clamp(0.75rem,2vw,1.25rem)]"
    >
      <div className="wrap">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6 xl:gap-8">
          <article
            className="rounded-[28px] px-6 py-8 sm:rounded-[32px] sm:px-8 sm:py-9 md:px-9 md:py-10"
            style={{ backgroundColor: BLUE }}
          >
            <span
              className="mb-5 inline-flex rounded-full px-4 py-1.5 font-jakarta text-[10px] font-bold uppercase tracking-[0.12em] text-[#1E1B4B] sm:mb-6 sm:text-[11px]"
              style={{ backgroundColor: LIME }}
            >
              We&apos;re here for you
            </span>

            <h1
              id="contact-hero-heading"
              className="mb-4 font-hanken text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white sm:mb-5"
            >
              We&apos;d love to{" "}
              <span style={{ color: LIME }}>help</span>
            </h1>

            <p className="mb-7 max-w-[420px] font-jakarta text-[14px] leading-[1.7] text-white/90 sm:mb-8 sm:text-[15px]">
              Have a question, feedback, or need support? Reach out to Studiely
              and we&apos;ll get back to you as soon as possible.
            </p>

            <div className="space-y-3 sm:space-y-3.5">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-[18px] bg-white/10 px-4 py-3.5 sm:gap-4 sm:px-4 sm:py-4"
                >
                  <span
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px]"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    {item.imageSrc ? (
                      <Image
                        src={item.imageSrc}
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                        className="h-5 w-5 object-contain"
                        aria-hidden
                      />
                    ) : (
                      <item.Icon
                        className="h-5 w-5"
                        style={{ color: item.iconColor }}
                        strokeWidth={2.2}
                        aria-hidden
                      />
                    )}
                  </span>
                  <div>
                    <p className="mb-1 font-jakarta text-[14px] font-bold text-white sm:text-[15px]">
                      {item.title}
                    </p>
                    <p className="m-0 font-jakarta text-[12px] leading-relaxed text-white/75 sm:text-[13px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="relative rounded-[28px] bg-white px-6 py-8 shadow-[0_14px_40px_rgba(30,27,75,0.08)] sm:rounded-[32px] sm:px-8 sm:py-9 md:px-9 md:py-10">
            <StarBadge />

            <h2 className="mb-6 pr-12 font-hanken text-[clamp(1.5rem,2.8vw,2rem)] font-extrabold leading-tight tracking-[-0.02em] text-[#1E1B4B] sm:mb-7">
              Send us a message
            </h2>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-full-name"
                    className="mb-2 block font-jakarta text-[10px] font-bold uppercase tracking-[0.1em] text-[#8B8D9A]"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-full-name"
                    type="text"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    placeholder="Enter your full name"
                    className="w-full rounded-[14px] border border-transparent px-4 py-3 font-jakarta text-[14px] text-[#1E1B4B] outline-none transition-colors placeholder:text-[#B0B2BC] focus:border-[#4F35F2]/25"
                    style={{ backgroundColor: INPUT_BG }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block font-jakarta text-[10px] font-bold uppercase tracking-[0.1em] text-[#8B8D9A]"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email address"
                    className="w-full rounded-[14px] border border-transparent px-4 py-3 font-jakarta text-[14px] text-[#1E1B4B] outline-none transition-colors placeholder:text-[#B0B2BC] focus:border-[#4F35F2]/25"
                    style={{ backgroundColor: INPUT_BG }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block font-jakarta text-[10px] font-bold uppercase tracking-[0.1em] text-[#8B8D9A]"
                >
                  Subject
                </label>
                <select
                  id="contact-subject"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  className="w-full appearance-none rounded-[14px] border border-transparent px-4 py-3 font-jakarta text-[14px] text-[#1E1B4B] outline-none transition-colors focus:border-[#4F35F2]/25"
                  style={{ backgroundColor: INPUT_BG }}
                >
                  <option value="">What is this regarding?</option>
                  <option value="Account Help">Account Help</option>
                  <option value="Billing">Billing</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Partnership">Partnership</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="contact-message"
                    className="block font-jakarta text-[10px] font-bold uppercase tracking-[0.1em] text-[#8B8D9A]"
                  >
                    Message
                  </label>
                  <span className="font-jakarta text-[10px] text-[#8B8D9A]">
                    {message.length} / 1000
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  maxLength={1000}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Type your message here..."
                  className="w-full resize-none rounded-[14px] border border-transparent px-4 py-3 font-jakarta text-[14px] leading-relaxed text-[#1E1B4B] outline-none transition-colors placeholder:text-[#B0B2BC] focus:border-[#4F35F2]/25"
                  style={{ backgroundColor: INPUT_BG }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-[16px] px-4 py-3.5 font-jakarta text-[15px] font-bold text-[#1E1B4B] shadow-[0_8px_24px_rgba(232,255,47,0.35)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                style={{ backgroundColor: LIME }}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" ? (
                <p className="m-0 text-center font-jakarta text-[12px] text-[#4F35F2]">
                  Message sent successfully. We&apos;ll get back to you soon.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="m-0 text-center font-jakarta text-[12px] text-[#D91A8F]">
                  Please check your email and message, then try again.
                </p>
              ) : null}

              <p className="m-0 text-center font-jakarta text-[11px] leading-relaxed text-[#8B8D9A] sm:text-[12px]">
                Your information is safe with us. We never share your details.
              </p>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
};
