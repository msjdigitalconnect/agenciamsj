import { motion } from "framer-motion";

const partners = [
  "Google Partner",
  "Meta Business",
  "RD Station",
  "Hotmart",
  "Shopify",
  "WordPress",
];

const PartnersSection = () => {
  return (
    <section className="py-16 px-6 border-t border-b border-border/50">
      <div className="container mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-muted-foreground text-sm tracking-[0.2em] uppercase mb-10"
        >
          Ferramentas e Parceiros
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-14"
        >
          {partners.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-muted-foreground/50 font-display text-lg md:text-xl font-bold hover:text-primary/60 transition-colors duration-300 select-none"
            >
              {name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
