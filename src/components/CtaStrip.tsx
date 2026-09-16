import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";

const CtaStrip = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4">
      <div className="relative overflow-hidden rounded-3xl bg-girona-hero px-8 py-12 md:px-16 md:py-14 text-white shadow-2xl">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-primary/30 blur-2xl" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-2">
              Rejoignez l&apos;académie
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Le prochain chapitre commence ici
            </h2>
            <p className="mt-3 text-white/85 text-lg">
              Pré-inscription en ligne, calendrier des matchs et effectifs par catégorie — tout en un clic.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold h-12 px-8"
            >
              <Link to="/inscription">
                Pré-inscription
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 h-12 px-8 bg-transparent"
            >
              <Link to="/calendrier">
                <CalendarDays className="mr-2 h-5 w-5" />
                Calendrier
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CtaStrip;
