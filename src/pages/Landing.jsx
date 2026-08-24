import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './landing.css';
import './motion.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    index: '01', title: 'Volkswagen Dreamzone', kicker: 'Volkswagen / Dreamzone / 2026',
    copy: 'Scroll-driven storytelling engineered for production across ID. Polo, GTI 50 and ID. Cross — combining video, animation, product interaction and campaign-specific content.',
    meta: ['Creative development', 'GSAP / ScrollTrigger', 'Video systems', 'Safari / iOS resilience'],
    className: 'project-row--campaign project-row--dreamzone', accent: 'Prototype → system → production',
    motion: { archetype: 'loud', mirror: true, intensity: 1, finalNumberX: 18, end: 1800 },
    media: { src: '/projects/dreamzone/cover.png', alt: 'A montage of Volkswagen Dreamzone experiences for ID. Cross, ID. Polo and GTI 50', label: 'GTI 50 / DREAMZONE', loading: 'eager', width: 1397, height: 785 },
  },
  {
    index: '02', title: 'Volkswagen Offers & Finance', kicker: 'Volkswagen / Finance / 2026',
    copy: 'A responsive finance journey for discovering vehicles, calculating PCP and PCH offers, comparing options and submitting customer enquiries against live vehicle and finance data.',
    meta: ['Transactional UI', 'Filtering / comparison', 'Responsive systems', 'Accessibility'],
    className: 'project-row--mirror project-row--finance', accent: 'Campaign pace. Production finance complexity.',
    motion: { archetype: 'quiet', mirror: true, intensity: .56, finalNumberX: 0, end: 1350, ghost: false },
    media: { src: '/projects/offers-finance/cover.png', alt: 'Volkswagen New Car Finance Offers model-selection journey', label: 'OFFERS / FINANCE / COMPARE', loading: 'lazy', width: 3338, height: 1996 },
  },
  {
    index: '03', title: 'Samsung Contact', kicker: 'Samsung UK / Cheil / 2025',
    copy: 'A reusable, data-driven contact journey inside Samsung’s AEM ecosystem, orchestrating nested navigation, contact methods, Sprinklr live chat, consent, analytics and accessibility.',
    meta: ['AEM', 'Sprinklr', 'Data-driven UI', 'CMP / analytics'],
    className: 'project-row--contact', accent: 'Help, made clear.', interruption: ['HELP', 'MADE', 'CLEAR.'],
    motion: { archetype: 'quiet', mirror: false, intensity: 1, finalNumberX: 20, end: 1800, ghost: true },
    media: { src: '/contact-us.png', alt: 'Samsung Contact Us support journey with product and contact option tiles', label: 'CONTACT / SUPPORT / SPRINKLR', loading: 'lazy', width: 1600, height: 900 },
  },
  {
    index: '04', title: 'Samsung Support / Repair', kicker: 'Samsung UK / Cheil / 2024—2025',
    copy: 'Legacy support and repair journeys made clearer across booking, map and appointment screens, with vendor availability driven by service data across multiple repair types.',
    meta: ['Vanilla JavaScript', 'PHP', 'API-driven availability', 'Legacy systems'],
    className: 'project-row--mirror project-row--repair', accent: 'Complex systems made clear.',
    motion: { archetype: 'quiet', mirror: true, intensity: .92, finalNumberX: 0, end: 1800, ghost: true, secondaryCue: true },
    media: { src: '/projects/samsung-repair/vendor-map.png', alt: 'Samsung repair booking map showing nearby repair vendors and booking availability', label: 'VENDOR / AVAILABILITY / BOOKING', loading: 'lazy', width: 1536, height: 1024 },
    secondaryMedia: { src: '/projects/samsung-repair/repair-options.png', alt: 'Samsung repair journey showing in-home repair and trade-up options', width: 1240, height: 1240 },
  },
];

const shipped = [
  ['Galaxy Unpacked / flagship work','Samsung / campaign delivery','Responsive campaign and production work within Samsung’s wider flagship and launch ecosystem.'],
  ['Sprinklr live chat integrations','Samsung / support','Consent-aware chat routing, conversation state, contextual behaviour and production integration.'],
  ['Live chat wait-time service','Samsung / AWS / Sprinklr','A frontend wait-time experience backed by API Gateway and Lambda to safely bridge Sprinklr data into Samsung.com.'],
  ['Trade-in tooling','Samsung / commerce','Data-driven comparison UI, SKU mapping, sticky table behaviour and resilient API fallbacks.'],
  ['KX / Quidini journeys','Samsung / retail experience','Store-selection and booking integrations built around existing Samsung and third-party systems.'],
  ['Qualtrics / survey experiences','Samsung / optimisation','Timed and consent-aware intercept experiences with controlled frequency and production-safe behaviour.'],
].map(([title, meta, copy]) => ({ title, meta, copy }));

function useProjectMotion(rootRef, motion) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || !motion || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);
      const number = q('.project-row__number');
      const media = q('.project-row__media');
      const reveal = q('.project-row__media-reveal');
      const info = q('.project-row__info');
      const dot = q('.project-row__motion-dot');
      const accent = q('.project-row__motion-accent');
      const interruption = q('.project-row__interruption');
      const secondary = q('.project-row__secondary-media');
      const { archetype, mirror, intensity = 1, finalNumberX = 0, end = 1800, secondaryCue = false } = motion;

      const origin = mirror ? '22% 27%' : '78% 27%';
      const startNumberX = (mirror ? -120 : 120) * intensity;
      const midNumberX = (mirror ? 82 : -82) * intensity;
      const interruptionStartX = (mirror ? 150 : -150) * intensity;
      const mediaMidX = (mirror ? -18 : 18) * intensity;
      const interruptionMidX = (mirror ? -18 : 18) * intensity;
      const quietScale = archetype === 'quiet' ? intensity : 1;

      gsap.set(number, { x: startNumberX, y: -36 * quietScale, rotation: (mirror ? -2 : 2) * quietScale, scale: .92 + (.08 * (1 - quietScale)), opacity: 1 });
      gsap.set(media, { y: 72 * quietScale, scale: 1 - (.05 * quietScale), x: 0 });
      gsap.set(reveal, { clipPath: `circle(${14 + (18 * (1 - quietScale))}px at ${origin})` });
      gsap.set(dot, { scale: 1, opacity: 1, left: mirror ? '22%' : '78%', top: '27%' });
      gsap.set(accent, { scaleY: .15, transformOrigin: 'bottom' });
      gsap.set(info, { y: 28 * quietScale });

      if (interruption.length) {
        gsap.set(interruption, { x: interruptionStartX, y: 90 * quietScale, rotation: (mirror ? 3 : -3) * quietScale, opacity: 1 });
      }

      if (secondary.length && secondaryCue) {
        gsap.set(secondary, { x: (mirror ? -130 : 130) * intensity, y: 110 * intensity, rotation: (mirror ? -5 : 5) * intensity, opacity: 0 });
      }

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: root,
          start: 'top top+=8%',
          end: `+=${end}`,
          scrub: 1.1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(number, { x: finalNumberX, y: 58 * quietScale, rotation: 0, scale: 1, duration: .74 }, 0)
        .to(media, { y: 12 * quietScale, scale: 1, duration: .18 }, .08)
        .to(info, { y: 0, duration: .2 }, .1)
        .to(dot, { scale: 1.15, duration: .06 }, .10)
        .to(reveal, { clipPath: `circle(${36 + (18 * (1 - quietScale))}px at ${origin})`, duration: .08 }, .10)
        .to(reveal, { clipPath: `circle(${140 * quietScale + 80 * (1 - quietScale)}px at ${origin})`, duration: .14 }, .18)
        .to(reveal, { clipPath: `circle(${340 * quietScale + 180 * (1 - quietScale)}px at ${origin})`, duration: .16 }, .32)
        .to(dot, { opacity: 0, duration: .08 }, .40)
        .to(accent, { scaleY: 1, duration: .12 }, .44)
        .to(reveal, { clipPath: `circle(140% at ${origin})`, duration: .18 }, .48)
        .to(media, { y: -22 * quietScale, x: mediaMidX, duration: .22 }, .58)
        .to(number, { x: midNumberX, y: 92 * quietScale, duration: .22 }, .58);

      if (interruption.length) {
        tl.to(interruption, { x: 0, y: 0, rotation: 0, duration: .18 }, .62)
          .to(interruption, { x: interruptionMidX, y: -8 * quietScale, duration: .18 }, .78);
      }

      if (secondary.length && secondaryCue) {
        tl.to(secondary, { x: -12 * intensity, y: 12 * intensity, rotation: -1 * intensity, opacity: 1, duration: .2 }, .66)
          .to(secondary, { x: 0, y: 0, rotation: 0, opacity: 1, duration: .18 }, .84);
      }

      tl.to(media, { x: 0, y: 0, scale: 1, duration: .18 }, .86)
        .to(number, { x: finalNumberX, y: 0, rotation: 0, scale: 1, opacity: 1, duration: .18 }, .86);

      if (interruption.length) {
        tl.to(interruption, { x: 0, y: 0, rotation: 0, duration: .18 }, .86);
      }
    }, root);

    return () => ctx.revert();
  }, [motion]);
}

function SectionHeading({ index, eyebrow, title, copy }) {
  return <header className="section-heading"><div className="section-heading__index">{index}</div><div><div className="section-heading__eyebrow">{eyebrow}</div><h2>{title}</h2>{copy && <p>{copy}</p>}</div></header>;
}

function ProjectRow({ project }) {
  const rootRef = useRef(null);
  useProjectMotion(rootRef, project.motion);
  const showGhost = project.motion?.archetype === 'quiet' && project.motion?.ghost;

  return <article ref={rootRef} className={`project-row ${project.className}`} data-motion-archetype={project.motion?.archetype}>
    <div className="project-row__number" aria-hidden="true">{project.index}</div>
    <figure className="project-row__media project-row__media--real">
      <div className="project-row__media-reveal">
        <img src={project.media.src} alt={project.media.alt} loading={project.media.loading} width={project.media.width} height={project.media.height} />
        {showGhost && <span className="project-row__motion-ghost" aria-hidden="true">{project.index}</span>}
        <span className="project-row__motion-accent" aria-hidden="true" />
      </div>
      <span className="project-row__motion-dot" aria-hidden="true" />
      {project.secondaryMedia && <img className="project-row__secondary-media" src={project.secondaryMedia.src} alt={project.secondaryMedia.alt} loading="lazy" width={project.secondaryMedia.width} height={project.secondaryMedia.height} />}
      {project.interruption && <span className="project-row__interruption" aria-hidden="true">{project.interruption.map((line) => <span key={line}>{line}</span>)}</span>}
      <figcaption>{project.media.label}</figcaption>
    </figure>
    <div className="project-row__info"><div className="project-row__kicker">{project.kicker}</div><h3>{project.title}</h3><p>{project.copy}</p><strong className="project-row__accent">{project.accent}</strong><div className="project-row__meta">{project.meta.map((item) => <span key={item}>{item}</span>)}</div></div>
  </article>;
}

function ShippedArchive() {
  return <section className="shipped home-section" id="shipped"><SectionHeading index="02" eyebrow="Archive / smaller work" title="Other things I shipped." copy="Not everything needs a full case study. This is the long tail: integrations, production features, smaller campaigns and systems that still mattered." /><div className="shipped-list">{shipped.map((item, index) => <article className="shipped-item" key={item.title}><span className="shipped-item__index">{String(index + 1).padStart(2, '0')}</span><div className="shipped-item__title"><span>{item.meta}</span><h3>{item.title}</h3></div><p>{item.copy}</p></article>)}</div><p className="shipped-note">More small projects can live here as we recover them — without turning every shipped feature into a case study.</p></section>;
}

export default function Landing() {
  return <main className="home-shell"><section className="hero-v2 home-section" id="top"><div className="hero-v2__meta"><span>Tito Zwane / Front-end developer</span><span>London / Available for good problems</span></div><h1 className="hero-v2__title"><span>Tito</span><span>Zwane</span></h1><div className="hero-v2__bottom"><p className="hero-v2__statement">Make the work clear. <em>Make Tito weird.</em></p><p className="hero-v2__intro">I build front-end experiences where product clarity, editorial rhythm and a little cultural noise can live together.</p></div></section><section className="work-index home-section" id="projects"><SectionHeading index="01" eyebrow="Featured work" title="Four projects. Four different engineering problems." copy="Recent work first. The visual language stays related, but each project earns its own level of expression based on the source material and the problem underneath it." />{projects.map((project) => <ProjectRow key={project.index} project={project} />)}</section><ShippedArchive /><section className="about-v2 home-section" id="about"><SectionHeading index="03" eyebrow="About / approach" title="Code, music and visual culture — without turning the portfolio into a developer cliché." /><div className="about-grid"><div className="about-grid__aside">Front-end systems<br />Creative development<br />Interaction<br />Production thinking</div><p className="about-grid__copy">I came to development through creative work, so I care about both sides of the build: <strong>how it works</strong> and how it feels when somebody meets it.</p></div></section><section className="contact-v2 home-section" id="contact"><div className="contact-panel"><h2>Have a good problem?</h2><a href="/contact">Start a conversation →</a></div></section></main>;
}
