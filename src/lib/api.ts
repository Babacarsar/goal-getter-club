/** Base URL of the Laravel API (no trailing slash). */
const DEFAULT_API_URL =
  "https://gironafcsaly-production-9141.up.railway.app";

export const API_BASE_URL = (
  import.meta.env.VITE_API_URL || DEFAULT_API_URL
).replace(/\/$/, "");

/** Build a full API path, e.g. apiUrl("/api/staff"). */
export function apiUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalized}`;
}

/** Relative storage paths from Laravel, or absolute Cloudinary URLs. */
export function resolveMediaUrl(url: string | null | undefined): string {
  if (!url) return "https://via.placeholder.com/400x250";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `${API_BASE_URL}/${url.replace(/^\//, "")}`;
}
