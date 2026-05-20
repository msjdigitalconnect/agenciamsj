import msjLogo from "@/assets/msj-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={msjLogo}
              alt="MSJ Digital Connect"
              className="w-10 h-10 rounded-md object-cover gold-border-glow"
            />
            <span className="text-gradient-gold font-display text-lg sm:text-xl font-bold">
              MSJ Digital Connect
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-5 sm:gap-8 text-sm text-muted-foreground">
            <a href="#servicos" className="hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="hover:text-primary transition-colors">
              Sobre
            </a>
            <a
              href="https://wa.me/5516993820879?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20MSJ."
              target="_blank"
              rel="noopener noreferrer"
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
