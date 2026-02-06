import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "A MSJ atende pequenas empresas?",
    answer:
      "Sim! Nosso foco principal são negócios locais que querem crescer de forma estruturada. Temos planos adaptados para cada fase do seu negócio.",
  },
  {
    question: "Como funciona o contrato?",
    answer:
      "Trabalhamos com contratos mensais flexíveis, sem fidelidade obrigatória. Acreditamos que nossos resultados falam por si — você fica porque quer, não porque precisa.",
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer:
      "Os primeiros indicadores de performance aparecem já nos primeiros 30 dias. Resultados consistentes de faturamento costumam ser visíveis entre 60 e 90 dias, dependendo do nicho e do investimento.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm tracking-[0.25em] uppercase mb-3 font-sans">
            Dúvidas
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card rounded-xl border-border/50 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-sans font-semibold text-foreground hover:no-underline py-5 [&>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
