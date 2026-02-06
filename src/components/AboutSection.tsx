import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-sm tracking-[0.25em] uppercase mb-3 font-sans">
              Sobre nós
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Inteligência de Negócio, <br />
              <span className="text-gradient-gold">Não Apenas Marketing.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A MSJ Digital Connect, liderada pela diretora Mariana, nasceu para
              profissionalizar o mercado local. Não entregamos apenas
              "postagens", entregamos inteligência de negócio e faturamento
              consistente.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossa abordagem combina análise estratégica com execução de alta
              performance, garantindo resultados mensuráveis para cada cliente.
            </p>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-10 gold-border-glow">
              <div className="space-y-8">
                {[
                  { value: "150+", label: "Clientes Atendidos" },
                  { value: "98%", label: "Taxa de Satisfação" },
                  { value: "3x", label: "Aumento Médio em Faturamento" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-6">
                    <span className="text-gradient-gold font-display text-4xl font-bold min-w-[80px]">
                      {stat.value}
                    </span>
                    <span className="text-muted-foreground text-lg">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
