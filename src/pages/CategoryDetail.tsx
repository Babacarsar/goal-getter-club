import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CategoryDetail = () => {
  const { categoryId } = useParams();

  const categoryData = {
    u14: {
      name: "U14",
      age: "12-14 ans",
      coach: "Marc Dubois",
      description: "L'équipe U14 se concentre sur l'apprentissage des fondamentaux techniques et tactiques du football.",
      players: [
        { name: "Thomas Martin", position: "Gardien", number: 1 },
        { name: "Lucas Dupont", position: "Défenseur", number: 2 },
        { name: "Emma Leroy", position: "Milieu", number: 8 },
        { name: "Hugo Bernard", position: "Attaquant", number: 9 },
        { name: "Léa Moreau", position: "Défenseur", number: 4 },
        { name: "Nathan Dubois", position: "Milieu", number: 6 },
        { name: "Zoé Martinez", position: "Attaquant", number: 11 },
        { name: "Maxime Rousseau", position: "Défenseur", number: 3 }
      ],
      schedule: [
        { date: "15 Mars 2024", opponent: "FC Lions", time: "14h30", location: "Stade Municipal" },
        { date: "22 Mars 2024", opponent: "AS Étoiles", time: "16h00", location: "Terrain d'honneur" },
        { date: "29 Mars 2024", opponent: "Sporting Club", time: "15h00", location: "Complexe sportif" }
      ],
      achievements: ["Champions Départementaux 2023", "Finalistes Coupe Régionale 2022"]
    },
    u15: {
      name: "U15",
      age: "13-15 ans", 
      coach: "Sophie Martin",
      description: "L'équipe U15 développe l'aspect physique et mental tout en perfectionnant la technique.",
      players: [
        { name: "Alexandre Petit", position: "Gardien", number: 1 },
        { name: "Camille Robert", position: "Défenseur", number: 2 },
        { name: "Antoine Garcia", position: "Milieu", number: 8 },
        { name: "Inès Durand", position: "Attaquant", number: 9 },
        { name: "Julien Fontaine", position: "Défenseur", number: 4 },
        { name: "Sarah Blanc", position: "Milieu", number: 6 },
        { name: "Raphaël Simon", position: "Attaquant", number: 11 },
        { name: "Clara Mercier", position: "Défenseur", number: 3 }
      ],
      schedule: [
        { date: "16 Mars 2024", opponent: "RC Tigres", time: "10h30", location: "Stade Central" },
        { date: "23 Mars 2024", opponent: "US Panthères", time: "14h00", location: "Terrain synthétique" },
        { date: "30 Mars 2024", opponent: "AC Aigles", time: "11h00", location: "Stade Municipal" }
      ],
      achievements: ["Finalistes Coupe Régionale 2023", "3ème place Championnat 2022"]
    },
    u17: {
      name: "U17",
      age: "15-17 ans",
      coach: "Antoine Leroy", 
      description: "L'équipe U17 prépare les joueurs au haut niveau avec un entraînement intensif.",
      players: [
        { name: "Mathéo Laurent", position: "Gardien", number: 1 },
        { name: "Océane Roux", position: "Défenseur", number: 2 },
        { name: "Théo Vincent", position: "Milieu", number: 8 },
        { name: "Manon Fournier", position: "Attaquant", number: 9 },
        { name: "Dylan André", position: "Défenseur", number: 4 },
        { name: "Chloé Michel", position: "Milieu", number: 6 },
        { name: "Kylian Girard", position: "Attaquant", number: 11 },
        { name: "Jade Legrand", position: "Défenseur", number: 3 }
      ],
      schedule: [
        { date: "17 Mars 2024", opponent: "Olympique Junior", time: "15h30", location: "Stade Régional" },
        { date: "24 Mars 2024", opponent: "FC Dynamo", time: "10h00", location: "Centre d'entraînement" },
        { date: "31 Mars 2024", opponent: "Real Academy", time: "14h30", location: "Stade d'honneur" }
      ],
      achievements: ["3ème place Championnat National 2023", "Vainqueurs Tournoi Elite 2022"]
    },
    u18: {
      name: "U18",
      age: "16-18 ans",
      coach: "Pierre Moreau",
      description: "L'équipe U18 effectue la transition vers le football adulte avec des matchs de haut niveau.",
      players: [
        { name: "Valentin Boyer", position: "Gardien", number: 1 },
        { name: "Lola Chevalier", position: "Défenseur", number: 2 },
        { name: "Enzo Gauthier", position: "Milieu", number: 8 },
        { name: "Alicia Perrin", position: "Attaquant", number: 9 },
        { name: "Noah Leclerc", position: "Défenseur", number: 4 },
        { name: "Luna Barbier", position: "Milieu", number: 6 },
        { name: "Mattéo Renard", position: "Attaquant", number: 11 },
        { name: "Elise Arnaud", position: "Défenseur", number: 3 }
      ],
      schedule: [
        { date: "18 Mars 2024", opponent: "Elite Academy", time: "16h30", location: "Stade Professionnel" },
        { date: "25 Mars 2024", opponent: "FC Excellence", time: "14h00", location: "Complexe Elite" },
        { date: "1 Avril 2024", opponent: "Champions United", time: "15h30", location: "Stade National" }
      ],
      achievements: ["Champions Régionaux 2023", "Finalistes Coupe Nationale 2022"]
    },
    senior: {
      name: "Senior",
      age: "18+ ans",
      coach: "Jean-Paul Bernard",
      description: "L'équipe Senior évolue en Division Honneur et vise la montée en niveau supérieur.",
      players: [
        { name: "Adrien Moreau", position: "Gardien", number: 1 },
        { name: "Kevin Dubois", position: "Défenseur", number: 2 },
        { name: "Florian Martin", position: "Milieu", number: 8 },
        { name: "Jordan Leroy", position: "Attaquant", number: 9 },
        { name: "Damien Bernard", position: "Défenseur", number: 4 },
        { name: "Romain Petit", position: "Milieu", number: 6 },
        { name: "Anthony Garcia", position: "Attaquant", number: 11 },
        { name: "Sébastien Robert", position: "Défenseur", number: 3 }
      ],
      schedule: [
        { date: "19 Mars 2024", opponent: "AS Professionnels", time: "20h00", location: "Stade Principal" },
        { date: "26 Mars 2024", opponent: "FC Champions", time: "18h30", location: "Terrain Principal" },
        { date: "2 Avril 2024", opponent: "Elite Sports", time: "19h00", location: "Stade Régional" }
      ],
      achievements: ["Montée en Division Honneur 2023", "Champions Division Régionale 2022"]
    }
  };

  const category = categoryData[categoryId as keyof typeof categoryData];

  if (!category) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Catégorie non trouvée</h1>
          <Button asChild>
            <Link to="/categories">Retour aux catégories</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <Button asChild variant="outline" className="mb-6 text-white border-white hover:bg-white/10">
            <Link to="/categories">← Retour aux catégories</Link>
          </Button>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Équipe {category.name}
          </h1>
          <p className="text-xl text-white/90 mb-2">{category.age}</p>
          <p className="text-lg text-white/80">Entraîneur: {category.coach}</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-lg text-muted-foreground max-w-3xl">{category.description}</p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Effectif */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Effectif
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.players.map((player, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                      <div>
                        <p className="font-medium">{player.name}</p>
                        <p className="text-sm text-muted-foreground">{player.position}</p>
                      </div>
                      <Badge variant="outline">#{player.number}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Calendrier */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Prochains Matchs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.schedule.map((match, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <p className="font-medium">{match.date}</p>
                      <p className="text-sm text-primary">vs {match.opponent}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>⏰ {match.time}</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{match.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Palmarès */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Palmarès
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Trophy className="h-4 w-4 text-accent mt-0.5" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryDetail;