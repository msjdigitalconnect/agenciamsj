import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "5 Erros que Fazem Negócios Locais Perderem Clientes no Google",
    excerpt:
      "Descubra os erros mais comuns que impedem sua empresa de aparecer nas buscas e como corrigi-los rapidamente.",
    category: "Google Meu Negócio",
    readTime: "4 min",
  },
  {
    title: "Tráfego Pago: Quanto Investir para Ter Retorno Real?",
    excerpt:
      "Um guia prático sobre como calcular o investimento ideal em anúncios para o seu segmento.",
    category: "Tráfego Pago",
    readTime: "6 min",
  },
  {
    title: "Landing Page que Converte: Os 7 Elementos Essenciais",
    excerpt:
      "Saiba exatamente o que sua página de vendas precisa ter para transformar visitantes em clientes.",
    category: "Desenvolvimento Web",
    readTime: "5 min",
  },
];

const BlogPreviewSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.25em] uppercase mb-3 font-sans">
            Blog & Insights
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Conteúdo para <span className="text-gradient-gold">escalar</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card rounded-xl overflow-hidden group hover:gold-border-glow transition-all duration-500 flex flex-col"
            >
              {/* Category bar */}
              <div className="bg-primary/10 px-6 py-3">
                <span className="text-primary text-xs tracking-[0.15em] uppercase font-semibold">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                  <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                    Ler mais <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
