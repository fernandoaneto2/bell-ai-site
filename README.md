# bell.ai — AI Concierge for Hospitality

Marketing website for bell.ai, a 24/7 AI concierge platform for hotels, restaurants, spas, and boutique stays.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion v11 |
| Icons | Lucide React |
| Font | Manrope via `next/font/google` |
| Deploy target | Vercel |

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All site copy lives in `content/` — no components need to be touched for text changes:

| File | What it controls |
|---|---|
| `content/nav.ts` | Navbar links |
| `content/demo-conversation.ts` | WhatsApp demo chat script + hotel name |
| `content/features.ts` | Features grid (6 cards) |
| `content/use-cases.ts` | Use case cards (4 scenarios) |
| `content/faq.ts` | FAQ questions and answers |
| `content/integrations.ts` | Integration logo list |

## Project structure

```
app/
├── components/
│   ├── ui/           # Primitives: Button, Container, Eyebrow, Hairline, PhoneMockup, SectionTitle, SectionWrapper
│   └── sections/     # Page sections: Navbar, Hero, TrustedBy, TheProblem, MeetBellAi, HowItWorks,
│                     #   LiveDemo, FeaturesGrid, UseCases, Integrations, Results, Testimonials,
│                     #   PricingTeaser, FAQ, FinalCTA, Footer
├── lib/utils.ts      # cn() helper
├── privacy/          # Privacy policy page
├── terms/            # Terms of service page
├── globals.css       # Tailwind base + custom utilities
├── layout.tsx        # Root layout, font, metadata
└── page.tsx          # Landing page (imports all sections)
content/              # Hardcoded site data (editáveis)
public/               # Static assets (logos, images)
```

## Design tokens

Defined in `tailwind.config.ts`:

```
bg-primary    #000000   Main background
bg-secondary  #0A0A0A   Alternate sections
bg-elevated   #141414   Cards and panels
gold-primary  #C9A24C   Gold accent (CTAs, icons)
gold-light    #E5C580   Highlight / hover
gold-deep     #8B6F2E   Shadow / detail
white-pure    #FFFFFF   Primary text
white-soft    #E8E8E8   Secondary text
gray-muted    #8A8A8A   Muted text
```

## Open TODOs before launch

Run `grep -rn "TODO:" app/ content/` to get the full list. Key items:

| Priority | Item |
|---|---|
| CRITICAL | Replace logo placeholder (`bell.ai` wordmark) with real optimized SVG |
| CRITICAL | Replace Calendly/WhatsApp link in `FinalCTA.tsx` and Navbar CTA |
| HIGH | Replace all `[REAL TESTIMONIAL]` placeholders with real client quotes |
| HIGH | Replace metrics in `Results.tsx` with real aggregated data |
| HIGH | Legal review and complete `privacy/page.tsx` and `terms/page.tsx` |
| MEDIUM | Replace use case image placeholders with real establishment photography |
| MEDIUM | Add real client logos to `TrustedBy` strip |
| MEDIUM | Confirm and add official integration logos to `Integrations` strip |
| MEDIUM | Replace dashboard mockup in `MeetBellAi` with real screenshot |
| LOW | Add real social media handles in `Footer.tsx` |
| LOW | Create `/about` page (Footer link points to `#`) |
| LOW | Add `og-image.png` to `/public` for social sharing |

## Deploy to Vercel

1. Push repository to GitHub
2. Import on vercel.com
3. Set env var: `NEXT_PUBLIC_SITE_URL=https://bell.ai`
4. Deploy — zero configuration needed
