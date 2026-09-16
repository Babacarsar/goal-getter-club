import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiUrl } from "@/lib/api";
import { stripHtml } from "@/lib/html";
import { SectionHeader } from "@/components/layout/SectionHeader";

const LatestNews = () => {
  const navigate = useNavigate();
  const [imageOrientations, setImageOrientations] = useState<{[key: string]: 'portrait' | 'landscape'}>({});

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

  const handleImageLoad = (imageId: string, event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    const orientation = img.naturalWidth > img.naturalHeight ? 'landscape' : 'portrait';
    setImageOrientations(prev => ({
      ...prev,
      [imageId]: orientation
    }));
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Actualités"
          title="Dernières nouvelles"
          description="Restez informés de la vie de l'académie Girona de Saly."
        />

        {/* À la une */}
        <div className="mb-12 max-w-4xl mx-auto">
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <Dialog>
                  <DialogTrigger asChild>
                    <img
                      src={
                        featuredNews.image
                          ? `${featuredNews.image}?c_fill,w_600,h_350,f_auto,q_auto`
                          : "https://via.placeholder.com/600x350"
                      }
                      alt={featuredNews.titre}
                      onLoad={(e) => handleImageLoad(`featured-${featuredNews.id}`, e)}
                      className={`w-full group-hover:scale-105 transition-transform duration-500 cursor-pointer ${
                        imageOrientations[`featured-${featuredNews.id}`] === 'portrait' 
                          ? 'h-64 lg:h-72 object-cover' 
                          : 'h-48 lg:h-56 object-cover'
                      }`}
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
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary text-white text-xs">À la Une</Badge>
                </div>
              </div>

              <div className="p-4 lg:p-6 flex flex-col justify-center">
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {featuredNews.titre}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
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
                  <img
                    src={
                      article.image
                        ? `${article.image}?c_fill,w_350,h_180,f_auto,q_auto`
                        : "https://via.placeholder.com/350x180"
                    }
                    alt={article.titre}
                    onLoad={(e) => handleImageLoad(`article-${article.id}`, e)}
                    className={`w-full object-cover cursor-pointer ${
                      imageOrientations[`article-${article.id}`] === 'portrait' 
                        ? 'h-80' 
                        : 'h-64'
                    }`}
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
