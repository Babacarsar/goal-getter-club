import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "@/lib/api";
import { cn } from "@/lib/utils";
import {
  CalendarDays,
  MapPin,
  Trophy,
  Clock,
  Sparkles,
  ChevronRight,
} from "lucide-react";

type MatchItem = {
  id: number;
  adversaire: string;
  date_match: string;
  lieu?: string;
  score_domicile?: string | number | null;
  score_exterieur?: string | number | null;
  type: string;
  categorie?: { nom: string };
};

const CLUB_NAME = "Girona FC de Saly";

function parseMatchDate(iso: string) {
  return new Date(iso);
}

function hasScore(m: MatchItem) {
  return (
    m.score_domicile !== null &&
    m.score_domicile !== undefined &&
    m.score_domicile !== "" &&
    m.score_exterieur !== null &&
    m.score_exterieur !== undefined &&
    m.score_exterieur !== ""
  );
}

function matchTypeLabel(type: string) {
  return type === "tournoi" ? "Tournoi" : "Match amical";
}

type MatchCardProps = {
  match: MatchItem;
  variant: "upcoming" | "result";
  featured?: boolean;
};

function MatchCard({ match, variant, featured }: MatchCardProps) {
  const date = parseMatchDate(match.date_match);
  const day = date.toLocaleDateString("fr-FR", { day: "2-digit" });
  const month = date.toLocaleDateString("fr-FR", { month: "short" }).replace(".", "");
  const weekday = date.toLocaleDateString("fr-FR", { weekday: "long" });
  const time = date.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const scored = hasScore(match);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300",
        "hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-0.5",
        variant === "upcoming"
          ? "border-primary/20 ring-1 ring-primary/10"
          : "border-border/80",
        featured && "md:col-span-2 lg:col-span-1 lg:row-span-1"
      )}
    >
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary-light to-primary-dark",
          variant === "result" && "from-muted-foreground/40 via-primary to-primary"
        )}
        aria-hidden
      />

      <div className="flex flex-col sm:flex-row gap-0 sm:gap-4 p-5 sm:p-6">
        <div
          className={cn(
            "flex sm:flex-col items-center justify-center gap-2 sm:gap-0 sm:w-[5.5rem] shrink-0",
            "rounded-xl py-3 sm:py-4 mb-4 sm:mb-0",
            variant === "upcoming"
              ? "bg-gradient-to-br from-primary to-primary-dark text-primary-foreground"
              : "bg-muted text-foreground"
          )}
        >
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-90">
            {month}
          </span>
          <span className="text-3xl sm:text-4xl font-extrabold leading-none tabular-nums">
            {day}
          </span>
          <span className="text-[10px] sm:text-xs font-medium capitalize opacity-90 hidden sm:block">
            {weekday}
          </span>
        </div>

        <div className="flex-1 min-w-0 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant={variant === "upcoming" ? "default" : "secondary"}
              className="font-semibold"
            >
              {matchTypeLabel(match.type)}
            </Badge>
            {match.categorie?.nom && (
              <Badge variant="outline" className="border-primary/30 text-primary">
                {match.categorie.nom}
              </Badge>
            )}
            {variant === "upcoming" && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                <Clock className="h-3.5 w-3.5" />
                {time}
              </span>
            )}
          </div>

          <div
            className={cn(
              "grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6",
              featured && "sm:gap-8"
            )}
          >
            <div className="text-right min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                Domicile
              </p>
              <p
                className={cn(
                  "font-bold text-foreground leading-tight",
                  featured ? "text-base sm:text-lg" : "text-sm sm:text-base"
                )}
              >
                {CLUB_NAME}
              </p>
            </div>

            <div
              className={cn(
                "flex flex-col items-center justify-center rounded-xl px-3 py-2 sm:px-5 sm:py-3 min-w-[5.5rem]",
                scored
                  ? "bg-primary/10 ring-2 ring-primary/20"
                  : "bg-muted/80"
              )}
            >
              {scored ? (
                <p
                  className={cn(
                    "font-extrabold tabular-nums text-primary tracking-tight",
                    featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                  )}
                >
                  {match.score_domicile}
                  <span className="text-muted-foreground/60 mx-1 font-bold">–</span>
                  {match.score_exterieur}
                </p>
              ) : (
                <>
                  <span className="text-lg sm:text-xl font-black text-primary">VS</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">
                    À jouer
                  </span>
                </>
              )}
            </div>

            <div className="text-left min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                Adversaire
              </p>
              <p
                className={cn(
                  "font-bold text-foreground leading-tight truncate",
                  featured ? "text-base sm:text-lg" : "text-sm sm:text-base"
                )}
                title={match.adversaire}
              >
                {match.adversaire}
              </p>
            </div>
          </div>

          {match.lieu && (
            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" />
              <span>{match.lieu}</span>
            </p>
          )}

          <p className="sm:hidden text-xs text-muted-foreground capitalize flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {weekday} · {time}
          </p>
        </div>
      </div>
    </article>
  );
}

function EmptyBlock({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Trophy;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-primary/25 bg-gradient-to-br from-primary/5 via-background to-muted/30 px-8 py-14 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-muted-foreground max-w-md mx-auto">{description}</p>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-40 rounded-2xl bg-muted/60" />
      ))}
    </div>
  );
}

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
  const upcoming = matchs
    .filter((m) => parseMatchDate(m.date_match) >= now)
    .sort(
      (a, b) =>
        parseMatchDate(a.date_match).getTime() - parseMatchDate(b.date_match).getTime()
    );
  const past = matchs
    .filter((m) => parseMatchDate(m.date_match) < now)
    .sort(
      (a, b) =>
        parseMatchDate(b.date_match).getTime() - parseMatchDate(a.date_match).getTime()
    );

  const nextMatch = upcoming[0];
  const restUpcoming = upcoming.slice(1);

  const wins = past.filter(
    (m) =>
      hasScore(m) &&
      Number(m.score_domicile) > Number(m.score_exterieur)
  ).length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero
        title="Calendrier & résultats"
        subtitle="Suivez les matchs amicaux et tournois de l'académie — prochaines rencontres et scores officiels."
      />

      <main className="pb-20">
        {!isLoading && matchs.length > 0 && (
          <section className="relative -mt-8 z-10">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
                {[
                  {
                    label: "À venir",
                    value: upcoming.length,
                    icon: Sparkles,
                  },
                  {
                    label: "Joués",
                    value: past.length,
                    icon: CalendarDays,
                  },
                  {
                    label: "Victoires",
                    value: wins,
                    icon: Trophy,
                  },
                  {
                    label: "Total",
                    value: matchs.length,
                    icon: ChevronRight,
                  },
                ].map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-xl border bg-card/95 backdrop-blur-sm px-4 py-4 shadow-md flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-foreground tabular-nums">
                        {value}
                      </p>
                      <p className="text-xs font-medium text-muted-foreground">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            {isLoading ? (
              <LoadingSkeleton />
            ) : (
              <>
                <SectionHeader
                  align="left"
                  eyebrow="Agenda"
                  title="Prochains matchs"
                  description="Rencontres à venir — horaires et lieux confirmés."
                  className="mb-10"
                />

                {upcoming.length === 0 ? (
                  <EmptyBlock
                    icon={CalendarDays}
                    title="Aucun match programmé"
                    description="Le calendrier sera mis à jour dès que de nouvelles rencontres seront planifiées."
                  />
                ) : (
                  <div className="space-y-6">
                    {nextMatch && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 flex items-center gap-2">
                          <Sparkles className="h-4 w-4" />
                          Prochain coup d&apos;envoi
                        </p>
                        <MatchCard match={nextMatch} variant="upcoming" featured />
                      </div>
                    )}
                    {restUpcoming.length > 0 && (
                      <div className="grid gap-5 md:grid-cols-2">
                        {restUpcoming.map((m) => (
                          <MatchCard key={m.id} match={m} variant="upcoming" />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            {!isLoading && (
              <>
                <SectionHeader
                  align="left"
                  eyebrow="Scores"
                  title="Résultats"
                  description="Les derniers matchs disputés par nos équipes."
                  className="mb-10"
                />

                {past.length === 0 ? (
                  <EmptyBlock
                    icon={Trophy}
                    title="Pas encore de résultats"
                    description="Les scores apparaîtront ici après les premières rencontres de la saison."
                  />
                ) : (
                  <div className="grid gap-5 md:grid-cols-2">
                    {past.map((m) => (
                      <MatchCard key={m.id} match={m} variant="result" />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CalendarPage;
