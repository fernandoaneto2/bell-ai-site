export interface UseCase {
  title: string;
  subtitle: string;
  description: string;
  // TODO: replace imageSrc with real establishment photography
  imageSrc: string;
  imageAlt: string;
}

export const useCases: UseCase[] = [
  {
    title: "Hotels & Resorts",
    subtitle: "Around-the-clock concierge",
    description:
      "Handle room availability, check-in info, amenities, and concierge requests around the clock.",
    imageSrc: "/images/use-case-hotel.jpg", // TODO: replace with real hotel photography
    imageAlt: "Hotel lobby — placeholder",
  },
  {
    title: "Restaurants & Bars",
    subtitle: "Table to conversation",
    description:
      "Reservations, menu questions, dietary info, opening hours, and waitlist management.",
    imageSrc: "/images/use-case-restaurant.jpg", // TODO: replace with real restaurant photography
    imageAlt: "Restaurant interior — placeholder",
  },
  {
    title: "Pousadas & Boutique Stays",
    subtitle: "Personal touch at scale",
    description:
      "Your hosting style, automated. bell.ai mirrors the warmth and personality of boutique hospitality.",
    imageSrc: "/images/use-case-pousada.jpg", // TODO: replace with real pousada photography
    imageAlt: "Boutique pousada — placeholder",
  },
  {
    title: "Spas & Wellness",
    subtitle: "Seamless pre-arrival experience",
    description:
      "Service inquiries, appointment booking, packages, and pre-arrival info — all handled instantly.",
    imageSrc: "/images/use-case-spa.jpg", // TODO: replace with real spa photography
    imageAlt: "Spa environment — placeholder",
  },
];
