import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Award, Target, Users, Heart, Briefcase, GraduationCap } from "lucide-react";

const Staff = () => {
  const staffMembers = [
    {
      name: "Mamadou Ba",
      position: "Directeur Général",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      experience: "15 ans",
      speciality: "Management Sportif",
      valueAdded: "Vision stratégique et développement du club",
      description: "Ancien joueur professionnel, Mamadou dirige le club avec passion depuis sa création. Sa vision entrepreneuriale a permis de transformer Girona de Saly en référence régionale.",
      achievements: ["Création du club en 2010", "12 titres remportés", "45 joueurs formés"],
      contact: { email: "mamadou.ba@gironasaly.sn", phone: "+221 77 123 45 67" }
    },
    {
      name: "Fatou Diagne",
      position: "Directrice Technique",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&crop=face",
      experience: "12 ans",
      speciality: "Formation & Développement",
      valueAdded: "Excellence pédagogique et suivi individualisé",
      description: "Diplômée UEFA A, Fatou supervise tous les programmes de formation. Sa méthode innovante mélange techniques européennes et créativité africaine.",
      achievements: ["Certification UEFA A", "Programme jeunes récompensé", "8 joueurs en Europe"],
      contact: { email: "fatou.diagne@gironasaly.sn", phone: "+221 77 234 56 78" }
    },
    {
      name: "Cheikh Ndiaye",
      position: "Entraîneur Principal Senior",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      experience: "18 ans",
      speciality: "Tactique & Préparation",
      valueAdded: "Expertise tactique et mentalité gagnante",
      description: "Ex-international sénégalais, Cheikh apporte son expérience du haut niveau. Sous sa direction, l'équipe senior a remporté 3 titres consécutifs.",
      achievements: ["45 sélections nationales", "3 titres consécutifs", "Meilleur entraîneur 2023"],
      contact: { email: "cheikh.ndiaye@gironasaly.sn", phone: "+221 77 345 67 89" }
    },
    {
      name: "Ousmane Fall",
      position: "Responsable Jeunes",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      experience: "8 ans",
      speciality: "Formation U12-U18",
      valueAdded: "Détection et développement des jeunes talents",
      description: "Spécialiste de la formation jeunes, Ousmane détecte et accompagne les futurs champions. Sa patience et sa pédagogie font des merveilles.",
      achievements: ["50+ jeunes formés", "Coupe U18 (2023)", "Programme détection primé"],
      contact: { email: "ousmane.fall@gironasaly.sn", phone: "+221 77 456 78 90" }
    },
    {
      name: "Aïssatou Seck",
      position: "Directrice Administrative",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      experience: "10 ans",
      speciality: "Gestion & Partenariats",
      valueAdded: "Organisation exemplaire et relations stratégiques",
      description: "MBA en management sportif, Aïssatou gère avec brio l'administration du club. Elle développe les partenariats et assure la stabilité financière.",
      achievements: ["Partenariat FC Girona", "Certification FIFA", "Budget équilibré 5 ans"],
      contact: { email: "aissatou.seck@gironasaly.sn", phone: "+221 77 567 89 01" }
    },
    {
      name: "Dr. Ibrahima Sarr",
      position: "Médecin du Sport",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      experience: "20 ans",
      speciality: "Médecine Sportive",
      valueAdded: "Prévention et récupération optimale",
      description: "Diplômé en médecine du sport, Dr Sarr assure le suivi médical complet des joueurs. Sa prévention permet d'éviter 90% des blessures.",
      achievements: ["0 blessure grave (2023)", "Programme nutrition", "Certification FIFA Medical"],
      contact: { email: "ibrahima.sarr@gironasaly.sn", phone: "+221 77 678 90 12" }
    }
  ];

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