/* Accueil : de la mer d'émotions à l'espace paisible.
   Ouverture sur la mer sombre (onde au défilement), portrait rond sur lequel finit l'intro,
   situations qui tanguent (vitesse), ruisseau qui s'ouvre en plein écran, galets, mois en 4 semaines,
   témoignages en bulles, pour qui, Anne-Maëlle, autres portes, FAQ, appel final en ondes. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'anne-maelle-portrait-784.webp' };

const ondesSvg = (classe, n = 6) => html`<svg class="${classe}" data-effet="ondes" viewBox="-100 -100 200 200" aria-hidden="true" focusable="false">${Array.from({ length: n }, (_, i) => html`<circle r="${18 + i * 15}" style="--i:${i}"/>`)}</svg>`;

export default (c) => html`
<section class="hero theme-nuit" id="debut">
  ${c.media({ nom: 'grok/mer-ouverture', alt: '', cadrage: '60% 50%', priorite: true, classe: 'hero-mer', sizes: '100vw', attrs: 'data-boucle-css' })}
  <canvas class="hero-canvas" data-effet="ondes" aria-hidden="true" data-visuel></canvas>
  <div class="hero-grille conteneur">
    <div class="hero-texte">
      <p class="surtitre hero-sur masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.hero.surtitre')}</p>
      <h1 class="hero-titre" data-anime="gsap"><span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre1')}</span></span><span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre2')}</span></span><span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre3a')} <em>${c.t('accueil.hero.titre3b')}</em></span></span></h1>
      <p class="hero-intro masque-ecran-bas" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
      <p class="hero-actions" data-anime="gsap">
        ${c.lien('contact', { ancre: 'rendez-vous', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
        <span class="hero-info" data-info-cle>${c.t('accueil.hero.info')}</span>
      </p>
    </div>
    <div class="hero-portrait" data-iris-centre="disque">
      ${ondesSvg('hero-ondes', 5)}
      ${c.media({ nom: 'anne-maelle-portrait', alt: c.s('accueil.hero.portraitAlt'), cadrage: '52% 32%', priorite: true, classe: 'hero-rond', sizes: '(max-width: 760px) 46vw, 30vw' })}
      <p class="hero-signature" data-anime="gsap">${c.t('accueil.hero.signature')}</p>
    </div>
  </div>
</section>

<section class="mer theme-nuit" id="mer">
  ${c.media({ nom: 'grok/mer-agitee', alt: '', cadrage: '50% 50%', classe: 'mer-fond', sizes: '100vw', attrs: 'data-fx="onde" data-fx-force="1.6"' })}
  <div class="conteneur mer-grille">
    <div class="mer-tete">
      <p class="surtitre" data-anime="mots">${c.t('accueil.mer.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.mer.titre')}</h2>
      <p class="mer-texte" data-anime>${c.t('accueil.mer.texte')}</p>
    </div>
    <ul class="mer-liste">
      ${[1, 2, 3, 4, 5].map((i) => html`<li class="vague-mot" data-fx="vitesse" data-fx-force="${3 + (i % 3) * 2}" style="--i:${i}"><span>${c.t('accueil.mer.s' + i)}</span></li>`)}
    </ul>
  </div>
</section>

<section class="espace" id="espace" data-fx="plein-ecran" data-fx-depart="inset(20% 18% 20% 18% round 48px)" aria-labelledby="espace-titre">
  <div data-collant class="espace-cadre">
    ${c.media({ nom: 'grok/ruisseau-paisible', alt: c.s('accueil.espace.titre'), cadrage: '50% 55%', classe: 'espace-media', sizes: '100vw' })}
    <h2 class="visuellement-cache" id="espace-titre">${c.t('accueil.espace.titre')}</h2>
    <p class="espace-mots" aria-hidden="true" data-audit-ignorer><span data-fx-ecarte="g">${c.t('accueil.espace.mot1')}</span><span data-fx-ecarte="d">${c.t('accueil.espace.mot2')}</span></p>
    <p class="espace-apres" data-fx-apres>${c.t('accueil.espace.apres')}</p>
  </div>
</section>

<section class="besoin conteneur" id="besoin">
  <div class="besoin-tete">
    <h2 data-anime="lignes">${c.t('accueil.besoin.titre')}</h2>
    <ol class="galets">
      ${[1, 2, 3, 4].map((i) => html`<li class="galet" data-effet="galets" style="--i:${i}"><span class="galet-onde" aria-hidden="true"></span><span class="galet-texte">${c.t('accueil.besoin.b' + i)}</span></li>`)}
    </ol>
  </div>
  <div class="besoin-suite">
    ${c.media({ nom: 'mains', alt: c.s('accueil.besoin.mainsAlt'), cadrage: '50% 50%', classe: 'besoin-mains', sizes: '(max-width: 760px) 70vw, 24vw', attrs: 'data-anime="rideau"' })}
    <div>
      <h3 class="besoin-titre2" data-anime="lignes">${c.t('accueil.besoin.titre2')}</h3>
      <p data-anime>${c.t('accueil.besoin.intro2')}</p>
      <ul class="coches" data-anime="cascade">
        ${[1, 2, 3].map((i) => html`<li>${c.t('accueil.besoin.q' + i)}</li>`)}
      </ul>
    </div>
  </div>
</section>

<section class="mois theme-ecume" id="mois">
  <div class="conteneur">
    <div class="mois-tete">
      <p class="surtitre" data-anime="mots">${c.t('accueil.mois.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.mois.titre')}</h2>
      <p class="mois-texte" data-anime>${c.t('accueil.mois.texte')}</p>
    </div>
    <div class="semaines">
      <ol class="semaines-liste">
        ${[1, 2, 3, 4].map((i) => html`<li class="semaine" data-effet="semaines" style="--i:${i}"><span class="semaine-num">${c.t('accueil.mois.semaine')} ${i}</span><span class="semaine-point" aria-hidden="true"></span><span class="semaine-texte">${c.t('accueil.mois.seance')}</span></li>`)}
      </ol>
      <svg class="semaines-fil" viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 30 C 60 6, 110 6, 166 30 S 276 54, 333 30 S 443 6, 500 30 S 610 54, 666 30 S 776 6, 833 30 S 943 54, 1000 30"/></svg>
      <p class="semaines-legende">${c.t('accueil.mois.fil')}</p>
    </div>
    <div class="mois-bas">
      <ul class="piliers" data-anime="cascade">
        <li><h3>${c.t('accueil.mois.p1t')}</h3><p>${c.t('accueil.mois.p1')}</p></li>
        <li><h3>${c.t('accueil.mois.p2t')}</h3><p>${c.t('accueil.mois.p2')}</p></li>
        <li><h3>${c.t('accueil.mois.p3t')}</h3><p>${c.t('accueil.mois.p3')}</p></li>
      </ul>
      <div class="prix-carte" data-anime>
        ${c.media({ nom: 'anne-maelle-tambour', alt: c.s('accueil.mois.photoAlt'), cadrage: '45% 30%', classe: 'prix-photo', sizes: '(max-width: 760px) 40vw, 14vw' })}
        <p class="prix" data-prix>${c.t('accueil.mois.prix')}</p>
        <p class="prix-unite">${c.t('accueil.mois.prixUnite')}</p>
        ${c.lien('contact', { ancre: 'rendez-vous', classe: 'bouton', texte: c.t('accueil.mois.action'), attrs: 'data-survol="magnetique"' })}
        <p class="prix-offert">${c.t('accueil.mois.offert')}</p>
      </div>
    </div>
    <p class="mois-bonus" data-anime>${c.t('accueil.mois.bonus')}</p>
  </div>
</section>

<section class="temoignages theme-nuit" id="temoignages">
  ${ondesSvg('temoignages-ondes', 7)}
  <div class="conteneur">
    <p class="surtitre" data-anime="mots">${c.t('accueil.temoignages.surtitre')}</p>
    <h2 data-anime="lignes">${c.t('accueil.temoignages.titre')}</h2>
    <ul class="bulles">
      ${c.donnees.temoignages.map((t, i) => html`<li class="bulle" data-effet="bulles" style="--i:${i}" data-vitesse="${[0.1, -0.06, 0.16, -0.1, 0.06][i]}"><blockquote><p>« ${t.texte} »</p></blockquote><p class="bulle-qui">${t.qui}</p></li>`)}
    </ul>
    <p class="note-discrete" data-anime>${c.t('accueil.temoignages.note')}</p>
  </div>
</section>

<section class="pourtoi conteneur" id="pour-toi">
  <h2 data-anime="lignes">${c.t('accueil.pourtoi.titre')}</h2>
  <p class="pourtoi-intro" data-anime>${c.t('accueil.pourtoi.intro')}</p>
  <ul class="pastilles" data-anime="cascade">
    ${[1, 2, 3, 4, 5].map((i) => html`<li>${c.t('accueil.pourtoi.t' + i)}</li>`)}
  </ul>
  <div class="pourtoi-colonnes">
    <div class="pourtoi-oui" data-anime>
      <h3>${c.t('accueil.pourtoi.ouiTitre')}</h3>
      <ul class="coches">${[1, 2, 3, 4, 5].map((i) => html`<li>${c.t('accueil.pourtoi.o' + i)}</li>`)}</ul>
    </div>
    <div class="pourtoi-pas" data-anime>
      <h3>${c.t('accueil.pourtoi.pasTitre')}</h3>
      <ul class="tirets">${[1, 2, 3, 4].map((i) => html`<li>${c.t('accueil.pourtoi.n' + i)}</li>`)}</ul>
    </div>
  </div>
  <p class="note-medicale" data-anime>${c.t('commun.pasMedical')}</p>
</section>

<section class="moi theme-ecume" id="anne-maelle">
  <div class="conteneur moi-grille">
    <div class="moi-photos">
      ${c.media({ nom: 'anne-maelle-arbre', alt: c.s('accueil.moi.arbreAlt'), cadrage: '50% 35%', classe: 'moi-arbre', sizes: '(max-width: 760px) 60vw, 22vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
      ${c.media({ nom: 'tambour', alt: c.s('accueil.moi.tambourAlt'), cadrage: '50% 50%', classe: 'moi-tambour', sizes: '(max-width: 760px) 40vw, 14vw', attrs: 'data-anime="rideau"' })}
    </div>
    <div class="moi-texte">
      <p class="surtitre" data-anime="mots">${c.t('accueil.moi.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.moi.titre')}</h2>
      <p data-anime>${c.t('accueil.moi.texte')}</p>
      <div class="outils" data-anime="cascade">
        <div><h3>${c.t('accueil.moi.o1t')}</h3><p>${c.t('accueil.moi.o1')}</p></div>
        <div><h3>${c.t('accueil.moi.o2t')}</h3><p>${c.t('accueil.moi.o2')}</p></div>
      </div>
      <p class="genies-titre" data-anime>${c.t('accueil.moi.geniesTitre')}</p>
      <ul class="pastilles pastilles--petites" data-anime="cascade">${[1, 2, 3, 4, 5, 6].map((i) => html`<li>${c.t('accueil.moi.g' + i)}</li>`)}</ul>
      <p data-anime>${c.lien('a-propos', { classe: 'lien-fleche', texte: c.t('accueil.moi.lien') })}</p>
    </div>
  </div>
</section>

<section class="aussi conteneur" id="aussi">
  <h2 data-anime="lignes">${c.t('accueil.aussi.titre')}</h2>
  <div class="portes" data-anime="cascade">
    <a class="porte" href="${c.url('immersion-animale')}" data-libelle="${c.libelle('immersion-animale')}" data-survol="incline">
      ${c.media({ nom: 'anne-maelle-chat', alt: '', cadrage: '40% 40%', classe: 'porte-media', sizes: '(max-width: 760px) 90vw, 28vw' })}
      <span class="porte-titre">${c.t('accueil.aussi.a1t')}</span><span class="porte-texte">${c.t('accueil.aussi.a1')}</span><span class="lien-fleche">${c.t('accueil.aussi.voir')}</span>
    </a>
    <a class="porte" href="${c.url('ecole')}" data-libelle="${c.libelle('ecole')}" data-survol="incline">
      ${c.media({ nom: 'grok/ecole-classe', alt: '', cadrage: '50% 60%', classe: 'porte-media', sizes: '(max-width: 760px) 90vw, 28vw' })}
      <span class="porte-titre">${c.t('accueil.aussi.a2t')}</span><span class="porte-texte">${c.t('accueil.aussi.a2')}</span><span class="lien-fleche">${c.t('accueil.aussi.voir')}</span>
    </a>
    <a class="porte" href="${c.url('contact', 'tarifs')}" data-libelle="${c.libelle('contact')}" data-survol="incline">
      ${c.media({ nom: 'ruisseau-reel', alt: '', cadrage: '50% 60%', classe: 'porte-media', sizes: '(max-width: 760px) 90vw, 28vw' })}
      <span class="porte-titre">${c.t('accueil.aussi.a3t')}</span><span class="porte-texte">${c.t('accueil.aussi.a3')}</span><span class="lien-fleche">${c.t('accueil.aussi.voir')}</span>
    </a>
  </div>
</section>

<section class="faq conteneur" id="questions">
  <h2 data-anime="lignes">${c.t('accueil.faq.titre')}</h2>
  <div class="faq-liste" data-anime="cascade">
    ${c.donnees.faq.map((f) => html`<details class="faq-item"><summary>${f.q}</summary><p>${f.r}</p></details>`)}
  </div>
</section>

<section class="fin theme-nuit" id="premier-pas">
  <canvas class="fin-ondes" data-effet="ondes" aria-hidden="true" data-visuel></canvas>
  <div class="conteneur fin-contenu">
    <h2 data-anime="lignes">${c.t('accueil.fin.titre')}</h2>
    <p data-anime>${c.t('accueil.fin.texte')}</p>
    <p class="fin-actions" data-anime>
      ${c.lien('contact', { ancre: 'rendez-vous', classe: 'bouton', texte: c.t('accueil.fin.action'), attrs: 'data-survol="magnetique"' })}
      ${c.lien('contact', { ancre: 'rendez-vous', params: 'sujet=autre', classe: 'bouton bouton--contour', texte: c.t('accueil.fin.message') })}
    </p>
    <p class="fin-tel" data-anime><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
  </div>
</section>
`;
