import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { apiUrl } from "@/lib/api";
import { SectionHeader } from "@/components/layout/SectionHeader";

const Partners = () => {
  const { data: partners = [], isLoading } = useQuery({
    queryKey: ["partenaires"],
    queryFn: async () => {
      const res = await fetch(apiUrl("/api/partenaires"));
      if (!res.ok) throw new Error("Partenaires");
      return res.json();
    },
  });

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Partenaires"
          title="Ils nous font confiance"
          description="Entreprises et institutions qui soutiennent le projet Girona de Saly."
        />

        {isLoading ? (
          <p className="text-center text-muted-foreground">Chargement…</p>
        ) : partners.length === 0 ? (
          <p className="text-center text-muted-foreground">Partenaires à venir.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {partners.map((partner: { id: number; nom: string; logo: string; url?: string }) => {
              const inner = (
                <div className="w-32 h-32 bg-white rounded-xl shadow-md flex items-center justify-center p-4 group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.nom}
                    className="max-w-full max-h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              );
              return partner.url ? (
                <a key={partner.id} href={partner.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                  {inner}
                </a>
              ) : (
                <div key={partner.id} className="flex flex-col items-center group">{inner}</div>
              );
            })}
          </div>
        )}

        <div className="text-center mt-16">
          <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;
