import { Heart, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Sobre <span className="text-gradient-gold">Nós</span>
            </h2>
            <div className="gold-divider max-w-xs mx-auto mb-6"></div>
            <p className="text-lg text-foreground/70 font-body">
              Uma história de paixão, tradição e excelência gastronômica
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-fade-in">
              <p className="text-base md:text-lg font-body text-foreground/80 leading-relaxed">
                O <strong className="text-primary">Marizette's Buffet</strong> nasceu do sonho da chef Marizette em criar
                experiências gastronômicas memoráveis. Com mais de 30 anos de dedicação à arte culinária,
                ela é referência quando o assunto é sabor, elegância e profissionalismo.
              </p>
              <p className="text-base md:text-lg font-body text-foreground/80 leading-relaxed">
                A frente do Marizette's Buffet, conquistou o respeito e o paladar dos clientes mais exigentes de Araras
                a grandes nomes da música , do esporte e da televisão brasileira, como Neymar, Roberto Carlos, Xuxa Meneghel,
                Ratinho, Pelé e Faustão.
              </p>
              <p className="text-base md:text-lg font-body text-foreground/80 leading-relaxed">
                E Entre tantas experiências marcantes, viveu um momento inesquecivel ao dividir a cozinha com o Chef
                Edu Guedes, um dos nomes mais queridos e respeitados da gastronomia nacional.
              </p>
            </div>

            {/* Stats/Features */}
            <div className="grid gap-6 animate-fade-in">
              <div className="bg-card p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors shadow-elegant">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-2">Paixão pela Gastronomia</h3>
                <p className="text-foreground/70 font-body">
                  Cada prato é preparado com amor e dedicação, honrando tradições culinárias
                  e surpreendendo com toques inovadores.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors shadow-elegant">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-2">Excelência Reconhecida</h3>
                <p className="text-foreground/70 font-body">
                  Premiados e recomendados por clientes satisfeitos, nosso compromisso
                  é sempre superar expectativas.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors shadow-elegant">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-2">Equipe Dedicada</h3>
                <p className="text-foreground/70 font-body">
                  Profissionais experientes e apaixonados pelo que fazem, trabalhando
                  para tornar seu evento inesquecível.
                </p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center p-8 border-l-4 border-primary bg-card/30 rounded-r-lg animate-fade-in">
            <blockquote className="text-xl md:text-2xl font-heading italic text-foreground/90 mb-4">
              "Cozinhar é um ato de amor. Servir é transformar esse amor em memórias."
            </blockquote>
            <cite className="text-primary font-body font-semibold">— Chef Marizette</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
