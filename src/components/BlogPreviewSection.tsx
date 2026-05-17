import { motion } from "framer-motion";
import { ArrowRight, Clock, X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Post = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  content: string[];
};

const posts: Post[] = [
  {
    title: "5 Erros que Fazem Negócios Locais Perderem Clientes no Google",
    excerpt:
      "Descubra os erros mais comuns que impedem sua empresa de aparecer nas buscas e como corrigi-los rapidamente.",
    category: "Google Meu Negócio",
    readTime: "4 min",
    content: [
      "A maioria dos negócios locais perde dezenas de clientes por mês simplesmente por erros básicos no Google Meu Negócio. Pequenos detalhes que parecem irrelevantes, mas que afetam diretamente seu posicionamento.",
      "Erro 1 — Categoria principal errada: escolher uma categoria genérica ou imprecisa reduz drasticamente sua exibição em buscas relevantes. Seja específico: 'Clínica Odontológica' converte mais que 'Consultório'.",
      "Erro 2 — NAP inconsistente: Nome, Endereço e Telefone precisam estar idênticos no Google, site, redes sociais e diretórios. Qualquer divergência derruba sua autoridade local.",
      "Erro 3 — Ausência de fotos atualizadas: perfis com fotos profissionais semanais recebem até 42% mais solicitações de rota e 35% mais cliques no site.",
      "Erro 4 — Ignorar as avaliações: não responder avaliações (boas ou ruins) sinaliza ao Google que o perfil está abandonado. Responda todas em até 24h.",
      "Erro 5 — Não usar postagens semanais: o Google premia perfis ativos. Publicar ofertas, novidades e eventos é gratuito e melhora o ranqueamento.",
      "Corrigir esses 5 pontos pode dobrar seu volume de clientes orgânicos em 60 dias. É exatamente o que aplicamos com os clientes da MSJ.",
    ],
  },
  {
    title: "Tráfego Pago: Quanto Investir para Ter Retorno Real?",
    excerpt:
      "Um guia prático sobre como calcular o investimento ideal em anúncios para o seu segmento.",
    category: "Tráfego Pago",
    readTime: "6 min",
    content: [
      "A pergunta mais frequente de quem começa em anúncios pagos é: 'quanto preciso investir para ter resultado?'. A resposta correta depende de três variáveis: ticket médio, margem de lucro e ciclo de venda.",
      "Regra prática: comece com no mínimo 10x o valor do seu ticket médio por mês. Se seu produto custa R$ 500, invista pelo menos R$ 5.000/mês para coletar dados estatisticamente relevantes.",
      "Distribuição inteligente: 60% no canal de maior intenção (geralmente Google Ads para serviços locais) e 40% em descoberta (Meta Ads — Instagram e Facebook).",
      "Fase de validação (primeiros 30 dias): foque em testar criativos e segmentações, não em escalar. É normal ter CPA mais alto neste período.",
      "Fase de otimização (30-90 dias): aqui o algoritmo já tem dados suficientes. Comece a escalar campanhas vencedoras com aumento gradual de 20% a cada 3 dias.",
      "ROAS saudável para negócios locais: a partir de 3x já é lucrativo. Acima de 5x é referência de excelência.",
      "Nosso método na MSJ entrega ROAS médio de 4,8x em campanhas de serviços locais nos primeiros 90 dias.",
    ],
  },
  {
    title: "Landing Page que Converte: Os 7 Elementos Essenciais",
    excerpt:
      "Saiba exatamente o que sua página de vendas precisa ter para transformar visitantes em clientes.",
    category: "Desenvolvimento Web",
    readTime: "5 min",
    content: [
      "Uma landing page de alta conversão não é sobre design bonito — é sobre clareza, prova e ação. Esses são os 7 elementos não negociáveis.",
      "1. Headline objetiva: o visitante precisa entender em 3 segundos o que você oferece e para quem. Frases vagas matam conversão.",
      "2. Subheadline com benefício claro: complete a promessa da headline com o resultado tangível que o cliente terá.",
      "3. CTA acima da dobra: o botão de ação principal precisa aparecer sem rolagem. Use verbos diretos: 'Agendar', 'Solicitar', 'Garantir'.",
      "4. Prova social real: depoimentos com nome, foto e empresa convertem 3x mais que textos anônimos.",
      "5. Lista de benefícios (não features): foque em o que o cliente ganha, não no que você entrega tecnicamente.",
      "6. Seção de objeções (FAQ): antecipe as 5 principais dúvidas do seu público. Reduz fricção e aumenta confiança.",
      "7. CTA repetido em pontos estratégicos: a cada bloco de conteúdo, ofereça uma chance de ação. O usuário converte quando está pronto, não no seu tempo.",
      "Aplicamos esse framework em todos os sites e landing pages que desenvolvemos — com média de 18% de taxa de conversão para captação de leads qualificados.",
    ],
  },
];

const BlogPreviewSection = () => {
  const [openPost, setOpenPost] = useState<Post | null>(null);

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-primary text-xs sm:text-sm tracking-[0.25em] uppercase mb-3 font-sans">
            Blog & Insights
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
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
                  <button
                    onClick={() => setOpenPost(post)}
                    className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                  >
                    Ler mais <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <Dialog open={!!openPost} onOpenChange={(o) => !o && setOpenPost(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto glass-card border-border/60">
          {openPost && (
            <>
              <DialogHeader>
                <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold mb-2 self-start">
                  {openPost.category}
                </span>
                <DialogTitle className="font-display text-xl sm:text-2xl text-foreground leading-tight text-left">
                  {openPost.title}
                </DialogTitle>
                <DialogDescription className="flex items-center gap-2 text-muted-foreground text-xs pt-1">
                  <Clock className="w-3.5 h-3.5" />
                  Leitura de {openPost.readTime}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                {openPost.content.map((p, idx) => (
                  <p
                    key={idx}
                    className="text-foreground/90 leading-relaxed text-sm sm:text-base"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BlogPreviewSection;
