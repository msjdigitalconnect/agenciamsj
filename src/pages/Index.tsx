import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MethodSection from "@/components/MethodSection";
import AboutSection from "@/components/AboutSection";
import MetricsBanner from "@/components/MetricsBanner";
import DifferentialsSection from "@/components/DifferentialsSection";
import QuoteSection from "@/components/QuoteSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <div id="servicos">
        <ServicesSection />
      </div>
      <MethodSection />
      <div id="sobre">
        <AboutSection />
      </div>
      <MetricsBanner />
      <DifferentialsSection />
      <QuoteSection />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
