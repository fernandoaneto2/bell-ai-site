"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Globe, ArrowRightLeft, CalendarCheck, Mic, BarChart2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Eyebrow from "@/components/ui/Eyebrow";
import { features } from "@content/features";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Globe,
  ArrowRightLeft,
  CalendarCheck,
  Mic,
  BarChart2,
};

export default function FeaturesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <SectionWrapper id="features" bg="secondary">
      <Container>
        <div className="text-center mb-14">
          <Eyebrow className="mb-4">Features</Eyebrow>
          <SectionTitle>Built for hospitality, end to end.</SectionTitle>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Product features"
        >
          {features.map(({ icon, title, description }, i) => {
            const Icon = iconMap[icon];
            return (
              <motion.div
                key={title}
                role="listitem"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className="group p-6 bg-bg-elevated rounded-sm border border-[rgba(201,162,76,0.1)] hover:border-[rgba(201,162,76,0.3)] transition-all duration-200 hover:bg-[rgba(201,162,76,0.03)]"
              >
                {Icon && (
                  <Icon
                    size={22}
                    className="text-gold-primary mb-4"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                )}
                <h3 className="text-white-pure font-semibold text-base mb-2">{title}</h3>
                <p className="text-gray-muted text-sm leading-relaxed">{description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
