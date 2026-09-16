import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { apiUrl, resolveMediaUrl } from "@/lib/api";
import { ArrowLeft } from "lucide-react";

const PlayerDetail = () => {
  const { id } = useParams();

  const { data: player, isLoading, isError } = useQuery({
    queryKey: ["joueur", id],
    queryFn: async () => {
      const res = await fetch(apiUrl(`/api/joueurs/${id}`));
      if (!res.ok) throw new Error("Joueur introuvable");
      return res.json();
    },
    enabled: !!id,
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Button asChild variant="outline" size="sm" className="mb-6">
            <Link to={player?.categorie?.id ? `/categories/${player.categorie.id}` : "/categories"}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l&apos;effectif
            </Link>
          </Button>

          {isLoading && <p className="text-muted-foreground">Chargement…</p>}
          {isError && <p className="text-destructive">Joueur introuvable.</p>}

          {player && (
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden border">
              <img
                src={resolveMediaUrl(player.photo)}
                alt={`${player.prenom} ${player.nom}`}
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <Badge className="mb-3">{player.categorie?.nom ?? "Académie"}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {player.prenom} {player.nom}
                </h1>
                <dl className="grid grid-cols-2 gap-4 mt-6 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Poste</dt>
                    <dd className="font-semibold">{player.poste || "—"}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Âge</dt>
                    <dd className="font-semibold">{player.age ? `${player.age} ans` : "—"}</dd>
                  </div>
                </dl>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlayerDetail;
