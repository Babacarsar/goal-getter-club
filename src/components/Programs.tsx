import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import footballIcon from "@/assets/football-icon.jpg";

const Programs = () => {
  const programs = [
    {
      title: "École de Football",
      subtitle: "Formation de base",
      description: "L&apos;école de football Girona de Saly offre un environnement idéal pour découvrir et apprendre les fondamentaux du football.",
      age: "6-12 ans",
      duration: "2 séances/semaine",
      participants: "15 max",
      level: "Initiation",
      features: [
        "Apprentissage technique progressif",
        "Développement de la coordination",
        "Jeux éducatifs et ludiques",
        "Formation à l&apos;esprit d&apos;équipe",
        "Encadrement diplômé d&apos;État"
      ]
    },
    {
      title: "Formation Compétitive",
      subtitle: "Perfectionnement",
      description: "Nos équipes de jeunes évoluent dans les championnats régionaux avec un encadrement professionnel de qualité.",
      age: "13-17 ans",
      duration: "3 séances/semaine",
      participants: "18 max",
      level: "Compétition",
      features: [
        "Entraînement tactique avancé",
        "Préparation physique spécialisée",
        "Matchs en championnat officiel",
        "Suivi individuel personnalisé",
        "Stages de perfectionnement"
      ]
    },
    {
      title: "Section Elite",
      subtitle: "Haut niveau",
      description: "Notre section élite prépare les joueurs les plus prometteurs vers les centres de formation et le football professionnel.",
      age: "16-20 ans",
      duration: "5 séances/semaine",
      participants: "12 max",
      level: "Excellence",
      features: [
        "Programme d&apos;entraînement professionnel",
        "Préparation mentale avec psychologue",
        "Suivi médical et nutritionnel",
        "Détection par clubs professionnels",
        "Formation académique intégrée"
      ]
    }
  ];

  return (
    <section id="programmes" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos Formations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trois niveaux de formation pour accompagner chaque joueur dans sa progression, 
            des premiers pas sur le terrain jusqu&apos;aux portes du professionnalisme
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 overflow-hidden">
                <img 
                  src={footballIcon} 
                  alt="Football" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    {program.level}
                  </Badge>
                  <div className="text-sm font-medium text-muted-foreground">
                    {program.subtitle}
                  </div>
                </div>
                
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {program.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{program.participants}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>{program.age}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Programme inclut :</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full gradient-field text-white hover:opacity-90 group">
                  Découvrir cette formation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Nos Installations d&apos;Exception
            </h3>
            <p className="text-muted-foreground mb-6">
              5 terrains d&apos;entraînement dont 2 en gazon naturel, vestiaires modernes, 
              salle de musculation, centre médical et espace de convivialité pour les familles.
            </p>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              Visiter nos installations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;