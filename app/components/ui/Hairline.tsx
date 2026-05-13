import { cn } from "@/lib/utils";

interface HairlineProps {
  className?: string;
  direction?: "horizontal" | "vertical";
}

export default function Hairline({ className, direction = "horizontal" }: HairlineProps) {
  if (direction === "vertical") {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "w-px self-stretch",
          className
        )}
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(201,162,76,0.5) 30%, rgba(201,162,76,0.8) 50%, rgba(201,162,76,0.5) 70%, transparent 100%)",
        }}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn("hairline-gold w-full", className)}
    />
  );
}
