/* Contact & tarifs : « offert » en très grand, toutes les cartes de tarifs (sophrologie présentiel ou visio),
   demande de rendez-vous simulée et vrai agenda en ligne, zone de 15 km, coordonnées. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/contact-fauteuils-784.webp' };

export default (c) => {
  const k = c.site.contact;
  const ext = (href, texte, classe = '') => html`<a${classe ? html` class="${classe}"` : ''} href="${href}" target="_blank" rel="noopener">${texte}<span class="visuellement-cache"> ${c.s('commun.nouvelOnglet')}</span></a>`;
  return html`
<section class="ouv-contact conteneur" id="debut">
  <div class="ouv-contact-texte">
    <p class="surtitre" data-anime="mots">${c.t('contact.surtitre')}</p>
    <h1 class="titre-geant" data-anime="gsap"><span class="ligne-masque"><span class="titre-ligne">${c.t('contact.titre1')}</span></span><span class="ligne-masque"><span class="titre-ligne">${c.t('contact.titre2')}</span></span><span class="ligne-masque"><span class="titre-ligne"><em>${c.t('contact.titre3')}</em></span></span></h1>
    <p class="page-intro masque-ecran-bas" data-anime>${c.t('contact.texte')}</p>
    <p class="hero-actions" data-anime>
      <a class="bouton" href="#rendez-vous" data-action-principale data-survol="magnetique">${c.t('contact.form.titre')}</a>
      <span class="hero-info" data-info-cle><a href="tel:${k.telephoneLien}">${k.telephone}</a></span>
    </p>
  </div>
  <div class="ouv-contact-photo" data-iris-centre>
    ${c.media({ nom: 'grok/contact-fauteuils', alt: c.s('contact.fauteuilsAlt'), cadrage: '50% 60%', priorite: true, classe: 'ouv-contact-media', sizes: '(max-width: 760px) 60vw, 26vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    <p class="ouv-contact-bulle" data-anime="gsap" aria-hidden="true">${c.t('contact.bulle')}</p>
  </div>
</section>

<section class="tarifs theme-ecume" id="tarifs">
  <div class="conteneur">
    <h2 data-anime="lignes">${c.t('contact.tarifs.titre')}</h2>
    <ul class="tarifs-grille" data-anime="cascade">
      ${c.donnees.tarifs.map((t) => html`<li class="tarif${t.vedette ? ' tarif--vedette' : ''}" id="tarif-${t.id}">
        <h3>${t.titre}</h3>
        ${t.sophro ? html`<div class="bascule" role="group" aria-label="${c.s('contact.form.mode')}" data-bascule>
            <button type="button" aria-pressed="true" data-mode="presentiel">${c.t('contact.tarifs.presentiel')}</button>
            <button type="button" aria-pressed="false" data-mode="visio">${c.t('contact.tarifs.visio')}</button>
          </div>
          <p class="tarif-prix" data-prix><span data-sophro-seance data-presentiel="55 €" data-visio="50 €">55 €</span> <small>${c.t('contact.tarifs.seance')}</small></p>
          <p class="tarif-forfait" data-prix><span data-sophro-forfait data-presentiel="210 €" data-visio="190 €">210 €</span> <small>${c.t('contact.tarifs.forfait')}</small></p>`
          : html`<p class="tarif-prix" data-prix>${t.prix} <small>${t.unite}</small></p>`}
        <p>${t.texte}</p>
        ${t.lien ? c.lien(t.lien, { ancre: t.ancre || '', classe: 'lien-fleche', texte: c.t('contact.tarifs.voir') }) : html`<a class="lien-fleche" href="?sujet=${t.id === 'sophro' ? 'sophro' : 'autre'}#rendez-vous" data-sans-transition>${c.t('contact.form.titre')}</a>`}
      </li>`)}
    </ul>
    <p class="note-discrete" data-anime>* ${c.t('contact.tarifs.note')}</p>
  </div>
</section>

<section class="rdv conteneur" id="rendez-vous">
  <div class="rdv-tete">
    <h2 data-anime="lignes">${c.t('contact.form.titre')}</h2>
    <p data-anime>${c.t('contact.form.texte')}</p>
    <p data-anime>${ext(k.reservio, c.t('contact.form.agenda'), 'bouton bouton--contour')}</p>
    <div class="rdv-portrait">
      ${c.media({ nom: 'anne-maelle-portrait', alt: c.s('accueil.hero.portraitAlt'), cadrage: '52% 32%', classe: 'rdv-rond', sizes: '(max-width: 760px) 40vw, 12vw', attrs: 'data-fx="zoom"' })}
      <p>${c.t('contact.form.signature')}</p>
    </div>
  </div>
  <form data-formulaire class="formulaire" action="#" novalidate data-anime>
    <fieldset class="choix">
      <legend>${c.t('contact.form.sujet')}</legend>
      ${[['premier', 'sujetPremier'], ['sophro', 'sujetSophro'], ['animal', 'sujetAnimal'], ['ecole', 'sujetEcole'], ['autre', 'sujetAutre']].map(([v, cle], i) => html`<label class="choix-pastille"><input type="radio" name="sujet" value="${v}"${i === 0 ? html` checked` : ''}><span>${c.t('contact.form.' + cle)}</span></label>`)}
    </fieldset>
    <fieldset class="choix">
      <legend>${c.t('contact.form.mode')}</legend>
      <label class="choix-pastille"><input type="radio" name="mode" value="presentiel" checked><span>${c.t('contact.form.modePresentiel')}</span></label>
      <label class="choix-pastille"><input type="radio" name="mode" value="distance"><span>${c.t('contact.form.modeDistance')}</span></label>
    </fieldset>
    <div class="champs-deux">
      <div class="champ"><label for="f-prenom">${c.t('contact.form.prenom')}</label><input id="f-prenom" name="prenom" autocomplete="given-name" required></div>
      <div class="champ"><label for="f-nom">${c.t('contact.form.nom')}</label><input id="f-nom" name="nom" autocomplete="family-name"></div>
    </div>
    <div class="champs-deux">
      <div class="champ"><label for="f-email">${c.t('contact.form.email')}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champ"><label for="f-tel">${c.t('contact.form.tel')}</label><input id="f-tel" name="tel" type="tel" autocomplete="tel"></div>
    </div>
    <div class="champ"><label for="f-message">${c.t('contact.form.message')}</label><textarea id="f-message" name="message" rows="4" required></textarea></div>
    <p class="mention-donnees">${c.t('contact.form.donnees')}</p>
    <button type="submit" class="bouton">${c.t('contact.form.envoyer')}</button>
    <p data-message-envoi role="status" tabindex="-1" hidden></p>
  </form>
</section>

<section class="zone theme-nuit" id="zone">
  <div class="conteneur zone-grille">
    <div>
      <h2 data-anime="lignes">${c.t('contact.zone.titre')}</h2>
      <p data-anime>${c.t('contact.zone.texte')}</p>
    </div>
    <svg class="zone-carte" viewBox="0 0 400 400" role="img" aria-label="${c.s('contact.zone.texte')}" data-visuel>
      <g class="zone-ondes" data-effet="ondes">${[0, 1, 2, 3].map((i) => html`<circle cx="200" cy="200" r="${150 + i * 14}" style="--i:${i}"/>`)}</g>
      <circle class="zone-rayon" cx="200" cy="200" r="120" data-fx-trait/>
      <circle class="zone-centre" cx="200" cy="200" r="7"/>
      <text class="zone-nom" x="200" y="232" text-anchor="middle">${c.s('contact.zone.centre')}</text>
      <line class="zone-ligne" x1="200" y1="200" x2="320" y2="200"/>
      <text class="zone-km" x="262" y="190" text-anchor="middle">${c.s('contact.zone.rayon')}</text>
      <text class="zone-loin" x="200" y="392" text-anchor="middle">${c.s('contact.zone.distance')}</text>
    </svg>
  </div>
</section>

<section class="coordonnees conteneur" id="coordonnees">
  <h2 data-anime="lignes">${c.t('contact.coord.titre')}</h2>
  <dl class="coord-grille" data-anime="cascade">
    <div><dt>${c.t('contact.coord.tel')}</dt><dd><a href="tel:${k.telephoneLien}">${k.telephone}</a></dd></div>
    <div><dt>${c.t('contact.coord.email')}</dt><dd><a href="mailto:${k.email}">${k.email}</a></dd></div>
    <div><dt>${c.t('contact.coord.lieu')}</dt><dd>${k.adresse}</dd></div>
    <div><dt>${c.t('contact.coord.reseaux')}</dt><dd>${ext(k.facebook, 'Facebook')} · ${ext(k.instagram, 'Instagram')} · ${ext(k.youtube, 'YouTube')}</dd></div>
  </dl>
  <p class="note-medicale" data-anime>${c.t('commun.pasMedical')}</p>
</section>
`;
};
