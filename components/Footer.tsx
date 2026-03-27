import Image from "next/image";

export const Footer = () => (
  <footer id="contact" className="bg-bg-base border-t border-border-default py-[34px]">
    <div className="wrap flex items-center justify-between flex-wrap gap-[18px]">
      <div className="flex items-center gap-2 font-serif text-[18px] text-navy">
        <Image
          src="/logo.jpeg"
          alt="Studiely logo"
          width={26}
          height={26}
          className="shrink-0 rounded-md"
        />
        Studiely
      </div>
      <nav className="flex gap-5 flex-wrap" aria-label="Footer">
     
        <a
          href="/privacy-policy"
          className="text-[13px] text-muted transition-colors duration-150 hover:text-navy"
        >
          Privacy Policy
        </a>
        <a
          href="/terms-of-service"
          className="text-[13px] text-muted transition-colors duration-150 hover:text-navy"
        >
          Terms of Service
        </a>
        <a
          href="/acceptable-use"
          className="text-[13px] text-muted transition-colors duration-150 hover:text-navy"
        >
          Acceptable Use
        </a>
        <a
          href="/cookie-policy"
          className="text-[13px] text-muted transition-colors duration-150 hover:text-navy"
        >
          Cookie Policy
        </a>
        <a
          href="/disclaimer"
          className="text-[13px] text-muted transition-colors duration-150 hover:text-navy"
        >
          Disclaimer
        </a>
       
      </nav>
      <div className="w-full border-t border-border-lt pt-4 mt-1 space-y-2">
        <p className="text-[12px] text-[#6b6b76]">
          Studiely is a sister platform of{" "}
          <a
            href="https://makemylesson.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-150 hover:text-navy"
          >
            Make My Lesson
          </a>{" "}
          and{" "}
          <a
            href="https://linguatude.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-150 hover:text-navy"
          >
            Linguatude
          </a>
          .
        </p>
        <p className="text-[12px] text-[#6b6b76]">
          Studiely is part of the Skyen Solutions family of EdTech products. For custom
          software development, websites, and mobile applications, visit{" "}
          <a
            href="https://skyensystems.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-150 hover:text-navy"
          >
            Skyen Systems
          </a>
          .
        </p>
        <p className="text-[12px] text-[#6b6b76]">
          Studiely is a product of Skyen Solutions, a trade name of Qismat Ventures W.L.L.
          (CR 190698-1) — Office 501, Building 1025, Road 3621, Block 436, Al Seef,
          Bahrain.
        </p>
        <p className="text-[12px] text-[#6b6b76]">
          © {new Date().getFullYear()} Studiely. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
