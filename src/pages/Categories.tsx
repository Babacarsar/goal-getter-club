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
import { Users, Calendar, Trophy, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { apiUrl, resolveMediaUrl } from "@/lib/api";
import { hasPlayerPhoto } from "@/components/PlayerPhoto";
import { PageHero } from "@/components/layout/PageHero";

const Categories = () => {
  const { data: categories = [], isLoading: loadingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await fetch(apiUrl("/api/categories"));
      if (!response.ok) throw new Error('Failed to fetch categories');
      return response.json();
    }
  });

  const { data: joueurs = [], isLoading: loadingJoueurs } = useQuery({
    queryKey: ['joueurs'],
    queryFn: async () => {
      const response = await fetch(apiUrl("/api/joueurs"));
      if (!response.ok) throw new Error('Failed to fetch joueurs');
      return response.json();
    }
  });

  const { data: staff = [], isLoading: loadingStaff } = useQuery({
    queryKey: ['staff'],
    queryFn: async () => {
      const response = await fetch(apiUrl("/api/staff"));
      if (!response.ok) throw new Error('Failed to fetch staff');
      return response.json();
    }
  });

  const isLoading = loadingCategories || loadingJoueurs || loadingStaff;

  return (
    <div className="min-h-screen">
      <Header />
      
      <PageHero
        title="Nos catégories"
        subtitle="Parcourez chaque équipe, l'effectif et l'encadrement par tranche d'âge."
      />

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

                const coachName = coach
                  ? `${coach.prenom} ${coach.nom}`
                  : "Entraîneur";

                return (
                  <Card key={category.id} className="card-hover-lift overflow-hidden border-border/80 shadow-md">
                    <div className="relative aspect-[4/3] w-full bg-muted">
                      {coach && hasPlayerPhoto(coach.photo) ? (
                        <img
                          src={resolveMediaUrl(coach.photo)}
                          alt={`Coach ${coachName} — ${category.nom}`}
                          className="h-full w-full object-cover object-top"
                        />
                      ) : (
                        <div
                          className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/15 via-muted to-primary/5 text-muted-foreground"
                          role="img"
                          aria-label={`Photo coach — ${category.nom}`}
                        >
                          <User className="h-14 w-14 text-primary/40" strokeWidth={1.25} aria-hidden />
                          <span className="text-sm">Photo à venir</span>
                        </div>
                      )}
                      {coach && (
                        <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-8 text-sm font-medium text-white">
                          Coach · {coachName}
                        </p>
                      )}
                    </div>
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
                        {(!coach || !hasPlayerPhoto(coach.photo)) && (
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="text-sm">
                              Coach : {coach ? coachName : "Non défini"}
                            </span>
                          </div>
                        )}
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
