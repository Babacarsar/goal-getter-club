import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Award, Target, Users, Heart, Briefcase, GraduationCap } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const Staff = () => {
  const { data: staffMembers = [], isLoading } = useQuery({
    queryKey: ['staff'],
    queryFn: async () => {
      const response = await fetch('http://127.0.0.1:8000/api/staff');
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

  const departments = [
    {
      icon: Target,
      name: "Direction",
      description: "Vision stratégique et leadership",
      color: "text-blue-500"
    },
    {
      icon: Users,
      name: "Technique",
      description: "Formation et entraînement",
      color: "text-green-500"
    },
    {
      icon: Briefcase,
      name: "Administration", 
      description: "Gestion et partenariats",
      color: "text-purple-500"
    },
    {
      icon: Heart,
      name: "Médical",
      description: "Santé et performance",
      color: "text-red-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Notre Équipe Dirigeante
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des professionnels passionnés qui donnent vie aux ambitions de Girona de Saly
          </p>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Nos Départements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                  <dept.icon className={`h-10 w-10 ${dept.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{dept.name}</h3>
                <p className="text-muted-foreground">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Members */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            L'Excellence Humaine
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {staffMembers.map((member, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="md:col-span-3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {member.name}
                        </h3>
                        <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                          {member.position}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm">
                          <strong>{member.experience}</strong> d'expérience
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm">
                          <strong>Spécialité:</strong> {member.speciality}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-2">Valeur Ajoutée</h4>
                      <p className="text-sm text-muted-foreground italic">
                        {member.valueAdded}
                      </p>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-6">
                      {member.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Réalisations Clés</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.achievements.map((achievement, achieveIndex) => (
                          <Badge key={achieveIndex} variant="outline" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>{member.contact.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>{member.contact.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Rejoignez Notre Équipe
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Nous recherchons constamment des talents passionnés pour renforcer notre staff
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="text-base px-4 py-2">Passion du Football</Badge>
              <Badge variant="outline" className="text-base px-4 py-2">Esprit d'Équipe</Badge>
              <Badge variant="outline" className="text-base px-4 py-2">Excellence</Badge>
              <Badge variant="outline" className="text-base px-4 py-2">Innovation</Badge>
            </div>
            <p className="text-muted-foreground">
              Contactez-nous à <strong>recrutement@gironasaly.sn</strong>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Staff;