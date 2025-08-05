import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
      
      <main className="pt-16 md:pt-20 pb-8 md:pb-16 bg-background min-h-screen">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-6xl">
          {/* Bouton retour */}
          <div className="mb-4 md:mb-8">
            <Button 
              variant="outline" 
              size="sm" 
              className="group text-xs sm:text-sm"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:-translate-x-1 transition-transform" />
              Retour
            </Button>
          </div>

          {/* Article principal */}
          <article className="max-w-5xl mx-auto">
            {/* En-tête de l'article */}
            <header className="mb-4 sm:mb-6 md:mb-8 text-center px-2 sm:px-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
                {article.titre}
              </h1>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 text-muted-foreground mb-4 sm:mb-6 md:mb-8">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                    {new Date(article.created_at).toLocaleDateString("fr-FR", {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                {article.auteur && (
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">Par {article.auteur}</span>
                  </div>
                )}
              </div>
            </header>

            {/* Image principale */}
            {article.image && (
              <div className="mb-6 sm:mb-8 md:mb-12 rounded-md sm:rounded-lg md:rounded-xl overflow-hidden shadow-md sm:shadow-lg md:shadow-2xl mx-2 sm:mx-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <img
                      src={`${article.image}?c_fill,w_1200,h_600,f_auto,q_auto`}
                      alt={article.titre}
                      className="w-full h-[500px] xs:h-[550px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[850px] 2xl:h-[900px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
                    <img
                      src={article.image}
                      alt={article.titre}
                      className="w-full h-auto object-contain"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            )}

            {/* Contenu de l'article */}
            <div className="bg-card rounded-md sm:rounded-lg md:rounded-xl shadow-sm sm:shadow-md md:shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 mx-2 sm:mx-0">
              <div className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none">
                <div className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-loose text-foreground whitespace-pre-line font-light">
                  {article.contenu}
                </div>
              </div>
            </div>
          </article>

          {/* Bouton de retour en bas */}
          <div className="mt-6 sm:mt-8 md:mt-12 text-center px-2">
            <Button 
              size="sm" 
              onClick={() => navigate("/")} 
              className="group w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3"
            >
              Retour à l'accueil
              <ArrowLeft className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:-translate-x-1 transition-transform rotate-180" />
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Article;