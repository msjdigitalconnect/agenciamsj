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
  {
    question: "Vocês criam o site e cuidam dos anúncios?",
    answer:
      "Sim. Entregamos o pacote completo: desenvolvemos seu site de vendas automáticas, configuramos as campanhas de tráfego pago (Meta Ads e Google Ads) e acompanhamos os resultados em tempo real, ajustando o que for necessário para maximizar suas conversões.",
  },
  {
    question: "Qual o investimento mínimo em tráfego pago?",
    answer:
      "O investimento varia conforme o nicho e o objetivo. Recomendamos começar com um valor estratégico que permita coletar dados consistentes — definimos juntos o melhor cenário durante a consultoria.",
  },
  {
    question: "Como recebo os leads e vendas?",
    answer:
      "Os clientes chegam diretamente até você por WhatsApp ou realizam a compra pelo seu site. Tudo automatizado, sem intermediários, com você no controle total da operação.",
  },
  {
    question: "Vocês atendem em quais regiões?",
    answer:
      "Atendemos negócios em todo o Brasil de forma 100% digital. Reuniões, acompanhamento e relatórios são feitos online, garantindo agilidade independente da sua localização.",
  },
  {
    question: "E se eu não tiver site ainda?",
    answer:
      "Sem problema! Criamos seu site de vendas do zero, com design profissional, otimizado para conversão e pronto para receber tráfego pago já no primeiro mês.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-secondary/30">
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
                className="glass-card rounded-xl border-border/50 px-5 sm:px-6 overflow-hidden hover:gold-border-glow transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-sans font-semibold text-foreground hover:no-underline py-5 [&>svg]:text-primary text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm sm:text-base">
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
