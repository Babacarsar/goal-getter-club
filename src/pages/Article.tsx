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
      
      <main className="pt-16 md:pt-20 pb-8 md:pb-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bouton retour */}
          <div className="mb-6 md:mb-8">
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
            <header className="mb-6 md:mb-8 text-center px-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                {article.titre}
              </h1>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-muted-foreground mb-6 md:mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base lg:text-lg">
                    {new Date(article.created_at).toLocaleDateString("fr-FR", {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                {article.auteur && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm md:text-base lg:text-lg">Par {article.auteur}</span>
                  </div>
                )}
              </div>
            </header>

            {/* Image principale */}
            {article.image && (
              <div className="mb-8 md:mb-12 rounded-lg md:rounded-xl overflow-hidden shadow-lg md:shadow-2xl">
                <img
                  src={`${article.image}?c_fill,w_1200,h_600,f_auto,q_auto`}
                  alt={article.titre}
                  className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] object-cover"
                />
              </div>
            )}

            {/* Contenu de l'article */}
            <div className="bg-card rounded-lg md:rounded-xl shadow-md md:shadow-lg p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none">
                <div className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-foreground whitespace-pre-line font-light">
                  {article.contenu}
                </div>
              </div>
            </div>
          </article>

          {/* Bouton de retour en bas */}
          <div className="mt-8 md:mt-12 text-center">
            <Button size="sm" onClick={() => navigate("/")} className="group w-full sm:w-auto md:size-lg">
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