import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Club: [
    { to: "/about", label: "Notre histoire" },
    { to: "/categories", label: "Équipes" },
    { to: "/staff", label: "Staff" },
    { to: "/news", label: "Actualités" },
    { to: "/shop", label: "Boutique" },
  ],
  Rejoindre: [
    { to: "/inscription", label: "Pré-inscription" },
    { to: "/calendrier", label: "Calendrier" },
    { to: "/contact", label: "Contact" },
  ],
};

const Footer = () => (
  <footer className="bg-[hsl(220_20%_8%)] text-neutral-300">
    <div className="container mx-auto px-4 py-14 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/logo.png"
              alt=""
              className="w-14 h-14 rounded-full ring-2 ring-primary/50 object-cover"
            />
            <div>
              <p className="text-white font-bold text-lg">Girona de Saly</p>
              <p className="text-sm text-neutral-400">Académie officielle</p>
            </div>
          </div>
          <p className="text-neutral-400 leading-relaxed max-w-md mb-6">
            Former les talents de demain dans l&apos;esprit Girona FC — passion,
            discipline et excellence à Mbour Saly.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Facebook, href: "#" },
              {
                Icon: Instagram,
                href: "https://www.instagram.com/academie_girona_fc_de_saly",
              },
              {
                Icon: Youtube,
                href: "https://www.youtube.com/@Acad%C3%A9mieGironafcdeSalyofficiel",
              },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4">{title}</h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-3">
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              Mbour Saly, Sénégal
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              +221 77 123 45 67
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              contact@gironadesaly.com
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Académie Girona FC de Saly. Tous droits réservés.</p>
        <p className="text-primary/80 font-medium">Rouge & blanc · Força Girona</p>
      </div>
    </div>
  </footer>
);

export default Footer;
