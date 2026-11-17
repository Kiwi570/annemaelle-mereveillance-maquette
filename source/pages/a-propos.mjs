/* À propos : le nom en très grand traversé par la photo bras ouverts, Mèreveillance, 2009 la page blanche,
   parcours en frise, valeurs et citations, forêt, appel. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'a-propos', fichier: 'a-propos', imagePartage: 'anne-maelle-bras-ouverts-784.webp' };

export default (c) => html`
<section class="ouv-apropos conteneur" id="debut">
  <div class="ouv-apropos-photo" data-iris-centre>
    ${c.media({ nom: 'anne-maelle-bras-ouverts', alt: c.s('apropos.photoAlt'), cadrage: '50% 40%', priorite: true, classe: 'ouv-apropos-media', sizes: '(max-width: 760px) 40vw, 18vw' })}
    <svg class="ouv-apropos-ondes" data-effet="ondes" viewBox="-100 -100 200 200" aria-hidden="true" focusable="false">${[0, 1, 2].map((i) => html`<ellipse rx="${70 + i * 16}" ry="${26 + i * 7}" style="--i:${i}"/>`)}</svg>
  </div>
  <p class="surtitre" data-anime="mots">${c.t('apropos.surtitre')}</p>
  <h1 class="ouv-apropos-nom" data-anime="gsap"><span class="ligne-masque"><span class="titre-ligne">${c.t('apropos.prenom')}</span></span> <span class="ligne-masque"><span class="titre-ligne"><em>${c.t('apropos.nom')}</em></span></span></h1>
  <blockquote class="citation" data-anime><p>« ${c.t('apropos.citation')} »</p></blockquote>
  <p class="ouv-apropos-texte masque-ecran-bas" data-anime>${c.t('apropos.texte')}</p>
  <p class="hero-actions" data-anime>
    ${c.lien('contact', { ancre: 'rendez-vous', classe: 'bouton', texte: c.t('apropos.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
    <span class="hero-info" data-info-cle>${c.t('apropos.info')}</span>
  </p>
</section>

<section class="mot theme-ecume" id="mereveillance">
  <div class="conteneur mot-grille">
    <p class="mot-geant" data-anime="lettres" aria-hidden="true">${c.t('apropos.mot.titre')}</p>
    <div class="mot-texte">
      <h2 class="visuellement-cache">${c.t('apropos.mot.titre')}</h2>
      <p data-anime>${c.t('apropos.mot.texte')}</p>
    </div>
    ${c.media({ nom: 'tambour', alt: c.s('apropos.mot.tambourAlt'), cadrage: '50% 50%', classe: 'mot-tambour', sizes: '(max-width: 760px) 50vw, 16vw', attrs: 'data-fx="zoom"' })}
  </div>
</section>

<section class="page-blanche theme-nuit" id="page-blanche">
  ${c.media({ nom: 'grok/apropos-chemin', alt: '', cadrage: '60% 50%', classe: 'page-blanche-fond', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
  <div class="conteneur page-blanche-contenu">
    <p class="annee" data-anime="lettres">${c.t('apropos.page.surtitre')}</p>
    <h2 data-anime="lignes">${c.t('apropos.page.titre')}</h2>
    <p data-anime>${c.t('apropos.page.texte')}</p>
  </div>
</section>

<section class="parcours conteneur" id="parcours">
  <div class="parcours-tete">
    <h2 data-anime="lignes">${c.t('apropos.parcours.titre')}</h2>
    <p data-anime>${c.t('apropos.parcours.texte')}</p>
  </div>
  <div class="frise-cadre">
    <svg class="frise-fil" viewBox="0 0 20 1000" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M10 0 C 2 120, 18 240, 10 360 S 2 600, 10 720 S 18 900, 10 1000" fill="none"/></svg>
    <ol class="frise">${c.donnees.parcours.map((p, i) => html`<li class="frise-item" data-anime style="--i:${i}"><span class="frise-quand">${p.quand}</span><p>${p.quoi}</p></li>`)}</ol>
  </div>
</section>

<section class="valeurs theme-ecume" id="valeurs">
  <div class="conteneur">
    <h2 data-anime="lignes">${c.t('apropos.valeurs.titre')}</h2>
    <ul class="valeurs-liste">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => html`<li data-fx="vitesse" data-fx-force="${2 + (i % 3)}">${c.t('apropos.valeurs.v' + i)}</li>`)}</ul>
    <div class="citations" data-anime="cascade">
      <blockquote class="citation"><p>« ${c.t('apropos.valeurs.c1')} »</p></blockquote>
      <blockquote class="citation"><p>« ${c.t('apropos.valeurs.c2')} »</p></blockquote>
    </div>
  </div>
</section>

<section class="foret conteneur" id="foret">
  <div class="foret-tete">
    <h2 data-anime="lignes">${c.t('apropos.foret.titre')}</h2>
    <p data-anime>${c.t('apropos.foret.texte')}</p>
  </div>
  <div class="foret-grille">
    ${c.media({ nom: 'ruisseau-reel', alt: c.s('apropos.foret.ruisseauAlt'), cadrage: '50% 50%', classe: 'foret-a', sizes: '(max-width: 760px) 44vw, 20vw', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
    ${c.media({ nom: 'anne-maelle-ruisseau', alt: c.s('apropos.foret.piedsAlt'), cadrage: '50% 40%', classe: 'foret-b', sizes: '(max-width: 760px) 44vw, 20vw', attrs: 'data-anime="rideau"' })}
    ${c.media({ nom: 'anne-maelle-tambour', alt: c.s('accueil.mois.photoAlt'), cadrage: '45% 30%', classe: 'foret-c', sizes: '(max-width: 760px) 44vw, 20vw', attrs: 'data-fx="parallaxe" data-fx-force="14"' })}
  </div>
</section>

<section class="fin theme-nuit" id="rencontre">
  <canvas class="fin-ondes" data-effet="ondes" aria-hidden="true" data-visuel></canvas>
  <div class="conteneur fin-contenu">
    <h2 data-anime="lignes">${c.t('apropos.fin.titre')}</h2>
    <p data-anime>${c.t('apropos.fin.texte')}</p>
    <p class="fin-actions" data-anime>${c.lien('contact', { ancre: 'rendez-vous', classe: 'bouton', texte: c.t('apropos.fin.action'), attrs: 'data-survol="magnetique"' })}</p>
  </div>
</section>
`;
