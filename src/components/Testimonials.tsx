import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adriana Peixoto",
      event: "Evento pessoal",
      text: "Falar sobre o Buffet da Marizette? A qualidade é o ponto principal, em primeiro lugar. Os produtos dela são diferenciados. Basta comparar a qualidade dos salgados dela com a dos concorrentes para identificar na hora que o dela é superior. Tudo que provei até hoje sempre achei saboroso, e nunca houve nada que eu não gostasse. Eu já tinha visto no podcast que ela preza pela qualidade, e pude confirmar que é realmente isso: ela, de fato, zela pelo que entrega.",
      rating: 5,
    },
    {
      name: "Geli Moraes",
      event: "Evento pessoal",
      text: "O Buffet da Marizette oferece salgados de uma qualidade verdadeiramente excepcional. É muito mais do que apenas bom: é a certeza de que o sabor será inesquecível e capaz de agradar o paladar de absolutamente todos os seus convidados.",
      rating: 5,
    },
    {
      name: "Beth",
      event: "Homenagem pública",
      text: "Como sempre, ela arrasa! Não é a primeira vez que ela faz eventos para mim; ela já organizou uma festa maravilhosa. Eu não poderia deixar de contar com ela nesta nova oportunidade. Todos os convidados a elogiaram!",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            O Que Dizem Nossos <span className="text-gradient-gold">Clientes</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 font-body max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nosso maior prêmio
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-gold animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-8 pb-6 px-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/80 font-body leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-border/50 pt-4">
                  <p className="font-heading font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary font-body">{testimonial.event}</p>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Social Proof */}
        <div className="mt-16 text-center max-w-3xl mx-auto animate-fade-in">
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-heading font-bold text-gradient-gold mb-2">2580+</div>
              <div className="text-sm font-body text-foreground/70">Eventos Realizados</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-gradient-gold mb-2">20+</div>
              <div className="text-sm font-body text-foreground/70">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-gradient-gold mb-2">98%</div>
              <div className="text-sm font-body text-foreground/70">Clientes Satisfeitos</div>
            </div>
          </div>
          <p className="text-base font-body text-foreground/70">
            Junte-se aos nossos clientes satisfeitos e torne seu evento inesquecível
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
