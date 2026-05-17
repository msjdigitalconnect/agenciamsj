import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Star, TrendingUp, ShieldCheck, Clock } from "lucide-react";

type Stat = {
  value?: number;
  suffix?: string;
  decimals?: number;
  label: string;
  icon: typeof Star;
  display?: string;
};

const stats: Stat[] = [
  { display: "★★★★★", label: "Clientes Satisfeitos", icon: Star },
  { value: 98, suffix: "%", label: "Taxa de Satisfação", icon: ShieldCheck },
  { value: 3, suffix: "x", label: "Aumento Médio em Faturamento", icon: TrendingUp },
  { value: 45, suffix: " dias", label: "Para os Primeiros Resultados", icon: Clock },
];

const AnimatedCounter = ({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) => {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay((eased * value).toFixed(decimals));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, decimals]);

  return (
    <div
      ref={ref}
      className="text-gradient-gold font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-none"
    >
      {display}
      <span className="text-2xl sm:text-3xl md:text-4xl">{suffix}</span>
    </div>
  );
};

const ResultsSection = () => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-primary text-xs sm:text-sm tracking-[0.25em] uppercase mb-3 font-sans">
            Resultados
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
            Números que <span className="text-gradient-gold">comprovam</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8 text-center hover:gold-border-glow transition-all duration-500"
            >
              <stat.icon className="w-7 h-7 text-primary mx-auto mb-4" />
              {stat.display ? (
                <div className="text-gradient-gold font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-none tracking-wide">
                  {stat.display}
                </div>
              ) : (
                <AnimatedCounter
                  value={stat.value!}
                  suffix={stat.suffix!}
                  decimals={stat.decimals}
                />
              )}
              <p className="text-muted-foreground mt-3 text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
