import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

const CategoryDetail = () => {
  const { categoryId } = useParams();
  
  const { data: category, isLoading } = useQuery({
    queryKey: ['category', categoryId],
    queryFn: async () => {
      const response = await fetch(`/api/categories/${categoryId}?include=players,schedule,achievements`);
      if (!response.ok) throw new Error('Failed to fetch category');
      return response.json();
    },
    enabled: !!categoryId
  });
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement de la catégorie...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Catégorie non trouvée</h1>
          <Button asChild>
            <Link to="/categories">Retour aux catégories</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <Button asChild variant="outline" className="mb-6 text-white border-white hover:bg-white/10">
            <Link to="/categories">← Retour aux catégories</Link>
          </Button>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Équipe {category.name}
          </h1>
          <p className="text-xl text-white/90 mb-2">{category.age}</p>
          <p className="text-lg text-white/80">Entraîneur: {category.coach}</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-lg text-muted-foreground max-w-3xl">{category.description}</p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Effectif */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Effectif
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.players.map((player, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                      <div>
                        <p className="font-medium">{player.name}</p>
                        <p className="text-sm text-muted-foreground">{player.position}</p>
                      </div>
                      <Badge variant="outline">#{player.number}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Calendrier */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Prochains Matchs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.schedule.map((match, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <p className="font-medium">{match.date}</p>
                      <p className="text-sm text-primary">vs {match.opponent}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>⏰ {match.time}</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{match.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Palmarès */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Palmarès
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Trophy className="h-4 w-4 text-accent mt-0.5" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryDetail;