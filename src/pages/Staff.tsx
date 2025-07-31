import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";

const Staff = () => {
  const { data: staffMembers = [], isLoading } = useQuery({
    queryKey: ['staff'],
    queryFn: async () => {
      const response = await fetch('https://gironafcsaly-production.up.railway.app/api/staff');
      if (!response.ok) throw new Error('Failed to fetch staff');
      return response.json();
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement de l'équipe...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 pb-20 bg-gradient-to-br from-primary/20 to-accent/20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Notre Équipe Technique
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            Découvrez les membres du staff qui accompagnent nos joueurs vers la réussite.
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Membres du Staff</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-all">
                <img
                  src={
  member.photo
    ? `https://gironafcsaly-production.up.railway.app/${member.photo}`
    : "https://via.placeholder.com/400x250"
}
                  alt={`${member.prenom} ${member.nom}`}
                   className="w-full h-85 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-foreground">{member.prenom} {member.nom}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                  {member.categorie?.nom && (
                    <Badge className="mt-2 bg-accent text-white">
                      Catégorie : {member.categorie.nom}
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Staff;
