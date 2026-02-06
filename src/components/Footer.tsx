const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-gradient-gold font-display text-xl font-bold">
              MSJ Digital Connect
            </span>
          </div>

          <nav className="flex gap-8 text-sm text-muted-foreground">
            <a href="#servicos" className="hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="hover:text-primary transition-colors">
              Sobre
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>

          <p className="text-muted-foreground text-sm">
            © 2026 MSJ Digital Connect. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
