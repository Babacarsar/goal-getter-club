import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-football.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Pattern Overlay */}
      <div className="absolute inset-0 hero-pattern"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="block gradient-sky bg-clip-text text-transparent">
              Girona de Saly
            </span>
            Passion • Excellence • Tradition
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Rejoignez la famille Girona de Saly et découvrez l&apos;école de football qui forme les champions de demain. 
            Des terrains d&apos;exception, un encadrement professionnel et une ambiance unique vous attendent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="gradient-field text-white hover:opacity-90 group">
              Commencer l'aventure
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Découvrir nos programmes
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3">
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold">5</div>
              <div className="text-white/80">Terrains d&apos;entraînement</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold">300+</div>
              <div className="text-white/80">Jeunes talents</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold">12</div>
              <div className="text-white/80">Titres remportés</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Football */}
      <div className="absolute bottom-10 right-10 animate-float hidden lg:block">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
          <span className="text-3xl">⚽</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;