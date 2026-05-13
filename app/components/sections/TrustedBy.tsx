import Container from "@/components/ui/Container";
import Hairline from "@/components/ui/Hairline";

// TODO: replace with real client logos
const logoPlaceholders = [
  "HOTEL LOGO",
  "RESTAURANT LOGO",
  "SPA LOGO",
  "RESORT LOGO",
  "POUSADA LOGO",
];

export default function TrustedBy() {
  return (
    <div className="bg-bg-primary py-12">
      <Container>
        <Hairline className="mb-10" />
        <p className="text-center text-gray-muted text-sm tracking-wide mb-8">
          Trusted by establishments across hospitality
        </p>
        <div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          role="list"
          aria-label="Client logos"
        >
          {logoPlaceholders.map((label) => (
            <div
              key={label}
              role="listitem"
              className="px-5 py-2.5 border border-[rgba(201,162,76,0.15)] rounded-sm text-gray-muted text-xs tracking-widest uppercase opacity-60"
              aria-label={`${label} — placeholder`}
            >
              {/* TODO: replace with real client logo */}
              [{label}]
            </div>
          ))}
        </div>
        <Hairline className="mt-10" />
      </Container>
    </div>
  );
}
