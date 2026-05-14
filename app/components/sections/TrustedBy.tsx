"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import Hairline from "@/components/ui/Hairline";
import { useTranslation } from "@/hooks/useTranslation";

const logos = [
  { emoji: "🍽️", name: "Restaurante Brasa" },
  { emoji: "🏨", name: "Hotel Atlântico" },
  { emoji: "🌿", name: "Pousada das Pedras" },
  { emoji: "💆", name: "Spa Serene" },
  { emoji: "🍹", name: "Bar do Porto" },
  { emoji: "🏖️", name: "Resort Beira-Mar" },
];

export default function TrustedBy() {
  const t = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div className="bg-bg-primary py-14">
      <Container>
        <Hairline className="mb-10" />

        <p className="text-center text-gray-muted text-xs uppercase tracking-widest mb-8 font-medium" style={{ letterSpacing: "0.18em" }}>
          {t.trustedBy}
        </p>

        <div
          ref={ref}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
          role="list"
          aria-label="Client logos"
        >
          {logos.map(({ emoji, name }, i) => (
            <motion.div
              key={name}
              role="listitem"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              className="flex items-center gap-2.5 px-5 py-2.5 border border-[rgba(201,162,76,0.15)] rounded-full bg-[rgba(201,162,76,0.03)] hover:border-[rgba(201,162,76,0.3)] hover:bg-[rgba(201,162,76,0.06)] transition-all duration-200 cursor-default"
              aria-label={`${name} — placeholder client`}
            >
              <span className="text-base" aria-hidden="true">{emoji}</span>
              <span className="text-gray-muted text-xs font-medium tracking-wide">{name}</span>
            </motion.div>
          ))}
        </div>

        <Hairline className="mt-10" />
      </Container>
    </div>
  );
}
