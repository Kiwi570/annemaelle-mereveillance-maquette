/* Page 404 : « Cette page a pris le large », la barque qui dérive (dans un cadre arrondi), ondes en canvas. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="introuvable theme-nuit" id="debut">
  <canvas class="fin-ondes" data-effet="ondes" aria-hidden="true" data-visuel></canvas>
  <div class="conteneur introuvable-grille">
    <div class="introuvable-contenu">
      <h1 class="titre-page" data-anime="gsap"><span class="ligne-masque"><span class="titre-ligne">${c.t('introuvable.titre')}</span></span></h1>
      <p data-anime>${c.t('introuvable.texte')}</p>
      <p data-anime>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}</p>
    </div>
    <div class="introuvable-barque" data-iris-centre>
      ${c.media({ nom: 'grok/perdu-404', alt: c.s('introuvable.alt'), cadrage: '62% 60%', priorite: true, classe: 'introuvable-media', sizes: '(max-width: 760px) 80vw, 34vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    </div>
  </div>
</section>
`;
