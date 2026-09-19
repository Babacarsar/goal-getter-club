import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams, Link } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "@/lib/api";
import { PlayerPhoto } from "@/components/PlayerPhoto";

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const [posteFilter, setPosteFilter] = useState<string>("all");

  const { data: categories = [], isLoading: loadingCat } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(apiUrl("/api/categories"));
      if (!res.ok) throw new Error("Failed to fetch categories");
      return res.json();
    },
  });

  const { data: allPlayers, isLoading: loadingPlayers } = useQuery({
    queryKey: ["joueurs"],
    queryFn: async () => {
      const res = await fetch(apiUrl("/api/joueurs"));
      if (!res.ok) throw new Error("Failed to fetch players");
      return res.json();
    },
  });

  const category = categories.find(
    (c: { id: number }) => c.id?.toString() === categoryId
  );

  const players = useMemo(
    () =>
      allPlayers?.filter(
        (p: { categorie?: { id?: number } }) =>
          p.categorie?.id?.toString() === categoryId
      ) ?? [],
    [allPlayers, categoryId]
  );

  const postes = useMemo(() => {
    const unique = new Set<string>();
    for (const player of players) {
      const poste = player.poste?.trim();
      if (poste) unique.add(poste);
    }
    return Array.from(unique).sort((a, b) => a.localeCompare(b, "fr"));
  }, [players]);

  const filteredPlayers = useMemo(() => {
    if (posteFilter === "all") return players;
    return players.filter((p: { poste?: string }) => p.poste === posteFilter);
  }, [players, posteFilter]);

  const categoryTitle =
    category?.nom ?? players[0]?.categorie?.nom ?? "équipe";

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

  if (!category && players.length === 0) {
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
        title={`Équipe ${categoryTitle}`}
        subtitle={category?.description}
        backTo="/categories"
        backLabel="Toutes les catégories"
      />

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold text-foreground">Effectif</h2>
            {postes.length > 0 && (
              <div className="flex items-center gap-3">
                <label htmlFor="poste-filter" className="text-sm text-muted-foreground shrink-0">
                  Filtrer par poste
                </label>
                <Select value={posteFilter} onValueChange={setPosteFilter}>
                  <SelectTrigger id="poste-filter" className="w-[200px] bg-background">
                    <SelectValue placeholder="Tous les postes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les postes</SelectItem>
                    {postes.map((poste) => (
                      <SelectItem key={poste} value={poste}>
                        {poste}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          {filteredPlayers.length === 0 ? (
            <p className="text-muted-foreground">Aucun joueur pour ce filtre.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlayers.map(
                (player: {
                  id: number;
                  prenom: string;
                  nom: string;
                  poste?: string;
                  photo?: string | null;
                }) => (
                  <Card
                    key={player.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <PlayerPhoto
                      photo={player.photo}
                      prenom={player.prenom}
                      nom={player.nom}
                      className="w-full aspect-[3/4] object-cover"
                      optimizeCloudinary
                      cloudinaryCrop="portrait"
                    />
                    <CardHeader>
                      <CardTitle className="text-primary">
                        {player.prenom} {player.nom}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Poste : {player.poste || "N/A"}
                      </p>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryDetail;
