import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Image, ExternalLink } from "lucide-react";
import { useState } from "react";

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState("videos");

  const videos = [
    {
      id: 1,
      title: "Entraînement Intensif - Équipe Senior",
      thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
      duration: "3:45",
      views: "2.1K"
    },
    {
      id: 2,
      title: "Match de Gala - Girona vs Dakar FC",
      thumbnail: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&h=400&fit=crop",
      duration: "12:30",
      views: "5.7K"
    },
    {
      id: 3,
      title: "Formation Jeunes - U17",
      thumbnail: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
      duration: "5:22",
      views: "1.8K"
    }
  ];

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1559692048-79a3f837883d?w=600&h=400&fit=crop",
      alt: "Équipe senior en action",
      category: "Match"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600&h=400&fit=crop",
      alt: "Entraînement tactique",
      category: "Entraînement"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=600&h=400&fit=crop",
      alt: "Célébration victoire",
      category: "Victoire"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=400&fit=crop",
      alt: "Portrait équipe",
      category: "Équipe"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      alt: "Terrain d'entraînement",
      category: "Installations"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=600&h=400&fit=crop",
      alt: "Match en cours",
      category: "Match"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            Médias
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vivez l&apos;Expérience Girona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez l&apos;ambiance unique de notre club à travers nos vidéos et photos exclusives
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-background rounded-full p-1 shadow-lg">
            <Button
              variant={activeTab === "videos" ? "default" : "ghost"}
              onClick={() => setActiveTab("videos")}
              className="rounded-full px-8"
            >
              <Play className="w-4 h-4 mr-2" />
              Vidéos
            </Button>
            <Button
              variant={activeTab === "photos" ? "default" : "ghost"}
              onClick={() => setActiveTab("photos")}
              className="rounded-full px-8"
            >
              <Image className="w-4 h-4 mr-2" />
              Photos
            </Button>
          </div>
        </div>

        {/* Videos Section */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card 
                key={video.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{video.views} vues</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Photos Section */}
        {activeTab === "photos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <Card 
                key={photo.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                      {photo.category}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Suivez-nous sur les Réseaux
            </h3>
            <p className="text-muted-foreground mb-6">
              Ne manquez aucun moment fort de la vie du club
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm">
                Instagram
              </Button>
              <Button variant="outline" size="sm">
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                YouTube
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;