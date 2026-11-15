import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Affiche une image en entier (portrait ou paysage) dans un cadre de taille fixe.
 * L'image n'est jamais rognée : les espaces vides sont comblés par une version
 * floutée de la même image.
 *
 * La hauteur du cadre se règle avec `className` (ex. "h-64" ou "aspect-video").
 */
type FitImageProps = HTMLAttributes<HTMLDivElement> & {
  src?: string | null;
  alt: string;
  /** Largeur demandée à Cloudinary (redimensionnement sans recadrage). */
  width?: number;
  imgClassName?: string;
};

const PLACEHOLDER = "https://via.placeholder.com/800x600";

/** Redimensionne une image Cloudinary sans la recadrer. Les autres URL sont laissées telles quelles. */
function cloudinaryResize(url: string, width: number): string {
  if (!url.includes("res.cloudinary.com") || !url.includes("/upload/")) return url;
  return url.replace("/upload/", `/upload/c_limit,w_${width},f_auto,q_auto/`);
}

export const FitImage = forwardRef<HTMLDivElement, FitImageProps>(
  ({ src, alt, width = 1200, className, imgClassName, ...props }, ref) => {
    const url = src ? cloudinaryResize(src, width) : PLACEHOLDER;
    return (
      <div ref={ref} className={cn("relative overflow-hidden bg-muted", className)} {...props}>
        <img
          src={url}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-xl"
        />
        <img
          src={url}
          alt={alt}
          loading="lazy"
          className={cn("relative h-full w-full object-contain", imgClassName)}
        />
      </div>
    );
  }
);
FitImage.displayName = "FitImage";
