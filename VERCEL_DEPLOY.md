# Déployer le site sur Vercel

Guide pour connecter **goal-getter-club** (React/Vite) à l’API Laravel sur Railway.

## Prérequis

- Compte [Vercel](https://vercel.com) (GitHub connecté)
- Repo GitHub : `Babacarsar/goal-getter-club` (branche `main` à jour)
- API Railway en ligne : `https://gironafcsaly-production-9141.up.railway.app`

---

## 1. Importer le projet

1. [vercel.com/new](https://vercel.com/new)
2. **Import Git Repository** → choisir **goal-getter-club**
3. Framework Preset : **Vite** (détecté automatiquement)
4. **Root Directory** : laisser `.` (racine du repo)
5. **Build Command** : `npm run build` (défaut)
6. **Output Directory** : `dist` (défaut Vite)

Ne modifie pas ces valeurs sauf si Vercel ne les détecte pas.

---

## 2. Variable d’environnement (obligatoire)

Avant le premier deploy, section **Environment Variables** :

| Name | Value | Environments |
|------|--------|--------------|
| `VITE_API_URL` | `https://gironafcsaly-production-9141.up.railway.app` | Production, Preview, Development |

**Sans slash final**, sans `/api`.

Vite injecte cette valeur **au build** : après toute modification, faire **Redeploy**.

---

## 3. Deploy

Cliquer **Deploy**. Attendre la fin du build (~1–2 min).

URL par défaut : `https://goal-getter-club-xxxx.vercel.app` (ou nom similaire).

---

## 4. CORS sur Railway (obligatoire pour le navigateur)

Sur le **service Laravel** Railway → **Variables** :

```env
FRONTEND_URLS=https://ton-projet.vercel.app
```

Remplace par l’URL **exacte** affichée par Vercel (ex. `https://goal-getter-club.vercel.app`).

Si tu as plusieurs URLs (preview + prod) :

```env
FRONTEND_URLS=https://goal-getter-club.vercel.app,https://goal-getter-club-git-main-xxx.vercel.app
```

Puis **Redeploy** le service Laravel.

---

## 5. Vérifications après deploy

Ouvrir le site Vercel et tester :

- Accueil → actualités / effectif (données API)
- `/categories` → joueurs
- `/calendrier` → matchs (vide si rien en admin)
- `/inscription` → envoi test
- Console navigateur (F12) : pas d’erreur CORS

Test direct API (doit répondre JSON) :

`https://gironafcsaly-production-9141.up.railway.app/api/joueurs`

---

## 6. Domaine personnalisé (optionnel)

1. Vercel → Project → **Settings** → **Domains**
2. Ajouter `www.gironadesaly.com` et `gironadesaly.com`
3. Créer les enregistrements DNS chez ton registrar (Vercel affiche les valeurs)
4. Mettre à jour Railway :

```env
FRONTEND_URLS=https://www.gironadesaly.com,https://gironadesaly.com,https://ton-projet.vercel.app
```

5. Sur Vercel, mettre `VITE_API_URL` vers ton sous-domaine API si tu en crées un (`https://api.gironadesaly.com`)

Voir aussi `DOMAIN_SETUP.md`.

---

## 7. Déploiements automatiques

Chaque **push sur `main`** redéclenche un deploy Production sur Vercel.

Les Pull Requests créent des **Preview URLs** (penser à les ajouter à `FRONTEND_URLS` si tu testes l’API depuis une preview).

---

## Dépannage

| Problème | Cause probable | Action |
|----------|----------------|--------|
| Site vide / pas de joueurs | `VITE_API_URL` manquante ou mauvaise | Vérifier variable + redeploy |
| Erreur CORS dans la console | `FRONTEND_URLS` | Ajouter l’URL Vercel sur Railway + redeploy API |
| 404 sur `/news`, `/contact`, etc. | Routing SPA | `vercel.json` est déjà configuré ; redeploy |
| Contact ne marche pas | Pas d’endpoint `/api/contact` Laravel | Utiliser `/inscription` ou brancher Contact plus tard |

---

## Récap des URLs

| Rôle | URL |
|------|-----|
| Site public | `https://….vercel.app` |
| API + admin | `https://gironafcsaly-production-9141.up.railway.app` |
| Login admin | `…/login` |
