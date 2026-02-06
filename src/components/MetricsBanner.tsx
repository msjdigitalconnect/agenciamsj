import { motion } from "framer-motion";
import { Target, Headphones, BadgeCheck } from "lucide-react";

const metrics = [
  { icon: Target, text: "Foco Total em Resultados" },
  { icon: Headphones, text: "Suporte Premium Dedicado" },
  { icon: BadgeCheck, text: "Estratégias Validadas" },
];

const MetricsBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-gold py-10 px-6"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-center gap-4 text-center md:text-left"
            >
              <item.icon className="w-7 h-7 text-primary-foreground flex-shrink-0" />
              <span className="font-display text-lg md:text-xl font-bold text-primary-foreground">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MetricsBanner;
