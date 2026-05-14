"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  CalendarCheck, BookOpen, Package, MessageSquare, Star,
  Key, Bed, MapPin, Shield, BarChart2,
  Heart, Globe, Mic, Clock,
  Layers, ArrowRightLeft, CheckCircle,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { useCaseTabs } from "@content/use-cases";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  CalendarCheck, BookOpen, Package, MessageSquare, Star,
  Key, Bed, MapPin, Shield, BarChart2,
  Heart, Globe, Mic, Clock,
  Layers, ArrowRightLeft,
};

export default function UseCases() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const tab = useCaseTabs[activeTab];

  return (
    <SectionWrapper id="use-cases" bg="primary">
      <Container>
        <div className="text-center mb-12">
          <Eyebrow className="mb-4">Use Cases</Eyebrow>
          <SectionTitle>One platform. Every kind of establishment.</SectionTitle>
        </div>

        {/* Tab list */}
        <div
          role="tablist"
          aria-label="Establishment types"
          className="flex gap-2 mb-10 overflow-x-auto pb-1 justify-center flex-wrap"
        >
          {useCaseTabs.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={activeTab === i}
              aria-controls={`tabpanel-${t.id}`}
              onClick={() => setActiveTab(i)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary",
                activeTab === i
                  ? "bg-gold-primary text-bg-primary shadow-[0_2px_12px_rgba(201,162,76,0.35)]"
                  : "bg-[rgba(255,255,255,0.05)] text-gray-muted hover:text-white-soft border border-[rgba(201,162,76,0.15)] hover:border-[rgba(201,162,76,0.35)]"
              )}
            >
              <span>{t.emoji}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`tabpanel-${tab.id}`}
            role="tabpanel"
            ref={ref}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
          >
            {/* Left: headline + items */}
            <div className="flex flex-col gap-6">
              <div>
                <h3
                  className="font-light text-white-pure leading-tight mb-3"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                >
                  {tab.headline}
                </h3>
                <p className="text-gray-muted text-base leading-relaxed">{tab.subheadline}</p>
              </div>

              <ul className="flex flex-col gap-4" aria-label={`${tab.label} features`}>
                {tab.items.map(({ icon, title, description }) => {
                  const Icon = iconMap[icon];
                  return (
                    <li key={title} className="flex items-start gap-4">
                      <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(201,162,76,0.1)] border border-[rgba(201,162,76,0.2)] flex items-center justify-center">
                        {Icon && (
                          <Icon size={14} className="text-gold-primary" strokeWidth={1.5} aria-hidden="true" />
                        )}
                      </div>
                      <div>
                        <p className="text-white-soft text-sm font-semibold mb-0.5">{title}</p>
                        <p className="text-gray-muted text-xs leading-relaxed">{description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-2">
                <Button
                  variant="gold-outline"
                  size="sm"
                  href="#book-demo"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#book-demo")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  See it working for {tab.label.split(" &")[0]} →
                </Button>
              </div>
            </div>

            {/* Right: visual mockup placeholder */}
            <div
              className="relative rounded-sm border border-[rgba(201,162,76,0.15)] bg-bg-elevated overflow-hidden"
              style={{ minHeight: 380 }}
              aria-label={`${tab.label} — visual demo placeholder`}
            >
              {/* Decorative glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(201,162,76,0.06) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              {/* Fake chat interface */}
              <div className="p-5 h-full flex flex-col gap-3">
                {/* Fake toolbar */}
                <div className="flex items-center gap-2 pb-3 border-b border-[rgba(201,162,76,0.1)]">
                  <div className="w-8 h-8 rounded-full bg-[rgba(201,162,76,0.15)] flex items-center justify-center text-gold-primary text-sm">
                    {tab.emoji}
                  </div>
                  <div>
                    <p className="text-white-soft text-xs font-semibold">Bell AI</p>
                    <p className="text-[10px] text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                      Online · {tab.label}
                    </p>
                  </div>
                </div>

                {/* Mock chat messages */}
                <div className="flex flex-col gap-3 flex-1 overflow-hidden">
                  {tab.items.slice(0, 3).map((item, i) => (
                    <div key={i} className={cn("flex gap-2", i % 2 === 1 ? "flex-row-reverse" : "")}>
                      {i % 2 === 0 && (
                        <div className="w-6 h-6 rounded-full bg-[rgba(201,162,76,0.15)] flex-shrink-0 flex items-center justify-center text-[10px]">
                          {tab.emoji}
                        </div>
                      )}
                      <div
                        className={cn(
                          "rounded-2xl px-3 py-2 max-w-[75%] text-[11px] leading-relaxed",
                          i % 2 === 1
                            ? "bg-gold-primary text-bg-primary ml-auto rounded-tr-sm"
                            : "bg-[rgba(255,255,255,0.05)] text-white-soft rounded-tl-sm"
                        )}
                      >
                        {i % 2 === 0 ? item.description.split(" ").slice(0, 10).join(" ") + "..." : item.title}
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  <div className="flex gap-2 items-center">
                    <div className="w-6 h-6 rounded-full bg-[rgba(201,162,76,0.15)] flex-shrink-0 flex items-center justify-center text-[10px]">
                      {tab.emoji}
                    </div>
                    <div className="bg-[rgba(255,255,255,0.05)] rounded-2xl rounded-tl-sm px-4 py-2.5 flex gap-1.5 items-center">
                      {[0, 0.2, 0.4].map((delay, i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-gray-muted animate-bounce"
                          style={{ animationDelay: `${delay}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Input bar */}
                <div className="flex items-center gap-2 mt-auto pt-3 border-t border-[rgba(201,162,76,0.1)]">
                  <div className="flex-1 bg-[rgba(255,255,255,0.04)] rounded-full px-4 py-2 text-[11px] text-gray-muted border border-[rgba(201,162,76,0.12)]">
                    Type a message...
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gold-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} className="text-bg-primary" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </SectionWrapper>
  );
}
