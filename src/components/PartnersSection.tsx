import { motion } from "framer-motion";

const partners = [
  { name: "Google", letters: "G", color: "from-[#4285F4] via-[#EA4335] to-[#FBBC05]" },
  { name: "Meta", letters: "M", color: "from-[#0064E0] to-[#0081FB]" },
  { name: "Facebook", letters: "f", color: "from-[#1877F2] to-[#0a5fcf]" },
  { name: "Instagram", letters: "IG", color: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]" },
  { name: "Hotmart", letters: "H", color: "from-[#F04E23] to-[#c2371a]" },
  { name: "Kiwify", letters: "K", color: "from-[#00C566] to-[#00994f]" },
  { name: "HostGator", letters: "HG", color: "from-[#F58220] to-[#d36812]" },
  { name: "WordPress", letters: "W", color: "from-[#21759B] to-[#155a78]" },
  { name: "Lovable", letters: "L", color: "from-[#FF4D8D] to-[#c7356d]" },
  { name: "Antigravity", letters: "A", color: "from-[#7A5AF8] to-[#4F32C7]" },
  { name: "Alpha", letters: "α", color: "from-primary to-[hsl(43_50%_40%)]" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-b border-border/50">
      <div className="container mx-auto max-w-6xl">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="glass-card rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center gap-2 hover:gold-border-glow transition-all duration-300 group cursor-default"
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white font-display font-bold text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {p.letters}
              </div>
              <span className="text-foreground/80 text-xs sm:text-sm font-medium text-center">
                {p.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
