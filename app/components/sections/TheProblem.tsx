"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Moon, Frown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Eyebrow from "@/components/ui/Eyebrow";
import { useTranslation } from "@/hooks/useTranslation";

const ICONS = [MessageSquare, Moon, Frown];

export default function TheProblem() {
  const t = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <SectionWrapper id="problem" bg="secondary">
      <Container>
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <Eyebrow className="mb-4">{t.problem.eyebrow}</Eyebrow>
          <SectionTitle>
            {t.problem.title.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </SectionTitle>
          <p className="text-gray-muted mt-5 text-lg">
            {t.problem.sub}
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.problem.items.map(({ stat, title, description }, i) => {
            const Icon = ICONS[i];
            return (
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
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
