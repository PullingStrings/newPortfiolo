import { Link } from 'react-router-dom';
import { featuredProjectsById } from '@/data/homepage';
import { createClassNames } from '@/utils/cssModules';
import styles from './case-studies.module.css';

const css = createClassNames(styles);
const { dreamzone, finance, contact, repair } = featuredProjectsById;

export default function CaseStudies() {
  return (
    <main className={css('dz-index')}>
      <div className={css('dz-wrap')}>
        <div className={css('dz-topline')}>
          <span>TZ / Case studies</span>
          <span>Selected engineering work</span>
        </div>
        <header className={css('dz-index__head')}>
          <p className={css('dz-eyebrow dz-accent')}>Work / In depth</p>
          <h1>
            Case studies<span className={css('dz-accent')}>.</span>
          </h1>
          <p>
            A closer look at the decisions, systems and production challenges
            behind the work.
          </p>
        </header>
        <Link className={css('dz-index__item')} to={dreamzone.caseStudyPath}>
          <span className={css('dz-index__number')}>{dreamzone.index}</span>
          <video
            poster="/projects/dreamzone/id-polo-hero.jpg"
            aria-label="Blue Volkswagen ID. Polo in the Dreamzone experience"
            width="960"
            height="546"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/projects/dreamzone/dreamzone-hero-video.mp4"
              type="video/mp4"
            />
            <source
              src="/projects/dreamzone/dreamzone-hero-video.webm"
              type="video/webm"
            />
          </video>
          <span className={css('dz-index__copy')}>
            <small>Volkswagen / 2026 / Creative engineering</small>
            <strong>
              Dreamzone <sup>↗</sup>
            </strong>
            <span>
              From prototype to production. Video systems, tooling, GSAP and
              Safari recovery.
            </span>
          </span>
        </Link>
        <Link className={css('dz-index__item')} to={finance.caseStudyPath}>
          <span className={css('dz-index__number')}>{finance.index}</span>
          <img
            src="/projects/offers-finance/vw-offers-model-selection-2026-11-10.png"
            alt="Volkswagen Offers & Finance model-selection interface"
            width="960"
            height="546"
            loading="lazy"
          />
          <span className={css('dz-index__copy')}>
            <small>Volkswagen / 2026 / Product engineering</small>
            <strong>
              Offers &amp; Finance <sup>↗</sup>
            </strong>
            <span>
              Model discovery, finance calculations and comparison across a
              connected customer journey.
            </span>
          </span>
        </Link>
        <Link className={css('dz-index__item')} to={contact.caseStudyPath}>
          <span className={css('dz-index__number')}>{contact.index}</span>
          <img
            src={contact.media.src}
            alt="Samsung Contact customer-facing contact tiles"
            width="960"
            height="546"
            loading="lazy"
          />
          <span className={css('dz-index__copy')}>
            <small>Samsung UK / 2025 / Application architecture</small>
            <strong>
              Samsung Contact <sup>↗</sup>
            </strong>
            <span>
              Data-driven navigation, client-managed publishing and
              context-aware Sprinklr support.
            </span>
          </span>
        </Link>
        <Link className={css('dz-index__item')} to={repair.caseStudyPath}>
          <span className={css('dz-index__number')}>{repair.index}</span>
          <img
            src={repair.media.src}
            alt="Samsung Repair location and booking map"
            width="960"
            height="546"
            loading="lazy"
          />
          <span className={css('dz-index__copy')}>
            <small>Samsung UK / 2024–2025 / Integration engineering</small>
            <strong>
              Samsung Repair <sup>↗</sup>
            </strong>
            <span>
              Legacy systems, external booking services, store verification and
              repair journeys.
            </span>
          </span>
        </Link>
      </div>
    </main>
  );
}
