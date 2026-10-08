const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#home"
            className="font-display text-xl font-light tracking-wider text-gradient-silver hover:glow-soft transition-all duration-300"
          >
            ROVS Productions
          </a>

          {/* Copyright */}
          <p className="font-body text-xs font-extralight tracking-wider text-muted-foreground">
            © {new Date().getFullYear()} ROVS Productions. All rights reserved.
          </p>

          {/* Social links placeholder */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/veeje.prod/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs font-light tracking-widest uppercase text-muted-foreground hover:text-silver transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://x.com/Veeje_prod"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs font-light tracking-widest uppercase text-muted-foreground hover:text-silver transition-colors duration-300"
            >
              X(Twitter)
            </a>
            <a
              href="#"
              className="font-body text-xs font-light tracking-widest uppercase text-muted-foreground hover:text-silver transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
