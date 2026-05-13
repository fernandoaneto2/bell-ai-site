import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service — bell.ai",
  description: "bell.ai terms of service.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bg-primary py-24">
      <Container className="max-w-2xl">
        <a
          href="/"
          className="text-gold-primary text-sm hover:text-gold-light transition-colors mb-8 inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary rounded-sm"
        >
          &larr; Back to home
        </a>
        <h1 className="text-3xl font-light text-white-pure mb-3">Terms of Service</h1>
        <p className="text-gray-muted text-sm mb-10">Last updated: {new Date().getFullYear()}</p>

        {/* TODO: write full terms of service before launch — consult legal team */}
        <div className="space-y-8 text-gray-muted text-sm leading-relaxed">
          <div className="border border-[rgba(201,162,76,0.2)] bg-bg-elevated rounded-sm px-6 py-4">
            <p className="text-gold-primary text-xs uppercase tracking-widest font-semibold mb-2">Placeholder</p>
            <p>
              These terms are a placeholder. The full terms of service will be written and reviewed
              by legal counsel before launch. They will cover: service description, acceptable use,
              payment terms, liability, termination, and governing law.
            </p>
          </div>

          <section aria-labelledby="service-description">
            <h2 id="service-description" className="text-white-soft font-semibold text-base mb-3">1. Service Description</h2>
            <p>[TODO: describe bell.ai service scope and limitations]</p>
          </section>

          <section aria-labelledby="acceptable-use">
            <h2 id="acceptable-use" className="text-white-soft font-semibold text-base mb-3">2. Acceptable Use</h2>
            <p>[TODO: describe acceptable use policy]</p>
          </section>

          <section aria-labelledby="payment">
            <h2 id="payment" className="text-white-soft font-semibold text-base mb-3">3. Payment Terms</h2>
            <p>[TODO: describe billing cycles, refund policy, and cancellation]</p>
          </section>

          <section aria-labelledby="liability">
            <h2 id="liability" className="text-white-soft font-semibold text-base mb-3">4. Limitation of Liability</h2>
            <p>[TODO: describe liability limits]</p>
          </section>

          <section aria-labelledby="contact-terms">
            <h2 id="contact-terms" className="text-white-soft font-semibold text-base mb-3">5. Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              {/* TODO: replace with real legal email */}
              <a href="mailto:legal@bell.ai" className="text-gold-primary hover:text-gold-light">
                legal@bell.ai
              </a>
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
