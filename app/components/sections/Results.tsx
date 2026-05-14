"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";

const metrics = [
  {
    value: "+40%",
    label: "Increase in online bookings",
    sublabel: "Average across pilot clients",
  },
  {
    value: "<2s",
    label: "Average response time",
    sublabel: "Any hour, any channel",
  },
  {
    value: "8h",
    label: "Staff hours freed per day",
    sublabel: "Per property, on average",
  },
  {
    value: "70%",
    label: "Inquiries resolved by AI",
    sublabel: "Without human intervention",
  },
  {
    value: "24/7",
    label: "Always available",
    sublabel: "No sick days, no holidays",
  },
  {
    value: "50+",
    label: "Languages supported",
    sublabel: "Automatic detection",
  },
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
          <SectionTitle>Numbers that change the conversation.</SectionTitle>
          <p className="text-gray-muted text-sm mt-4 flex items-center justify-center gap-2">
            <span className="text-gold-primary opacity-60">✦</span>
            Based on aggregated data from pilot clients — updated quarterly
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[rgba(201,162,76,0.08)] rounded-sm overflow-hidden border border-[rgba(201,162,76,0.1)]"
          role="list"
          aria-label="Key performance metrics"
        >
          {metrics.map(({ value, label, sublabel }, i) => (
            <div
              key={label}
              role="listitem"
              className="flex flex-col items-center gap-2 p-8 bg-bg-primary text-center"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              <span
                className="font-light leading-none select-none"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  color: "transparent",
                  WebkitTextStroke: "1.5px #C9A24C",
                }}
                aria-label={value}
              >
                {value}
              </span>
              <p className="text-white-soft text-sm font-semibold leading-snug">{label}</p>
              <p className="text-gray-muted text-xs">{sublabel}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
