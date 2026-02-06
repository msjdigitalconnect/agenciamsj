import { motion } from "framer-motion";
import { Search, Map, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico Profundo",
    description: "Entendemos seu negócio por completo.",
    step: "01",
  },
  {
    icon: Map,
    title: "Planejamento Estratégico",
    description: "Definimos o caminho ideal para crescer.",
    step: "02",
  },
  {
    icon: Rocket,
    title: "Execução Premium",
    description: "Implementamos campanhas e sites de alta performance.",
    step: "03",
  },
  {
    icon: TrendingUp,
    title: "Escala & Otimização",
    description: "Ajustamos tudo para o lucro máximo.",
    step: "04",
  },
];

const MethodSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.25em] uppercase mb-3 font-sans">
            Nosso Processo
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            O Método <span className="text-gradient-gold">MSJ</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative flex items-start gap-6 md:gap-12 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse md:text-right"
                }`}
              >
                {/* Content */}
                <div className="flex-1 pl-16 md:pl-0">
                  <span className="text-primary/40 font-display text-5xl font-bold leading-none">
                    {item.step}
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Icon node */}
                <div className="absolute left-0 md:relative md:left-auto flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center z-10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
