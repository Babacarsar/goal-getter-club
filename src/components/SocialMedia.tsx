import { Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/academie_girona_fc_de_saly?igsh=OXBnOWlpbmw3dG02",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "#",
    Icon: Facebook,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Acad%C3%A9mieGironafcdeSalyofficiel/videos",
    Icon: Youtube,
  },
] as const;

const SocialMedia = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Suivez-nous sur les Réseaux
            </h3>
            <p className="text-muted-foreground mb-6">
              Ne manquez aucun moment fort de la vie du club
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href === "#" ? undefined : "_blank"}
                  rel={href === "#" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <Icon className="h-6 w-6" aria-hidden />
                    <span className="sr-only">{label}</span>
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
