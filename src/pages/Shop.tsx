import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { MapPin, MessageCircle, ShoppingCart, ShieldCheck, Star } from "lucide-react";

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
      popular: true,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 2,
      name: "Maillot Extérieur Rouge Femme",
      description: "Maillot extérieur rouge SELECT pour femme",
      price: 10000,
      originalPrice: null,
      image: "/lovable-uploads/58d6d322-3f99-4234-9d79-82b5f3e73ade.png",
      category: "Maillots",
      rating: 4.9,
      inStock: true,
      popular: true,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 3,
      name: "Maillot Extérieur Blanc Homme",
      description: "Maillot extérieur blanc SELECT pour homme",
      price: 10000,
      originalPrice: null,
      image: "/lovable-uploads/848ebddd-ee11-47a8-9eb2-e20dfb6be6be.png",
      category: "Maillots",
      rating: 4.8,
      inStock: true,
      popular: true,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 4,
      name: "Maillot Extérieur Rouge Duo",
      description: "Maillot extérieur rouge SELECT collection duo",
      price: 10000,
      originalPrice: null,
      image: "/lovable-uploads/c201e9d9-478c-494c-befb-5199f35e562b.png",
      category: "Maillots",
      rating: 4.9,
      inStock: true,
      popular: true,
      sizes: ["S", "M", "L", "XL"]
    },
  ];

  const categories = ["Tous", ...new Set(products.map((product) => product.category))];
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const filteredProducts =
    selectedCategory === "Tous"
      ? products
      : products.filter((product) => product.category === selectedCategory);

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
                variant={category === selectedCategory ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
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
            {filteredProducts.map((product) => (
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

                  {product.sizes && (
                    <div className="mb-3">
                      <p className="text-sm text-muted-foreground mb-2">Tailles disponibles:</p>
                      <div className="flex gap-2">
                        {product.sizes.map((size) => (
                          <Badge key={size} variant="outline" className="text-xs">
                            {size}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button
                    className="w-full"
                    disabled={!product.inStock}
                    variant={product.inStock ? "default" : "secondary"}
                    onClick={() => {
                      const message = `Bonjour, je souhaite commander le produit : ${product.name} (${product.price} FCFA).`;
                      const url = `https://wa.me/221776639391?text=${encodeURIComponent(message)}`;
                      window.open(url, "_blank");
                    }}
                  >
                    {product.inStock ? (
                      <>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Commander maintenant
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
          <h2 className="text-3xl font-bold mb-4">Comment commander ?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cliquez sur « Commander maintenant » : un message WhatsApp pré-rempli s'ouvre avec le produit choisi.
            Indiquez votre taille et nous vous recontactons pour finaliser la commande.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Commande via WhatsApp</h3>
              <p className="text-sm text-muted-foreground">Un message suffit pour réserver votre article</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Retrait à Saly</h3>
              <p className="text-sm text-muted-foreground">Modalités de retrait ou de livraison convenues ensemble</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Produits officiels</h3>
              <p className="text-sm text-muted-foreground">Équipements officiels de l'académie</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
