import { BackButton } from "./BackButton";

interface PageHeaderProps {
  label?: string;
  title: string;
  sub?: string;
  eyebrowColorClass?: string;
  center?: boolean;
  showBack?: boolean;
  variant?: "default" | "compact";
}

export const PageHeader = ({
  label,
  title,
  sub,
  eyebrowColorClass = "text-teal",
  center = true,
  showBack = true,
  variant = "default",
}: PageHeaderProps) => {
  const isCompact = variant === "compact";

  return (
    <header className="relative overflow-hidden bg-navy text-white w-full">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.36]">
        <div
          className="absolute -left-32 -top-28 w-[380px] h-[380px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(0,176,155,0.28), transparent 60%)",
          }}
        />
        <div
          className="absolute -right-40 -bottom-40 w-[420px] h-[420px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 70% 70%, rgba(84,72,200,0.3), transparent 60%)",
          }}
        />
      </div>

      {/* Back Button - viewport aligned absolute */}
      {showBack && (
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
          <BackButton />
        </div>
      )}

      {/* Content container with horizontal padding and max width */}
      <div
        className={`relative max-w-[720px] mx-auto px-4 ${
          isCompact ? "pt-[40px] pb-[20px]" : "pt-[72px] pb-[40px]"
        }`}
      >
        {/* Centered content */}
        <div className="text-center">
          {label && (
            <p
              className={`text-[11px] uppercase tracking-[2px] mb-1 opacity-90 ${eyebrowColorClass}`}
            >
              {label}
            </p>
          )}

          <h1
            className={`font-serif leading-[1.08] ${
              isCompact
                ? "text-[clamp(24px,3.2vw,32px)] mb-2"
                : "text-[clamp(30px,4.6vw,44px)] mb-3"
            }`}
          >
            {title}
          </h1>

          {sub && !isCompact && (
            <p className="text-[14px] md:text-[15px] text-[#d7d7e0] leading-[1.7]">
              {sub}
            </p>
          )}
        </div>
      </div>
    </header>
  );
};