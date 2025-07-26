import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users } from "lucide-react";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";

const Coaches = () => {
  const coaches = [
    {
      name: "Marc Dubois",
      title: "Directeur Technique",
      image: coach1,
      experience: "15 ans",
      speciality: "Formation jeunes",
      achievements: [
        "Ex-joueur professionnel",
        "Diplôme d'État",
        "200+ joueurs formés"
      ],
      description: "Passionné par la formation des jeunes talents, Marc apporte son expertise technique et sa vision du jeu moderne."
    },
    {
      name: "Sophie Martin",
      title: "Entraîneuse Elite",
      image: coach2,
      experience: "12 ans",
      speciality: "Préparation physique",
      achievements: [
        "Master en sciences du sport",
        "Spécialiste préparation physique",
        "Formation internationale"
      ],
      description: "Sophie combine expertise scientifique et passion du football pour optimiser les performances de nos joueurs."
    }
  ];

  return (
    <section id="entraineurs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos Entraîneurs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une équipe d'experts passionnés, diplômés et expérimentés pour vous accompagner vers l'excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {coaches.map((coach, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">
                      {coach.experience} d'expérience
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {coach.name}
                      </h3>
                      <p className="text-primary font-semibold">{coach.title}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {coach.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Spécialité</div>
                        <div className="text-muted-foreground">{coach.speciality}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        Accomplissements
                      </h4>
                      <ul className="space-y-2">
                        {coach.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-secondary/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Rejoignez notre équipe !
            </h3>
            <p className="text-muted-foreground mb-6">
              Nous recherchons constamment des entraîneurs passionnés et qualifiés pour enrichir notre équipe pédagogique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="outline" className="border-primary text-primary">
                Diplômes requis
              </Badge>
              <Badge variant="outline" className="border-primary text-primary">
                Expérience souhaitée
              </Badge>
              <Badge variant="outline" className="border-primary text-primary">
                Passion obligatoire
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaches;