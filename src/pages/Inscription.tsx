import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "@/lib/api";
import { useState } from "react";

const InscriptionPage = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(apiUrl("/api/categories"));
      if (!res.ok) throw new Error("Catégories");
      return res.json();
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(apiUrl("/api/pre-inscriptions"), {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Erreur");
      }
      toast({ title: "Demande envoyée", description: "Nous vous contacterons rapidement." });
      form.reset();
    } catch {
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer la demande. Réessayez plus tard.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 container mx-auto px-4 max-w-xl">
        <h1 className="text-3xl font-bold mb-2">Pré-inscription</h1>
        <p className="text-muted-foreground mb-8">
          Inscrivez votre enfant à l&apos;académie Girona de Saly. Notre équipe vous recontactera.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 bg-card border rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Prénom</label>
              <Input name="prenom" required />
            </div>
            <div>
              <label className="text-sm font-medium">Nom</label>
              <Input name="nom" required />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Date de naissance</label>
            <Input name="date_naissance" type="date" required />
          </div>
          <div>
            <label className="text-sm font-medium">Catégorie souhaitée</label>
            <select name="categorie_id" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="">Choisir…</option>
              {categories.map((c: { id: number; nom: string }) => (
                <option key={c.id} value={c.id}>{c.nom}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">E-mail du parent</label>
            <Input name="email_parent" type="email" required />
          </div>
          <div>
            <label className="text-sm font-medium">Téléphone</label>
            <Input name="telephone" type="tel" />
          </div>
          <div>
            <label className="text-sm font-medium">Message (optionnel)</label>
            <Textarea name="message" rows={3} />
          </div>
          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? "Envoi…" : "Envoyer ma demande"}
          </Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default InscriptionPage;
