import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <div id="servicos">
        <ServicesSection />
      </div>
      <div id="sobre">
        <AboutSection />
      </div>
      <DifferentialsSection />
      <Footer />
    </main>
  );
};

export default Index;
