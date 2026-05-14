"use client";

import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Eyebrow from "@/components/ui/Eyebrow";
import { useTranslation } from "@/hooks/useTranslation";

// TODO: collect real testimonials from pilot clients
const testimonials = [
  {
    quote:
      "Since we deployed bell.ai, our front desk team stopped answering the same questions 50 times a day. Guests get instant answers and our team finally has time to focus on real hospitality.",
    name: "Ana Costa",
    role: "Operations Manager",
    establishment: "Pousada das Pedras",
    stars: 5,
    initial: "A",
  },
  {
    quote:
      "We saw a 38% increase in direct reservations within the first month. The bot handles everything from menu questions to table bookings — even on Sunday nights.",
    name: "Ricardo Melo",
    role: "Owner",
    establishment: "Restaurante Brasa",
    stars: 5,
    initial: "R",
  },
  {
    quote:
      "Our international guests love it. It replies in their language before they even finish typing. The setup took 4 days and it felt like we hired a full concierge team.",
    name: "Isabela Nunes",
    role: "General Manager",
    establishment: "Hotel Atlântico",
    stars: 5,
    initial: "I",
  },
];

export default function Testimonials() {
  const t = useTranslation();

  return (
    <SectionWrapper id="testimonials" bg="secondary">
      <Container>
        <div className="text-center mb-14">
          <Eyebrow className="mb-4">{t.testimonials.eyebrow}</Eyebrow>
          <SectionTitle>{t.testimonials.title}</SectionTitle>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
          aria-label="Client testimonials"
        >
          {testimonials.map(({ quote, name, role, establishment, stars, initial }, i) => (
            <figure
              key={i}
              role="listitem"
              className="flex flex-col gap-5 p-7 bg-bg-elevated rounded-sm border border-[rgba(201,162,76,0.1)] hover:border-[rgba(201,162,76,0.25)] transition-colors duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label={`${stars} out of 5 stars`}>
                {Array.from({ length: stars }).map((_, j) => (
                  <Star
                    key={j}
                    size={13}
                    className="text-gold-primary fill-gold-primary"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="text-white-soft text-sm leading-relaxed flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-2 border-t border-[rgba(201,162,76,0.08)]">
                <div
                  className="w-10 h-10 rounded-full bg-[rgba(201,162,76,0.12)] border border-[rgba(201,162,76,0.25)] flex items-center justify-center text-gold-primary text-sm font-semibold flex-shrink-0"
                  aria-hidden="true"
                >
                  {initial}
                </div>
                <div>
                  <p className="text-white-soft text-sm font-semibold">{name}</p>
                  <p className="text-gray-muted text-xs">
                    {role} · {establishment}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="text-center text-[10px] text-gray-muted mt-6 opacity-40">
          {/* TODO: replace with real testimonials before launch */}
          [PLACEHOLDER — replace all quotes with real client testimonials before launch]
        </p>
      </Container>
    </SectionWrapper>
  );
}
