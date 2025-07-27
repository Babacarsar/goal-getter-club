import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";

const News = () => {
  const articles = [
    {
      id: 1,
      title: "Victoire éclatante de nos U18 en finale régionale",
      excerpt: "L'équipe U18 s'impose 3-1 face à l'AS Étoiles et remporte le championnat régional. Une performance remarquable qui récompense le travail de toute une saison.",
      content: "Dans un match intense disputé au Stade Régional devant plus de 2000 spectateurs, nos U18 ont livré une prestation de grande qualité...",
      author: "Marc Dubois",
      date: "15 Mars 2024",
      category: "Résultats",
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "Nouveau partenariat avec l'équipementier TechSport",
      excerpt: "FootballAcademy annonce un partenariat stratégique avec TechSport pour équiper toutes nos équipes avec du matériel de dernière génération.",
      content: "Ce partenariat permettra à tous nos joueurs d'avoir accès aux meilleurs équipements disponibles sur le marché...",
      author: "Direction",
      date: "10 Mars 2024", 
      category: "Actualités",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 3,
      title: "Tournoi international de Pâques : 16 équipes attendues",
      excerpt: "Notre traditionnel tournoi de Pâques accueillera cette année 16 équipes venues de toute l'Europe pour 3 jours de football intense.",
      content: "Du 29 mars au 31 mars, notre complexe sportif vibrera au rythme du football international...",
      author: "Sophie Martin",
      date: "5 Mars 2024",
      category: "Événements",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 4,
      title: "Les U15 filles qualifiées pour la phase nationale",
      excerpt: "Première historique pour notre section féminine U15 qui se qualifie pour les phases nationales du championnat de France.",
      content: "Après une saison exceptionnelle, nos U15 filles ont décroché leur billet pour la phase nationale...",
      author: "Antoine Leroy",
      date: "28 Février 2024",
      category: "Résultats",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 5,
      title: "Stage d'été 2024 : les inscriptions sont ouvertes",
      excerpt: "Ne ratez pas l'opportunité de participer à notre stage d'été intensif du 8 au 19 juillet. Places limitées !",
      content: "Deux semaines d'entraînement intensif avec nos meilleurs coachs pour progresser pendant les vacances...",
      author: "Pierre Moreau",
      date: "20 Février 2024",
      category: "Formation",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 6,
      title: "Inauguration du nouveau terrain synthétique",
      excerpt: "Samedi 15 février a eu lieu l'inauguration officielle de notre nouveau terrain synthétique en présence des autorités locales.",
      content: "Ce nouvel équipement de dernière génération permettra d'améliorer encore les conditions d'entraînement...",
      author: "Jean-Paul Bernard",
      date: "15 Février 2024",
      category: "Infrastructure",
      image: "/placeholder.svg",
      featured: false
    }
  ];

  const categories = ["Tous", "Résultats", "Actualités", "Événements", "Formation", "Infrastructure"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Actualités
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Suivez toute l'actualité de FootballAcademy : résultats, événements et infos club
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={category === "Tous" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {articles.filter(article => article.featured).map(article => (
        <section key={article.id} className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <Badge className="mb-4">{article.category}</Badge>
                  <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
                  <p className="text-muted-foreground mb-6">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <Button>Lire l'article complet</Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      ))}

      {/* Articles Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Derniers articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.filter(article => !article.featured).map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>5 min</span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>
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