import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const LatestNews = () => {
  const news = [
    {
      id: 1,
      title: "Victoire éclatante contre Dakar FC",
      excerpt: "L'équipe senior de Girona de Saly s'impose 3-1 face au Dakar FC dans un match spectaculaire qui restera dans les mémoires.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
      category: "Match",
      author: "Modou Ndiaye",
      date: "2024-01-15",
      readTime: "3 min"
    },
    {
      id: 2,
      title: "Nouveau terrain synthétique inauguré",
      excerpt: "Le complexe Girona de Saly s'enrichit d'un nouveau terrain synthétique de dernière génération pour améliorer les conditions d'entraînement.",
      image: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=600&h=400&fit=crop",
      category: "Installations",
      author: "Fatou Ba",
      date: "2024-01-12",
      readTime: "2 min"
    },
    {
      id: 3,
      title: "Stage de formation pour les jeunes",
      excerpt: "Un stage intensif de 5 jours organisé pour les catégories U15 et U17 avec des entraîneurs professionnels européens.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
      category: "Formation",
      author: "Cheikh Sy",
      date: "2024-01-10",
      readTime: "4 min"
    },
    {
      id: 4,
      title: "Partenariat avec l'Académie de Barcelona",
      excerpt: "Girona de Saly signe un accord de partenariat technique avec l'académie du FC Barcelona pour le développement des jeunes talents.",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&h=400&fit=crop",
      category: "Partenariat",
      author: "Mamadou Cissé",
      date: "2024-01-08",
      readTime: "5 min"
    }
  ];

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

        {/* Featured News */}
        <div className="mb-16">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    À la Une
                  </Badge>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {featuredNews.category}
                </Badge>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredNews.title}
                </h3>
                
                <p className="text-muted-foreground text-lg mb-6">
                  {featuredNews.excerpt}
                </p>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredNews.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredNews.date).toLocaleDateString('fr-FR')}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredNews.readTime}
                  </div>
                </div>
                
                <Button className="w-fit group">
                  Lire l'article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Other News */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {otherNews.map((article, index) => (
            <Card 
              key={article.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-3">
                    <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
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
