import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Target, Users, Heart, MapPin, Calendar, Award } from "lucide-react";
import teamPhoto from "@/assets/team-group-photo.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Team Photo */}
<section className="relative flex min-h-[420px] h-[55vh] sm:h-[60vh] md:h-[65vh] items-center justify-center overflow-hidden">
  <img
    src={teamPhoto}
    alt="Président fondateur — Académie Girona FC de Saly"
    className="absolute inset-0 h-full w-full object-cover object-[50%_18%] sm:object-[50%_24%] md:object-[50%_30%]"
    fetchPriority="high"
  />
  <div className="absolute inset-0 bg-black/50" aria-hidden />

  <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10 py-16 sm:py-20">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 animate-fade-in leading-tight">
        <span className="block gradient-sky bg-clip-text text-transparent mb-2 sm:mb-4">
          Girona de Saly
        </span>
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Notre Histoire
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto px-4">
        Plus qu'un club, une famille unie par la passion du football depuis 2010
      </p>
    </div>
  </div>
</section>
      {/* À Propos Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8">
                  L'Excellence à la Sénégalaise
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Fondé en 2010 au cœur de Saly, <strong className="text-foreground">Girona de Saly</strong> est né 
                    d'un rêve ambitieux : créer un centre de formation d'excellence qui rivalise avec 
                    les plus grandes académies africaines et européennes.
                  </p>
                  <p>
                    Inspiré par les valeurs du FC Girona et adapté à la culture sénégalaise, notre club 
                    a rapidement gagné en notoriété grâce à sa philosophie unique mêlant technique 
                    européenne et créativité africaine. Nos <strong className="text-foreground">5 hectares 
                    d'installations modernes</strong> accueillent aujourd'hui plus de 300 jeunes talents.
                  </p>
                  <p>
                    Depuis notre création, nous avons formé <strong className="text-foreground">45 joueurs 
                    professionnels</strong>, dont 8 évoluent actuellement en Europe. Notre équipe senior 
                    domine le championnat régional avec <strong className="text-foreground">12 titres 
                    remportés</strong> en 14 saisons.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-4 sm:p-6 md:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">300+</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Joueurs formés</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">45</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Professionnels</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">12</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Titres remportés</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">2010</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Année de création</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span className="text-foreground font-semibold">Saly, Sénégal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-primary" />
                    <span className="text-foreground font-semibold">Fondé en 2010</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-primary" />
                    <span className="text-foreground font-semibold">Centre de Formation Agréé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Vision Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">Notre Vision</h2>
            <p className="text-xl text-muted-foreground mb-12">
              "Faire de chaque jeune talent un ambassadeur du football sénégalais dans le monde"
            </p>
            
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12">
              <blockquote className="text-2xl font-medium text-foreground italic mb-6">
                "Chez Girona de Saly, nous ne formons pas seulement des footballeurs, 
                nous éduquons des hommes. Chaque joueur qui franchit nos portes repart 
                avec des valeurs qui le guideront toute sa vie."
              </blockquote>
              <cite className="text-lg text-muted-foreground">
                - Badou Gueye, Président Fondateur
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-12 md:mb-16 text-center">Nos Valeurs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Passion</h3>
              <p className="text-muted-foreground">
                L'amour du football et la fierté de représenter le Sénégal
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Teranga</h3>
              <p className="text-muted-foreground">
                L'hospitalité sénégalaise et l'esprit de solidarité
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Excellence</h3>
              <p className="text-muted-foreground">
                La recherche constante de la perfection technique et tactique
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Fierté</h3>
              <p className="text-muted-foreground">
                L'honneur de porter les couleurs de Girona de Saly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Palmarès Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-12 md:mb-16 text-center">Notre Palmarès</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-3">
                  <Trophy className="h-6 w-6" />
                  Titres Majeurs
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🏆</span>
                    <span>Champions Régionaux Senior (2023, 2022, 2021)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🥇</span>
                    <span>Coupe du Sénégal U18 (2023)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🏆</span>
                    <span>Tournoi CEDEAO U17 (2022)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🥈</span>
                    <span>Championnat National U16 (2022)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-3">
                  <Users className="h-6 w-6" />
                  Joueurs Formés
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">⭐</span>
                    <span>8 joueurs en Europe</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🇸🇳</span>
                    <span>3 internationaux sénégalais</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">⚽</span>
                    <span>15 joueurs en Ligue 1 sénégalaise</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🌟</span>
                    <span>22 joueurs professionnels</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-3">
                  <Award className="h-6 w-6" />
                  Reconnaissances
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🏅</span>
                    <span>Meilleur Centre de Formation (2023)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🌍</span>
                    <span>Partenariat CAF Academy</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🤝</span>
                    <span>Accord FC Girona (Espagne)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">📜</span>
                    <span>Certification FIFA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;