import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-elegant-event.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Evento elegante do Marizette's Buffet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight">
            Marizette's <span className="text-gradient-gold">Buffet</span>
          </h1>

          {/* Divider */}
          <div className="gold-divider max-w-xs mx-auto mb-8"></div>

          {/* Slogan */}
          <p className="text-xl md:text-3xl font-heading font-light text-foreground/90 mb-12 italic">
            Experiências que encantam todos os sentidos
          </p>

          {/* Description */}
          <p className="text-base md:text-lg font-body text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transformamos momentos especiais em memórias inesquecíveis através da gastronomia de alto padrão,
            do serviço impecável e da atenção aos mínimos detalhes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity font-body font-semibold text-lg px-8 py-6 shadow-gold"
            >
              Solicite um Orçamento
            </Button>
            <Button
              onClick={() => {
                const element = document.querySelector("#sobre");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-body font-semibold text-lg px-8 py-6"
            >
              Conheça Nossa História
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
