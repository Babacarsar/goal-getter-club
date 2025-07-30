import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const Coaches = () => {
  const { data: coaches = [], isLoading } = useQuery({
    queryKey: ['coaches'],
    queryFn: async () => {
      const response = await fetch('https://gironafcsaly-production.up.railway.app/api/staff');
      if (!response.ok) throw new Error('Failed to fetch coaches');
      return response.json();
    }
  });

  if (isLoading) {
    return (
      <section className="py-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
        <p className="text-muted-foreground">Chargement de l'équipe...</p>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-2">Nos Entraîneurs</h2>
          <p className="text-muted-foreground text-lg">
            Une équipe passionnée au service de la réussite des joueurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-0">
                <img
                  src={
  coach.photo
    ? `https://gironafcsaly-production.up.railway.app/${coach.photo}`
    : "https://via.placeholder.com/400x250"
}

                  alt={`${coach.prenom} ${coach.nom}`}
                    className="w-full h-85 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {coach.prenom} {coach.nom}
                  </h3>
                  <p className="text-primary font-medium mb-2">{coach.role}</p>
                  {coach.categorie?.nom && (
                    <p className="text-sm text-muted-foreground">Catégorie : {coach.categorie.nom}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;
