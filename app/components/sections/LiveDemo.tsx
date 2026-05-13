import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Eyebrow from "@/components/ui/Eyebrow";
import PhoneMockup from "@/components/ui/PhoneMockup";
import { demoStats } from "@content/demo-conversation";

export default function LiveDemo() {
  return (
    <SectionWrapper id="live-demo" bg="primary">
      <Container>
        <div className="text-center mb-14 max-w-xl mx-auto">
          <Eyebrow className="mb-4">Live Demo</Eyebrow>
          <SectionTitle>See bell.ai in action.</SectionTitle>
          <p className="text-gray-muted mt-4 text-base">
            A real conversation, automated end-to-end.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10">
          <PhoneMockup />

          {/* Stats chips */}
          <div
            className="flex flex-wrap justify-center gap-3"
            role="list"
            aria-label="Demo statistics"
          >
            {demoStats.map(({ icon, label }) => (
              <div
                key={label}
                role="listitem"
                className="flex items-center gap-2 px-4 py-2.5 bg-bg-elevated border border-[rgba(201,162,76,0.2)] rounded-full text-sm text-white-soft"
              >
                <span aria-hidden="true">{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
