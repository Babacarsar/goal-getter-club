import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  backTo?: string;
  backLabel?: string;
  className?: string;
};

export function PageHero({
  title,
  subtitle,
  backTo,
  backLabel = "Retour",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-girona-hero text-white",
        className
      )}
    >
      <div className="absolute inset-0 bg-[url('/logo.png')] bg-center bg-no-repeat opacity-[0.04] bg-[length:280px]" />
      <div className="container mx-auto px-4 relative z-10">
        {backTo && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="mb-6 border-white/30 text-white hover:bg-white/10 bg-transparent"
          >
            <Link to={backTo}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {backLabel}
            </Link>
          </Button>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
