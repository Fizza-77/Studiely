import Image from "next/image";
import Link from "next/link";

/** Sister product URLs — edit here when you change them. */
const MAKE_MY_LESSON_URL = "https://makemylesson.ai";
const LINGUATUDE_URL = "https://linguatude.com";

const footerLinkClass =
  "text-[#6b6b76] underline underline-offset-[3px] decoration-[#6b6b76]/50 hover:text-navy hover:decoration-navy";

export const Footer = () => (
  <footer className="bg-bg-base border-t border-border-default py-5">
    <div className="wrap flex flex-col gap-3">
      
      {/* Top row */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2 font-serif text-[16px] text-navy">
          <Image
            src="/logo.jpeg"
            alt="Studiely logo"
            width={22}
            height={22}
            className="rounded-md"
          />
          Studiely
        </div>

        <nav
  className="flex items-center justify-between gap-2 text-[10px] sm:text-[11px] md:text-[12px] whitespace-nowrap"
  aria-label="Footer"
>
  <Link href="/privacy-policy" className="text-muted hover:text-navy">
    Privacy Policy
  </Link>
  <Link href="/terms-of-service" className="text-muted hover:text-navy">
    Terms of Service
  </Link>
  <Link href="/acceptable-use" className="text-muted hover:text-navy">
    Acceptable Use Policy
  </Link>
  <Link href="/cookie-policy" className="text-muted hover:text-navy">
    Cookie Policy
  </Link>
  <Link href="/disclaimer" className="text-muted hover:text-navy">
    Disclaimer
  </Link>
</nav>
      </div>

      {/* Bottom legal (compressed, SAME content) */}
<div className="w-full border-t border-border-lt pt-3 text-[11px] text-[#6b6b76] leading-[1.5] space-y-1 text-center">
          <p>
          Studiely is a sister platform of{" "}
          <a href={MAKE_MY_LESSON_URL} target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
            Make My Lesson
          </a>{" "}
          and{" "}
          <a href={LINGUATUDE_URL} target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
            Linguatude
          </a>.
        </p>

        <p>
          Studiely is part of the Skyen Solutions family of EdTech products. For custom software development, websites, and mobile applications, visit{" "}
          <a href="https://skyensystems.com" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
            Skyen Systems
          </a>.
        </p>

        <p>
          Studiely is a product of Skyen Solutions, a trade name of Qismat Ventures W.L.L. (CR 190698-1) — Office 501, Building 1025, Road 3621, Block 436, Al Seef, Bahrain.
        </p>

        <p>
          © {new Date().getFullYear()} Studiely. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);