import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-gradient-gold mb-3">
              Marizette's Buffet
            </h3>
            <p className="text-foreground/70 font-body text-sm">
              Experiências que encantam todos os sentidos. Gastronomia de luxo para momentos inesquecíveis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-3">Links Rápidos</h4>
            <ul className="space-y-2 text-sm font-body">
              {["Home", "Sobre Nós", "Serviços", "Galeria", "Depoimentos", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s/g, "")}`}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-heading font-semibold mb-3">Redes Sociais</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/marizettesbuffett?igsh=cmJiaG9oazZkbmli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Instagram
              </a>

            </div>
            <p className="text-xs text-foreground/60 font-body">
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-foreground/60 font-body flex items-center justify-center gap-2">
            © {currentYear} Marizette's Buffet. Todos os direitos reservados.
            <Heart className="w-4 h-4 text-primary fill-primary inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
