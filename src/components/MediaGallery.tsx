import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Image, ExternalLink } from "lucide-react";

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState("videos");

  const { data: media = [], isLoading } = useQuery({
    queryKey: ["media"],
    queryFn: async () => {
      const res = await fetch("https://gironafcsaly-production.up.railway.app/api/media");
      if (!res.ok) throw new Error("Erreur de chargement des médias");
      return res.json();
    },
  });

  const videos = media.filter((m) => m.type === "video");
  const photos = media.filter((m) => m.type === "image");

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
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

        {/* Tabs */}
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

        {/* Videos */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card key={video.id} className="group overflow-hidden hover:shadow-xl hover:scale-105 transition-all">
                <div className="relative overflow-hidden">
                  <video
                    src={`https://gironafcsaly-production.up.railway.app/storage/${video.path}`}
                    controls
                    className="w-full h-48 object-cover"
                  ></video>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {video.title || "Vidéo sans titre"}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Photos */}
        {activeTab === "photos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo) => (
              <Card key={photo.id} className="group overflow-hidden hover:shadow-xl hover:scale-105 transition-all">
                <img
                  src={`https://gironafcsaly-production.up.railway.app/storage/${photo.path}`}
                  alt={photo.title || "Photo"}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {photo.title || "Image sans titre"}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Réseaux sociaux */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Suivez-nous sur les Réseaux
            </h3>
            <p className="text-muted-foreground mb-6">
              Ne manquez aucun moment fort de la vie du club
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm">Instagram</Button>
              <Button variant="outline" size="sm">Facebook</Button>
              <a
                href="https://www.youtube.com/@Acad%C3%A9mieGironafcdeSalyofficiel/videos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">YouTube</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
