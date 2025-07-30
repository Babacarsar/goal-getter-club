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
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">⚽</span>
            </div>
            <span className="text-xl font-bold text-primary">Girona de Saly</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              À propos
            </Link>
            <Link to="/staff" className="text-foreground hover:text-primary transition-colors">
              Staff
            </Link>
          <DropdownMenu>
  <Link to="/categories">
    <DropdownMenuTrigger asChild>
      <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
        Catégories <ChevronDown className="h-4 w-4" />
      </button>
    </DropdownMenuTrigger>
  </Link>
  
  <DropdownMenuContent>
    <DropdownMenuItem>
      <Link to="/categories" className="w-full">Categories</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Link to="/categories/1" className="w-full">U14 (12–14 ans)</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Link to="/categories/2" className="w-full">U15 (13–15 ans)</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Link to="/categories/3" className="w-full">U17 (15–17 ans)</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Link to="/categories/4" className="w-full">U18 (16–18 ans)</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Link to="/categories/3" className="w-full">Senior (18+ ans)</Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

            <Link to="/news" className="text-foreground hover:text-primary transition-colors">
              Actualités
            </Link>
            <Link to="/shop" className="text-foreground hover:text-primary transition-colors">
              Boutique
            </Link>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button className="gradient-field text-white hover:opacity-90">
              Inscription
            </Button>
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
                À propos
              </Link>
              <Link to="/staff" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Staff
              </Link>
              <div className="space-y-2">
                <div className="text-foreground font-medium">Catégories</div>
                <div className="ml-4 space-y-2">
                  <Link to="/categories/u14" className="block text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                    U14 (12-14 ans)
                  </Link>
                  <Link to="/categories/u15" className="block text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                    U15 (13-15 ans)
                  </Link>
                  <Link to="/categories/u17" className="block text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                    U17 (15-17 ans)
                  </Link>
                  <Link to="/categories/u18" className="block text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                    U18 (16-18 ans)
                  </Link>
                  <Link to="/categories/senior" className="block text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Senior (18+ ans)
                  </Link>
                </div>
              </div>
              <Link to="/news" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Actualités
              </Link>
              <Link to="/shop" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Boutique
              </Link>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
              <Button className="gradient-field text-white hover:opacity-90 w-full">
                Inscription
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;