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
      title: "Excellence sportive",
      subtitle: "Des installations modernes pour forger les champions de demain",
    },
    {
      image: carousel2,
      title: "Formation d'élite",
      subtitle: "Encadrement professionnel et valeurs Girona FC",
    },
    {
      image: carousel3,
      title: "Esprit d'équipe",
      subtitle: "Rouge et blanc — une identité, une famille",
    },
    {
      image: carousel4,
      title: "Complexe d'exception",
      subtitle: "Un cadre unique à Saly pour progresser chaque jour",
    },
    {
      image: carousel5,
      title: "L'avenir du ballon",
      subtitle: "Rejoignez l'académie Girona FC de Saly",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-primary/30" />
        </div>
      ))}

      <div className="absolute inset-0 hero-pattern pointer-events-none" />

      <div className="relative container mx-auto px-4 pb-16 pt-32 md:py-32 z-10 text-white">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/80 mb-4 animate-fade-in">
            Académie Girona FC · Saly
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight animate-fade-in-up">
            <span className="block text-gradient-girona mb-2">
              {slides[currentSlide].title}
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed animate-fade-in">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button
              asChild
              size="lg"
              className="gradient-field h-12 px-8 text-base font-semibold shadow-lg shadow-primary/30 border-0"
            >
              <Link to="/inscription">
                Pré-inscription
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-8 border-white/40 bg-white/5 text-white hover:bg-white/15 backdrop-blur-sm"
            >
              <Link to="/categories">Découvrir les équipes</Link>
            </Button>
          </div>

          <div className="flex gap-2 mt-10">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-10 bg-white"
                    : "w-3 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mt-16 md:mt-20 pt-8 border-t border-white/20">
          {[
            { icon: Trophy, value: "5", label: "Terrains" },
            { icon: Users, value: "300+", label: "Jeunes" },
            { icon: Target, value: "12", label: "Titres" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center md:text-left">
              <Icon className="h-5 w-5 text-primary-light mb-2 mx-auto md:mx-0" />
              <div className="text-2xl md:text-3xl font-bold">{value}</div>
              <div className="text-xs md:text-sm text-white/70">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
