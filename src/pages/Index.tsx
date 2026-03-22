import { useState, useCallback } from "react";
import Navbar from "@/components/mowin/Navbar";
import HeroSection from "@/components/mowin/HeroSection";
import BeliefBreakSection from "@/components/mowin/BeliefBreakSection";
import TurningPointSection from "@/components/mowin/TurningPointSection";
import ServicesSection from "@/components/mowin/ServicesSection";
import ProcessSection from "@/components/mowin/ProcessSection";
import ImpactSection from "@/components/mowin/ImpactSection";
import PlansSection from "@/components/mowin/PlansSection";
import LeadFormSection from "@/components/mowin/LeadFormSection";
import FAQSection from "@/components/mowin/FAQSection";
import FinalCTASection from "@/components/mowin/FinalCTASection";
import Footer from "@/components/mowin/Footer";
import WhatsAppButton from "@/components/mowin/WhatsAppButton";
import IntroSplash from "@/components/mowin/IntroSplash";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const handleIntroComplete = useCallback(() => setShowIntro(false), []);

  return (
    <div className="min-h-screen bg-m-black">
      {showIntro && <IntroSplash onComplete={handleIntroComplete} />}
      <Navbar />
      <HeroSection />
      <BeliefBreakSection />
      <TurningPointSection />
      <ServicesSection />
      <ProcessSection />
      <ImpactSection />
      <PlansSection />
      <LeadFormSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
