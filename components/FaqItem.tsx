interface FaqItemProps {
  question: string;
  children: React.ReactNode;
}

export const FaqItem = ({ question, children }: FaqItemProps) => {
  return (
    <div className="border border-border-lt rounded-lg overflow-hidden bg-white/60">
      <details className="group">
        <summary className="w-full flex items-center justify-between gap-3 px-3.5 py-3 text-left hover:bg-bg-base/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 list-none cursor-pointer [&::-webkit-details-marker]:hidden">
          <span className="text-[13px] md:text-[14px] font-semibold text-navy">
            {question}
          </span>
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-border-default text-[11px] text-muted transition-transform duration-200 group-open:rotate-180"
          >
            ▼
          </span>
        </summary>
        <div className="px-3.5 pb-3.5 pt-0 text-[13px] text-body leading-[1.75] border-t border-border-lt [&_p+p]:mt-3 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ol]:mt-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5">
          {children}
        </div>
      </details>
    </div>
  );
};

