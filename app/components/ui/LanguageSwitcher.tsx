"use client";

import { useLang, type Lang } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const options: { value: Lang; flag: string; label: string }[] = [
  { value: "en", flag: "🇺🇸", label: "EN" },
  { value: "pt", flag: "🇧🇷", label: "PT" },
];

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Select language"
      className={cn(
        "flex items-center gap-0.5 rounded-full p-0.5",
        "bg-[rgba(255,255,255,0.06)] border border-[rgba(201,162,76,0.18)]",
        "backdrop-blur-sm",
        className
      )}
    >
      {options.map((opt) => {
        const active = lang === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => setLang(opt.value)}
            aria-pressed={active}
            aria-label={opt.value === "en" ? "English" : "Português"}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary focus-visible:outline-offset-1",
              active
                ? "bg-gold-primary text-bg-primary shadow-[0_1px_8px_rgba(201,162,76,0.35)]"
                : "text-gray-muted hover:text-white-soft"
            )}
          >
            <span className="text-sm leading-none">{opt.flag}</span>
            <span className="tracking-wide">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
