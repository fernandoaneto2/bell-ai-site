import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import TheProblem from "@/components/sections/TheProblem";
import MeetBellAi from "@/components/sections/MeetBellAi";
import HowItWorks from "@/components/sections/HowItWorks";
import LiveDemo from "@/components/sections/LiveDemo";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import UseCases from "@/components/sections/UseCases";
import Integrations from "@/components/sections/Integrations";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import PricingTeaser from "@/components/sections/PricingTeaser";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <TrustedBy />
        <TheProblem />
        <MeetBellAi />
        <HowItWorks />
        <LiveDemo />
        <FeaturesGrid />
        <UseCases />
        <Integrations />
        <Results />
        <Testimonials />
        <PricingTeaser />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
