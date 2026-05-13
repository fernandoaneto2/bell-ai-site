export interface Feature {
  icon: string; // lucide icon name
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "Layers",
    title: "Multi-channel",
    description: "WhatsApp, Instagram, web chat. One brain, every channel.",
  },
  {
    icon: "Globe",
    title: "Multilingual",
    description: "Detects and responds in 50+ languages automatically.",
  },
  {
    icon: "ArrowRightLeft",
    title: "Smart handoff",
    description: "Knows when to escalate to your team — and brings full context.",
  },
  {
    icon: "CalendarCheck",
    title: "Booking integration",
    description: "Connects to your PMS, calendar, or reservation system.",
  },
  {
    icon: "Mic",
    title: "Brand voice",
    description: "Trained on your tone. Sounds like your concierge, not a robot.",
  },
  {
    icon: "BarChart2",
    title: "Analytics",
    description: "See what guests ask, where they convert, where you lose them.",
  },
];
