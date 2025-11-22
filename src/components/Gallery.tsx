import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImagePlus } from "lucide-react";
import dishImage from "@/assets/gallery-dish-1.jpeg";
import cakeImage from "@/assets/gallery-wedding-cake.jpeg";
import corporateImage from "@/assets/gallery-corporate.jpeg";
import buffetImage from "@/assets/gallery-buffet.jpeg";
import weddingTableImage from "@/assets/gallery-wedding-table.jpeg";
import dessertImage from "@/assets/gallery-dessert.jpeg";
import cocktailImage from "@/assets/gallery-cocktail.jpeg";
import serviceImage from "@/assets/gallery-service.jpeg";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const images = [
    { src: dishImage, alt: "Prato gourmet do Marizette's Buffet" },
    { src: cakeImage, alt: "Bolo de casamento elegante" },
    { src: corporateImage, alt: "Evento corporativo de luxo" },
    { src: buffetImage, alt: "Buffet premium com variedade gastronômica" },
    { src: weddingTableImage, alt: "Mesa de casamento decorada" },
    { src: dessertImage, alt: "Sobremesa gourmet" },
    { src: cocktailImage, alt: "Coquetel elegante" },
    { src: serviceImage, alt: "Serviço de buffet profissional" },
  ];

  const visibleImages = showAll ? images : images.slice(0, 4);

  return (
    <section id="galeria" className="section-padding bg-gradient-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Nossa <span className="text-gradient-gold">Galeria</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 font-body max-w-2xl mx-auto">
            Conheça um pouco do nosso trabalho e deixe-se inspirar pela arte da gastronomia
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square animate-fade-in hover:shadow-gold transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Ver Mais Button */}
        {!showAll && (
          <div className="mt-12 text-center animate-fade-in">
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity font-body font-semibold px-8 py-6 shadow-gold"
            >
              <ImagePlus className="w-5 h-5 mr-2" />
              Ver Mais Fotos
            </Button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-lg font-body text-foreground/70 mb-6">
            Cada evento é único e merece atenção especial. Veja mais em nossas redes sociais.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-gold text-primary-foreground rounded-lg font-body font-semibold hover:opacity-90 transition-opacity shadow-gold"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-body font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
