export interface FAQItem {
  question: string;
  answer: string; // TODO: write final polished answers before launch
}

export const faqItems: FAQItem[] = [
  {
    question: "How long does it take to launch?",
    answer:
      "Most establishments are live within 7 days. We handle the setup, training, and integration — you review and approve before anything goes live.", // TODO: confirm with ops team
  },
  {
    question: "Which channels does bell.ai work on?",
    answer:
      "WhatsApp Business, Instagram DMs, and your website via an embeddable chat widget. All three share the same AI brain and conversation history.", // TODO: confirm channel roadmap
  },
  {
    question: "Does it really sound like my brand?",
    answer:
      "Yes. We train the AI on your actual content — your menu, policies, FAQs, and writing style. You approve all responses before launch.", // TODO: add example proof
  },
  {
    question: "What happens when bell.ai can't answer something?",
    answer:
      "It hands the conversation to your team with full context — no guest has to repeat themselves. You set the escalation rules.", // TODO: describe handoff flow more precisely
  },
  {
    question: "Can it handle reservations and bookings?",
    answer:
      "Yes. bell.ai integrates with your PMS, booking calendar, or reservation system to check availability and confirm bookings in real time.", // TODO: list specific PMS integrations
  },
  {
    question: "Which languages does it speak?",
    answer:
      "50+ languages, detected automatically from the guest's first message. No configuration needed — it adapts to each conversation.", // TODO: confirm language count with engineering
  },
  {
    question: "How is my guest data handled?",
    answer:
      "All data is encrypted in transit and at rest. We comply with LGPD and GDPR. Guest data is never used to train models outside your account.", // TODO: legal review before launch
  },
  {
    question: "Can I see analytics?",
    answer:
      "Yes. Your dashboard shows message volumes, resolution rates, most-asked questions, and conversion points — updated in real time.", // TODO: confirm analytics feature availability
  },
];
