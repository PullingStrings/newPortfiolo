import { useEffect, useRef } from 'react';
import './landing.css';
import './motion.css';

const projects = [
  {
    index: '01',
    title: 'Volkswagen Dreamzone',
    kicker: 'Volkswagen / Dreamzone / 2026',
    copy: 'Scroll-driven storytelling engineered for production across ID. Polo, GTI 50 and ID. Cross — combining video, animation, product interaction and campaign-specific content.',
    meta: ['Creative development', 'GSAP / ScrollTrigger', 'Video systems', 'Safari / iOS resilience'],
    className: 'project-row--campaign project-row--dreamzone',
    accent: 'Prototype → system → production',
    motion: 'dreamzone',
    media: {
      src: '/projects/dreamzone/cover.png',
      alt: 'A montage of Volkswagen Dreamzone experiences for ID. Cross, ID. Polo and GTI 50',
      label: 'GTI 50 / DREAMZONE',
      loading: 'eager',
      width: 1397,
      height: 785,
    },
  },
  {
    index: '02',
    title: 'Volkswagen Offers & Finance',
    kicker: 'Volkswagen / Finance / 2026',
    copy: 'A responsive finance journey for discovering vehicles, calculating PCP and PCH offers, comparing options and submitting customer enquiries against live vehicle and finance data.',
    meta: ['Transactional UI', 'Filtering / comparison', 'Responsive systems', 'Accessibility'],
    className: 'project-row--mirror project-row--finance',
    accent: 'Campaign pace. Production finance complexity.',
    motion: 'finance',
    media: {
      src: '/projects/offers-finance/cover.png',
      alt: 'Volkswagen New Car Finance Offers model-selection journey',
      label: 'OFFERS / FINANCE / COMPARE',
      loading: 'lazy',
      width: 3338,
      height: 1996,
    },
  },
  {
    index: '03',
    title: 'Samsung Contact',
    kicker: 'Samsung UK / Cheil / 2025',
    copy: 'A reusable, data-driven contact journey inside Samsung’s AEM ecosystem, orchestrating nested navigation, contact methods, Sprinklr live chat, consent, analytics and accessibility.',
    meta: ['AEM', 'Sprinklr', 'Data-driven UI', 'CMP / analytics'],
    className: 'project-row--contact',
    accent: 'Help, made clear.',
    motion: 'contact',
    interruption: ['HELP', 'MADE', 'CLEAR.'],
    media: {
      src: '/contact-us.png',
      alt: 'Samsung Contact Us support journey with product and contact option tiles',
      label: 'CONTACT / SUPPORT / SPRINKLR',
      loading: 'lazy',
      width: 1600,
      height: 900,
    },
  },
  {
    index: '04',
    title: 'Samsung Support / Repair',
    kicker: 'Samsung UK / Cheil / 2024—2025',
    copy: 'Legacy support and repair journeys made clearer across booking, map and appointment screens, with vendor availability driven by service data across multiple repair types.',
    meta: ['Vanilla JavaScript', 'PHP', 'API-driven availability', 'Legacy systems'],
    className: 'project-row--mirror project-row--repair',
    accent: 'Complex systems made clear.',
    motion: 'repair',
    media: {
      src: '/projects/samsung-repair/vendor-map.png',
      alt: 'Samsung repair booking map showing nearby repair vendors and booking availability',
      label: 'VENDOR / AVAILABILITY / BOOKING',
      loading: 'lazy',
      width: 1536,
      height: 1024,
    },
    secondaryMedia: {
      src: '/projects/samsung-repair/repair-options.png',
      alt: 'Samsung repair journey showing in-home repair and trade-up options',
      width: 1240,
      height: 1240,
    },
  },
];

const shipped = [
  {
    title: 'Galaxy Unpacked / flagship work',
    meta: 'Samsung / campaign delivery',
    copy: 'Responsive campaign and production work within Samsung’s wider flagship and launch ecosystem.',
  },
  {
    title: 'Sprinklr live chat integrations',
    meta: 'Samsung / support',
    copy: 'Consent-aware chat routing, conversation state, contextual behaviour and production integration.',
  },
  {
    title: 'Live chat wait-time service',
    meta: 'Samsung / AWS / Sprinklr',
    copy: 'A frontend wait-time experience backed by API Gateway and Lambda to safely bridge Sprinklr data into Samsung.com.',
  },
  {
    title: 'Trade-in tooling',
    meta: 'Samsung / commerce',
    copy: 'Data-driven comparison UI, SKU mapping, sticky table behaviour and resilient API fallbacks.',
  },
  {
    title: 'KX / Quidini journeys',
    meta: 'Samsung / retail experience',
    copy: 'Store-selection and booking integrations built around existing Samsung and third-party systems.',
  },
  {
    title: 'Qualtrics / survey experiences',
    meta: 'Samsung / optimisation',
    copy: 'Timed and consent-aware intercept experiences with controlled frequency and production-safe behaviour.',
  },
];

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const mix = (from, to, progress) => from + (to - from) * progress;
const phase = (progress, start, end) => clamp((progress - start) / (end - start));

function setMotionVariables(element, profile, progress) {
  const reveal = phase(progress, 0.05, 0.72);
  const settle = phase(progress, 0.66, 1);
  const late = phase(progress, 0.44, 0.88);
  const direction = element.classList.contains('project-row--mirror') ? -1 : 1;

  let numberX = mix(86 * direction, 0, progress);
  let numberY = mix(-24, 0, progress);
  let mediaX = 0;
  let mediaY = mix(42, 0, reveal);
  let mediaScale = mix(0.965, 1, reveal);
  let infoY = mix(34, 0, phase(progress, 0.12, 0.68));
  let interruptionX = mix(-72, 0, late);
  let interruptionY = mix(34, 0, late);
  let secondaryX = mix(-54, 0, late);
  let secondaryY = mix(58, 0, late);
  let secondaryRotate = mix(-3, 0, late);
  let clipRadius = mix(10, 150, reveal);

  if (profile === 'dreamzone') {
    numberX = mix(112, 18, progress);
    numberY = mix(-34, 8, progress);
    mediaX = mix(-14, 0, settle);
    mediaY = progress < 0.62 ? mix(54, -16, phase(progress, 0, 0.62)) : mix(-16, 0, settle);
    mediaScale = progress < 0.62 ? mix(0.94, 1.015, phase(progress, 0, 0.62)) : mix(1.015, 1, settle);
    infoY = mix(42, 0, phase(progress, 0.16, 0.72));
  }

  if (profile === 'finance') {
    numberX = mix(-58, 0, progress);
    numberY = mix(-12, 0, progress);
    mediaY = mix(22, 0, phase(progress, 0.12, 0.62));
    mediaScale = mix(0.985, 1, phase(progress, 0.12, 0.62));
    infoY = mix(18, 0, phase(progress, 0.1, 0.58));
  }

  if (profile === 'contact') {
    numberX = mix(104, 16, progress);
    numberY = mix(-30, 6, progress);
    mediaY = mix(58, 0, phase(progress, 0.04, 0.72));
    mediaScale = mix(0.95, 1, phase(progress, 0.04, 0.72));
    interruptionX = mix(-110, 0, phase(progress, 0.46, 0.9));
    interruptionY = mix(56, 0, phase(progress, 0.46, 0.9));
    clipRadius = mix(7, 150, phase(progress, 0.08, 0.7));
  }

  if (profile === 'repair') {
    numberX = mix(-92, 0, progress);
    numberY = mix(-18, 0, progress);
    mediaX = mix(34, 0, phase(progress, 0.08, 0.66));
    mediaY = mix(28, 0, phase(progress, 0.08, 0.66));
    mediaScale = mix(0.975, 1, phase(progress, 0.08, 0.66));
    secondaryX = mix(-82, 0, phase(progress, 0.4, 0.9));
    secondaryY = mix(76, 0, phase(progress, 0.4, 0.9));
    secondaryRotate = mix(-5, 0, phase(progress, 0.4, 0.9));
    infoY = mix(28, 0, phase(progress, 0.18, 0.7));
  }

  element.style.setProperty('--motion-number-x', `${numberX.toFixed(2)}px`);
  element.style.setProperty('--motion-number-y', `${numberY.toFixed(2)}px`);
  element.style.setProperty('--motion-media-x', `${mediaX.toFixed(2)}px`);
  element.style.setProperty('--motion-media-y', `${mediaY.toFixed(2)}px`);
  element.style.setProperty('--motion-media-scale', mediaScale.toFixed(4));
  element.style.setProperty('--motion-info-y', `${infoY.toFixed(2)}px`);
  element.style.setProperty('--motion-interruption-x', `${interruptionX.toFixed(2)}px`);
  element.style.setProperty('--motion-interruption-y', `${interruptionY.toFixed(2)}px`);
  element.style.setProperty('--motion-secondary-x', `${secondaryX.toFixed(2)}px`);
  element.style.setProperty('--motion-secondary-y', `${secondaryY.toFixed(2)}px`);
  element.style.setProperty('--motion-secondary-rotate', `${secondaryRotate.toFixed(2)}deg`);
  element.style.setProperty('--motion-clip-radius', `${clipRadius.toFixed(2)}%`);
}

function useProjectMotion(rootRef, profile) {
  useEffect(() => {
    const element = rootRef.current;
    if (!element || !profile) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) {
      element.dataset.motionReady = 'false';
      return undefined;
    }

    let frame = null;

    const update = () => {
      frame = null;
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const start = viewport * 0.86;
      const end = viewport * 0.16;
      const travel = rect.height + start - end;
      const progress = clamp((start - rect.top) / Math.max(travel, 1));

      setMotionVariables(element, profile, progress);
      element.dataset.motionReady = 'true';
    };

    const requestUpdate = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [profile, rootRef]);
}

function SectionHeading({ index, eyebrow, title, copy }) {
  return (
    <header className="section-heading">
      <div className="section-heading__index">{index}</div>
      <div>
        <div className="section-heading__eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </header>
  );
}

function ProjectRow({ project }) {
  const rootRef = useRef(null);
  useProjectMotion(rootRef, project.motion);

  return (
    <article
      ref={rootRef}
      className={`project-row ${project.className}`}
      data-motion-profile={project.motion}
      data-motion-ready="false"
    >
      <div className="project-row__number" aria-hidden="true">{project.index}</div>
      <figure className={`project-row__media ${project.media ? 'project-row__media--real' : ''}`}>
        {project.media ? (
          <>
            <div className="project-row__media-reveal">
              <img
                src={project.media.src}
                alt={project.media.alt}
                loading={project.media.loading}
                width={project.media.width}
                height={project.media.height}
              />
            </div>
            {project.secondaryMedia && (
              <img
                className="project-row__secondary-media"
                src={project.secondaryMedia.src}
                alt={project.secondaryMedia.alt}
                loading="lazy"
                width={project.secondaryMedia.width}
                height={project.secondaryMedia.height}
              />
            )}
            {project.interruption && (
              <span className="project-row__interruption" aria-hidden="true">
                {project.interruption.map((line) => <span key={line}>{line}</span>)}
              </span>
            )}
            <figcaption>{project.media.label}</figcaption>
          </>
        ) : (
          <span>{project.kicker}</span>
        )}
      </figure>
      <div className="project-row__info">
        <div className="project-row__kicker">{project.kicker}</div>
        <h3>{project.title}</h3>
        <p>{project.copy}</p>
        <strong className="project-row__accent">{project.accent}</strong>
        <div className="project-row__meta">
          {project.meta.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </article>
  );
}

function ShippedArchive() {
  return (
    <section className="shipped home-section" id="shipped">
      <SectionHeading
        index="02"
        eyebrow="Archive / smaller work"
        title="Other things I shipped."
        copy="Not everything needs a full case study. This is the long tail: integrations, production features, smaller campaigns and systems that still mattered."
      />
      <div className="shipped-list">
        {shipped.map((item, index) => (
          <article className="shipped-item" key={item.title}>
            <span className="shipped-item__index">{String(index + 1).padStart(2, '0')}</span>
            <div className="shipped-item__title">
              <span>{item.meta}</span>
              <h3>{item.title}</h3>
            </div>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
      <p className="shipped-note">More small projects can live here as we recover them — without turning every shipped feature into a case study.</p>
    </section>
  );
}

export default function Landing() {
  return (
    <main className="home-shell">
      <section className="hero-v2 home-section" id="top">
        <div className="hero-v2__meta">
          <span>Tito Zwane / Front-end developer</span>
          <span>London / Available for good problems</span>
        </div>

        <h1 className="hero-v2__title">
          <span>Tito</span>
          <span>Zwane</span>
        </h1>

        <div className="hero-v2__bottom">
          <p className="hero-v2__statement">
            Make the work clear. <em>Make Tito weird.</em>
          </p>
          <p className="hero-v2__intro">
            I build front-end experiences where product clarity, editorial rhythm and a little cultural noise can live together.
          </p>
        </div>
      </section>

      <section className="work-index home-section" id="projects">
        <SectionHeading
          index="01"
          eyebrow="Featured work"
          title="Four projects. Four different engineering problems."
          copy="Recent work first. The visual language stays related, but each project earns its own level of expression based on the source material and the problem underneath it."
        />
        {projects.map((project) => <ProjectRow key={project.index} project={project} />)}
      </section>

      <ShippedArchive />

      <section className="about-v2 home-section" id="about">
        <SectionHeading
          index="03"
          eyebrow="About / approach"
          title="Code, music and visual culture — without turning the portfolio into a developer cliché."
        />
        <div className="about-grid">
          <div className="about-grid__aside">
            Front-end systems<br />
            Creative development<br />
            Interaction<br />
            Production thinking
          </div>
          <p className="about-grid__copy">
            I came to development through creative work, so I care about both sides of the build: <strong>how it works</strong> and how it feels when somebody meets it.
          </p>
        </div>
      </section>

      <section className="contact-v2 home-section" id="contact">
        <div className="contact-panel">
          <h2>Have a good problem?</h2>
          <a href="/contact">Start a conversation →</a>
        </div>
      </section>
    </main>
  );
}
