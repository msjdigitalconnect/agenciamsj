import { motion } from "framer-motion";
import alphaLogo from "@/assets/alpha-logo.png";
import googleLogo from "@/assets/partners/google.png";
import metaLogo from "@/assets/partners/meta.jpeg";
import facebookLogo from "@/assets/partners/facebook.jpg";
import instagramLogo from "@/assets/partners/instagram.png";
import hotmartLogo from "@/assets/partners/hotmart.jpg";
import kiwifyLogo from "@/assets/partners/kiwify.webp";
import hostgatorLogo from "@/assets/partners/hostgator.png";
import wordpressLogo from "@/assets/partners/wordpress.jpeg";

type Partner = {
  name: string;
  logo?: string;
  wordmark?: string;
};

const partners: Partner[] = [
  { name: "Google", logo: googleLogo },
  { name: "Meta", logo: metaLogo },
  { name: "Facebook", logo: facebookLogo },
  { name: "Instagram", logo: instagramLogo },
  { name: "Hotmart", logo: hotmartLogo },
  { name: "Kiwify", logo: kiwifyLogo },
  { name: "HostGator", logo: hostgatorLogo },
  { name: "WordPress", logo: wordpressLogo },
  { name: "Lovable", wordmark: "Lovable" },
  { name: "Antigravity", wordmark: "Antigravity" },
  { name: "Alpha", logo: alphaLogo },
];

const PartnerCard = ({ p }: { p: Partner }) => (
  <div className="shrink-0 w-40 sm:w-44 mx-2 sm:mx-3">
    <div className="glass-card rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:gold-border-glow transition-all duration-300 group">
      <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center shadow-md overflow-hidden p-2 group-hover:scale-105 transition-transform duration-500">
        {p.logo ? (
          <img
            src={p.logo}
            alt={`${p.name} logo`}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        ) : (
          <span className="font-display font-bold text-base text-center text-[#05101E] leading-tight">
            {p.wordmark}
          </span>
        )}
      </div>
      <span className="text-foreground/80 text-sm font-medium text-center">
        {p.name}
      </span>
    </div>
  </div>
);

const PartnersSection = () => {
  // Duplicar para loop infinito perfeito
  const loop = [...partners, ...partners];

  return (
    <section className="py-16 sm:py-20 border-t border-b border-border/50 relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-primary text-sm tracking-[0.25em] uppercase mb-3 font-sans">
            Ecossistema
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
            Ferramentas e <span className="text-gradient-gold">Parceiros</span>
          </h2>
        </motion.div>
      </div>

      {/* Carrossel infinito direita -> esquerda */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-marquee">
          {loop.map((p, i) => (
            <PartnerCard key={`${p.name}-${i}`} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
