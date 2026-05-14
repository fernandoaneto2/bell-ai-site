"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang, type Lang } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const LANGUAGES: { code: Lang; flag: string; label: string }[] = [
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "pt", flag: "🇧🇷", label: "Português" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "it", flag: "🇮🇹", label: "Italiano" },
];

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
          "bg-[rgba(255,255,255,0.06)] border border-[rgba(201,162,76,0.18)]",
          "backdrop-blur-sm text-gray-muted hover:text-white-soft",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary focus-visible:outline-offset-1"
        )}
      >
        <span className="text-sm leading-none" aria-hidden="true">{current.flag}</span>
        <span className="tracking-wide uppercase">{current.code}</span>
        <ChevronDown
          size={12}
          className={cn("transition-transform duration-200", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Language options"
          className={cn(
            "absolute top-full mt-2 right-0 z-50 min-w-[160px]",
            "bg-bg-elevated border border-[rgba(201,162,76,0.18)] rounded-sm shadow-lg",
            "backdrop-blur-sm overflow-hidden py-1"
          )}
        >
          {LANGUAGES.map((l) => {
            const isActive = lang === l.code;
            return (
              <li key={l.code} role="option" aria-selected={isActive}>
                <button
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors duration-150",
                    "hover:bg-[rgba(201,162,76,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary",
                    isActive ? "text-gold-primary" : "text-gray-muted hover:text-white-soft"
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-base leading-none" aria-hidden="true">{l.flag}</span>
                    <span>{l.label}</span>
                  </span>
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-gold-primary flex-shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
