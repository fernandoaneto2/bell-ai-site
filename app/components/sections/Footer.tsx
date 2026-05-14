"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Hairline from "@/components/ui/Hairline";
import { useTranslation } from "@/hooks/useTranslation";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const t = useTranslation();

  return (
    <footer className="bg-bg-secondary border-t border-[rgba(201,162,76,0.1)]" role="contentinfo">
      <Container className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <a
              href="/"
              className="w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary rounded-sm"
              aria-label="bell.ai — home"
            >
              <Image
                src="/Logo_BELL_sem_fundo.png"
                alt="bell.ai"
                width={96}
                height={96}
                className="h-24 w-24 object-contain"
              />
            </a>
            <p className="text-gray-muted text-xs uppercase tracking-widest font-semibold" style={{ letterSpacing: "0.2em" }}>
              AI Concierge for Hospitality
            </p>
            <p className="text-gray-muted text-sm leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Col 2: Product */}
          <nav aria-label="Product links">
            <p className="text-white-soft text-xs uppercase tracking-widest font-semibold mb-4" style={{ letterSpacing: "0.15em" }}>
              {t.footer.product}
            </p>
            <ul className="flex flex-col gap-2.5">
              {t.footer.productLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-gray-muted text-sm hover:text-gold-primary transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary rounded-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Company */}
          <nav aria-label="Company links">
            <p className="text-white-soft text-xs uppercase tracking-widest font-semibold mb-4" style={{ letterSpacing: "0.15em" }}>
              {t.footer.company}
            </p>
            <ul className="flex flex-col gap-2.5">
              {t.footer.companyLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-gray-muted text-sm hover:text-gold-primary transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary rounded-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Hairline className="my-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-muted text-xs">
            &copy; {currentYear} bell.ai &middot; {t.footer.copyright}
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4" aria-label="Social media links">
            {/* TODO: replace hrefs with real social handles */}
            <a
              href="#"
              aria-label="bell.ai on Instagram"
              className="text-gray-muted hover:text-gold-primary transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary rounded-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="bell.ai on LinkedIn"
              className="text-gray-muted hover:text-gold-primary transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary rounded-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
