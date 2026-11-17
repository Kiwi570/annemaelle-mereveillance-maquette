# Rapport d’audit

Projet : `annemaelle-mereveillance-maquette` · 17/11/2026 15:01:00 · 7 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **7 échec(s)**
- Passe : `20261117-135334-complet-partiel` · version ?v=1
- Échecs : **7**
- À regarder : **11**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5), tient dans l’écran (8)

## Échecs

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/a-propos` — section#debut > p.hero-actions:nth-of-type(3) > a.bouton « Me rencontrer » _(844×390 normal, 844×390 sansJs, 844×390 sansWebgl, 1000×560 sansJs, 1440×900 sansJs)_

### textes qui se chevauchent (5)

- **textes qui se chevauchent** — `/a-propos` — section#debut > p.surtitre:nth-of-type(1) « QUI SUIS-JE » — avec section#debut > h1.ouv-apropos-nom > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Anne-Maëlle » _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.ouv-contact-photo:nth-of-type(2) > figure.media.ouv-contact-media > figcaption.mention-ia « Illustration générée » — avec section#debut > div.ouv-contact-photo:nth-of-type(2) > p.ouv-contact-bulle « Gratuit · sans engagement » _(844×390 normal, 844×390 sansJs, 844×390 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — li#tarif-sophro > p.tarif-forfait:nth-of-type(2) > span « 210 € » — avec li#tarif-sophro > p.tarif-forfait:nth-of-type(2) > small « Forfait de 4 séances » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.ouv-contact-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « CONTACT & TARIFS » — avec div.ouv-contact-texte:nth-of-type(1) > h1.titre-geant > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Le premier » _(1920×1080 normal, 2560×1440 normal, 1920×1080 sansJs, 2560×1440 sansJs, 1920×1080 sansWebgl, 2560×1440 sansWebgl)_
- **textes qui se chevauchent** — `/ecole` — section#debut > div.conteneur.ouv-ecole-texte:nth-of-type(1) > p.surtitre « INTERVENTIONS · RELATIONS, BESOINS & CONFLITS » — avec div.conteneur.ouv-ecole-texte:nth-of-type(1) > h1.titre-geant > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Et si les relations » _(1920×1080 normal, 2560×1440 normal, 1920×1080 sansJs, 2560×1440 sansJs, 1920×1080 sansWebgl, 2560×1440 sansWebgl)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/a-propos` — section#debut > p.hero-actions:nth-of-type(3) > span.hero-info « Premier rendez-vous offert » _(844×390 sansJs, 1000×560 sansJs)_

## À regarder

### section sans visuel (11)

- **section sans visuel** — `/` — section#pour-toi « Mon accompagnement est-il fait pour toi ? On vient » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/` — section#questions « Les questions que tu te poses peut-être Est-ce que » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/a-propos` — section#parcours « Mon parcours Un chemin qui passe par les animaux,  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/a-propos` — section#valeurs « Ce qui me guide L'authenticité Le jeu Prendre soin » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#tarifs « Tous les tarifs Accompagnement d'un mois 225 € le  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#coordonnees « Me joindre Téléphone 06 88 66 19 28 E-mail bonjour » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/ecole` — section#seances « Trois séances d'une heure 1 Les besoins Quand chac » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/ecole` — section#accompagnement « Avant, pendant, après Avant Une rencontre avec l'é » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/ecole` — section#parents « Une rencontre avec les parents Un temps de présent » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/ecole` — section#candidature « Proposer Séquence à votre école Laissez vos coordo » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/immersion-animale` — section#deroule « Comment ça se passe 1 Je te pose éventuellement qu » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /a-propos : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /ecole : aucune section épinglée ou plein écran.
- Tient dans l'écran /immersion-animale : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/a-propos,/contact,/ecole --seulement=fichiers,mesures
```
