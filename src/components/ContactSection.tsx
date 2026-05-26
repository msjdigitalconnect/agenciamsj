import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { getWhatsAppNumber } from "@/lib/settings";
import { trackEvent } from "@/lib/tracking";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é ${form.name}. ${form.message} | Email: ${form.email} | Tel: ${form.phone}`;
    trackEvent("Contact", { source: "form" });
    trackEvent("WhatsApp", { source: "contact_form" });
    window.open(
      `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    toast({ title: "Redirecionando para o WhatsApp...", description: "Sua mensagem foi preparada." });
  };

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.25em] uppercase mb-3 font-sans">
            Contato
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Fale <span className="text-gradient-gold">Conosco</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Pronto para dar o próximo passo? Entre em contato e descubra como
              podemos impulsionar o seu negócio com estratégias que geram
              resultados reais.
            </p>
            <div className="space-y-5">
              {[
                { icon: Phone, label: "+55 (16) 99382-0879" },
                { icon: Mail, label: "contato@msjdigital.com.br" },
                { icon: MapPin, label: "Ribeirão Preto, SP — Brasil" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card rounded-xl p-8 space-y-5"
          >
            {[
              { key: "name", label: "Nome completo", type: "text" },
              { key: "email", label: "E-mail", type: "email" },
              { key: "phone", label: "Telefone / WhatsApp", type: "tel" },
            ].map((field) => (
              <div key={field.key}>
                <label className="text-sm text-muted-foreground mb-1.5 block">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder={field.label}
                />
              </div>
            ))}
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">
                Mensagem
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Como podemos ajudar?"
              />
            </div>
            <Button variant="gold" size="lg" className="w-full rounded-full" type="submit">
              Enviar Mensagem
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
