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
        <a
          href="/contact"
          className="text-[13px] text-muted transition-colors duration-150 hover:text-navy"
        >
          Contact Us
        </a>
      </nav>
      <p className="w-full text-[12px] text-[#6b6b76] border-t border-border-lt pt-4 mt-1">
        © {new Date().getFullYear()} Studiely. All rights reserved.
      </p>
    </div>
  </footer>
);
