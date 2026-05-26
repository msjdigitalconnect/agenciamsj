import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { usePortfolio } from "@/lib/settings";
import { trackEvent } from "@/lib/tracking";

const PortfolioSection = () => {
  const items = usePortfolio();

  return (
    <section id="portifolio" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
            Portfólio
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Sites e <span className="text-gradient-gold">Criações</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projetos entregues pela nossa equipe — sites de vendas, landing
            pages e aplicativos com performance comprovada.
          </p>
        </motion.div>

        {items.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Nenhum projeto cadastrado ainda.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("Click", { kind: "portfolio", id: item.id })
                }
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card/40 backdrop-blur-md hover:border-primary/60 transition-all duration-500 gold-border-glow"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  {item.tag && (
                    <span className="inline-block text-[10px] uppercase tracking-widest text-primary mb-2">
                      {item.tag}
                    </span>
                  )}
                  <h3 className="font-display text-lg font-bold mb-1 flex items-center gap-2">
                    {item.title}
                    <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition" />
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
