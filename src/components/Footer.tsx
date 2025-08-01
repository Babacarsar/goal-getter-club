import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo et description */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Académie Girona FC de Saly" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl sm:text-2xl font-bold">Académie Girona FC de Saly</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              L'école de football de référence pour développer vos talents et réaliser vos rêves. 
              Une formation d'excellence dans un environnement passionné et professionnel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Horaires d'entraînement */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Horaires d'entraînement</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="text-sm">
                <span className="font-medium">Lundi - Vendredi:</span><br />
                17h - 20h
              </li>
              <li className="text-sm">
                <span className="font-medium">Mercredi:</span><br />
                14h - 18h
              </li>
              <li className="text-sm">
                <span className="font-medium">Samedi:</span><br />
                9h - 17h
              </li>
              <li className="text-sm">
                <span className="font-medium">Dimanche:</span><br />
                9h - 12h
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm break-words">Mbour Saly</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-sm">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-sm">info@footballacademy.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Académie Girona FC de Saly. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;