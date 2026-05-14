"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { navLinks, navCta } from "@content/nav";
import { useLang } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const links = navLinks[lang];
  const ctaLabel = navCta[lang];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-blur-navbar" : "bg-transparent",
          "border-b",
          scrolled ? "border-[rgba(201,162,76,0.15)]" : "border-transparent"
        )}
        role="banner"
      >
        <Container>
          <nav
            className="flex items-center justify-between h-16 md:h-18"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary focus-visible:outline-offset-2 rounded-sm"
              aria-label="bell.ai — home"
            >
              <Image
                src="/Emoji-bell-sem-fundo.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
                priority
                aria-hidden="true"
              />
              <span className="text-xl font-light tracking-tight text-white-pure">
                bell<span className="text-gold-primary">.</span>ai
              </span>
            </a>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-gray-muted hover:text-white-soft transition-colors duration-150 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary focus-visible:outline-offset-2 rounded-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop: switcher + CTA */}
            <div className="hidden md:flex items-center gap-3">
              <LanguageSwitcher />
              <Button
                variant="gold-outline"
                size="sm"
                href="#book-demo"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#book-demo");
                }}
              >
                {ctaLabel}
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-gray-muted hover:text-white-pure transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary rounded-sm"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 bg-bg-primary pt-16 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <Container className="flex flex-col gap-2 py-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-lg text-white-soft hover:text-gold-primary py-3 border-b border-[rgba(201,162,76,0.1)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary rounded-sm"
              >
                {link.label}
              </button>
            ))}

            <div className="mt-4">
              <LanguageSwitcher />
            </div>

            <div className="mt-4">
              <Button
                variant="gold-solid"
                size="lg"
                href="#book-demo"
                className="w-full"
                onClick={() => {
                  setMobileOpen(false);
                  setTimeout(() => {
                    document.querySelector("#book-demo")?.scrollIntoView({ behavior: "smooth" });
                  }, 150);
                }}
              >
                {ctaLabel}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
