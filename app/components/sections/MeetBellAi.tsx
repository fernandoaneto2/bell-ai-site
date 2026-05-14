"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Eyebrow from "@/components/ui/Eyebrow";
import { useTranslation } from "@/hooks/useTranslation";

export default function MeetBellAi() {
  const t = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <SectionWrapper id="meet-bell-ai" bg="primary">
      <Container>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <Eyebrow className="justify-start">{t.meetBell.eyebrow}</Eyebrow>
            <SectionTitle as="h2" align="left">
              {t.meetBell.titleA}{" "}
              <span className="font-semibold">{t.meetBell.titleB}</span>
              <br />
              {t.meetBell.titleC}{" "}
              <span className="font-semibold">{t.meetBell.titleD}</span>
            </SectionTitle>
            <p className="text-gray-muted text-base leading-relaxed max-w-md">
              {t.meetBell.sub1}
            </p>
            <p className="text-gray-muted text-base leading-relaxed max-w-md">
              {t.meetBell.sub2}
            </p>
            <ul className="flex flex-col gap-3" aria-label="Key benefits">
              {t.meetBell.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckCircle
                    size={17}
                    className="text-gold-primary mt-0.5 flex-shrink-0"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="text-white-soft text-sm">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            {/* TODO: replace with real dashboard screenshot */}
            <div
              className="w-full max-w-md rounded-sm border border-[rgba(201,162,76,0.15)] bg-bg-elevated overflow-hidden"
              aria-label="Dashboard preview — placeholder"
            >
              {/* Fake toolbar */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0d0d0d] border-b border-[rgba(201,162,76,0.1)]">
                {["#C9A24C", "#3a3a3a", "#3a3a3a"].map((c, i) => (
                  <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} aria-hidden="true" />
                ))}
                <span className="ml-3 text-xs text-gray-muted">bell.ai Dashboard</span>
              </div>
              {/* Fake metrics row */}
              <div className="grid grid-cols-3 divide-x divide-[rgba(201,162,76,0.1)] border-b border-[rgba(201,162,76,0.1)]">
                {[
                  { label: "Open chats", value: "24" },
                  { label: "Resolved today", value: "138" },
                  { label: "Avg. response", value: "<2s" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col items-center py-4 gap-1">
                    <span className="text-gold-primary font-semibold text-xl">{value}</span>
                    <span className="text-gray-muted text-[10px] text-center">{label}</span>
                  </div>
                ))}
              </div>
              {/* Fake chat list */}
              <div className="flex flex-col divide-y divide-[rgba(201,162,76,0.05)]">
                {[
                  { name: "Maria S.", msg: "Can I check in early tomorrow?", time: "now", active: true },
                  { name: "James K.", msg: "Is the spa open on Sundays?", time: "2m", active: false },
                  { name: "Ana P.", msg: "Book confirmed ✓", time: "15m", active: false },
                  { name: "Carlos M.", msg: "Thank you so much!", time: "1h", active: false },
                ].map(({ name, msg, time, active }) => (
                  <div key={name} className={`flex items-center gap-3 px-4 py-3 ${active ? "bg-[rgba(201,162,76,0.05)]" : ""}`}>
                    <div className="w-8 h-8 rounded-full bg-bg-primary border border-[rgba(201,162,76,0.2)] flex items-center justify-center text-gold-primary text-xs flex-shrink-0">
                      {name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white-soft text-xs font-semibold">{name}</p>
                      <p className="text-gray-muted text-[10px] truncate">{msg}</p>
                    </div>
                    <span className="text-[10px] text-gray-muted flex-shrink-0">{time}</span>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 text-center">
                <span className="text-[10px] text-gray-muted opacity-50">
                  [ PLACEHOLDER — replace with real dashboard screenshot ]
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
