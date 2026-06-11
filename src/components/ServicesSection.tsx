import { motion } from "framer-motion";
import { Target, MapPin, Globe, BarChart3 } from "lucide-react";
import workspaceAnalytics from "@/assets/workspace-analytics.jpg";

const services = [
  {
    icon: Target,
    title: "Tráfego Pago (Ads)",
    description: "Campanhas focadas em ROI e vendas imediatas.",
  },
  {
    icon: MapPin,
    title: "Google Meu Negócio",
    description: "Domine a primeira página da sua região.",
  },
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description: "Sites e Landing Pages de alta conversão.",
  },
  {
    icon: BarChart3,
    title: "Consultoria de Gestão",
    description: "Estruturação de processos e vendas.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.25em] uppercase mb-3 font-sans">
            O que fazemos
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Soluções de <span className="text-gradient-gold">Crescimento</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass-card rounded-xl p-8 group hover:gold-border-glow transition-all duration-500 cursor-default"
            >
              <service.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500" />
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Workspace showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
          className="mt-12 sm:mt-16 max-w-5xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden gold-border-glow group">
            <img
              src={workspaceAnalytics}
              alt="Workspace com monitores de analytics e gestão de campanhas"
              loading="lazy"
              width={1280}
              height={832}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="text-center mt-6 max-w-2xl mx-auto">
            <p className="text-primary text-xs tracking-[0.25em] uppercase mb-2 font-sans">
              Operação Premium
            </p>
            <p className="font-display text-lg sm:text-2xl font-semibold text-foreground">
              Tecnologia, dados e estratégia trabalhando 24h pelo seu negócio.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
