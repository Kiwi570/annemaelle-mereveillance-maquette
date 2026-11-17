# Anne-Maëlle & Mèreveillance · maquette v2

Maquette de refonte du site annemaellemereveillance.fr (Anne-Maëlle Le Roux, accompagnement émotionnel, Andouillé, Mayenne).
Adresse de présentation : https://annemaelle-mereveillance-maquette.vercel.app

Direction « De la mer d'émotions à l'espace paisible » : brume, écume, encre de mer et le rouge du cœur du logo ; Young Serif et Hanken Grotesk.
Pages : accueil, Immersion animale, À l'école (Séquence), À propos, Contact & tarifs, 404.

## Construire

```
node outils/generer.mjs        pages HTML depuis donnees/ et source/ (ne jamais modifier les .html à la main)
node _audit/audit.mjs          audit standard (voir _audit/README.md)
```

Site statique prêt pour Vercel (cleanUrls), sans étape de construction. Les outils de la bibliothèque (`_biblio/`) ne sont pas livrés : ils se recopient depuis la skill.

## Fiche : à fournir par la cliente

| Information | Où | État |
|---|---|---|
| Mentions légales (raison sociale ou nom, micro-entreprise, SIRET : « 808872667000 » relevé tel quel sur le site actuel, 12 chiffres au lieu de 14, à vérifier, adresse, directrice de publication) | pied de page | à compléter |
| Hébergeur du nouveau site : Vercel Inc., adresse à vérifier sur vercel.com au moment de la mise en ligne | mentions légales | à compléter |
| Politique de confidentialité (RGPD) : données des formulaires, finalité, durée, droits | pied de page et formulaires | à compléter |
| Crédits photos : Fred Mouraud, Marie Leduc, Anne-Maëlle Le Roux (quelle photo à qui) | pied de page | à préciser |
| Crédits des illustrations générées (mer, ruisseau, salle de classe, cheval, chemin, fauteuils, barque) : mention « Illustration générée » à garder | partout | à garder |
| Photos en pleine définition de Fred Mouraud (celles du site font environ 1 000 px : elles restent en format moyen) | toutes les pages | souhaité |
| Une seule adresse e-mail (bonjour@annemaellemereveillance.fr ou contact@terre-de-je.fr) et un seul lien Reservio | contact, pied | à confirmer |
| Nom à afficher : « Anne-Maëlle & Mèreveillance » ou « Terre de Je » | en-tête | à confirmer |
| Témoignages : accord des personnes, prénom ou initiale si elles le souhaitent (publiés sans nom sur l'accueil) | accueil | à confirmer |
| Tarifs : ceux de la page Contact du site actuel ont été repris (l'accueil actuel disait « 75 € ou 50 € ») | contact | à confirmer |
| Brochure PDF de Séquence (non reprise : elle est hébergée sur l'ancien site) | école | à fournir |
| Tarifs de la rencontre-conférence et de l'accompagnement annuel des écoles (« sur devis ») | école | à fournir |
| Horaires ou délais de réponse (aucun sur le site actuel : rien n'est affiché) | contact | facultatif |

## Retiré ou reformulé faute d'information, ou par prudence

- « Difficultés à concevoir », « douleurs physiques persistantes » : présentées comme des situations pour lesquelles on vient la voir, sans promesse, avec la mention « Mes accompagnements ne remplacent pas un avis ni un suivi médical : ils viennent à côté. » (à faire valider).
- Le partage « C'est pour toi si… / Ce n'est peut-être pas encore le moment si… » reprend la liste du site actuel, rangée en deux colonnes : à faire valider.
- Les réponses de la FAQ reprennent le début des réponses du site actuel, complétées par les faits de la page (prix, séances) : à relire par la cliente.
- Le témoignage de É. (immersion animale) est un extrait ; le reste est sur le site actuel.
- Photos de banque d'images montrant des inconnus : retirées.

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`), formulaires simulés (les brancher), mentions « à compléter » du pied de page.
- Remplacer les mentions « à compléter » par les vraies pages légales.
- Garder : la mention « Illustration générée » sur les images créées par IA.
