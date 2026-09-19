import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Badge } from "@/components/ui/badge";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "@/lib/api";
import { PlayerPhoto } from "@/components/PlayerPhoto";

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
      {player && (
        <PageHero
          title={`${player.prenom} ${player.nom}`}
          subtitle={[player.poste, player.categorie?.nom].filter(Boolean).join(" · ")}
          backTo={player.categorie?.id ? `/categories/${player.categorie.id}` : "/categories"}
          backLabel="Retour à l'effectif"
        />
      )}
      <main className="pb-16 -mt-6">
        <div className="container mx-auto px-4 max-w-3xl">
          {isLoading && <p className="text-muted-foreground pt-8">Chargement…</p>}
          {isError && <p className="text-destructive pt-8">Joueur introuvable.</p>}

          {player && (
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden border">
              <PlayerPhoto
                photo={player.photo}
                prenom={player.prenom}
                nom={player.nom}
                className="w-full h-80"
                optimizeCloudinary
              />
              <div className="p-8">
                <Badge className="mb-3">{player.categorie?.nom ?? "Académie"}</Badge>
                <dl className="grid grid-cols-1 gap-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Poste</dt>
                    <dd className="font-semibold">{player.poste || "—"}</dd>
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
