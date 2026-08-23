import './landing.css';

const projects = [
  {
    index: '01',
    title: 'Samsung Support',
    kicker: 'Samsung UK / Cheil',
    copy: 'Support, repair and contact journeys shaped into clearer front-end systems for a high-traffic production ecosystem.',
    meta: ['Front-end development', 'Support / Repair', '2020—2026'],
    className: '',
  },
  {
    index: '02',
    title: 'Galaxy Unpacked',
    kicker: 'Campaign / Experience',
    copy: 'A louder visual world where the portfolio system steps back and lets campaign art carry more of the expression.',
    meta: ['Campaign development', 'Responsive experience', 'Samsung UK'],
    className: 'project-row--mirror project-row--campaign',
  },
  {
    index: '03',
    title: 'Selected Systems',
    kicker: 'Commerce / Product / Platform',
    copy: 'A home for the broader engineering work: reusable front-end patterns, commerce journeys and production systems.',
    meta: ['React', 'TypeScript', 'AEM'],
    className: '',
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
      <div className="project-row__media" aria-label={`${project.title} project media placeholder`} />
      <div className="project-row__info">
        <div className="project-row__kicker">{project.kicker}</div>
        <h3>{project.title}</h3>
        <p>{project.copy}</p>
        <div className="project-row__meta">
          {project.meta.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </article>
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
          eyebrow="Selected work"
          title="The work stays clear. The system gets expressive around it."
          copy="Step 7 is the real homepage skeleton: project rhythm first, then we graduate the approved image treatments and motion into these slots."
        />
        {projects.map((project) => <ProjectRow key={project.index} project={project} />)}
      </section>

      <section className="about-v2 home-section" id="about">
        <SectionHeading
          index="02"
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
