import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Eyebrow from "@/components/ui/Eyebrow";

// TODO: collect real testimonials from pilot clients
const testimonials = [
  {
    quote: "[REAL TESTIMONIAL — REPLACE BEFORE LAUNCH]",
    name: "[Name]",
    role: "[Role]",
    establishment: "[Establishment]",
  },
  {
    quote: "[REAL TESTIMONIAL — REPLACE BEFORE LAUNCH]",
    name: "[Name]",
    role: "[Role]",
    establishment: "[Establishment]",
  },
  {
    quote: "[REAL TESTIMONIAL — REPLACE BEFORE LAUNCH]",
    name: "[Name]",
    role: "[Role]",
    establishment: "[Establishment]",
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" bg="secondary">
      <Container>
        <div className="text-center mb-14">
          <Eyebrow className="mb-4">What They Say</Eyebrow>
          <SectionTitle>Establishments that trust bell.ai.</SectionTitle>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
          aria-label="Client testimonials"
        >
          {testimonials.map(({ quote, name, role, establishment }, i) => (
            <figure
              key={i}
              role="listitem"
              className="flex flex-col gap-5 p-7 bg-bg-elevated rounded-sm border border-[rgba(201,162,76,0.1)]"
            >
              {/* Opening quote mark */}
              <span
                className="text-gold-primary font-serif leading-none select-none"
                style={{ fontSize: "4rem", lineHeight: 0.8 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="text-gray-muted text-sm leading-relaxed italic flex-1">
                {quote}
              </blockquote>

              <figcaption className="flex items-center gap-3">
                {/* Avatar placeholder — TODO: replace with real client photo */}
                <div
                  className="w-10 h-10 rounded-full bg-bg-primary border border-[rgba(201,162,76,0.2)] flex items-center justify-center text-gold-primary text-sm flex-shrink-0"
                  aria-hidden="true"
                >
                  ?
                </div>
                <div>
                  <p className="text-white-soft text-sm font-semibold">{name}</p>
                  <p className="text-gray-muted text-xs">
                    {role} · {establishment}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="text-center text-[10px] text-gray-muted mt-6 opacity-40">
          {/* TODO: collect real testimonials from pilot clients */}
          [PLACEHOLDER — replace all testimonials with real client quotes before launch]
        </p>
      </Container>
    </SectionWrapper>
  );
}
