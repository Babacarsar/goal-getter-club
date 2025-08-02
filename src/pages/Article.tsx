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
      
      <main className="pt-20 pb-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Bouton retour */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              size="sm" 
              className="group"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Retour
            </Button>
          </div>

          {/* Article principal */}
          <article className="max-w-4xl mx-auto">
            {/* En-tête de l'article */}
            <header className="mb-8 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {article.titre}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg">
                    {new Date(article.created_at).toLocaleDateString("fr-FR", {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                {article.auteur && (
                  <div className="flex items-center gap-2">
                    <span className="text-lg">Par {article.auteur}</span>
                  </div>
                )}
              </div>
            </header>

            {/* Image principale */}
            {article.image && (
              <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={`${article.image}?c_fill,w_1200,h_600,f_auto,q_auto`}
                  alt={article.titre}
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            )}

            {/* Contenu de l'article */}
            <div className="bg-card rounded-xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg md:prose-xl max-w-none">
                <div className="text-lg md:text-xl leading-relaxed text-foreground whitespace-pre-line font-light">
                  {article.contenu}
                </div>
              </div>
            </div>
          </article>

          {/* Bouton de retour en bas */}
          <div className="mt-12 text-center">
            <Button size="lg" onClick={() => navigate("/")} className="group">
              Retour à l'accueil
              <ArrowLeft className="ml-2 h-4 w-4 group-hover:-translate-x-1 transition-transform rotate-180" />
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Article;