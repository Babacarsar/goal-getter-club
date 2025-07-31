import { Badge } from "@/components/ui/badge";

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Girona FC",
      logo: "/logo.png",
      description: "Club partenaire principal"
    },
    {
      id: 2,
      name: "Nike",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png",
      description: "Équipementier officiel"
    },
    {
      id: 3,
      name: "Coca-Cola",
      logo: "https://logoeps.com/wp-content/uploads/2013/03/coca-cola-vector-logo.png",
      description: "Partenaire boisson"
    },
    {
      id: 4,
      name: "Orange",
      logo: "https://1000logos.net/wp-content/uploads/2017/04/Orange-Logo.png",
      description: "Partenaire télécommunication"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-lg px-4 py-2 mb-4">
            Nos Partenaires
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les entreprises et organisations qui soutiennent notre académie
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div key={partner.id} className="flex flex-col items-center group">
              <div className="w-32 h-32 bg-white rounded-xl shadow-md flex items-center justify-center p-4 group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mt-4 text-center">
                {partner.name}
              </h3>
              <p className="text-sm text-muted-foreground text-center mt-2">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Vous souhaitez intégrer notre équipe ?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;