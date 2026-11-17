# Rapport d’audit

Projet : `annemaelle-mereveillance-maquette` · 17/11/2026 20:31:37 · 23 min · 6 page(s) · audit complet

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261117-190907-complet` · version ?v=1
- Échecs : **0**
- À regarder : **22**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (9), liens vers la page en cours (5), changements de hauteur (5), tient dans l’écran (8), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (6), souris immobile (8), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en vague |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261117-135328-standard | standard | toutes | toutes | 9 | 24 | 1 | échecs |
| 20261117-135334-complet-partiel | complet | toutes | mesures, ecran | 7 | 11 | 0 | échecs |
| 20261117-141528-standard-partiel | standard | toutes | fichiers, mesures, films | 0 | 16 | 0 | complet |
| 20261117-142008-complet-cible-partiel | complet | /,/a-propos,/contact,/ecole | fichiers, mesures | 2 | 12 | 0 | échecs |
| 20261117-142428-complet-cible-partiel | complet | /a-propos | fichiers, mesures | 0 | 4 | 0 | complet |
| **20261117-190907-complet** (celle-ci) | complet | toutes | toutes | 0 | 22 | 1 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `ecole.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### numéro de version (1)

- **numéro de version** — ?v=1 est celui de la dernière livraison : à changer avant de livrer

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (11)

- **section sans visuel** — `/` — section#pour-toi « Mon accompagnement est-il fait pour toi ? On vient » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/` — section#questions « Les questions que tu te poses peut-être Est-ce que » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/a-propos` — section#parcours « Mon parcours Un chemin qui passe par les animaux,  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/a-propos` — section#valeurs « Ce qui me guide L'authenticité Le jeu Prendre soin » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#tarifs « Tous les tarifs Accompagnement d'un mois 225 € le  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#coordonnees « Me joindre Téléphone 06 88 66 19 28 E-mail bonjour » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/ecole` — section#seances « Trois séances d'une heure 1 Les besoins Quand chac » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/ecole` — section#accompagnement « Avant, pendant, après Avant Une rencontre avec l'é » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/ecole` — section#parents « Une rencontre avec les parents Un temps de présent » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/ecole` — section#candidature « Proposer Séquence à votre école Laissez vos coordo » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/immersion-animale` — section#deroule « Comment ça se passe 1 Je te pose éventuellement qu » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 88 ms (différence 62 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/immersion-animale` — à 53 ms (différence 57 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/immersion-animale` — à 44 ms (différence 51 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### fluidité (1)

- **fluidité** — `/` — 5 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 118 min de travail pour 145 min de budget, 12 min d’attente de l’utilisateur.
- Journal : « audit standard, passe des formats, regard neuf et corrections » 72 min pour 25 prévues.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2830 ms depuis le premier octet
- Ouverture /a-propos (1366×768) : 2619 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2727 ms depuis le premier octet
- Ouverture /ecole (1366×768) : 2721 ms depuis le premier octet
- Ouverture /immersion-animale (1366×768) : 2756 ms depuis le premier octet
- Ouverture / (390×844) : 2877 ms depuis le premier octet
- Ouverture /a-propos (390×844) : 2639 ms depuis le premier octet
- Ouverture /contact (390×844) : 2735 ms depuis le premier octet
- Ouverture /ecole (390×844) : 2722 ms depuis le premier octet
- Ouverture /immersion-animale (390×844) : 2692 ms depuis le premier octet
- bords de l’écran / 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 496 images d’intro, 16 de voile et 189 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /a-propos : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /ecole : aucune section épinglée ou plein écran.
- Tient dans l'écran /immersion-animale : aucune section épinglée ou plein écran.
- Fluidité /a-propos 1366×768 (molette) : 0 % d'images lentes sur 271, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 218, tâche la plus longue 0 ms
- Fluidité /ecole 1366×768 (molette) : 0 % d'images lentes sur 230, tâche la plus longue 0 ms
- Fluidité /immersion-animale 1366×768 (molette) : 0 % d'images lentes sur 228, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1419, tâche la plus longue 0 ms
- Fluidité /a-propos 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /ecole 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /immersion-animale 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Vitesse / : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /a-propos : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.27 s de calcul au chargement (téléphone ralenti).
- Vitesse /ecole : 0.26 s de calcul au chargement (téléphone ralenti).
- Vitesse /immersion-animale : 0.27 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
