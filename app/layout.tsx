import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://bell.ai"),
  title: "bell.ai — AI Concierge for Hospitality",
  description:
    "bell.ai automates guest conversations across WhatsApp, Instagram, and your website — 24/7, in any language, in your brand voice. Built for hotels, restaurants, spas, and resorts.",
  keywords: [
    "AI concierge",
    "hospitality automation",
    "hotel chatbot",
    "WhatsApp automation",
    "guest experience",
    "bell.ai",
  ],
  authors: [{ name: "bell.ai" }],
  openGraph: {
    title: "bell.ai — AI Concierge for Hospitality",
    description:
      "Your guests deserve instant answers. Your staff deserves their time back.",
    url: "https://bell.ai",
    siteName: "bell.ai",
    type: "website",
    locale: "en_US",
    // TODO: replace with real OG image
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "bell.ai — AI Concierge for Hospitality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "bell.ai — AI Concierge for Hospitality",
    description:
      "Your guests deserve instant answers. Your staff deserves their time back.",
    // TODO: replace with real Twitter image
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} font-sans antialiased bg-bg-primary text-white-pure`}>
        {children}
      </body>
    </html>
  );
}
