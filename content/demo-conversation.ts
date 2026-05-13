// TODO: replace hotel name with real client name when available
export const HOTEL_NAME = "Rosewood Boutique Hotel";

export type MessageRole = "guest" | "bot";

export interface DemoMessage {
  role: MessageRole;
  time: string;
  text: string;
  isImage?: boolean;
  isOptions?: boolean;
  options?: string[];
  isBullets?: boolean;
  bullets?: string[];
}

export const demoMessages: DemoMessage[] = [
  {
    role: "guest",
    time: "09:47",
    text: "Hi! Do you have a room available for this weekend?",
  },
  {
    role: "bot",
    time: "09:47",
    text: `Hi there! 👋 Welcome to ${HOTEL_NAME}.\nWe have availability this weekend. For how many guests?`,
  },
  {
    role: "guest",
    time: "09:48",
    text: "2 adults, arriving Friday",
  },
  {
    role: "bot",
    time: "09:48",
    text: "Got it. Two adults, Friday Nov 15 → Sunday Nov 17.\nWe have two options for you:",
    isOptions: true,
    options: ["🛏️  Deluxe Ocean View — $189/night", "🛏️  Premium Suite — $249/night"],
  },
  {
    role: "guest",
    time: "09:49",
    text: "Photos of the suite please",
  },
  {
    role: "bot",
    time: "09:49",
    text: "Beautiful, right? Shall I reserve it for you?",
    isImage: true,
  },
  {
    role: "guest",
    time: "09:50",
    text: "Yes, let's book it",
  },
  {
    role: "bot",
    time: "09:50",
    text: "Booking confirmed for the Premium Suite, Nov 15-17. ✨\nConfirmation #BL-4827 sent to your email.\n\nAnything else? I can also arrange:",
    isBullets: true,
    bullets: ["Airport pickup", "Spa appointment", "Dinner reservation"],
  },
];

export const demoStats = [
  { icon: "⚡", label: "Responded in 2 seconds" },
  { icon: "🌍", label: "Detected guest language automatically" },
  { icon: "💼", label: "Booking created — no human needed" },
];
