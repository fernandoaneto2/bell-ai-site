"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Moon, Frown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Eyebrow from "@/components/ui/Eyebrow";

const problems = [
  {
    Icon: MessageSquare,
    stat: "70%",
    title: "of guest messages are repetitive",
    description:
      '"What time is check-in?" "Do you have parking?" "Is the pool open?" — the same questions, hundreds of times a week.',
  },
  {
    Icon: Moon,
    stat: "11pm",
    title: "After-hours inquiries become lost bookings",
    description:
      "Guests reach out late at night. By morning, they've booked elsewhere. Every unanswered message is a missed opportunity.",
  },
  {
    Icon: Frown,
    stat: "∞",
    title: "Staff burnout is real",
    description:
      "Reception teams answering the same questions hundreds of times per week. Repetition kills morale — and your best people.",
  },
];

export default function TheProblem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <SectionWrapper id="problem" bg="secondary">
      <Container>
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <Eyebrow className="mb-4">The Problem</Eyebrow>
          <SectionTitle>
            Hospitality runs on conversations.
            <br />
            Most of them{" "}
            <span className="font-semibold italic">shouldn&apos;t</span> need a human.
          </SectionTitle>
          <p className="text-gray-muted mt-5 text-lg">
            Your team is overwhelmed by repetitive questions while real opportunities slip away.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map(({ Icon, stat, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              className="bg-bg-elevated rounded-sm p-7 border border-[rgba(201,162,76,0.1)] flex flex-col gap-4 hover:border-[rgba(201,162,76,0.25)] transition-colors duration-200"
            >
              <Icon
                size={22}
                className="text-gold-primary"
                aria-hidden="true"
                strokeWidth={1.5}
              />
              <p
                className="font-light gold-text-gradient"
                style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
                aria-hidden="true"
              >
                {stat}
              </p>
              <h3 className="text-white-soft font-semibold text-base leading-snug">{title}</h3>
              <p className="text-gray-muted text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
