import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Image, ChevronLeft, ChevronRight } from "lucide-react";
import { apiUrl } from "@/lib/api";

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState("videos");
  const [currentSlide, setCurrentSlide] = useState(0);

  const { data: media = [], isLoading } = useQuery({
    queryKey: ["media"],
    queryFn: async () => {
      const res = await fetch(apiUrl("/api/media"));
      if (!res.ok) throw new Error("Erreur de chargement des médias");
      return res.json();
    },
  });

  const videos = media.filter((m) => m.type === "video");
  const photos = media.filter((m) => m.type === "image");
  
  const currentMedia = activeTab === "videos" ? videos : photos;

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (currentMedia.length > 3) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => {
          const maxSlides = Math.ceil(currentMedia.length / 3) - 1;
          return prev >= maxSlides ? 0 : prev + 1;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentMedia.length]);

  // Reset slide when switching tabs
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeTab]);

  const nextSlide = () => {
    const maxSlides = Math.ceil(currentMedia.length / 3) - 1;
    setCurrentSlide((prev) => prev >= maxSlides ? 0 : prev + 1);
  };

  const prevSlide = () => {
    const maxSlides = Math.ceil(currentMedia.length / 3) - 1;
    setCurrentSlide((prev) => prev <= 0 ? maxSlides : prev - 1);
  };

  if (isLoading) {
    return (
      <section className="py-20 text-center">
        <p className="text-muted-foreground">Chargement des médias...</p>
      </section>
    );
  }

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
            Découvrez l&apos;ambiance unique de notre club à travers nos vidéos et photos exclusives.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-background rounded-full p-1 shadow-lg flex gap-2">
            <Button
              variant={activeTab === "videos" ? "default" : "ghost"}
              onClick={() => setActiveTab("videos")}
              className="rounded-full px-6"
            >
              <Play className="w-4 h-4 mr-2" />
              Vidéos
            </Button>
            <Button
              variant={activeTab === "photos" ? "default" : "ghost"}
              onClick={() => setActiveTab("photos")}
              className="rounded-full px-6"
            >
              <Image className="w-4 h-4 mr-2" />
              Photos
            </Button>
          </div>
        </div>

        {/* Carousel */}
        {currentMedia.length > 0 && (
          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(currentMedia.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
                    {currentMedia.slice(slideIndex * 3, slideIndex * 3 + 3).map((item) => (
                    <div key={item.id} className="w-full">
                        <Card className="overflow-hidden h-full">
                          {activeTab === "videos" ? (
                            <div className="relative">
                              <video
                                src={item.file_path}
                                controls
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-64 object-cover"
                              ></video>
                            </div>
                          ) : (
                            <img
                              src={item.file_path}
                              alt={item.title || "Photo"}
                              className="w-full h-64 object-cover"
                            />
                          )}
                          <div className="p-4">
                            <h3 className="text-lg font-semibold text-foreground">
                              {item.title || (activeTab === "videos" ? "Vidéo sans titre" : "Image sans titre")}
                            </h3>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(currentMedia.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {currentMedia.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Aucun contenu disponible pour cette section.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaGallery;
