/* Effets propres à Anne-Maëlle & Mèreveillance (le reste vient du socle et de sa bibliothèque d'effets).
   ondes    : la goutte et les ondes de l'intro, les cercles autour des portraits, les ondes en canvas des appels finaux ;
   galets   : « Tu n'as pas besoin… » tombent comme des galets et font une onde ;
   semaines : la frise des 4 semaines et le fil des messages qui se dessine ;
   bulles   : les témoignages remontent à des vitesses différentes ;
   etapes   : les étapes numérotées arrivent l'une après l'autre ;
   bandeau  : la salle de classe s'élargit au défilement. */
import { demarrer, boucle, versObjet, aller } from './socle/index.js?v=2';

const gsap = window.gsap;
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const telephone = () => window.matchMedia('(max-width: 760px)').matches;
const LIGNES = '.hero-ligne, .titre-ligne';
const BLOCS_GSAP = '[data-anime="gsap"]';
const entrees = []; /* animations jouées une fois au défilement : mises dans leur état final au retour */

/* Ondes en canvas (appels finaux) : des gouttes tombent, les cercles s'élargissent et s'effacent. */
function ondesCanvas() {
  $$('canvas.fin-ondes').forEach((cv) => {
    const ctx = cv.getContext('2d');
    let w = 0, h = 0, dpr = 1;
    const taille = () => {
      dpr = Math.min(window.devicePixelRatio || 1, telephone() ? 1 : 1.25);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = Math.max(1, Math.round(w * dpr)); cv.height = Math.max(1, Math.round(h * dpr));
    };
    taille();
    new ResizeObserver(taille).observe(cv);
    const gouttes = [{ x: .5, y: .5, t0: -2.2 }, { x: .22, y: .32, t0: -1.1 }, { x: .8, y: .7, t0: -.3 }];
    let prochaine = 1.4, temps = 0;
    boucle(cv, (dt) => {
      temps += dt;
      if (temps > prochaine) {
        gouttes.push({ x: .15 + Math.random() * .7, y: .2 + Math.random() * .6, t0: temps });
        prochaine = temps + 1.6 + Math.random() * 1.2;
        if (gouttes.length > 6) gouttes.shift();
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const r0 = Math.max(w, h);
      gouttes.forEach((g) => {
        const age = temps - g.t0;
        for (let k = 0; k < 4; k++) {
          const r = age * 70 - k * 26;
          if (r <= 0) continue;
          const a = Math.max(0, .42 - r / (r0 * .8)) * (1 - k * .2);
          if (a <= 0) continue;
          ctx.strokeStyle = `rgba(169, 211, 201, ${a.toFixed(3)})`;
          ctx.lineWidth = 1.4 - k * .25;
          ctx.beginPath();
          ctx.ellipse(g.x * w, g.y * h, r, r * .42, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      });
    });
  });
}

/* Ouverture de l'accueil : des ondes partent du portrait et s'étalent sur la mer (vues en perspective). */
function ondesHero() {
  const cv = document.querySelector('.hero-canvas');
  const rond = document.querySelector('.hero-portrait');
  if (!cv || !rond) return;
  const ctx = cv.getContext('2d');
  let w = 0, h = 0, dpr = 1, cx = 0, cy = 0, rp = 100;
  const taille = () => {
    dpr = Math.min(window.devicePixelRatio || 1, telephone() ? 1 : 1.25);
    const a = cv.getBoundingClientRect(), b = rond.getBoundingClientRect();
    w = a.width; h = a.height;
    cx = b.left - a.left + b.width / 2; cy = b.top - a.top + b.height * .78; rp = b.width / 2;
    cv.width = Math.max(1, Math.round(w * dpr)); cv.height = Math.max(1, Math.round(h * dpr));
  };
  taille();
  new ResizeObserver(taille).observe(cv);
  let temps = 0;
  const gouttes = [];
  const hero = cv.closest('.hero');
  hero.addEventListener('pointerdown', (e) => {
    if (e.target.closest('a, button, .hero-portrait')) return;
    const a = cv.getBoundingClientRect();
    gouttes.push({ x: e.clientX - a.left, y: e.clientY - a.top, t0: temps });
    if (gouttes.length > 5) gouttes.shift();
  });
  boucle(cv, (dt) => {
    temps += dt;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    gouttes.forEach((g) => {
      const age = temps - g.t0;
      for (let k = 0; k < 4; k++) {
        const r = age * 160 - k * 22;
        if (r <= 0) continue;
        const a = Math.max(0, .6 - age * .32) * (1 - k * .18);
        if (a <= 0) continue;
        ctx.strokeStyle = `rgba(232, 242, 244, ${a.toFixed(3)})`;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.ellipse(g.x, g.y, r * 1.1, r * .32, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
    });
    const periode = 2.6, n = 5, portee = Math.max(w, h) * .9;
    for (let k = 0; k < n; k++) {
      const age = ((temps + k * periode) % (periode * n));
      const r = rp * .9 + age * (portee / (periode * n));
      const a = Math.max(0, .46 * (1 - (r - rp) / portee));
      if (a <= .01) continue;
      ctx.strokeStyle = `rgba(214, 232, 236, ${a.toFixed(3)})`;
      ctx.lineWidth = telephone() ? 1.4 : 1.9;
      ctx.beginPath();
      ctx.ellipse(cx, cy, r * 1.15, r * .3, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
  });
}

/* Cercles en SVG autour des portraits : ils s'élargissent et tournent doucement au défilement. */
function ondesSvg() {
  $$('svg[data-effet="ondes"]').forEach((svg) => {
    const section = svg.closest('section');
    gsap.fromTo(svg, { scale: 1, rotate: 0 }, {
      scale: 1.22, rotate: 24, ease: 'none',
      scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: .6 },
    });
  });
}

/* Galets : chacun tombe à sa place, puis l'onde s'ouvre autour de son point. */
function galets() {
  $$('.galet, .calme-carte').forEach((el, i) => {
    const tw = gsap.fromTo(el, { y: -70, opacity: 0, rotate: i % 2 ? 3 : -3 }, {
      y: 0, opacity: 1, rotate: 0, duration: .9, ease: 'back.out(1.7)', delay: (i % 2) * .08,
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onComplete: () => el.classList.add('ricoche'),
    });
    entrees.push({ tw, el, fin: () => el.classList.add('ricoche') });
  });
}

/* Semaines : les points arrivent un à un, le fil des messages se dessine au défilement. */
function semaines() {
  const liste = $$('.semaine');
  if (!liste.length) return;
  const tw = gsap.fromTo(liste, { y: 36, opacity: 0 }, {
    y: 0, opacity: 1, duration: .8, ease: 'power3.out', stagger: .14,
    scrollTrigger: { trigger: '.semaines', start: 'top 82%', once: true },
  });
  entrees.push({ tw });
  const fil = document.querySelector('.semaines-fil');
  if (fil) gsap.fromTo(fil, { clipPath: 'inset(0 100% 0 0)' }, {
    clipPath: 'inset(0 0% 0 0)', ease: 'none',
    scrollTrigger: { trigger: '.semaines', start: 'top 80%', end: 'bottom 45%', scrub: .5 },
  });
}

/* Bulles : les témoignages remontent à des vitesses différentes (aucun ne touche son voisin). */
function bulles() {
  const vitesses = [.12, .04, .14, .02, .06];
  $$('.bulle').forEach((el, i) => {
    const a = (telephone() ? 120 : 200) * vitesses[i % vitesses.length];
    gsap.fromTo(el, { y: a }, { y: -a, ease: 'none', scrollTrigger: { trigger: '.bulles', start: 'top bottom', end: 'bottom top', scrub: .4 } });
  });
}

/* Étapes numérotées : l'une après l'autre, le rond d'abord. */
function etapes() {
  $$('.etapes').forEach((ol) => {
    const items = $$('.etape', ol);
    const tw = gsap.fromTo(items, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: .8, ease: 'power3.out', stagger: .12,
      scrollTrigger: { trigger: ol, start: 'top 85%', once: true },
    });
    entrees.push({ tw });
  });
}

/* Bandeau de l'école : la salle de classe s'élargit jusqu'aux bords de son cadre. */
function bandeau() {
  const m = document.querySelector('.ouv-ecole-media');
  if (!m) return;
  gsap.fromTo(m, { clipPath: 'inset(0% 7% 0% 7% round 30px)' }, {
    clipPath: 'inset(0% 0% 0% 0% round 30px)', ease: 'none',
    scrollTrigger: { trigger: m, start: 'top 95%', end: 'bottom 35%', scrub: .5 },
  });
}

/* Espace paisible : les deux mots s'écartent et s'effacent avant d'atteindre les bords. */
function espaceMots() {
  const mots = $$('.espace-mots span');
  if (!mots.length) return;
  gsap.fromTo(mots, { opacity: 1 }, {
    opacity: 0, ease: 'power1.in',
    scrollTrigger: { trigger: '.espace', start: 'top top', end: '45% top', scrub: .4 },
  });
}

/* FAQ : la réponse s'ouvre et se referme en douceur. */
function faq() {
  $$('.faq-item').forEach((d) => {
    const resume = d.querySelector('summary');
    const corps = d.querySelector('p');
    resume.addEventListener('click', (e) => {
      e.preventDefault();
      if (d.dataset.anime === '1') return;
      d.dataset.anime = '1';
      if (!d.open) {
        d.open = true;
        gsap.fromTo(corps, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: .45, ease: 'power2.out', onComplete: () => { gsap.set(corps, { clearProps: 'height,opacity' }); delete d.dataset.anime; } });
      } else {
        gsap.to(corps, { height: 0, opacity: 0, duration: .35, ease: 'power2.in', onComplete: () => { d.open = false; gsap.set(corps, { clearProps: 'height,opacity' }); delete d.dataset.anime; } });
      }
    });
  });
}

/* Contact : les liens des tarifs choisissent le sujet et descendent au formulaire, sans recharger. */
function sujets() {
  const form = document.querySelector('#rendez-vous form');
  if (!form) return;
  $$('a[data-sujet]').forEach((a) => a.addEventListener('click', (e) => {
    const radio = form.querySelector(`input[name="sujet"][value="${a.dataset.sujet}"]`);
    if (!radio) return;
    e.preventDefault(); e.stopPropagation();
    radio.checked = true;
    aller(document.getElementById('rendez-vous'));
  }, true));
}

/* Sophrologie : prix en présentiel ou en visio. */
function bascule() {
  $$('[data-bascule]').forEach((g) => {
    const carte = g.closest('.tarif');
    g.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-mode]');
      if (!b) return;
      $$('button', g).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      $$('[data-sophro-seance], [data-sophro-forfait]', carte).forEach((s) => {
        const v = s.dataset[b.dataset.mode];
        gsap.fromTo(s, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: .35, ease: 'power2.out', onStart: () => { s.textContent = v; } });
      });
    });
  });
}

/* Titres d'ouverture : lignes qui montent, blocs « gsap » qui apparaissent. */
function montrerOuverture(tl, t0) {
  const lignes = $$(LIGNES);
  const reste = $$('.hero-sur, .hero-intro, .hero-actions, .hero-signature, .ouv-contact-bulle');
  const blocs = $$(BLOCS_GSAP).filter((el) => !reste.includes(el));
  if (blocs.length) tl.set(blocs, { opacity: 1 }, t0);
  if (lignes.length) tl.fromTo(lignes, { y: 0, yPercent: 135 }, { y: 0, yPercent: 0, duration: .85, stagger: .11, ease: 'power3.out' }, t0);
  if (reste.length) tl.fromTo(reste, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: .6, stagger: .08, ease: 'power2.out', immediateRender: false }, t0 + .2);
}

demarrer({
  preparer() {
    if (!gsap) return;
    $$('svg[data-effet="ondes"]').forEach((s) => s.setAttribute('data-boucle-css', ''));
    ondesCanvas();
    ondesHero();
    ondesSvg();
    galets();
    semaines();
    bulles();
    etapes();
    bandeau();
    bascule();
    espaceMots();
    faq();
    sujets();
  },
  /* Intro (moins de 3 s) : une goutte tombe sur l'eau sombre, les ondes traversent l'écran puis se calment,
     le logo glisse jusqu'à l'objet d'ouverture de la page et le panneau s'ouvre en cercle depuis lui. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-goutte', { y: -120, opacity: 0, scaleY: 1.4 }, { y: 0, opacity: 1, scaleY: 1, duration: .38, ease: 'power2.in' }, .1)
      .to('.ouverture-goutte', { scale: 0, opacity: 0, duration: .15 }, .48)
      .fromTo('.ouverture-ondes circle', { scale: 0, opacity: .9 }, { scale: (i) => 1.6 + i * .9, opacity: 0, duration: 1.5, stagger: .12, ease: 'power2.out' }, .48)
      .to('.ouverture-nom, .ouverture-ligne', { opacity: 0, y: -8, duration: .35 }, 1.0);
    versObjet(tl, { a: 1.0 });
    montrerOuverture(tl, 1.5);
    return tl;
  },
  /* État final (retour arrière, secours) : tout est en place, sans animation. */
  etatFinal() {
    if (!gsap) return;
    gsap.set(BLOCS_GSAP, { opacity: 1 });
    gsap.set(LIGNES, { y: 0, yPercent: 0 });
    gsap.set('.hero-sur, .hero-intro, .hero-actions, .hero-signature, .ouv-contact-bulle', { clearProps: 'transform,opacity' });
    entrees.forEach(({ tw, fin }) => { try { tw.scrollTrigger && tw.scrollTrigger.kill(); tw.progress(1); fin && fin(); } catch {} });
  },
  /* Arrivée par un lien interne : le premier écran se met en place pendant que le voile se retire. */
  arrivee() {
    if (!gsap) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: .1 });
    montrerOuverture(tl, 0);
  },
});
