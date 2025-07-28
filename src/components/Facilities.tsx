import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Trophy, Zap, Shield } from "lucide-react";

const Facilities = () => {
  const facilities = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "5 Terrains d'Entraînement",
      description: "2 terrains en gazon naturel et 3 terrains synthétiques de dernière génération pour des conditions optimales"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Vestiaires Modernes",
      description: "Installations complètes avec douches, casiers individuels et espace de préparation pour chaque équipe"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Salle de Musculation",
      description: "Équipements professionnels pour la préparation physique et le renforcement musculaire adapté au football"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Centre Médical",
      description: "Suivi médical professionnel avec kinésithérapeute et médecin du sport pour la prévention des blessures"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Espace Convivialité",
      description: "Cafétéria et espaces d'accueil pour les familles, créant un véritable lieu de vie autour du football"
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Salle de Réunion",
      description: "Espace dédié aux analyses vidéo, formations tactiques et réunions d'équipe avec équipements audiovisuels"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Le Complexe Girona de Saly
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            5 hectares d&apos;installations sportives modernes au cœur de Saly, 
            conçues pour révéler le potentiel de chaque joueur
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {facility.icon}
                </div>
                <CardTitle className="text-xl text-foreground">
                  {facility.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Excellence & Performance
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
              Chaque détail compte dans la formation d&apos;un champion. Notre complexe ultra-moderne 
              offre les conditions idéales pour révéler les talents et forger les caractères.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5000m²</div>
                <div className="text-muted-foreground">Surface totale</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2023</div>
                <div className="text-muted-foreground">Rénovation complète</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24h/7j</div>
                <div className="text-muted-foreground">Accès sécurisé</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;