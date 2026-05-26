import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MethodSection from "@/components/MethodSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import ResultsSection from "@/components/ResultsSection";
import MetricsBanner from "@/components/MetricsBanner";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteSection from "@/components/QuoteSection";
import PartnersSection from "@/components/PartnersSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PixelInjector from "@/components/PixelInjector";
import { usePageTracking } from "@/hooks/usePageTracking";

const Index = () => {
  usePageTracking();
  return (
    <main className="min-h-screen bg-background">
      <PixelInjector />
      <Navbar />
      <HeroSection />
      <div id="servicos">
        <ServicesSection />
      </div>
      <ProcessSection />
      <div id="metodo">
        <MethodSection />
      </div>
      <div id="sobre">
        <AboutSection />
      </div>
      <div id="resultados">
        <ResultsSection />
      </div>
      <MetricsBanner />
      <DifferentialsSection />
      <div id="depoimentos">
        <TestimonialsSection />
      </div>
      <QuoteSection />
      <PartnersSection />
      <PortfolioSection />
      <div id="blog">
        <BlogPreviewSection />
      </div>
      <CtaSection />
      <div id="faq">
        <FaqSection />
      </div>
      <div id="contato">
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
