import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  phone: z.string().trim().min(10, "Telefone inválido").max(20, "Telefone muito longo"),
  message: z.string().trim().min(10, "Mensagem muito curta").max(1000, "Mensagem muito longa"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);

      // Simulate form submission
      setTimeout(() => {
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro no formulário",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre os serviços do Marizette's Buffet."
    );
    window.open(`https://wa.me/5519998475839?text=${message}`, "_blank");
  };

  return (
    <section id="contato" className="section-padding bg-gradient-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Entre em <span className="text-gradient-gold">Contato</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 font-body max-w-2xl mx-auto">
            Estamos prontos para tornar seu evento inesquecível. Fale conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-body font-medium mb-2">
                  Nome Completo *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  required
                  className="bg-input border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-body font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                  className="bg-input border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-body font-medium mb-2">
                  Telefone *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(19) 99999-9999"
                  required
                  className="bg-input border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-body font-medium mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte-nos sobre seu evento..."
                  required
                  rows={5}
                  className="bg-input border-border focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity font-body font-semibold py-6 text-lg shadow-gold"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            {/* WhatsApp CTA */}
            <div className="bg-card p-8 rounded-lg border border-primary/30 shadow-gold">
              <MessageCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-heading font-semibold mb-3">Fale Conosco no WhatsApp</h3>
              <p className="text-foreground/70 font-body mb-6">
                Prefere conversar diretamente? Clique no botão abaixo e fale conosco pelo WhatsApp.
              </p>
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20BA59] text-white font-body font-semibold py-6 text-lg"
              >
                Abrir WhatsApp
              </Button>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold mb-1">Telefone</h4>
                  <p className="text-foreground/70 font-body">(19) 99847-5839</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold mb-1">Email</h4>
                  <p className="text-foreground/70 font-body">marizettes.buffet@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold mb-1">Endereço</h4>
                  <p className="text-foreground/70 font-body">
                    Araras - SP<br />
                    Atendemos todo o Estado de São Paulo
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card/50 p-6 rounded-lg border border-border/50">
              <h4 className="font-heading font-semibold mb-3">Horário de Atendimento</h4>
              <div className="space-y-2 text-foreground/70 font-body text-sm">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 13h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
