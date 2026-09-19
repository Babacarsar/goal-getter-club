import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import { resolveMediaUrl } from "@/lib/api";

type PlayerPhotoProps = {
  photo?: string | null;
  prenom?: string;
  nom?: string;
  className?: string;
  /** Apply Cloudinary crop/transform when URL is from Cloudinary */
  optimizeCloudinary?: boolean;
};

export function hasPlayerPhoto(photo?: string | null): boolean {
  return typeof photo === "string" && photo.trim().length > 0;
}

function cloudinaryThumb(url: string): string {
  return url.includes("res.cloudinary.com")
    ? `${url}?c_fill,w_400,h_250,f_auto,q_auto`
    : url;
}

export function PlayerPhoto({
  photo,
  prenom,
  nom,
  className,
  optimizeCloudinary = false,
}: PlayerPhotoProps) {
  const alt = [prenom, nom].filter(Boolean).join(" ") || "Joueur";

  if (!hasPlayerPhoto(photo)) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-primary/10 via-muted to-primary/5",
          className
        )}
        role="img"
        aria-label={`Photo par défaut — ${alt}`}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background/80 shadow-inner ring-2 ring-primary/15">
          <User className="h-10 w-10 text-primary/55" strokeWidth={1.5} aria-hidden />
        </div>
      </div>
    );
  }

  let src = resolveMediaUrl(photo);
  if (optimizeCloudinary) {
    src = cloudinaryThumb(src);
  }

  return <img src={src} alt={alt} className={cn("object-cover", className)} />;
}
