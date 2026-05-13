import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div className={cn("flex items-center gap-3 justify-center", className)}>
      <span className="hairline-gold flex-1 max-w-[48px] hidden sm:block" aria-hidden="true" />
      <span
        className="text-gold-primary text-xs font-sans font-semibold uppercase tracking-widest2"
        style={{ letterSpacing: "0.2em" }}
      >
        {children}
      </span>
      <span className="hairline-gold flex-1 max-w-[48px] hidden sm:block" aria-hidden="true" />
    </div>
  );
}
