"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTranslation } from "@/hooks/useTranslation";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Manifesto() {
  const t = useTranslation();
  const m = t.manifesto;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px" });

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.75, ease: EASE, delay },
  });

  return (
    <section
      id="manifesto"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "rgba(0,0,0,0.92)" }}
      aria-label="Brand manifesto"
    >
      {/* Gold hairline top */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,162,76,0.35), transparent)" }}
        aria-hidden="true"
      />

      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,162,76,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div ref={ref} className="max-w-2xl mx-auto flex flex-col gap-10 items-center text-center">

          {/* Tagline */}
          <motion.p
            {...fadeUp(0)}
            className="text-xs uppercase tracking-[0.22em] text-gold-primary font-semibold"
          >
            {m.tagline}
          </motion.p>

          {/* Main statement */}
          <motion.div {...fadeUp(0.1)} className="flex flex-col gap-1">
            <p
              className="font-light text-white-pure leading-tight text-balance"
              style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
            >
              {m.line1}
              <br />
              <span className="font-semibold gold-text-gradient">{m.line2}</span>
            </p>
            <p
              className="font-light text-white-pure leading-tight text-balance"
              style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
            >
              {m.line3}
              <br />
              <span className="font-semibold gold-text-gradient">{m.line4}</span>
            </p>
          </motion.div>

          {/* Gold hairline divider */}
          <motion.div
            {...fadeUp(0.2)}
            className="w-16 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(201,162,76,0.6), transparent)" }}
            aria-hidden="true"
          />

          {/* Body paragraph */}
          <motion.p
            {...fadeUp(0.28)}
            className="text-gray-muted text-lg leading-relaxed text-balance"
          >
            {m.body}
          </motion.p>

          {/* Closing lines */}
          <motion.div {...fadeUp(0.36)} className="flex flex-col gap-1">
            <p className="text-white-soft text-xl font-light">{m.close1}</p>
            <p className="text-white-soft text-xl font-semibold">{m.close2}</p>
          </motion.div>
        </div>
      </Container>

      {/* Gold hairline bottom */}
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,162,76,0.2), transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}
