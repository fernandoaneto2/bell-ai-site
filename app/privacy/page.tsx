import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy — bell.ai",
  description: "bell.ai privacy policy.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg-primary py-24">
      <Container className="max-w-2xl">
        <a
          href="/"
          className="text-gold-primary text-sm hover:text-gold-light transition-colors mb-8 inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary rounded-sm"
        >
          &larr; Back to home
        </a>
        <h1 className="text-3xl font-light text-white-pure mb-3">Privacy Policy</h1>
        <p className="text-gray-muted text-sm mb-10">Last updated: {new Date().getFullYear()}</p>

        {/* TODO: write full privacy policy before launch — consult legal team */}
        <div className="space-y-8 text-gray-muted text-sm leading-relaxed">
          <div className="border border-[rgba(201,162,76,0.2)] bg-bg-elevated rounded-sm px-6 py-4">
            <p className="text-gold-primary text-xs uppercase tracking-widest font-semibold mb-2">Placeholder</p>
            <p>
              This privacy policy is a placeholder. The full policy will be written and reviewed by
              legal counsel before launch. It will cover: data collection, data use, data retention,
              user rights (LGPD / GDPR), cookies, and third-party services.
            </p>
          </div>

          <section aria-labelledby="data-collection">
            <h2 id="data-collection" className="text-white-soft font-semibold text-base mb-3">1. Data We Collect</h2>
            <p>[TODO: describe data collected — guest conversation data, contact info, usage analytics]</p>
          </section>

          <section aria-labelledby="data-use">
            <h2 id="data-use" className="text-white-soft font-semibold text-base mb-3">2. How We Use Your Data</h2>
            <p>[TODO: describe data use — service delivery, product improvement, no third-party sale]</p>
          </section>

          <section aria-labelledby="data-retention">
            <h2 id="data-retention" className="text-white-soft font-semibold text-base mb-3">3. Data Retention</h2>
            <p>[TODO: describe retention periods and deletion policies]</p>
          </section>

          <section aria-labelledby="user-rights">
            <h2 id="user-rights" className="text-white-soft font-semibold text-base mb-3">4. Your Rights</h2>
            <p>[TODO: describe LGPD/GDPR rights — access, rectification, erasure, portability]</p>
          </section>

          <section aria-labelledby="contact-privacy">
            <h2 id="contact-privacy" className="text-white-soft font-semibold text-base mb-3">5. Contact</h2>
            <p>
              For privacy inquiries, contact us at{" "}
              {/* TODO: replace with real privacy email */}
              <a href="mailto:privacy@bell.ai" className="text-gold-primary hover:text-gold-light">
                privacy@bell.ai
              </a>
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
