import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section
      id="book-demo"
      className="relative py-24 md:py-32 bg-bg-primary overflow-hidden"
      aria-label="Book a demo"
    >
      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,162,76,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Top hairline */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(201,162,76,0.4), transparent)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6 items-center">
          <Image
            src="/Logo_BELL_sem_fundo.png"
            alt="bell.ai"
            width={120}
            height={120}
            className="h-28 w-28 object-contain drop-shadow-[0_0_28px_rgba(201,162,76,0.4)]"
          />
          <h2
            className="font-sans font-light text-white-pure text-balance leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Your guests are already asking.
            <br />
            <span className="font-semibold">Make sure someone&apos;s answering.</span>
          </h2>

          <p className="text-gray-muted text-lg">
            Book a 20-minute demo. See bell.ai trained on your establishment.
          </p>

          {/* TODO: replace href with real Calendly/Cal.com link */}
          <Button
            variant="gold-solid"
            size="lg"
            href="#"
            className="mt-2 min-w-48"
          >
            Book a Demo &rarr;
          </Button>

          <p className="text-gray-muted text-xs opacity-60">
            {/* TODO: replace with real booking link */}
            [PLACEHOLDER — link to Calendly or WhatsApp booking before launch]
          </p>
        </div>
      </Container>

      {/* Bottom hairline */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(201,162,76,0.2), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
