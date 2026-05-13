import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
}

export default function SectionTitle({
  children,
  className,
  as: Tag = "h2",
  align = "center",
}: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        "font-sans font-light text-white-pure text-balance leading-tight",
        "text-3xl sm:text-4xl md:text-5xl",
        align === "center" && "text-center",
        className
      )}
    >
      {children}
    </Tag>
  );
}
