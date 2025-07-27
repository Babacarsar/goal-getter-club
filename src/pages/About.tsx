import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Target, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            À Propos de Notre Club
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez l'histoire, les valeurs et le palmarès de notre académie de football
          </p>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Notre Histoire</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                Fondée en 1995, FootballAcademy est née de la passion de quelques amateurs de football 
                déterminés à offrir une formation d'excellence aux jeunes talents de la région.
              </p>
              <p className="mb-6">
                Au fil des années, notre académie s'est imposée comme une référence dans la formation 
                de footballeurs, avec plus de 500 joueurs formés et une dizaine de professionnels 
                issus de nos rangs.
              </p>
              <p>
                Aujourd'hui, nous continuons à grandir tout en gardant nos valeurs fondamentales : 
                respect, dépassement de soi et esprit d'équipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Passion</h3>
              <p className="text-muted-foreground">
                L'amour du football au cœur de notre enseignement
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Esprit d'équipe</h3>
              <p className="text-muted-foreground">
                La solidarité et l'entraide comme piliers du succès
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                La recherche constante de la performance et du progrès
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Respect</h3>
              <p className="text-muted-foreground">
                Le respect des autres, des règles et de l'adversaire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Palmarès Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Notre Palmarès</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4 text-primary">Trophées Récents</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>🏆 Champion Régional U18 (2023)</li>
                  <li>🥈 Finaliste Coupe Départementale U17 (2023)</li>
                  <li>🏆 Vainqueur Tournoi International U16 (2022)</li>
                  <li>🥉 3ème place Championnat National U15 (2022)</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4 text-primary">Joueurs Professionnels</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>⭐ 12 joueurs en Ligue 1</li>
                  <li>⭐ 25 joueurs en Ligue 2</li>
                  <li>⭐ 40+ joueurs en National</li>
                  <li>⭐ 3 internationaux français</li>
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