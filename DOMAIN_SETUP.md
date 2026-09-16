# Nom de domaine — Girona de Saly

## Cible DNS

| Hôte | Pointe vers |
|------|-------------|
| `www` | Vercel ou Lovable (site React) |
| `@` | Redirection vers `www` (recommandé) |
| `api` | Railway (service Laravel) |

## Variables après achat du domaine

**Vercel / Lovable (front)** — au build :

```env
VITE_API_URL=https://api.votre-domaine.com
```

**Railway (Laravel)** :

```env
APP_URL=https://api.votre-domaine.com
FRONTEND_URLS=https://www.votre-domaine.com,https://votre-domaine.com
```

Puis redéployer le front et l’API. L’admin reste sur `https://api.votre-domaine.com/admin`.

## Branchement

1. **Railway** → Settings → Custom Domain → `api.votre-domaine.com` → créer le CNAME indiqué chez votre registrar.
2. **Vercel** → Project → Domains → ajouter `votre-domaine.com` et `www` → suivre les enregistrements DNS proposés.

Le dépôt inclut `vercel.json` (routing SPA) et `public/_redirects` (Netlify).
