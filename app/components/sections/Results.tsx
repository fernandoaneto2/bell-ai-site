"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";

// TODO: replace with real aggregated metrics once available
const metrics = [
  { value: "<2s", label: "Average response time" },
  { value: "24/7", label: "Always on" },
  { value: "~70%", label: "Inquiries resolved without human" },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (isInView && !revealed) setRevealed(true);
  }, [isInView, revealed]);

  return (
    <SectionWrapper id="results" bg="primary">
      <Container>
        <div className="text-center mb-14">
          <Eyebrow className="mb-4">Results</Eyebrow>
          <p className="text-gray-muted text-sm">
            {/* TODO: replace with real aggregated metrics once available */}
            <span className="text-[rgba(201,162,76,0.5)] mr-2">*</span>
            Placeholder data — will be updated with real metrics
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center"
          role="list"
          aria-label="Key metrics"
        >
          {metrics.map(({ value, label }, i) => (
            <div
              key={label}
              role="listitem"
              className="flex flex-col items-center gap-3"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              }}
            >
              <span
                className="font-light leading-none select-none"
                style={{
                  fontSize: "clamp(3.5rem, 8vw, 6rem)",
                  color: "transparent",
                  WebkitTextStroke: "1.5px #C9A24C",
                }}
                aria-label={value}
              >
                {value}
              </span>
              <p className="text-gray-muted text-sm tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
