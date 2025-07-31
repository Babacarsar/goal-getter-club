import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const News = () => {
  const { data: articles = [], isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const response = await fetch("https://gironafcsaly-production.up.railway.app/api/actualites");
      if (!response.ok) throw new Error("Failed to fetch news");
      return response.json();
    },
  });

  const categories = ["Tous"]; // Pas de catégories dans ton modèle, donc statique

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement des actualités...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Bandeau d’en-tête */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Actualités
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Suivez toutes les infos du club Girona de Saly
          </p>
        </div>
      </section>

      {/* Filtres (statique) */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button key={category} variant="default" size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Liste des articles */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Derniers articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video">
  <img
    src={
      article.image
        ? `${article.image}?c_fill,w_400,h_250,f_auto,q_auto`
        : "https://via.placeholder.com/400x250"
    }
    alt={article.titre}
    className="w-full h-full object-cover"
  />
</div>

                <CardHeader>
                  <CardTitle className="line-clamp-2">{article.titre}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.contenu.length > 150
                      ? `${article.contenu.substring(0, 150)}...`
                      : article.contenu}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(article.created_at).toLocaleDateString("fr-FR")}
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Lire plus
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

export default News;
