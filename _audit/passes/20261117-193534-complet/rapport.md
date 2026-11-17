# Rapport d’audit

Projet : `annemaelle-mereveillance-maquette` · 17/11/2026 20:58:06 · 23 min · 6 page(s) · audit complet

## Résumé

- Statut : **5 échec(s)**
- Passe : `20261117-193534-complet` · version ?v=2
- Échecs : **5**
- À regarder : **23**
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

## Échecs

### textes qui se chevauchent (3)

- **textes qui se chevauchent** — `/` — section#mer > div.conteneur.mer-grille > div.mer-tete > h2 « Tu navigues en pleine mer d'émotions, c'est épuisa » — avec div.conteneur.mer-grille > ul.mer-liste > li.vague-mot:nth-of-type(2) > span « Tu as déjà consulté, psy ou soins énergétiques, sa » _(320×568 normal, 320×568 sansJs, 320×568 sansWebgl)_
- **textes qui se chevauchent** — `/` — section#mer > div.conteneur.mer-grille > div.mer-tete > h2 « Tu navigues en pleine mer d'émotions, c'est épuisa » — avec div.conteneur.mer-grille > ul.mer-liste > li.vague-mot:nth-of-type(3) > span « Tu as peu de temps pour régler la situation. » _(320×568 normal, 320×568 sansJs, 320×568 sansWebgl)_
- **textes qui se chevauchent** — `/a-propos` — h1.ouv-apropos-nom > span.ligne-masque.nom-famille:nth-of-type(2) > span.titre-ligne > em « Le Roux » — avec section#debut > div.ouv-apropos-fin:nth-of-type(2) > p.ouv-apropos-texte.masque-ecran-bas:nth-of-type(1) « Femme authentique et intuitive, maman calme et à l » _(1920×1080 normal, 2560×1440 normal, 1920×1080 sansJs, 2560×1440 sansJs, 1920×1080 sansWebgl, 2560×1440 sansWebgl)_

### premier écran : titre h1 invisible (1)

- **premier écran : titre h1 invisible** — `/a-propos` — section#debut > h1.ouv-apropos-nom « Anne-Maëlle Le Roux » _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### débordement horizontal (1)

- **débordement horizontal** — `/immersion-animale` — page large de 361 px — largeurs : 320, 340, 360, 380 px _(balayage 320–1920 normal)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `ecole.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 2 de donnees/site.json

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (12)

- **section sans visuel** — `/` — section#que-dirais-tu « Que dirais-tu d'un quotidien fluide et serein ? Un » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
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

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/immersion-animale` — à 61 ms (différence 49 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/immersion-animale` — à 45 ms (différence 48 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 80 ms (différence 53 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### fluidité (1)

- **fluidité** — `/` — 4 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2828 ms depuis le premier octet
- Ouverture /a-propos (1366×768) : 2723 ms depuis le premier octet
- film de l'ouverture /a-propos 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (1366×768) : 2858 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /ecole (1366×768) : 2677 ms depuis le premier octet
- film de l'ouverture /ecole 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /immersion-animale (1366×768) : 2818 ms depuis le premier octet
- film de l'ouverture /immersion-animale 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2749 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /a-propos (390×844) : 2622 ms depuis le premier octet
- Ouverture /contact (390×844) : 2712 ms depuis le premier octet
- Ouverture /ecole (390×844) : 2744 ms depuis le premier octet
- Ouverture /immersion-animale (390×844) : 2737 ms depuis le premier octet
- bords de l’écran /ecole 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 509 images d’intro, 24 de voile et 186 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /a-propos : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /ecole : aucune section épinglée ou plein écran.
- Tient dans l'écran /immersion-animale : aucune section épinglée ou plein écran.
- Fluidité /a-propos 1366×768 (molette) : 0 % d'images lentes sur 278, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 223, tâche la plus longue 0 ms
- Fluidité /ecole 1366×768 (molette) : 0 % d'images lentes sur 211, tâche la plus longue 0 ms
- Fluidité /immersion-animale 1366×768 (molette) : 0 % d'images lentes sur 232, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1420, tâche la plus longue 0 ms
- Fluidité /a-propos 390×844 (doigt) : 0 % d'images lentes sur 1333, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /ecole 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Fluidité /immersion-animale 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Vitesse / : 0.47 s de calcul au chargement (téléphone ralenti).
- Vitesse /a-propos : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /ecole : 0.28 s de calcul au chargement (téléphone ralenti).
- Vitesse /immersion-animale : 0.28 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/a-propos,/immersion-animale --seulement=fichiers,mesures
```
