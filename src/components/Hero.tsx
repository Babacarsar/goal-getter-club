import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Target } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      subtitle: "Des installations modernes pour forger les champions",
    },
    {
      image: carousel2,
      title: "Formation de Qualité",
      subtitle: "Un encadrement professionnel pour révéler les talents",
    },
    {
      image: carousel3,
      title: "Esprit d'Équipe",
      subtitle: "La victoire se construit ensemble",
    },
    {
      image: carousel4,
      title: "Complexe d'Exception",
      subtitle: "5 hectares dédiés à votre passion",
    },
    {
      image: carousel5,
      title: "Académie Girona FC",
      subtitle: "L'avenir du football sénégalais",
    },
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
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 hero-pattern"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white z-10 md:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in">
            <span className="block gradient-sky bg-clip-text text-transparent">
              Académie Girona FC de Saly
            </span>
            {slides[currentSlide].title}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <a href="#contact">
              <Button size="sm" className="gradient-field text-white hover:opacity-90 group py-2 sm:py-4">
                Rejoindre le club
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link to="/categories">
              <Button
                size="sm"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 py-2 sm:py-4"
              >
                Découvrir nos équipes
              </Button>
            </Link>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mb-6 sm:mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto mt-8 sm:mt-12">
            <div className="flex flex-col items-center animate-fade-in text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mb-2">
                <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
              </div>
              <div className="text-xl sm:text-3xl font-bold">5</div>
              <div className="text-white/80 text-sm sm:text-base">Terrains d'entraînement</div>
            </div>

            <div className="flex flex-col items-center animate-fade-in text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mb-2">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
              </div>
              <div className="text-xl sm:text-3xl font-bold">300+</div>
              <div className="text-white/80 text-sm sm:text-base">Jeunes talents</div>
            </div>

            <div className="col-span-2 md:col-span-1 flex flex-col items-center animate-fade-in text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mb-2">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
              </div>
              <div className="text-xl sm:text-3xl font-bold">12</div>
              <div className="text-white/80 text-sm sm:text-base">Titres remportés</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
