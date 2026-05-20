import { motion } from "framer-motion";
import alphaLogo from "@/assets/alpha-logo.png";

type Partner = {
  name: string;
  logo: string;
  bg?: string;
};

// Real brand logos via logo.clearbit.com (official brand assets)
const partners: Partner[] = [
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
  { name: "Facebook", logo: "https://logo.clearbit.com/facebook.com" },
  { name: "Instagram", logo: "https://logo.clearbit.com/instagram.com" },
  { name: "Hotmart", logo: "https://logo.clearbit.com/hotmart.com" },
  { name: "Kiwify", logo: "https://logo.clearbit.com/kiwify.com.br" },
  { name: "HostGator", logo: "https://logo.clearbit.com/hostgator.com.br" },
  { name: "WordPress", logo: "https://logo.clearbit.com/wordpress.com" },
  { name: "Lovable", logo: "https://logo.clearbit.com/lovable.dev" },
  { name: "Antigravity", logo: "https://logo.clearbit.com/antigravity.com" },
  { name: "Alpha", logo: alphaLogo, bg: "bg-background" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-b border-border/50 relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-primary text-sm tracking-[0.25em] uppercase mb-3 font-sans">
            Ecossistema
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
            Ferramentas e <span className="text-gradient-gold">Parceiros</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="glass-card rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center gap-3 hover:gold-border-glow transition-all duration-300 group cursor-default"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${p.bg ?? "bg-white/95"} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 overflow-hidden p-2`}
              >
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-foreground/80 text-xs sm:text-sm font-medium text-center">
                {p.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
