import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const LatestNews = () => {
  const { data: news = [], isLoading } = useQuery({
    queryKey: ["actualites"],
    queryFn: async () => {
      const response = await fetch("`https://gironafcsaly-production.up.railway.app/api/actualites");
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

  const featuredNews = news[0];
  const otherNews = news.slice(1);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            Actualités
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dernières Nouvelles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Restez informé de toutes les actualités du club Girona de Saly
          </p>
        </div>

        {/* À la une */}
        {featuredNews && (
          <div className="mb-16">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src={
                      featuredNews.image
                        ? `https://gironafcsaly-production.up.railway.app/${featuredNews.image}`
                        : "https://via.placeholder.com/600x400"
                    }
                    alt={featuredNews.titre}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">À la Une</Badge>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredNews.titre}
                  </h3>
                  <p className="text-muted-foreground text-base mb-6 line-clamp-5">
                    {featuredNews.contenu}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredNews.created_at).toLocaleDateString("fr-FR")}
                  </div>
                  <Button className="w-fit group">
                    Lire l'article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Autres actualités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {otherNews.map((article, index) => (
            <Card
              key={article.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={
                    article.image
                      ? `https://gironafcsaly-production.up.railway.app/${article.image}`
                      : "https://via.placeholder.com/400x250"
                  }
                  alt={article.titre}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.titre}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.contenu}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.created_at).toLocaleDateString("fr-FR")}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            Voir toutes les actualités
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
