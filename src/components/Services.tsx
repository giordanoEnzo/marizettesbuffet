import { Sparkles, Briefcase, PartyPopper, ChefHat } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Casamentos",
      description: "Transformamos o dia mais especial da sua vida em uma celebração inesquecível, com cardápios personalizados e serviço impecável.",
      features: ["Cardápio personalizado", "Decoração elegante", "Equipe especializada", "Assessoria completa"],
    },
    {
      icon: Briefcase,
      title: "Eventos Corporativos",
      description: "Impressione seus clientes e colaboradores com gastronomia refinada e serviço profissional de alto padrão.",
      features: ["Coffee breaks", "Almoços executivos", "Jantares de gala", "Coquetéis corporativos"],
    },
    {
      icon: PartyPopper,
      title: "Festas e Celebrações",
      description: "Aniversários, formaturas, bodas e comemorações especiais com toda a sofisticação que você merece.",
      features: ["Buffet completo", "Open bar", "Entretenimento", "Ambientação temática"],
    },
    {
      icon: ChefHat,
      title: "Cardápios Exclusivos",
      description: "Criamos menus únicos adaptados ao seu gosto, preferências dietéticas e orçamento, sempre com ingredientes premium.",
      features: ["Consultoria gastronômica", "Degustação prévia", "Opções veganas/vegetarianas", "Ingredientes selecionados"],
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Nossos <span className="text-gradient-gold">Serviços</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 font-body max-w-2xl mx-auto">
            Oferecemos soluções completas em gastronomia de luxo para tornar seu evento perfeito
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-gold animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-4 inline-block">
                    <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <CardTitle className="text-2xl font-heading mb-2">{service.title}</CardTitle>
                  <div className="gold-divider w-16 mb-4"></div>
                  <CardDescription className="text-base text-foreground/70 font-body leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-foreground/80 font-body">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center max-w-3xl mx-auto p-8 bg-gradient-dark rounded-lg border border-primary/30 animate-fade-in">
          <p className="text-lg font-body text-foreground/80 leading-relaxed">
            Todos os nossos serviços incluem <strong className="text-primary">planejamento completo</strong>,
            equipe treinada, ingredientes premium e atenção personalizada aos mínimos detalhes.
            <span className="block mt-4 text-primary font-semibold">
              Entre em contato para um orçamento personalizado.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
