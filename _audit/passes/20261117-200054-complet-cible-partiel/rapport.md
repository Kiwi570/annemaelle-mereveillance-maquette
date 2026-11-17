# Rapport d’audit

Projet : `annemaelle-mereveillance-maquette` · 17/11/2026 21:06:20 · 5 min · 3 page(s) · audit complet ciblé sur /,/a-propos,/immersion-animale (étapes : fichiers, mesures, ecran, films)

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261117-200054-complet-cible-partiel` · version ?v=2
- Échecs : **3**
- À regarder : **11**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (117), balayage (3), films d’ouverture (6), films de transition (6), tient dans l’écran (8)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261117-193534-complet | complet | toutes | toutes | 5 | 23 | 1 | échecs |
| **20261117-200054-complet-cible-partiel** (celle-ci) | complet | /,/a-propos,/immersion-animale | fichiers, mesures, ecran, films | 3 | 11 | 0 | échecs |

## Échecs

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/a-propos` — section#debut > h1.ouv-apropos-nom.nom-prenom > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Anne-Maëlle » — avec p.ouv-apropos-nom.nom-famille:nth-of-type(2) > span.ligne-masque > span.titre-ligne > em « Le Roux » _(320×568 normal, 375×667 normal, 390×844 normal, 320×568 sansJs, 375×667 sansJs, 390×844 sansJs, +3)_
- **textes qui se chevauchent** — `/a-propos` — p.ouv-apropos-nom.nom-famille:nth-of-type(2) > span.ligne-masque > span.titre-ligne > em « Le Roux » — avec section#debut > div.ouv-apropos-fin:nth-of-type(2) > p.ouv-apropos-texte.masque-ecran-bas:nth-of-type(1) « Femme authentique et intuitive, maman calme et à l » _(1728×1000 normal, 1920×1080 normal, 2560×1440 normal, 1728×1000 sansJs, 1920×1080 sansJs, 2560×1440 sansJs, +3)_

### premier écran : titre hors de l’écran (1)

- **premier écran : titre hors de l’écran** — `/a-propos` — section#debut > h1.ouv-apropos-nom.nom-prenom « Anne-Maëlle Le Roux » — haut 134 px, bas 176 px, zone 65–1024 px _(768×1024 normal, 768×1024 sansJs, 768×1024 sansWebgl)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `ecole.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (6)

- **section sans visuel** — `/` — section#que-dirais-tu « Que dirais-tu d'un quotidien fluide et serein ? Un » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/` — section#pour-toi « Mon accompagnement est-il fait pour toi ? On vient » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/` — section#questions « Les questions que tu te poses peut-être Est-ce que » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/a-propos` — section#parcours « Mon parcours Un chemin qui passe par les animaux,  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/a-propos` — section#valeurs « Ce qui me guide L'authenticité Le jeu Prendre soin » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/immersion-animale` — section#deroule « Comment ça se passe 1 Je te pose éventuellement qu » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/immersion-animale` — à 71 ms (différence 49 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/immersion-animale` — à 40 ms (différence 45 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 50 ms (différence 51 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 27 min de travail pour 65 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2811 ms depuis le premier octet
- Ouverture /a-propos (1366×768) : 2633 ms depuis le premier octet
- Ouverture /immersion-animale (1366×768) : 2720 ms depuis le premier octet
- Ouverture / (390×844) : 2753 ms depuis le premier octet
- Ouverture /a-propos (390×844) : 2667 ms depuis le premier octet
- Ouverture /immersion-animale (390×844) : 2748 ms depuis le premier octet
- film de l'ouverture /immersion-animale 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Tient dans l'écran /a-propos : aucune section épinglée ou plein écran.
- Tient dans l'écran /immersion-animale : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/a-propos --seulement=fichiers,mesures
```
