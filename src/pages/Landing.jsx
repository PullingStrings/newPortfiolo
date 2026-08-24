import './landing.css';

const projects = [
  {
    index: '01',
    title: 'Volkswagen Dreamzone',
    kicker: 'Volkswagen / Dreamzone / 2026',
    copy: 'Scroll-driven storytelling engineered for production across ID. Polo, GTI 50 and ID. Cross — combining video, animation, product interaction and campaign-specific content.',
    meta: ['Creative development', 'GSAP / ScrollTrigger', 'Video systems', 'Safari / iOS resilience'],
    className: 'project-row--campaign project-row--dreamzone',
    accent: 'Prototype → system → production',
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
    className: '',
    accent: 'A small application hiding inside a support page.',
  },
  {
    index: '04',
    title: 'Samsung Support / Repair',
    kicker: 'Samsung UK / Cheil / 2024—2025',
    copy: 'Legacy support and repair journeys made clearer across booking, map and appointment screens, with vendor availability driven by service data across multiple repair types.',
    meta: ['Vanilla JavaScript', 'PHP', 'API-driven availability', 'Legacy systems'],
    className: 'project-row--mirror',
    accent: 'Complex systems made clear.',
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
  return (
    <article className={`project-row ${project.className}`}>
      <div className="project-row__number" aria-hidden="true">{project.index}</div>
      <figure className={`project-row__media ${project.media ? 'project-row__media--real' : ''}`}>
        {project.media ? (
          <>
            <img
              src={project.media.src}
              alt={project.media.alt}
              loading={project.media.loading}
              width={project.media.width}
              height={project.media.height}
            />
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
