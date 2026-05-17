import { useEffect, useState } from "react";
import { BackgroundGlow } from "./components/common/BackgroundGlow";
import { CustomCursor } from "./components/common/CustomCursor";
import { LoadingScreen } from "./components/common/LoadingScreen";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
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
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
