import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { useWhatsAppUrl } from "@/lib/settings";
import { trackEvent } from "@/lib/tracking";

const perks = [
  "Diagnóstico estratégico 100% gratuito",
  "Plano de ação personalizado em 48h",
  "Atendimento direto com a fundadora",
];

const CtaSection = () => {
  const WHATSAPP_URL = useWhatsAppUrl();
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-primary/30 gold-border-glow"
        >
          {/* Layered backgrounds */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2f] via-[#05101E] to-[#0a1a2f]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.12),transparent_55%)]" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212,175,55,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(212,175,55,.4) 1px,transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          {/* Floating gold orbs */}
          <motion.div
            aria-hidden
            className="absolute -top-24 -left-16 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
            animate={{ y: [0, 20, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-24 -right-16 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
            animate={{ y: [0, -25, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 p-10 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-xs tracking-[0.25em] uppercase font-semibold">
                Pronto para crescer?
              </span>
            </motion.div>

            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
              Transforme o seu negócio em uma{" "}
              <span className="text-gradient-gold">referência</span> do seu mercado.
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Vagas limitadas por mês. Agende uma consultoria estratégica gratuita
              e descubra como acelerar suas vendas em até <span className="text-primary font-semibold">90 dias</span>.
            </p>

            {/* Perks */}
            <ul className="flex flex-wrap gap-3 justify-center mb-10">
              {perks.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-foreground/90 bg-primary/5 border border-primary/20 px-4 py-2 rounded-full"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {p}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base px-8 sm:px-12 py-6 sm:py-7 rounded-full shadow-[0_0_40px_rgba(212,175,55,0.35)]"
                  asChild
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("WhatsApp", { source: "cta" })}
                  >
                    QUERO MINHA CONSULTORIA GRATUITA
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </a>
                </Button>
              </motion.div>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-10 py-5 sm:py-6 rounded-full border-primary/30 text-primary hover:bg-primary/10"
                asChild
              >
                <a href="#servicos">Ver Serviços</a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              Resposta em até 1 hora útil • Sem compromisso
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
