import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // ✅ import autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { apiUrl } from "@/lib/api";
import { PlayerPhoto } from "@/components/PlayerPhoto";
import { Link } from "react-router-dom";

const SeniorTeamCarousel = () => {
  const { data: players = [], isLoading } = useQuery({
    queryKey: ['joueurs'],
    queryFn: async () => {
      const res = await fetch(apiUrl("/api/joueurs"));
      if (!res.ok) throw new Error("Erreur de chargement");
      return res.json();
    }
  });

  const seniorPlayers = players.filter((player) => {
    const cat = player.categorie?.nom?.toLowerCase() ?? "";
    return cat === "senior" || cat === "seniors" || cat === "u20";
  });

  if (isLoading) {
    return (
      <section className="py-20 text-center">
        <div className="animate-spin h-12 w-12 border-b-2 border-primary rounded-full mx-auto mb-4" />
        <p className="text-muted-foreground">Chargement...</p>
      </section>
    );
  }

  return (
    <section className="section-padding bg-muted/40">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Effectif"
          title="Nos Lions de Saly"
          description="Découvrez les talents de l'équipe Senior et leurs parcours au sein de l'académie."
        />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // ✅ ajout d’Autoplay
          className="senior-players-swiper !pb-14"
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides
          breakpoints={{
            640: { slidesPerView: 1.05, centeredSlides: true, spaceBetween: 28 },
            768: { slidesPerView: 2, centeredSlides: false, spaceBetween: 32 },
            1280: { slidesPerView: 2, spaceBetween: 40 },
          }}
          autoplay={{
            delay: 4000, // ✅ défilement toutes les 3s
            disableOnInteraction: false, // continue même après interaction
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {seniorPlayers.map((player) => (
            <SwiperSlide key={player.id}>
              <Link to={`/joueurs/${player.id}`} className="block h-full">
                <Card className="mx-auto w-full max-w-md overflow-hidden border-0 shadow-lg card-hover-lift h-full">
                  <PlayerPhoto
                    photo={player.photo}
                    prenom={player.prenom}
                    nom={player.nom}
                    className="w-full aspect-[3/4] min-h-[22rem] sm:min-h-[26rem]"
                    optimizeCloudinary
                    cloudinaryCrop="portrait"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {player.prenom} {player.nom}
                    </h3>
                    <p className="text-primary font-semibold mb-3">{player.poste}</p>
                    {player.categorie?.nom && (
                      <Badge className="bg-primary text-primary-foreground">
                        {player.categorie.nom}
                      </Badge>
                    )}
                  </div>
                </Card>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SeniorTeamCarousel;
