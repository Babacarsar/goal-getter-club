import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Target, TrendingUp } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const SeniorTeam = () => {
  const { data: players = [], isLoading } = useQuery({
    queryKey: ['joueurs'],
    queryFn: async () => {
      const response = await fetch('http://127.0.0.1:8000/api/joueurs');
      if (!response.ok) throw new Error('Failed to fetch players');
      return response.json();
    }
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Chargement de l'équipe...</p>
        </div>
      </section>
    );
  }

  const teamStats = [
    { icon: Target, label: "Buts marqués", value: "67", color: "text-green-500" },
    { icon: Award, label: "Victoires", value: "18", color: "text-blue-500" },
    { icon: Star, label: "Classement", value: "2ème", color: "text-yellow-500" },
    { icon: TrendingUp, label: "Série", value: "5 V", color: "text-purple-500" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            Équipe Senior
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos Lions de Saly
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une équipe soudée, talentueuse et déterminée à porter haut les couleurs de Girona de Saly
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {teamStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {players.map((player, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in border-0 bg-gradient-to-b from-card to-card/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  {player.number}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {player.name}
                </h3>
                <Badge variant="secondary" className="mb-4">
                  {player.position}
                </Badge>
                
                <div className="space-y-2">
                  {player.position === "Gardien" ? (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Arrêts</span>
                        <span className="font-semibold">{player.saves}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Clean Sheets</span>
                        <span className="font-semibold">{player.cleanSheets}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Buts</span>
                        <span className="font-semibold">{player.goals}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Passes D.</span>
                        <span className="font-semibold">{player.assists}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Rejoignez nos Lions !
            </h3>
            <p className="text-muted-foreground mb-6">
              Nous recherchons constamment de nouveaux talents pour renforcer notre équipe senior
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline">Détermination</Badge>
              <Badge variant="outline">Esprit d'équipe</Badge>
              <Badge variant="outline">Excellence</Badge>
              <Badge variant="outline">Passion</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeniorTeam;