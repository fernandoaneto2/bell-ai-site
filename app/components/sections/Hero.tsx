"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import PhoneMockup from "@/components/ui/PhoneMockup";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

export default function Hero() {
  const handleSeeDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#live-demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 bg-bg-primary overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle radial gold glow top-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 90% 5%, rgba(201,162,76,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/Emoji-bell-sem-fundo.png"
                alt="bell.ai mascot"
                width={96}
                height={96}
                className="h-24 w-24 object-contain drop-shadow-[0_0_24px_rgba(201,162,76,0.45)]"
                priority
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="flex flex-col gap-3"
            >
              <Eyebrow className="justify-start">AI Concierge for Hospitality</Eyebrow>

              {/* Social proof trust badge */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2" aria-hidden="true">
                  {["A", "B", "C", "D"].map((l) => (
                    <div
                      key={l}
                      className="w-7 h-7 rounded-full bg-bg-elevated border-2 border-bg-primary flex items-center justify-center text-[10px] text-gold-primary font-semibold"
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-muted">
                  Trusted by{" "}
                  <span className="text-gold-primary font-semibold">50+</span>{" "}
                  hospitality establishments
                </p>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.12}
              className="font-sans font-light text-white-pure leading-[1.1] text-balance"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)" }}
            >
              Your guests deserve
              <br />
              <span className="font-semibold">instant answers.</span>
              <br />
              Your staff deserves
              <br />
              <span className="font-semibold">their time back.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.24}
              className="text-gray-muted text-lg leading-relaxed max-w-[520px]"
            >
              bell.ai is an AI concierge that handles reservations, requests, and questions across
              WhatsApp, Instagram, and your website — 24/7, in any language, in your brand voice.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.36}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <Button
                variant="gold-solid"
                size="lg"
                href="#book-demo"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#book-demo")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book a Demo
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="#live-demo"
                onClick={handleSeeDemo}
              >
                See It in Action <ArrowDown size={16} />
              </Button>
            </motion.div>
          </div>

          {/* Right: phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup preview />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
