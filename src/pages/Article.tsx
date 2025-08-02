import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: articles = [], isLoading } = useQuery({
    queryKey: ["actualites"],
    queryFn: async () => {
      const response = await fetch("https://gironafcsaly-production.up.railway.app/api/actualites");
      if (!response.ok) throw new Error("Failed to fetch news");
      return response.json();
    },
  });

  const article = articles.find((a: any) => a.id === parseInt(id || "0"));

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement de l'article...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article non trouvé</h1>
            <Button onClick={() => navigate("/")}>
              Retour à l'accueil
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Bouton retour */}
          <Button 
            variant="outline" 
            size="sm" 
            className="mb-8"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>

          <article className="bg-card rounded-lg overflow-hidden shadow-lg">
            {/* Image de l'article */}
            {article.image && (
              <div className="aspect-video overflow-hidden">
                <img
                  src={`${article.image}?c_fill,w_800,h_450,f_auto,q_auto`}
                  alt={article.titre}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Contenu de l'article */}
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {article.titre}
              </h1>

              <div className="flex items-center gap-4 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.created_at).toLocaleDateString("fr-FR")}
                </div>
                {article.auteur && (
                  <div>
                    Par {article.auteur}
                  </div>
                )}
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground whitespace-pre-line">
                  {article.contenu}
                </p>
              </div>
            </div>
          </article>

          {/* Bouton de retour en bas */}
          <div className="mt-8 text-center">
            <Button onClick={() => navigate("/")}>
              Retour à l'accueil
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Article;