"use client";

import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";

export default function PricingTeaser() {
  return (
    <SectionWrapper id="pricing" bg="primary">
      <Container>
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6 items-center">
          <Eyebrow>Pricing</Eyebrow>
          <SectionTitle>Pricing that fits your scale.</SectionTitle>
          <p className="text-gray-muted text-lg">
            From boutique pousadas to multi-property groups — we&apos;ll build a plan that works.
          </p>
          {/* TODO: define pricing tiers before launch */}
          <Button
            variant="gold-outline"
            size="lg"
            href="#book-demo"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#book-demo")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Talk to Sales
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
}
