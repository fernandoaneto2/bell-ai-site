export interface UseCaseItem {
  icon: string;
  title: string;
  description: string;
}

export interface UseCaseTab {
  id: string;
  label: string;
  emoji: string;
  headline: string;
  subheadline: string;
  items: UseCaseItem[];
}

export const useCaseTabs: UseCaseTab[] = [
  {
    id: "restaurants",
    label: "Restaurants & Bars",
    emoji: "🍽️",
    headline: "Fill more tables. Reduce no-shows. Zero extra cost.",
    subheadline:
      "bell.ai handles reservations, menu questions, and orders 24/7 — so your team can focus on the experience.",
    items: [
      {
        icon: "CalendarCheck",
        title: "Table reservation management",
        description: "Accept, confirm, and follow up on bookings automatically — even at 3am.",
      },
      {
        icon: "BookOpen",
        title: "Interactive menu & specials",
        description: "Guests browse your menu, ask about ingredients, and get today's specials via chat.",
      },
      {
        icon: "Package",
        title: "Takeaway & delivery orders",
        description: "Handle pickup and delivery requests directly over WhatsApp or Instagram.",
      },
      {
        icon: "MessageSquare",
        title: "Instant FAQ responses",
        description: "Parking, hours, dietary options — answered instantly, every time.",
      },
      {
        icon: "Star",
        title: "Post-visit review collection",
        description: "Automatically follow up to collect reviews at exactly the right moment.",
      },
    ],
  },
  {
    id: "hotels",
    label: "Hotels & Resorts",
    emoji: "🏨",
    headline: "A 5-star concierge running 24/7 on every channel.",
    subheadline:
      "Handle check-in, concierge requests, and amenity questions without adding headcount.",
    items: [
      {
        icon: "Key",
        title: "Express check-in & check-out",
        description: "Pre-arrival info, early check-in requests, late check-out — all automated.",
      },
      {
        icon: "Bed",
        title: "Room service requests",
        description: "Guests order room service or request extras directly via WhatsApp.",
      },
      {
        icon: "MapPin",
        title: "Local & amenity information",
        description: "Pool hours, spa bookings, restaurant recommendations — on-demand, 24/7.",
      },
      {
        icon: "Shield",
        title: "Virtual concierge",
        description: "Taxis, airport transfers, activity reservations — handled by Bell.",
      },
      {
        icon: "BarChart2",
        title: "Satisfaction follow-ups",
        description: "Mid-stay check-ins and post-stay surveys that actually get answered.",
      },
    ],
  },
  {
    id: "pousadas",
    label: "Pousadas & Boutique",
    emoji: "🌿",
    headline: "Your warmth and personality — at scale.",
    subheadline:
      "bell.ai mirrors your unique voice and style. Boutique service, without the extra workload.",
    items: [
      {
        icon: "Heart",
        title: "Personalized welcome messages",
        description: "Greet each guest by name with tailored pre-arrival information.",
      },
      {
        icon: "CalendarCheck",
        title: "Direct booking management",
        description: "Handle reservations without relying solely on OTA platforms.",
      },
      {
        icon: "Globe",
        title: "Multilingual guests",
        description: "International travelers get responses in their language — automatically.",
      },
      {
        icon: "Mic",
        title: "Your brand voice",
        description: "Warm, local, and authentic. Not a generic chatbot — your concierge.",
      },
      {
        icon: "Clock",
        title: "Always available",
        description: "Close bookings while you sleep. Respond to late-night inquiries instantly.",
      },
    ],
  },
  {
    id: "spas",
    label: "Spas & Wellness",
    emoji: "💆",
    headline: "A pre-arrival experience that converts.",
    subheadline:
      "From inquiry to booked appointment — bell.ai guides every guest without lifting a finger.",
    items: [
      {
        icon: "CalendarCheck",
        title: "Appointment booking",
        description: "Massages, treatments, and classes booked directly via chat.",
      },
      {
        icon: "Layers",
        title: "Package information",
        description: "Guests explore packages, prices, and availability instantly.",
      },
      {
        icon: "MessageSquare",
        title: "Pre-arrival onboarding",
        description: "Health forms and preparation tips sent automatically before each visit.",
      },
      {
        icon: "ArrowRightLeft",
        title: "Rescheduling & cancellations",
        description: "Handle changes without phone calls or back-and-forth emails.",
      },
      {
        icon: "Star",
        title: "Loyalty & return booking",
        description: "Follow up after visits to drive repeat business and referrals.",
      },
    ],
  },
];
