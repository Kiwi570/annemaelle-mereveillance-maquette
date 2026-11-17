/* Immersion animale : ouverture en deux colonnes (photo au chat qui se dévoile en ovale, titre), espèces qui tanguent
   sur le bocage, ce qu'il me faut, déroulé en 5 étapes, témoignages, tarif libre. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'immersion-animale', fichier: 'immersion-animale', imagePartage: 'anne-maelle-chat-784.webp' };

export default (c) => html`
<section class="ouv-animal conteneur" id="debut">
  <div class="ouv-animal-media" data-iris-centre>
    ${c.media({ nom: 'anne-maelle-chat', alt: c.s('animal.photoAlt'), cadrage: '42% 45%', priorite: true, classe: 'ouv-animal-photo', sizes: '(max-width: 760px) 92vw, 44vw' })}
    <svg class="ouv-animal-ondes" data-effet="ondes" viewBox="-100 -100 200 200" aria-hidden="true" focusable="false">${[0, 1, 2, 3].map((i) => html`<circle r="${40 + i * 18}" style="--i:${i}"/>`)}</svg>
  </div>
  <div class="ouv-animal-texte">
    <p class="surtitre" data-anime="mots">${c.t('animal.surtitre')}</p>
    <h1 class="titre-page" data-anime="gsap"><span class="ligne-masque"><span class="titre-ligne">${c.t('animal.titre1')}</span></span><span class="ligne-masque"><span class="titre-ligne"><em>${c.t('animal.titre2')}</em></span></span><span class="ligne-masque"><span class="titre-ligne">${c.t('animal.titre3')}</span></span></h1>
    <p class="page-intro masque-ecran-bas" data-anime>${c.t('animal.texte')}</p>
    <p class="hero-actions" data-anime>
      ${c.lien('contact', { ancre: 'rendez-vous', params: 'sujet=animal', classe: 'bouton', texte: c.t('animal.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <span class="hero-info" data-info-cle>${c.t('animal.info')}</span>
    </p>
  </div>
</section>

<section class="especes theme-nuit vague-haut vague-bas" id="especes">
  ${c.media({ nom: 'grok/animal-bocage', alt: '', cadrage: '65% 55%', classe: 'especes-fond', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
  <div class="conteneur especes-contenu">
    <h2 data-anime="lignes">${c.t('animal.especes.titre')}</h2>
    <p data-anime>${c.t('animal.especes.texte')}</p>
    <ul class="especes-liste">${[1, 2, 3, 4, 5, 6, 7].map((i) => html`<li data-fx="vitesse" data-fx-force="${2 + (i % 4)}">${c.t('animal.especes.e' + i)}</li>`)}</ul>
  </div>
</section>

<section class="preparer conteneur" id="preparer">
  <div>
    <h2 data-anime="lignes">${c.t('animal.preparer.titre')}</h2>
    <ol class="cartes-num" data-anime="cascade">
      <li><span class="num" aria-hidden="true">1</span><h3>${c.t('animal.preparer.p1t')}</h3><p>${c.t('animal.preparer.p1')}</p></li>
      <li><span class="num" aria-hidden="true">2</span><h3>${c.t('animal.preparer.p2t')}</h3><p>${c.t('animal.preparer.p2')}</p></li>
      <li><span class="num" aria-hidden="true">3</span><h3>${c.t('animal.preparer.p3t')}</h3><p>${c.t('animal.preparer.p3')}</p></li>
    </ol>
  </div>
  ${c.media({ nom: 'anne-maelle-chien', alt: c.s('animal.preparer.chienAlt'), cadrage: '50% 45%', classe: 'preparer-photo', sizes: '(max-width: 760px) 90vw, 30vw', attrs: 'data-anime="rideau"' })}
</section>

<section class="deroule theme-ecume" id="deroule">
  <div class="conteneur">
    <h2 data-anime="lignes">${c.t('animal.deroule.titre')}</h2>
    <ol class="etapes">
      ${[1, 2, 3, 4, 5].map((i) => html`<li class="etape" data-effet="etapes" style="--i:${i}"><span class="etape-rond" aria-hidden="true">${i}</span><p>${c.t('animal.deroule.e' + i)}</p></li>`)}
    </ol>
  </div>
</section>

<section class="temoins conteneur" id="temoignages">
  <h2 data-anime="lignes">${c.t('animal.temoignages.titre')}</h2>
  <div class="temoins-grille">
    ${c.media({ nom: 'chat-roux', alt: c.s('animal.temoignages.chatAlt'), cadrage: '50% 40%', classe: 'temoins-photo', sizes: '(max-width: 760px) 90vw, 46vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    <ul class="temoins-liste" data-anime="cascade">
      ${c.donnees.temoignagesAnimaux.map((t) => html`<li><blockquote><p>« ${t.texte} »</p></blockquote><p class="bulle-qui"><strong>${t.qui}</strong> · ${t.animal}</p></li>`)}
    </ul>
  </div>
</section>

<section class="fin theme-nuit vague-haut" id="tarif">
  <canvas class="fin-ondes" data-effet="ondes" aria-hidden="true" data-visuel></canvas>
  <div class="conteneur fin-contenu">
    <p class="prix prix--clair" data-prix data-anime>${c.t('animal.tarif.titre')}</p>
    <p data-anime>${c.t('animal.tarif.texte')}</p>
    <p class="fin-actions" data-anime>
      ${c.lien('contact', { ancre: 'rendez-vous', params: 'sujet=animal', classe: 'bouton', texte: c.t('animal.tarif.action'), attrs: 'data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="${c.site.contact.reservio}" target="_blank" rel="noopener">${c.t('animal.tarif.rdv')}<span class="visuellement-cache"> ${c.s('commun.nouvelOnglet')}</span></a>
    </p>
  </div>
</section>
`;
