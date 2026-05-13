import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bg?: "primary" | "secondary" | "elevated";
}

export default function SectionWrapper({
  children,
  id,
  className,
  bg = "primary",
}: SectionWrapperProps) {
  const bgMap = {
    primary: "bg-bg-primary",
    secondary: "bg-bg-secondary",
    elevated: "bg-bg-elevated",
  };

  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", bgMap[bg], className)}
      aria-label={id}
    >
      {children}
    </section>
  );
}
