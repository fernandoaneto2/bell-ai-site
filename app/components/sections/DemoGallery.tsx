"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { useTranslation } from "@/hooks/useTranslation";

type Message = { from: "user" | "bot"; text: string };

const scenarios: { id: string; emoji: string; category: string; messages: Message[] }[] = [
  {
    id: "restaurant",
    emoji: "🍽️",
    category: "Restaurant",
    messages: [
      { from: "user", text: "Table for 4 tomorrow at 8pm?" },
      { from: "bot", text: "Done! Table reserved for Saturday 8pm 🍾 Name for the booking?" },
      { from: "user", text: "Mendes, please." },
      { from: "bot", text: "Confirmed, Mendes! WhatsApp confirmation sent. See you tomorrow!" },
    ],
  },
  {
    id: "hotel",
    emoji: "🏨",
    category: "Hotel",
    messages: [
      { from: "user", text: "Can I check in early? Our flight lands at 9am." },
      { from: "bot", text: "Great news! Early check-in from 11am is available for your room 🛎️" },
      { from: "user", text: "Amazing, thank you!" },
      { from: "bot", text: "You're welcome! Need airport pickup? I can arrange that too." },
    ],
  },
  {
    id: "spa",
    emoji: "💆",
    category: "Spa & Wellness",
    messages: [
      { from: "user", text: "Do you have couples massage on Sunday?" },
      { from: "bot", text: "Yes! Hot Stone Couples (90min) at 3pm Sunday is available 💆" },
      { from: "user", text: "Book it for us!" },
      { from: "bot", text: "Booked! Arrive 15min early. Towels and welcome tea included." },
    ],
  },
  {
    id: "pousada",
    emoji: "🌿",
    category: "Pousada",
    messages: [
      { from: "user", text: "Is breakfast included in the daily rate?" },
      { from: "bot", text: "Yes! Served 7–10am with regional & international options 🥐" },
      { from: "user", text: "Any late checkout available?" },
      { from: "bot", text: "Until 2pm for R$50. Want me to add it to your reservation?" },
    ],
  },
];

const msgVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.3 + i * 0.45 },
  }),
};

function ScenarioCard({
  scenario,
  enterDelay,
}: {
  scenario: (typeof scenarios)[0];
  enterDelay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: enterDelay }}
      className="flex flex-col rounded-sm border border-[rgba(201,162,76,0.15)] bg-bg-elevated overflow-hidden hover:border-[rgba(201,162,76,0.3)] transition-colors duration-200"
      aria-label={`${scenario.category} demo conversation`}
    >
      {/* Chat header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[rgba(0,0,0,0.35)] border-b border-[rgba(201,162,76,0.1)]">
        <div className="w-9 h-9 rounded-full bg-[rgba(201,162,76,0.15)] flex items-center justify-center text-base flex-shrink-0">
          {scenario.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white-soft text-xs font-semibold">Bell AI · {scenario.category}</p>
          <p className="text-[10px] text-green-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" aria-hidden="true" />
            Online 24/7
          </p>
        </div>
        {/* Window controls */}
        <div className="flex gap-1 flex-shrink-0" aria-hidden="true">
          {["#C9A24C", "#555", "#555"].map((c, i) => (
            <span key={i} className="w-2 h-2 rounded-full" style={{ background: c }} />
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-2.5 p-4 flex-1" role="log" aria-label="Chat messages">
        {scenario.messages.map((msg, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={msgVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`rounded-2xl px-3 py-2 max-w-[82%] text-[11.5px] leading-relaxed ${
                msg.from === "user"
                  ? "bg-gold-primary text-bg-primary rounded-tr-sm font-medium"
                  : "bg-[rgba(255,255,255,0.06)] text-white-soft rounded-tl-sm"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}

        {/* Typing indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 + scenario.messages.length * 0.45 + 0.3, duration: 0.4 }}
          className="flex items-center gap-1.5 px-3.5 py-2.5 bg-[rgba(255,255,255,0.06)] rounded-2xl rounded-tl-sm w-fit"
          aria-label="Bell is typing"
        >
          {[0, 0.18, 0.36].map((d, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-gray-muted animate-bounce"
              style={{ animationDelay: `${d}s` }}
              aria-hidden="true"
            />
          ))}
        </motion.div>
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-t border-[rgba(201,162,76,0.1)]" aria-hidden="true">
        <div className="flex-1 bg-[rgba(255,255,255,0.04)] rounded-full px-4 py-1.5 text-[10px] text-gray-muted border border-[rgba(201,162,76,0.1)]">
          Message...
        </div>
        <div className="w-7 h-7 rounded-full bg-gold-primary flex items-center justify-center flex-shrink-0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-bg-primary">
            <path d="M22 2L11 13" /><path d="M22 2L15 22 11 13 2 9l20-7z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function DemoGallery() {
  const t = useTranslation();
  const d = t.demoGallery;

  return (
    <SectionWrapper id="demo-gallery" bg="secondary">
      <Container>
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <Eyebrow className="mb-4">{d.eyebrow}</Eyebrow>
          <SectionTitle>{d.title}</SectionTitle>
          <p className="text-gray-muted mt-5 text-base leading-relaxed">{d.sub}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {scenarios.map((scenario, i) => (
            <ScenarioCard key={scenario.id} scenario={scenario} enterDelay={i * 0.08} />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="gold-solid"
            size="lg"
            href="#book-demo"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#book-demo")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {d.cta}
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
}
