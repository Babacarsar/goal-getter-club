import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      id: "u14",
      name: "U14",
      description: "Catégorie Under 14 - Formation technique et tactique",
      players: 22,
      coach: "Marc Dubois",
      achievements: "Champions Départementaux 2023",
      age: "12-14 ans"
    },
    {
      id: "u15",
      name: "U15", 
      description: "Catégorie Under 15 - Développement physique et mental",
      players: 25,
      coach: "Sophie Martin",
      achievements: "Finalistes Coupe Régionale 2023",
      age: "13-15 ans"
    },
    {
      id: "u17",
      name: "U17",
      description: "Catégorie Under 17 - Préparation au haut niveau",
      players: 20,
      coach: "Antoine Leroy",
      achievements: "3ème place Championnat National 2023",
      age: "15-17 ans"
    },
    {
      id: "u18",
      name: "U18",
      description: "Catégorie Under 18 - Transition vers le football adulte", 
      players: 18,
      coach: "Pierre Moreau",
      achievements: "Champions Régionaux 2023",
      age: "16-18 ans"
    },
    {
      id: "senior",
      name: "Senior",
      description: "Équipe Senior - Compétition de haut niveau",
      players: 25,
      coach: "Jean-Paul Bernard",
      achievements: "Montée en Division Honneur 2023",
      age: "18+ ans"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nos Catégories
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez toutes nos équipes et leur progression dans chaque catégorie d'âge
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{category.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {category.age}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{category.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">{category.players} joueurs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">Coach: {category.coach}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-primary" />
                      <span className="text-sm">{category.achievements}</span>
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link to={`/categories/${category.id}`}>
                      Voir l'équipe
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Categories;