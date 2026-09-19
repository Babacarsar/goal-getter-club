import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/about", label: "Notre histoire" },
  { to: "/categories", label: "Équipes" },
  { to: "/staff", label: "Staff" },
  { to: "/news", label: "Actualités" },
  { to: "/calendrier", label: "Calendrier" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "nav-glass-scrolled" : "nav-glass"
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="/logo.png"
              alt="Girona FC de Saly"
              className="w-11 h-11 md:w-12 md:h-12 object-cover rounded-full ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all"
            />
            <div className="hidden sm:block leading-tight">
              <span className="block text-sm font-bold text-primary tracking-tight">
                Girona FC de Saly
              </span>
              <span className="block text-[11px] text-muted-foreground font-medium">
                Académie officielle
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:text-primary hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="font-semibold">
              <Link to="/categories">Voir les équipes</Link>
            </Button>
            <Button asChild size="sm" className="font-semibold shadow-md shadow-primary/20">
              <Link to="/inscription">Pré-inscription</Link>
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-border/60 animate-fade-in">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "px-4 py-3 rounded-xl text-base font-medium",
                    location.pathname === link.to
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-3 mx-2" size="lg">
                <Link to="/inscription">Pré-inscription</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
