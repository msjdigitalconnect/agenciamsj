import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useWhatsAppUrl } from "@/lib/settings";
import { trackEvent } from "@/lib/tracking";

const CtaSection = () => {
  const WHATSAPP_URL = useWhatsAppUrl();
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-2xl p-12 md:p-16 text-center gold-border-glow relative overflow-hidden"
        >
          {/* Subtle gold glow background */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <p className="text-primary text-sm tracking-[0.25em] uppercase mb-4 font-sans">
              Pronto para crescer?
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Vamos transformar o seu negócio em uma{" "}
              <span className="text-gradient-gold">referência local.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Agende uma consultoria estratégica gratuita e descubra como podemos
              acelerar suas vendas em até 90 dias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="gold"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-10 py-5 sm:py-6 rounded-full"
                asChild
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("WhatsApp", { source: "cta" })}
                >
                  FALAR AGORA
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-10 py-5 sm:py-6 rounded-full border-primary/30 text-primary hover:bg-primary/10"
                asChild
              >
                <a href="#servicos">Ver Serviços</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
