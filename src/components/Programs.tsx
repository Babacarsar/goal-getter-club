import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import footballIcon from "@/assets/football-icon.jpg";

const Programs = () => {
  const programs = [
    {
      title: "École de Football (6-12 ans)",
      description: "Initiation au football dans un environnement ludique et éducatif. Développement des bases techniques et de l'esprit d'équipe.",
      age: "6-12 ans",
      duration: "1h30",
      participants: "12-15",
      level: "Débutant",
      price: "45€/mois",
      features: [
        "Apprentissage des gestes techniques",
        "Jeux éducatifs",
        "Développement de la coordination",
        "Esprit d'équipe"
      ]
    },
    {
      title: "Formation Jeunes (13-17 ans)",
      description: "Programme intensif pour les jeunes talents souhaitant progresser rapidement et accéder au football de haut niveau.",
      age: "13-17 ans",
      duration: "2h",
      participants: "8-12",
      level: "Intermédiaire",
      price: "65€/mois",
      features: [
        "Entraînement technique avancé",
        "Préparation physique",
        "Tactique et stratégie",
        "Suivi personnalisé"
      ]
    },
    {
      title: "Elite Academy (16-20 ans)",
      description: "Formation d'excellence pour les joueurs ambitieux. Préparation aux clubs professionnels et centres de formation.",
      age: "16-20 ans",
      duration: "3h",
      participants: "6-10",
      level: "Avancé",
      price: "95€/mois",
      features: [
        "Entraînement professionnel",
        "Préparation mentale",
        "Suivi médical",
        "Détection de talents"
      ]
    }
  ];

  return (
    <section id="programmes" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos Programmes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des programmes adaptés à chaque âge et niveau pour accompagner votre progression footballistique
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
                  <div className="text-2xl font-bold text-primary">
                    {program.price}
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
                  S'inscrire maintenant
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Vous hésitez ? Profitez d'un cours d'essai gratuit !
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            Réserver un cours d'essai
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;