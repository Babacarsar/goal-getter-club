import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // ✅ import autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const SeniorTeamCarousel = () => {
  const { data: players = [], isLoading } = useQuery({
    queryKey: ['joueurs'],
    queryFn: async () => {
      const res = await fetch('https://gironafcsaly-production.up.railway.app/api/joueurs');
      if (!res.ok) throw new Error("Erreur de chargement");
      return res.json();
    }
  });

  const seniorPlayers = players.filter(
    (player) => player.categorie?.nom?.toLowerCase() === "u20"
  );

  if (isLoading) {
    return (
      <section className="py-20 text-center">
        <div className="animate-spin h-12 w-12 border-b-2 border-primary rounded-full mx-auto mb-4" />
        <p className="text-muted-foreground">Chargement...</p>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="text-lg px-4 py-2 mb-4">
            Notre Équipe
          </Badge>
          <h2 className="text-4xl font-bold text-foreground">
            Nos Lions de Saly
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-2">
            Faites connaissance avec notre talentueuse équipe senior.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // ✅ ajout d’Autoplay
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 4000, // ✅ défilement toutes les 3s
            disableOnInteraction: false, // continue même après interaction
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {seniorPlayers.map((player, index) => (
            <SwiperSlide key={index}>
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-all">
                <img
                  src={
                    player.photo
                      ? `${player.photo}`
                      : "https://via.placeholder.com/400x250"
                  }
                  alt={`${player.prenom} ${player.nom}`}
                  className="w-full h-74 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {player.prenom} {player.nom}
                  </h3>
                  <p className="text-primary font-medium mb-1">{player.poste}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Âge : {player.age} ans
                  </p>
                  {player.categorie?.nom && (
                    <Badge className="bg-accent text-white">
                      {player.categorie.nom}
                    </Badge>
                  )}
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SeniorTeamCarousel;
