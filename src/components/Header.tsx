import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-border">
  <nav className="container mx-auto px-4 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img
          src="/logo.png"
          alt="Logo Girona"
         className="w-12 h-12 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px] object-cover rounded-full shadow-sm"
        />
        <span className="text-lg sm:text-xl font-bold text-primary hidden sm:block">Académie Girona FC de Saly</span>
        <span className="text-sm font-bold text-primary sm:hidden">Académie Girona FC</span>
      </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              Notre histoire
            </Link>
            <Link to="/staff" className="text-foreground hover:text-primary transition-colors">
              Staff
            </Link>
            <Link to="/categories" className="text-foreground hover:text-primary transition-colors">
              categories
            </Link>

            <Link to="/news" className="text-foreground hover:text-primary transition-colors">
              Actualités
            </Link>
            <Link to="/calendrier" className="text-foreground hover:text-primary transition-colors">
              Calendrier
            </Link>
            <Link to="/inscription" className="text-foreground hover:text-primary transition-colors">
              Inscription
            </Link>
            <Link to="/shop" className="text-foreground hover:text-primary transition-colors">
              Boutique
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
         
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Accueil
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Notre histoire
              </Link>
              <Link to="/staff" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Staff
              </Link>
               <Link to="/categories" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                categories
              </Link>
        
              <Link to="/news" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Actualités
              </Link>
              <Link to="/calendrier" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Calendrier
              </Link>
              <Link to="/inscription" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Inscription
              </Link>
              <Link to="/shop" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Boutique
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;