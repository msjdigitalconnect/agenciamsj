import msjLogo from "@/assets/msj-logo.png";
import { useWhatsAppUrl } from "@/lib/settings";
import { trackEvent } from "@/lib/tracking";

const Footer = () => {
  const wa = useWhatsAppUrl();
  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={msjLogo}
              alt="Digital Connect"
              className="w-10 h-10 rounded-md object-cover gold-border-glow"
            />
            <span className="text-gradient-gold font-display text-lg sm:text-xl font-bold">
              Digital Connect
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-5 sm:gap-8 text-sm text-muted-foreground">
            <a href="#servicos" className="hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#portifolio" className="hover:text-primary transition-colors">
              Portfólio
            </a>
            <a href="#sobre" className="hover:text-primary transition-colors">
              Sobre
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("WhatsApp", { source: "footer" })}
              className="hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>
        </div>

        <p className="text-muted-foreground text-xs sm:text-sm text-center mt-8">
          Copyright © 2026 | Desenvolvido por MSJ Digital Connect. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
