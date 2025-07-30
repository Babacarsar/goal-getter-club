import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Categories = () => {
  const { data: categories = [], isLoading: loadingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await fetch('https://gironafcsaly-production.up.railway.app/api/categories');
      if (!response.ok) throw new Error('Failed to fetch categories');
      return response.json();
    }
  });

  const { data: joueurs = [], isLoading: loadingJoueurs } = useQuery({
    queryKey: ['joueurs'],
    queryFn: async () => {
      const response = await fetch('https://gironafcsaly-production.up.railway.app/api/joueurs');
      if (!response.ok) throw new Error('Failed to fetch joueurs');
      return response.json();
    }
  });

  const { data: staff = [], isLoading: loadingStaff } = useQuery({
    queryKey: ['staff'],
    queryFn: async () => {
      const response = await fetch('https://gironafcsaly-production.up.railway.app/api/staff');
      if (!response.ok) throw new Error('Failed to fetch staff');
      return response.json();
    }
  });

  const isLoading = loadingCategories || loadingJoueurs || loadingStaff;

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

      {/* Loading */}
      {isLoading ? (
        <section className="py-20 text-center">
          <div className="animate-spin h-12 w-12 border-b-2 border-primary rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground">Chargement des données...</p>
        </section>
      ) : (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => {
                const joueurCount = joueurs.filter(j => j.categorie_id === category.id).length;

                const coach = staff.find(
                  s => s.role?.toLowerCase() === "entraineur" && s.categorie_id === category.id
                );

                return (
                  <Card key={category.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">{category.nom}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {category.age}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{category.description}</p>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-sm">{joueurCount} joueur{joueurCount > 1 ? "s" : ""}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm">
                            Coach : {coach ? `${coach.prenom} ${coach.nom}` : "Non défini"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-primary" />
                          <span className="text-sm">{category.achievements ?? "—"}</span>
                        </div>
                      </div>

                      <Button asChild className="w-full">
                        <Link to={`/categories/${category.id}`}>Voir l'équipe</Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Categories;
