"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold-solid" | "gold-outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "gold-solid", size = "md", className, children, href, onClick, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-sans font-600 tracking-wide transition-all duration-200 cursor-pointer select-none rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      "gold-solid":
        "bg-gold-primary text-bg-primary hover:bg-gold-light active:bg-gold-deep",
      "gold-outline":
        "border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-bg-primary active:bg-gold-deep active:border-gold-deep",
      ghost:
        "text-white-soft hover:text-gold-light border border-transparent hover:border-[rgba(201,162,76,0.3)]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    if (href) {
      return (
        <a
          href={href}
          className={cn(base, variants[variant], sizes[size], className)}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
