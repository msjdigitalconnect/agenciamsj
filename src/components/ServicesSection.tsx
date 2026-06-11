import { motion } from "framer-motion";
import { Target, MapPin, Globe, BarChart3, ArrowUpRight, Sparkles } from "lucide-react";
import workspaceAnalytics from "@/assets/workspace-analytics.jpg";

const services = [
  {
    icon: Target,
    title: "Tráfego Pago (Ads)",
    description: "Campanhas focadas em ROI e vendas imediatas.",
    metric: "Até 8x ROAS",
    accent: "from-amber-400/20 to-yellow-600/5",
  },
  {
    icon: MapPin,
    title: "Google Meu Negócio",
    description: "Domine a primeira página da sua região.",
    metric: "Top 3 local",
    accent: "from-yellow-500/20 to-amber-700/5",
  },
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description: "Sites e Landing Pages de alta conversão.",
    metric: "+300% leads",
    accent: "from-amber-300/20 to-yellow-500/5",
  },
  {
    icon: BarChart3,
    title: "Consultoria de Gestão",
    description: "Estruturação de processos e vendas.",
    metric: "Crescimento 12m",
    accent: "from-yellow-400/20 to-amber-600/5",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur mb-5">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary text-xs tracking-[0.25em] uppercase font-semibold">
              O que fazemos
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-[1.1]">
            Soluções de <span className="text-gradient-gold">Crescimento</span>
            <br className="hidden md:block" /> sob medida para o seu negócio.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Estratégia, tecnologia e execução de alta performance — tudo conectado
            para gerar vendas reais, não apenas curtidas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/40 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />

              <div className="relative h-full glass-card rounded-2xl p-7 overflow-hidden border border-border group-hover:border-primary/40 transition-all duration-500">
                {/* Accent gradient */}
                <div
                  className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${service.accent} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="relative mb-6 inline-flex">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Metric chip */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">
                    {service.metric}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="flex items-center gap-1.5 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                  Saiba mais
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
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
          className="mt-16 max-w-5xl mx-auto"
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
