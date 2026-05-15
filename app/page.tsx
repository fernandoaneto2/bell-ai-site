import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import TheProblem from "@/components/sections/TheProblem";
import Manifesto from "@/components/sections/Manifesto";
import MeetBellAi from "@/components/sections/MeetBellAi";
import HowItWorks from "@/components/sections/HowItWorks";
import LiveDemo from "@/components/sections/LiveDemo";
import DemoGallery from "@/components/sections/DemoGallery";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import UseCases from "@/components/sections/UseCases";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
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
        <Manifesto />
        <MeetBellAi />
        <HowItWorks />
        <LiveDemo />
        <DemoGallery />
        <FeaturesGrid />
        <UseCases />
        <Results />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
