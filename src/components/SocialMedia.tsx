import { Button } from "@/components/ui/button";

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
            <div className="flex justify-center space-x-4">
               <a
                href="https://www.instagram.com/academie_girona_fc_de_saly?igsh=OXBnOWlpbmw3dG02"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button variant="outline" size="sm">Instagram</Button>
              </a>
              <Button variant="outline" size="sm">Facebook</Button>
              <a
                href="https://www.youtube.com/@Acad%C3%A9mieGironafcdeSalyofficiel/videos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">YouTube</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;