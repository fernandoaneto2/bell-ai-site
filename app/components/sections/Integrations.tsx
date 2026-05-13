import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Eyebrow from "@/components/ui/Eyebrow";
import Hairline from "@/components/ui/Hairline";
import { integrations } from "@content/integrations";

export default function Integrations() {
  return (
    <SectionWrapper id="integrations" bg="secondary">
      <Container>
        <div className="text-center mb-12">
          <Eyebrow className="mb-4">Integrations</Eyebrow>
          <SectionTitle>Plays well with your stack.</SectionTitle>
        </div>

        <Hairline className="mb-10" />

        <div
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          role="list"
          aria-label="Integration logos"
        >
          {integrations.map(({ name }) => (
            <div
              key={name}
              role="listitem"
              className="px-5 py-3 border border-[rgba(201,162,76,0.12)] rounded-sm text-gray-muted text-xs tracking-wide hover:border-[rgba(201,162,76,0.3)] hover:text-white-soft transition-all duration-200"
              title={name}
            >
              {/* TODO: replace text with official logo asset */}
              {name}
            </div>
          ))}
        </div>

        <Hairline className="mt-10" />
        <p className="text-center text-[10px] text-gray-muted mt-3 opacity-50">
          {/* TODO: confirm real integrations and use official logo assets */}
          [PLACEHOLDER — confirm real integrations before launch]
        </p>
      </Container>
    </SectionWrapper>
  );
}
