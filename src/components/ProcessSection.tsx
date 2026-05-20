import { motion } from "framer-motion";
import { Globe, Megaphone, MessageCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "Criamos seu site de vendas",
    description:
      "Entregamos um site automático, lindo e funcional, pronto para converter visitantes em clientes 24h por dia.",
    accent: "Etapa 01",
  },
  {
    icon: Megaphone,
    title: "Anúncios pagos no Meta Ads",
    description:
      "Lançamos campanhas estratégicas no Facebook e Instagram, levando clientes potenciais direto até o seu site, com análise de métricas e ajustes constantes.",
    accent: "Etapa 02",
  },
  {
    icon: MessageCircle,
    title: "O cliente chega até você",
    description:
      "Os interessados entram em contato pelo WhatsApp ou compram direto no seu site. Simples assim — nós criamos a automação que vende e conduz o cliente até você.",
    accent: "Etapa 03",
  },
];

const ProcessSection = () => {
  return (
    <section
      id="processo"
      className="relative py-20 sm:py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-16"
        >
          <p className="text-primary text-sm tracking-[0.25em] uppercase mb-3 font-sans">
            Como Trabalhamos
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            Site de Vendas + Tráfego Pago ={" "}
            <span className="text-gradient-gold">Clientes no Automático</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Nosso objetivo é unir um site profissional de alta conversão com
            anúncios pagos estratégicos. O resultado: clientes chegando até você
            todos os dias, sem esforço manual.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative glass-card rounded-2xl p-6 sm:p-7 hover:gold-border-glow transition-all duration-500 group"
            >
              {/* Number badge */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center font-display text-lg font-bold text-primary-foreground shadow-lg">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              <p className="text-primary text-xs tracking-[0.2em] uppercase mb-2 font-sans">
                {step.accent}
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>

              {/* Connector arrow (desktop only, not on last) */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className="hidden md:flex absolute top-1/2 -right-5 lg:-right-6 -translate-y-1/2 w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-background border border-primary/40 items-center justify-center z-20"
                >
                  <ArrowRight className="w-4 h-4 text-primary" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-foreground text-base sm:text-lg font-medium max-w-2xl mx-auto">
            <span className="text-gradient-gold font-display text-lg sm:text-xl">
              Vendas no piloto automático.
            </span>{" "}
            Você foca em entregar — nós cuidamos de trazer os clientes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
