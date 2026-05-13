"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Eyebrow from "@/components/ui/Eyebrow";
import { useCases } from "@content/use-cases";

export default function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <SectionWrapper id="use-cases" bg="primary">
      <Container>
        <div className="text-center mb-14">
          <Eyebrow className="mb-4">Use Cases</Eyebrow>
          <SectionTitle>One platform. Every kind of establishment.</SectionTitle>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          role="list"
          aria-label="Use cases"
        >
          {useCases.map(({ title, subtitle, description, imageAlt }, i) => (
            <motion.article
              key={title}
              role="listitem"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-sm border border-[rgba(201,162,76,0.1)] hover:border-[rgba(201,162,76,0.3)] transition-colors duration-200 bg-bg-elevated"
            >
              {/* Image placeholder — TODO: replace with next/image using real photography */}
              <div
                className="relative w-full bg-[#111] flex items-center justify-center"
                style={{ height: 180 }}
                aria-label={imageAlt}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,162,76,0.05)] to-transparent" />
                <span className="text-xs text-gray-muted opacity-40 z-10">
                  [ USE CASE IMAGE — {title} ]
                </span>
                {/* Decorative diagonal line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(201,162,76,0.3), transparent)",
                  }}
                  aria-hidden="true"
                />
              </div>

              <div className="p-6">
                <p className="text-gold-primary text-xs uppercase tracking-widest mb-2 font-semibold">
                  {subtitle}
                </p>
                <h3 className="text-white-pure font-semibold text-xl mb-3">{title}</h3>
                <p className="text-gray-muted text-sm leading-relaxed">{description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
