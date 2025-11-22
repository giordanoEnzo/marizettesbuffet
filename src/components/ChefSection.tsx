import { Award, Heart, Star } from "lucide-react";
import chefImage from "@/assets/chef-marizette.jpg";

const ChefSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Conheça a <span className="text-gradient-gold">Chef Marizette</span>
            </h2>
            <div className="gold-divider max-w-xs mx-auto mb-6"></div>
            <p className="text-lg text-foreground/70 font-body">
              Paixão, dedicação e excelência em cada detalhe
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-fade-in order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-gold opacity-20 rounded-lg transform rotate-3"></div>
                <img
                  src={chefImage}
                  alt="Chef Marizette - Proprietária e Chef Executiva"
                  className="relative rounded-lg shadow-elegant w-full aspect-square object-cover border-2 border-primary/30"
                />
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 animate-fade-in-up order-1 md:order-2">
              <div>
                <h3 className="text-3xl font-heading font-bold mb-2">
                  Chef Marizette Silva
                </h3>
                <p className="text-primary font-body font-semibold mb-4">
                  Proprietária & Chef Executiva
                </p>
                <div className="gold-divider w-20 mb-6"></div>
              </div>

              <p className="text-base md:text-lg font-body text-foreground/80 leading-relaxed">
                Ao longo dos meus <strong className="text-primary">30 anos de experiência</strong> na alta gastronomia,
                tenho me dedicado a atender com muito amor e carinho cada cliente.
              </p>

              <p className="text-base md:text-lg font-body text-foreground/80 leading-relaxed">
                Uma das coisas que mais me motivam como chef é a constante busca pela perfeições no sabores e na criatividade
                , pois acredito que ao me desafiar a cada prato, consigo inspirar e proporcionar <strong className="text-primary">experiências
                únicas.</strong>
              </p>

              <p className="text-base md:text-lg font-body text-foreground/80 leading-relaxed">
                Minha filosofia é simples: <em className="text-primary">"Cada prato conta uma história,
                cada evento é uma oportunidade de criar memórias inesquecíveis"</em>. É essa dedicação
                aos detalhes que nos faz sinônimo de requinte e sofisticação.
              </p>

              {/* Achievements */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-card/50 rounded-lg border border-border/50">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-body text-foreground/70">Prêmios Nacionais</p>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-lg border border-border/50">
                  <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-body text-foreground/70">Certificação Internacional</p>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-lg border border-border/50">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-body text-foreground/70">2580+ Eventos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-16 text-center p-8 border-l-4 border-primary bg-gradient-dark rounded-r-lg animate-fade-in">
            <blockquote className="text-xl md:text-2xl font-heading italic text-foreground/90 mb-4">
              "Minha maior recompensa é ver o sorriso nos rostos dos nossos clientes e saber
              que fizemos parte de um momento especial em suas vidas."
            </blockquote>
            <cite className="text-primary font-body font-semibold">— Chef Marizette dos Santos</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
