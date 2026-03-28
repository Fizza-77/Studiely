import Image from "next/image";
import Link from "next/link";
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

        <nav className="flex gap-4 flex-wrap text-[12px]" aria-label="Footer">
        <Link href="/privacy-policy" className="text-muted hover:text-navy">
  Privacy Policy
</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
<Link href="/acceptable-use">Acceptable Use</Link>
<Link href="/cookie-policy">Cookie Policy</Link>
<Link href="/disclaimer">Disclaimer</Link>
        </nav>
      </div>

      {/* Bottom legal (compressed, SAME content) */}
<div className="w-full border-t border-border-lt pt-3 text-[11px] text-[#6b6b76] leading-[1.5] space-y-1 text-center">
          <p>
          Studiely is a sister platform of{" "}
          <a href="https://makemylesson.ai" target="_blank" rel="noopener noreferrer" className="hover:text-navy">
            Make My Lesson
          </a>{" "}
          and{" "}
          <a href="https://linguatude.com" target="_blank" rel="noopener noreferrer" className="hover:text-navy">
            Linguatude
          </a>.
        </p>

        <p>
          Studiely is part of the Skyen Solutions family of EdTech products. For custom software development, websites, and mobile applications, visit{" "}
          <a href="https://skyensystems.com" target="_blank" rel="noopener noreferrer" className="hover:text-navy">
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