interface FaqItemProps {
  question: string;
  children: React.ReactNode;
  variant?: "default" | "marketing";
}

export const FaqItem = ({ question, children, variant = "default" }: FaqItemProps) => {
  if (variant === "marketing") {
    return (
      <div className="funky-card overflow-hidden rounded-[18px] border border-[#ECEEF6] bg-white shadow-[0_4px_18px_rgba(30,27,75,0.04)]">
        <details className="group faq-item">
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-[#FAFAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F35F2]/40 sm:px-5 sm:py-[18px] [&::-webkit-details-marker]:hidden">
            <span className="font-jakarta text-[14px] font-bold leading-snug text-[#4F35F2] sm:text-[15px]">
              {question}
            </span>
            <span
              aria-hidden="true"
              className="funky-icon inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1E1B4B] text-white transition-transform duration-200 group-open:rotate-180"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                <path
                  d="M4 6l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </summary>
          <div className="border-t border-[#ECEEF6] px-4 pb-4 pt-0 font-jakarta text-[13px] leading-[1.75] text-[#5B5A6A] sm:px-5 sm:pb-5 [&_ol]:mt-2 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-5 [&_p+p]:mt-3 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
            {children}
          </div>
        </details>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border-lt bg-white/60">
      <details className="group faq-item">
        <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-3 px-3.5 py-3 text-left hover:bg-bg-base/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 [&::-webkit-details-marker]:hidden">
          <span className="text-[13px] font-semibold text-navy md:text-[14px]">
            {question}
          </span>
          <span
            aria-hidden="true"
            className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-border-default text-[11px] text-muted transition-transform duration-200 group-open:rotate-180"
          >
            ▼
          </span>
        </summary>
        <div className="border-t border-border-lt px-3.5 pb-3.5 pt-0 text-[13px] leading-[1.75] text-body [&_ol]:mt-2 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-5 [&_p+p]:mt-3 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          {children}
        </div>
      </details>
    </div>
  );
};
