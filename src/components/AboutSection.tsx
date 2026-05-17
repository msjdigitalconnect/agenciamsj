import { motion } from "framer-motion";
import aboutDigital from "@/assets/about-digital.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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
            <div className="relative rounded-2xl overflow-hidden gold-border-glow">
              <img
                src={aboutDigital}
                alt="Ambiente digital e tecnologia MSJ"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-primary text-xs tracking-[0.25em] uppercase mb-1">
                  Liderança
                </p>
                <p className="font-display text-xl sm:text-2xl text-foreground font-semibold">
                  Mariana — Fundadora & CEO
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Diretora Executiva da MSJ Digital Connect
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
