import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { FitImage } from "@/components/FitImage";
import { apiUrl } from "@/lib/api";
import { stripHtml } from "@/lib/html";
import { SectionHeader } from "@/components/layout/SectionHeader";

const LatestNews = () => {
  const navigate = useNavigate();

  const { data: news = [], isLoading } = useQuery({
    queryKey: ["actualites"],
    queryFn: async () => {
      const response = await fetch(apiUrl("/api/actualites"));
      if (!response.ok) throw new Error("Failed to fetch news");
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Chargement des actualités...</p>
        </div>
      </section>
    );
  }

  if (news.length === 0) {
    return (
      <section className="py-20 bg-background text-center">
        <p className="text-muted-foreground">Aucune actualité disponible.</p>
      </section>
    );
  }

  const featuredNews = news.find((a: { a_la_une?: boolean }) => a.a_la_une) ?? news[0];
  const otherNews = news.filter((a: { id: number }) => a.id !== featuredNews?.id).slice(0, 3);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Actualités"
          title="Dernières nouvelles"
          description="Restez informés de la vie de l'académie Girona de Saly."
        />

        {/* À la une */}
        <div className="mb-12 max-w-6xl mx-auto">
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="relative overflow-hidden lg:col-span-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <FitImage
                      src={featuredNews.image}
                      alt={featuredNews.titre}
                      width={1400}
                      className="h-80 sm:h-[28rem] lg:h-[34rem] cursor-pointer"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img
                      src={featuredNews.image || "https://via.placeholder.com/600x350"}
                      alt={featuredNews.titre}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                  </DialogContent>
                </Dialog>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white text-sm px-3 py-1">À la Une</Badge>
                </div>
              </div>

              <div className="p-6 lg:p-8 flex flex-col justify-center lg:col-span-2">
                <h3 className="text-xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredNews.titre}
                </h3>
                <p className="text-muted-foreground text-base mb-4 line-clamp-5">
                  {stripHtml(featuredNews.contenu)}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  {new Date(featuredNews.created_at).toLocaleDateString("fr-FR")}
                </div>
                <Button size="sm" className="w-fit group" onClick={() => navigate(`/article/${featuredNews.id}`)}>
                  Lire l'article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Cartes compactes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 max-w-5xl mx-auto">
          {otherNews.map((article, index) => (
            <Card
              key={article.id}
              className="group overflow-hidden hover:shadow-md transition hover:scale-[1.01]"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <FitImage
                    src={article.image}
                    alt={article.titre}
                    width={700}
                    className="h-80 cursor-pointer"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img
                    src={article.image || "https://via.placeholder.com/350x180"}
                    alt={article.titre}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary line-clamp-2">
                  {article.titre}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                  {stripHtml(article.contenu)}
                </p>
                <div className="flex items-center gap-1 text-[11px] text-muted-foreground mb-3">
                  <Calendar className="w-3 h-3" />
                  {new Date(article.created_at).toLocaleDateString("fr-FR")}
                </div>
                <Button size="sm" className="w-full text-xs" onClick={() => navigate(`/article/${article.id}`)}>
                  Lire l'article
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bouton Voir plus */}
        <div className="text-center">
          <Button size="sm" variant="outline" className="group" onClick={() => navigate("/news")}>
            Voir toutes les actualités
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
