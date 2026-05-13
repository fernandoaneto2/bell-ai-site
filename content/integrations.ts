// TODO: confirm real integrations and use official logo assets
export interface Integration {
  name: string;
  logoSrc: string; // TODO: replace with official logo assets
  logoAlt: string;
}

export const integrations: Integration[] = [
  { name: "WhatsApp Business", logoSrc: "/logos/whatsapp.svg", logoAlt: "WhatsApp Business logo" },
  { name: "Instagram", logoSrc: "/logos/instagram.svg", logoAlt: "Instagram logo" },
  { name: "Booking.com", logoSrc: "/logos/booking.svg", logoAlt: "Booking.com logo" },
  { name: "Airbnb", logoSrc: "/logos/airbnb.svg", logoAlt: "Airbnb logo" },
  { name: "Google Calendar", logoSrc: "/logos/google-calendar.svg", logoAlt: "Google Calendar logo" },
  { name: "Hosthaway", logoSrc: "/logos/hosthaway.svg", logoAlt: "Hosthaway PMS logo" },
  { name: "Stripe", logoSrc: "/logos/stripe.svg", logoAlt: "Stripe logo" },
  { name: "Mailchimp", logoSrc: "/logos/mailchimp.svg", logoAlt: "Mailchimp logo" },
];
