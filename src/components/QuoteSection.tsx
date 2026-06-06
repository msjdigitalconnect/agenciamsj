import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Decorative quote marks */}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-primary/15 font-display text-[120px] leading-none select-none pointer-events-none">
            "
          </span>

          <div className="relative z-10">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl italic leading-snug text-foreground mb-8">
              "Nosso compromisso não é apenas com cliques, é com o faturamento
              real da sua empresa no final do mês."
            </p>

            {/* Gold line */}
            <div className="w-16 h-px bg-primary mx-auto mb-6" />

            <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase font-medium">
              Mariana — CEO (Diretora Executiva)
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              MSJ Digital Connect
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
