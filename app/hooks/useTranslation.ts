"use client";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@content/translations";

export function useTranslation() {
  const { lang } = useLang();
  return translations[lang];
}
