import { useEffect, useState } from "react";
import { BackgroundGlow } from "./components/common/BackgroundGlow";
import { CustomCursor } from "./components/common/CustomCursor";
import { LoadingScreen } from "./components/common/LoadingScreen";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { BenefitsSection } from "./components/sections/BenefitsSection";
import { FaqSection } from "./components/sections/FaqSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProcessSection } from "./components/sections/ProcessSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ProofStripSection } from "./components/sections/ProofStripSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { TechStackSection } from "./components/sections/TechStackSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { useCursor } from "./hooks/useCursor";

export default function App() {
  const [loading, setLoading] = useState(true);
  const cursor = useCursor();

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 1100);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#070A13] text-slate-100 pt-24">
      <BackgroundGlow />
      {loading && <LoadingScreen />}
      <CustomCursor hovered={cursor.hovered} position={cursor.position} visible={cursor.visible} />
      <Header />
      <HeroSection />
      <ProofStripSection />
      <AboutSection />
      <ProcessSection />
      <TechStackSection />
      <ProjectsSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
