import { Link } from 'react-router-dom';
import './case-studies.css';

export default function CaseStudies() {
  return (
    <main className="dz-index">
      <div className="dz-wrap">
        <div className="dz-topline"><span>TZ / Case studies</span><span>Selected engineering work</span></div>
        <header className="dz-index__head">
          <p className="dz-eyebrow dz-accent">Work / In depth</p>
          <h1>Case studies<span className="dz-accent">.</span></h1>
          <p>A closer look at the decisions, systems and production challenges behind the work.</p>
        </header>
        <Link className="dz-index__item" to="/case-studies/volkswagen-dreamzone">
          <span className="dz-index__number">01</span>
          <video
            poster="/projects/dreamzone/id-polo-hero.jpeg"
            aria-label="Blue Volkswagen ID. Polo in the Dreamzone experience"
            width="960"
            height="546"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/projects/dreamzone/dreamzone-hero-video.mp4" type="video/mp4" />
            <source src="/projects/dreamzone/dreamzone-hero-video.webm" type="video/webm" />
          </video>
          <span className="dz-index__copy"><small>Volkswagen / 2026 / Creative engineering</small><strong>Dreamzone ↗</strong><span>From prototype to production. Video systems, tooling, GSAP and Safari recovery.</span></span>
        </Link>
        <Link className="dz-index__item" to="/case-studies/volkswagen-offers-finance">
          <span className="dz-index__number">02</span>
          <img src="/projects/offers-finance/vw-offers-model-selection-2026-11-10.png" alt="Volkswagen Offers & Finance model-selection interface" width="1440" height="900" loading="lazy" />
          <span className="dz-index__copy"><small>Volkswagen / 2026 / Product engineering</small><strong>Offers &amp; Finance ↗</strong><span>Model discovery, finance calculations and comparison across a connected customer journey.</span></span>
        </Link>
        <p className="dz-note">More case studies will appear here as they're completed and reviewed.</p>
      </div>
    </main>
  );
}
