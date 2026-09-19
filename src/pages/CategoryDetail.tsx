import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "@/lib/api";
import { PlayerPhoto } from "@/components/PlayerPhoto";

const CategoryDetail = () => {
  const { categoryId } = useParams();

  const { data: category, isLoading: loadingCat } = useQuery({
    queryKey: ["category", categoryId],
    queryFn: async () => {
      const res = await fetch(apiUrl(`/api/categories/${categoryId}`));
      if (!res.ok) throw new Error("Failed to fetch category");
      return res.json();
    },
    enabled: !!categoryId,
  });

  const { data: allPlayers, isLoading: loadingPlayers } = useQuery({
    queryKey: ["joueurs"],
    queryFn: async () => {
      const res = await fetch(apiUrl("/api/joueurs"));
      if (!res.ok) throw new Error("Failed to fetch players");
      return res.json();
    },
  });

  const players = allPlayers?.filter(
    (p) => p.categorie?.id?.toString() === categoryId
  );

  if (loadingCat || loadingPlayers) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement...</p>
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

      <PageHero
        title={`Équipe ${category.nom}`}
        subtitle={category.description}
        backTo="/categories"
        backLabel="Toutes les catégories"
      />

      {/* Description */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-lg text-muted-foreground max-w-3xl">{category.description}</p>
        </div>
      </section>

      {/* Joueurs */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Effectif</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {players?.map((player) => (
              <Card key={player.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <PlayerPhoto
                  photo={player.photo}
                  prenom={player.prenom}
                  nom={player.nom}
                  className="w-full h-76"
                  optimizeCloudinary
                />
                <CardHeader>
                  <CardTitle className="text-primary">
                    {player.prenom} {player.nom}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Poste : {player.poste || "N/A"}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={`/joueurs/${player.id}`}>Voir la fiche</Link>
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

export default CategoryDetail;
