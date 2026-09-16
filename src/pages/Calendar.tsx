import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "@/lib/api";
import { CalendarDays, MapPin } from "lucide-react";

type MatchItem = {
  id: number;
  adversaire: string;
  date_match: string;
  lieu?: string;
  score_domicile?: string;
  score_exterieur?: string;
  type: string;
  categorie?: { nom: string };
};

const CalendarPage = () => {
  const { data: matchs = [], isLoading } = useQuery({
    queryKey: ["matchs"],
    queryFn: async () => {
      const res = await fetch(apiUrl("/api/matchs"));
      if (!res.ok) throw new Error("Erreur calendrier");
      return res.json() as Promise<MatchItem[]>;
    },
  });

  const now = new Date();
  const upcoming = matchs.filter((m) => new Date(m.date_match) >= now);
  const past = matchs.filter((m) => new Date(m.date_match) < now).reverse();

  const renderList = (items: MatchItem[], title: string) => (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      {items.length === 0 ? (
        <p className="text-muted-foreground">Aucun match pour le moment.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((m) => (
            <li key={m.id} className="bg-card border rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <CalendarDays className="h-4 w-4" />
                  {new Date(m.date_match).toLocaleString("fr-FR", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                <p className="text-lg font-semibold">Girona de Saly vs {m.adversaire}</p>
                {m.lieu && (
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" /> {m.lieu}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="outline">{m.type === "tournoi" ? "Tournoi" : "Amical"}</Badge>
                {m.categorie?.nom && <Badge>{m.categorie.nom}</Badge>}
                {m.score_domicile && m.score_exterieur ? (
                  <span className="font-bold text-primary text-lg">
                    {m.score_domicile} – {m.score_exterieur}
                  </span>
                ) : (
                  <span className="text-muted-foreground text-sm">À jouer</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Calendrier & résultats"
        subtitle="Matchs amicaux et tournois — à venir et résultats officiels."
      />
      <main className="pb-16 container mx-auto px-4 max-w-4xl -mt-6">
        {isLoading ? (
          <p>Chargement…</p>
        ) : (
          <>
            {renderList(upcoming, "À venir")}
            {renderList(past, "Résultats")}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CalendarPage;
