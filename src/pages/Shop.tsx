import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Maillot Domicile 2024",
      description: "Maillot officiel de l'équipe première, tissu respirant DriFit",
      price: 3000,
      originalPrice: null,
      image: "/produit1.jpg",
      category: "Maillots",
      rating: 4.8,
      inStock: true,
      popular: true
    },
    {
      id: 2,
      name: "Maillot Extérieur 2024",
      description: "Maillot extérieur élégant, design moderne et confortable",
      price: 75,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "Maillots",
      rating: 4.7,
      inStock: true,
      popular: false
    },
    {
      id: 3,
      name: "Short Officiel",
      description: "Short de match officiel, même qualité que les pros",
      price: 35,
      originalPrice: 45,
      image: "/placeholder.svg",
      category: "Shorts",
      rating: 4.6,
      inStock: true,
      popular: false
    },
    {
      id: 4,
      name: "Chaussettes Techniques",
      description: "Chaussettes haute performance avec compression",
      price: 15,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "Chaussettes",
      rating: 4.5,
      inStock: true,
      popular: false
    },
    {
      id: 5,
      name: "Survêtement Entraînement",
      description: "Survêtement complet pour l'entraînement, matière stretch",
      price: 120,
      originalPrice: 150,
      image: "/placeholder.svg",
      category: "Survêtements",
      rating: 4.9,
      inStock: true,
      popular: true
    },
    {
      id: 6,
      name: "Sac de Sport Academy",
      description: "Grand sac de sport avec compartiments séparés",
      price: 45,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "Accessoires",
      rating: 4.4,
      inStock: true,
      popular: false
    },
    {
      id: 7,
      name: "Ballon Officiel",
      description: "Ballon d'entraînement officiel FootballAcademy",
      price: 25,
      originalPrice: 30,
      image: "/placeholder.svg",
      category: "Accessoires",
      rating: 4.7,
      inStock: false,
      popular: false
    },
    {
      id: 8,
      name: "Casquette Academy",
      description: "Casquette ajustable avec logo brodé",
      price: 20,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "Accessoires",
      rating: 4.3,
      inStock: true,
      popular: false
    },
    {
      id: 9,
      name: "Veste Softshell",
      description: "Veste coupe-vent imperméable pour les jours de pluie",
      price: 85,
      originalPrice: 100,
      image: "/placeholder.svg",
      category: "Vestes",
      rating: 4.8,
      inStock: true,
      popular: true
    }
  ];

  const categories = ["Tous", "Maillots", "Shorts", "Chaussettes", "Survêtements", "Vestes", "Accessoires"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Boutique Officielle
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez notre collection officielle : maillots, accessoires et équipements de qualité
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={category === "Tous" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow relative">
                {product.popular && (
                  <Badge className="absolute top-2 left-2 z-10 bg-accent text-accent-foreground">
                    Populaire
                  </Badge>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive" className="absolute top-2 right-2 z-10">
                    Promo
                  </Badge>
                )}
                
                <div className="aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-1">
                    <Badge variant="outline">{product.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-1">{product.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">{product.price}FCFA</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}FCFA
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    disabled={!product.inStock}
                    variant={product.inStock ? "default" : "secondary"}
                  >
                    {product.inStock ? (
                      <>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Ajouter au panier
                      </>
                    ) : (
                      "Rupture de stock"
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Livraison gratuite dès 100€</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Profitez de la livraison gratuite en France métropolitaine pour toute commande supérieure à 100€. 
            Retours gratuits sous 30 jours.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Commande sécurisée</h3>
              <p className="text-sm text-muted-foreground">Paiement 100% sécurisé</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">24h</span>
              </div>
              <h3 className="font-semibold mb-2">Expédition rapide</h3>
              <p className="text-sm text-muted-foreground">Envoi sous 24h</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">30j</span>
              </div>
              <h3 className="font-semibold mb-2">Retours gratuits</h3>
              <p className="text-sm text-muted-foreground">Satisfait ou remboursé</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;