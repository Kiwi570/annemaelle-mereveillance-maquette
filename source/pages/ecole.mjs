/* À l'école « Séquence » : la question en très grand, puis le bandeau de la salle de classe qui s'élargit ;
   trois séances, avant/pendant/après, parents, thèmes, équipe, candidature simulée. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'ecole', fichier: 'ecole', imagePartage: 'grok/ecole-classe-1280.webp' };

export default (c) => html`
<section class="ouv-ecole" id="debut">
  <div class="conteneur ouv-ecole-texte">
    <p class="surtitre" data-anime="mots">${c.t('ecole.surtitre')}</p>
    <h1 class="titre-geant" data-anime="gsap"><span class="ligne-masque"><span class="titre-ligne">${c.t('ecole.titre1')}</span></span><span class="ligne-masque"><span class="titre-ligne"><em>${c.t('ecole.titre2')}</em></span></span><span class="ligne-masque"><span class="titre-ligne">${c.t('ecole.titre3')}</span></span></h1>
    <div class="ouv-ecole-bas">
      <p class="page-intro masque-ecran-bas" data-anime>${c.t('ecole.texte')}</p>
      <p class="hero-actions" data-anime>
        <a class="bouton" href="#candidature" data-action-principale data-survol="magnetique">${c.t('ecole.action')}</a>
        <span class="hero-info" data-info-cle>${c.t('ecole.info')}</span>
      </p>
    </div>
  </div>
  <div class="ouv-ecole-bandeau" data-iris-centre>
    ${c.media({ nom: 'grok/ecole-classe', alt: c.s('ecole.classeAlt'), cadrage: '50% 60%', priorite: true, classe: 'ouv-ecole-media', sizes: '100vw', attrs: 'data-effet="bandeau"' })}
  </div>
</section>

<section class="seances conteneur" id="seances">
  <h2 data-anime="lignes">${c.t('ecole.seances.titre')}</h2>
  <ol class="seances-liste" data-anime="cascade">
    ${[1, 2, 3].map((i) => html`<li class="seance" data-survol="incline"><span class="seance-num" aria-hidden="true">${i}</span><h3>${c.t('ecole.seances.s' + i + 't')}</h3><p>${c.t('ecole.seances.s' + i)}</p></li>`)}
  </ol>
</section>

<section class="suivi theme-ecume" id="accompagnement">
  <div class="conteneur suivi-grille">
    <h2 data-anime="lignes">${c.t('ecole.suivi.titre')}</h2>
    <ol class="etapes etapes--trois">
      ${[1, 2, 3].map((i) => html`<li class="etape" data-effet="etapes" style="--i:${i}"><span class="etape-rond etape-rond--mot" aria-hidden="true"></span><h3>${c.t('ecole.suivi.a' + i + 't')}</h3><p>${c.t('ecole.suivi.a' + i)}</p></li>`)}
    </ol>
  </div>
</section>

<section class="parents conteneur" id="parents">
  <div class="parents-texte">
    <h2 data-anime="lignes">${c.t('ecole.parents.titre')}</h2>
    <p data-anime>${c.t('ecole.parents.texte')}</p>
    <p class="note-discrete" data-anime>${c.t('ecole.parents.note')}</p>
  </div>
  <div class="themes" id="themes">
    <h2 class="themes-titre" data-anime="lignes">${c.t('ecole.themes.titre')}</h2>
    <ul class="pastilles" data-anime="cascade">${[1, 2, 3, 4, 5, 6, 7, 8].map((i) => html`<li>${c.t('ecole.themes.t' + i)}</li>`)}</ul>
  </div>
</section>

<section class="equipe theme-ecume" id="equipe">
  <div class="conteneur">
    <h2 data-anime="lignes">${c.t('ecole.equipe.titre')}</h2>
    <div class="equipe-grille" data-anime="cascade">
      <article class="personne">
        ${c.media({ nom: 'estelle-le-roux', alt: c.s('ecole.equipe.estelleAlt'), cadrage: '50% 25%', classe: 'personne-photo', sizes: '(max-width: 760px) 40vw, 16vw' })}
        <div><h3>${c.t('ecole.equipe.estelle')}</h3><p>${c.t('ecole.equipe.estelleRole')}</p></div>
      </article>
      <article class="personne">
        ${c.media({ nom: 'anne-maelle-arbre', alt: c.s('ecole.equipe.amAlt'), cadrage: '50% 30%', classe: 'personne-photo', sizes: '(max-width: 760px) 40vw, 16vw' })}
        <div><h3>${c.t('ecole.equipe.am')}</h3><p>${c.t('ecole.equipe.amRole')}</p></div>
      </article>
    </div>
  </div>
</section>

<section class="candidature conteneur" id="candidature">
  <div class="candidature-tete">
    <h2 data-anime="lignes">${c.t('ecole.candidature.titre')}</h2>
    <p data-anime>${c.t('ecole.candidature.texte')}</p>
    <div class="prix-carte prix-carte--plate" data-anime>
      <p class="prix" data-prix>${c.t('ecole.candidature.prix')}</p>
      <p class="prix-unite">${c.t('ecole.candidature.prixTexte')}</p>
    </div>
    <p class="note-discrete" data-anime>${c.t('ecole.candidature.brochure')}</p>
  </div>
  <form data-formulaire class="formulaire" action="#" novalidate data-anime>
    <div class="champ"><label for="e-nom">${c.t('ecole.candidature.nom')}</label><input id="e-nom" name="nom" autocomplete="name" required></div>
    <div class="champs-deux">
      <div class="champ"><label for="e-etab">${c.t('ecole.candidature.etablissement')}</label><input id="e-etab" name="etablissement" required></div>
      <div class="champ"><label for="e-poste">${c.t('ecole.candidature.poste')}</label><input id="e-poste" name="poste"></div>
    </div>
    <div class="champs-deux">
      <div class="champ"><label for="e-commune">${c.t('ecole.candidature.commune')}</label><input id="e-commune" name="commune" required></div>
      <div class="champ"><label for="e-tel">${c.t('ecole.candidature.tel')}</label><input id="e-tel" name="tel" type="tel" autocomplete="tel"></div>
    </div>
    <div class="champ"><label for="e-email">${c.t('ecole.candidature.email')}</label><input id="e-email" name="email" type="email" autocomplete="email" required></div>
    <div class="champ"><label for="e-motivation">${c.t('ecole.candidature.motivation')}</label><textarea id="e-motivation" name="message" rows="4" required></textarea></div>
    <p class="mention-donnees">${c.t('contact.form.donnees')}</p>
    <button type="submit" class="bouton">${c.t('ecole.candidature.envoyer')}</button>
    <p data-message-envoi role="status" tabindex="-1" hidden></p>
  </form>
</section>
`;
