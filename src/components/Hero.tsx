import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Target } from "lucide-react";
import { useEffect, useState } from "react";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import carousel5 from "@/assets/carousel-5.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: carousel1,
      title: "Excellence Sportive",
      subtitle: "Des installations modernes pour forger les champions"
    },
    {
      image: carousel2,
      title: "Formation de Qualité",
      subtitle: "Un encadrement professionnel pour révéler les talents"
    },
    {
      image: carousel3,
      title: "Esprit d'Équipe",
      subtitle: "La victoire se construit ensemble"
    },
    {
      image: carousel4,
      title: "Complexe d'Exception",
      subtitle: "5 hectares dédiés à votre passion"
    },
    {
      image: carousel5,
      title: "Académie Girona",
      subtitle: "L'avenir du football sénégalais"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Hero Pattern Overlay */}
      <div className="absolute inset-0 hero-pattern"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="block gradient-sky bg-clip-text text-transparent">
              Girona de Saly
            </span>
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="gradient-field text-white hover:opacity-90 group">
              Rejoindre le club
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Découvrir nos équipes
            </Button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center animate-fade-in">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3">
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold">5</div>
              <div className="text-white/80">Terrains d&apos;entraînement</div>
            </div>
            
            <div className="flex flex-col items-center animate-fade-in">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold">300+</div>
              <div className="text-white/80">Jeunes talents</div>
            </div>
            
            <div className="flex flex-col items-center animate-fade-in">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold">12</div>
              <div className="text-white/80">Titres remportés</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;