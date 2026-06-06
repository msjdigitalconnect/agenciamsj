import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    company: "Clínica Saúde+",
    text: "Em 60 dias, triplicamos o número de agendamentos pelo Google. A MSJ entende de verdade o que funciona para negócios locais.",
    stars: 5,
  },
  {
    name: "Fernanda Oliveira",
    company: "Studio F — Estética",
    text: "O atendimento é excepcional. Sempre disponíveis e com estratégias que realmente trazem clientes novos toda semana.",
    stars: 5,
  },
  {
    name: "Ricardo Almeida",
    company: "RA Contabilidade",
    text: "Nosso faturamento cresceu 40% no primeiro trimestre. Os relatórios são claros e a equipe é muito competente.",
    stars: 5,
  },
  {
    name: "Juliana Costa",
    company: "Pet Center JC",
    text: "O site que desenvolveram converteu 3x mais que o antigo. Investimento que se pagou no primeiro mês.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.25em] uppercase mb-3 font-sans">
            Depoimentos
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            O que nossos clientes <span className="text-gradient-gold">dizem</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {loop.map((t, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-8 hover:gold-border-glow transition-all duration-500 w-[320px] sm:w-[420px] flex-shrink-0"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.company}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
