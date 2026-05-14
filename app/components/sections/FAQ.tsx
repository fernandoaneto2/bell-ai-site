"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Eyebrow from "@/components/ui/Eyebrow";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const t = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <SectionWrapper id="faq" bg="secondary">
      <Container>
        <div className="text-center mb-14">
          <Eyebrow className="mb-4">{t.faq.eyebrow}</Eyebrow>
          <SectionTitle>{t.faq.title}</SectionTitle>
        </div>

        <div
          className="max-w-2xl mx-auto flex flex-col divide-y divide-[rgba(201,162,76,0.1)]"
          role="list"
          aria-label="Frequently asked questions"
        >
          {t.faq.items.map(({ question, answer }, i) => {
            const isOpen = openIndex === i;
            const itemId = `faq-item-${i}`;
            const panelId = `faq-panel-${i}`;

            return (
              <div key={i} role="listitem">
                <h3>
                  <button
                    id={itemId}
                    onClick={() => toggle(i)}
                    className={cn(
                      "w-full flex items-center justify-between py-5 text-left gap-4",
                      "text-white-soft hover:text-white-pure transition-colors duration-150",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary focus-visible:outline-offset-2 rounded-sm"
                    )}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="font-semibold text-base">{question}</span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "text-gold-primary flex-shrink-0 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                      aria-hidden="true"
                      strokeWidth={1.5}
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={itemId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-gray-muted text-sm leading-relaxed">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
