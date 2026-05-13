"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Plug, BrainCircuit, Share2, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Eyebrow from "@/components/ui/Eyebrow";

const steps = [
  {
    number: "01",
    Icon: Plug,
    title: "Connect",
    description:
      "Tell us about your establishment. Share your menu, policies, FAQs, and tone of voice.",
  },
  {
    number: "02",
    Icon: BrainCircuit,
    title: "Train",
    description:
      "We build your AI concierge on top of your real content. You review and approve before anything goes live.",
  },
  {
    number: "03",
    Icon: Share2,
    title: "Deploy",
    description:
      "Plug bell.ai into WhatsApp Business, Instagram DMs, and your website with a single line of code.",
  },
  {
    number: "04",
    Icon: TrendingUp,
    title: "Grow",
    description:
      "Watch response times drop, bookings rise, and your team focus on what actually matters.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const lineRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const lineInView = useInView(lineRef, { once: true, margin: "-20% 0px" });

  return (
    <SectionWrapper id="how-it-works" bg="secondary">
      <Container>
        <div className="text-center mb-14">
          <Eyebrow className="mb-4">Process</Eyebrow>
          <SectionTitle>From signup to first conversation in under 7 days.</SectionTitle>
        </div>

        {/* Connector line (desktop only) */}
        <div
          ref={lineRef}
          className="hidden lg:block relative mb-8"
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-[12.5%] right-[12.5%] h-px bg-[rgba(201,162,76,0.15)]" />
          <motion.div
            className="absolute top-1/2 left-[12.5%] h-px"
            style={{
              background: "linear-gradient(90deg, transparent, #C9A24C, transparent)",
              right: "87.5%",
            }}
            initial={{ right: "87.5%" }}
            animate={lineInView ? { right: "12.5%" } : {}}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map(({ number, Icon, title, description }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="flex flex-col gap-4 p-6 bg-bg-elevated rounded-sm border border-[rgba(201,162,76,0.1)] hover:border-[rgba(201,162,76,0.25)] transition-colors duration-200"
            >
              {/* Step number — outline gold */}
              <span
                className="font-light select-none leading-none"
                style={{
                  fontSize: "3.5rem",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(201,162,76,0.5)",
                }}
                aria-hidden="true"
              >
                {number}
              </span>
              <Icon
                size={20}
                className="text-gold-primary"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="text-white-pure font-semibold text-lg">{title}</h3>
              <p className="text-gray-muted text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
