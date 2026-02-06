import { motion } from "framer-motion";
import { Trophy, BarChart2, Headphones } from "lucide-react";

const differentials = [
  {
    icon: Trophy,
    title: "Foco em Vendas",
    description:
      "Cada estratégia é pensada para gerar receita real, não apenas métricas de vaidade.",
  },
  {
    icon: BarChart2,
    title: "Relatórios Transparentes",
    description:
      "Dashboards claros e reuniões periódicas para você acompanhar cada resultado.",
  },
  {
    icon: Headphones,
    title: "Atendimento Premium",
    description:
      "Canal direto com nossa equipe. Sem filas, sem robôs, sem enrolação.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.25em] uppercase mb-3 font-sans">
            Diferenciais
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Por que a <span className="text-gradient-gold">MSJ?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
