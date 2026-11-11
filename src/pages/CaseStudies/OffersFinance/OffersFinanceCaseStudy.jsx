import { Link } from 'react-router-dom';
import '../../CaseStudyLanding/case-studies.css';
import './offers-finance.css';

const capture = (name) =>
  `/projects/offers-finance/vw-offers-${name}-2026-11-10.png`;

function Chapter({ number, label, title, children }) {
  return (
    <section className="dz-chapter">
      <div className="dz-wrap dz-chapter__grid">
        <div>
          <p className="dz-eyebrow dz-accent">
            {number} / {label}
          </p>
          <h2>{title}</h2>
        </div>
        <div className="dz-chapter__copy">{children}</div>
      </div>
    </section>
  );
}

function InterfaceFigure({ src, alt, label, note }) {
  return (
    <figure className="of-figure">
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open full screenshot: ${label}`}
      >
        <img src={src} alt={alt} loading="lazy" />
      </a>
      <figcaption>
        <strong>{label}</strong>
        <span>{note}</span>
        <a href={src} target="_blank" rel="noopener noreferrer">
          Open full capture ↗
        </a>
      </figcaption>
    </figure>
  );
}

export default function OffersFinanceCaseStudy() {
  return (
    <main className="dz-case of-case">
      <div className="dz-wrap">
        <div className="dz-topline">
          <Link to="/case-studies">← All case studies</Link>
          <span>02 — Volkswagen / 2026</span>
        </div>
      </div>

      <header className="of-hero dz-wrap">
        <div className="of-hero__heading">
          <span className="of-hero__number" aria-hidden="true">
            02
          </span>
          <div>
            <p className="dz-eyebrow dz-accent">
              Case Study 02 / Product engineering
            </p>
            <h1>
              Offers &amp;
              <br />
              Finance<span className="dz-accent">.</span>
            </h1>
            <p className="of-hero__dek">Complex finance. Clearer choices.</p>
          </div>
        </div>
        <div className="of-laptop">
          <div className="of-laptop__screen">
            <a
              href={capture('model-selection')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open full model-selection screenshot"
            >
              <img
                src={capture('model-selection')}
                alt="Volkswagen New Car Finance Offers model selection screen, captured on 10 November 2026"
                width="1440"
                height="900"
                fetchPriority="high"
              />
            </a>
          </div>
          <div className="of-laptop__base" aria-hidden="true" />
        </div>
        <p className="of-hero__caption">
          Fig. 01 / Model selection — live interface capture, 10 November 2026
        </p>
        <div className="of-hero__meta">
          <span>Role / Front-end development</span>
          <span>React · XState · Responsive UI</span>
          <span>Volkswagen / 2026</span>
        </div>
      </header>

      <Chapter
        number="00"
        label="Introduction"
        title={
          <>
            A clearer
            <br />
            route to
            <br />
            an offer.
          </>
        }
      >
        <p>
          Volkswagen’s Offers &amp; Finance experience needed a substantial
          refresh across model and trim selection, personalised finance
          calculations, comparison and enquiry.
        </p>
        <p>
          I was responsible for most of the front-end refresh, working across
          the journey rather than one isolated screen. A junior developer helped
          with styling corrections, late client changes and QA findings.
        </p>
        <p>
          The product challenge was to make a complicated set of choices feel
          coherent while the underlying vehicle and finance data could change.
        </p>
      </Chapter>

      <Chapter
        number="01"
        label="Rebuilding the journey"
        title={
          <>
            Start with
            <br />
            the right
            <br />
            vehicle.
          </>
        }
      >
        <p>
          The journey begins with model discovery and filtering, then moves into
          trim selection. People can select an individual trim or several trims
          before progressing to the available finance offers.
        </p>
        <p>
          Each step needs to give enough context for a decision without
          overwhelming the next one. The refreshed interface makes the
          progression from vehicle to offer explicit.
        </p>
      </Chapter>
      <div className="dz-wrap of-media-block">
        <InterfaceFigure
          src={capture('select-trim')}
          alt="Polo trim selection with multiple trim options and a next-step control"
          label="Fig. 02 / Select trim"
          note="Desktop capture · 10 November 2026"
        />
      </div>

      <Chapter
        number="02"
        label="Managing complexity"
        title={
          <>
            Keep every
            <br />
            choice in
            <br />
            sync.
          </>
        }
      >
        <p>
          Managing state across the journey was the central engineering problem.
          Users could select multiple trims, switch engines, move between PCP
          and PCH, adjust calculations and add offers to comparison. Each offer
          still had to stay attached to the right vehicle configuration.
        </p>
        <p>
          I worked with React and XState to coordinate asynchronous API
          responses, loading states and calculation changes. When an upstream
          choice changed, stale calculations had to be cleared before presenting
          the next valid result.
        </p>
        <p>
          Deep links added another edge case: a stock vehicle could point to a
          trim no longer present in the live catalogue. That path needed to be
          handled without presenting a mismatched offer as though it were
          current.
        </p>
      </Chapter>
      <div className="dz-wrap of-media-block">
        <ol
          className="of-state-line"
          aria-label="Conceptual relationship between vehicle selection and an offer"
        >
          <li>Model + trim</li>
          <li>Engine</li>
          <li>PCP or PCH</li>
          <li>Calculation</li>
          <li>Comparison</li>
        </ol>
        <p className="dz-note">
          Conceptual dependency sequence, not a reproduction of the XState
          machine.
        </p>
        <div className="of-figure-pair">
          <InterfaceFigure
            src={capture('pcp-calculator')}
            alt="Polo Life PCP calculator controls alongside a representative finance example"
            label="Fig. 03 / PCP"
            note="Personalised calculation"
          />
          <InterfaceFigure
            src={capture('pch-calculator')}
            alt="Polo Life PCH calculator controls alongside a representative finance example"
            label="Fig. 04 / PCH"
            note="Different product, related choices"
          />
        </div>
      </div>

      <Chapter
        number="03"
        label="Comparing decisions"
        title={
          <>
            Different
            <br />
            offers. One
            <br />
            clear view.
          </>
        }
      >
        <p>
          Comparison had to preserve the relationship between each finance
          product, its calculation and its vehicle configuration. A single saved
          offer and a side-by-side comparison are different reading tasks, so
          both states needed to remain understandable.
        </p>
        <p>
          The interface lets people move from one offer to several without
          losing the detail behind each choice.
        </p>
      </Chapter>
      <div className="dz-wrap of-media-block of-media-block--comparison">
        <div className="of-figure-pair">
          <InterfaceFigure
            src={capture('comparison')}
            alt="Comparison page showing one Polo Life finance offer and space to add another"
            label="Fig. 05 / One offer"
            note="An offer ready to compare"
          />
          <InterfaceFigure
            src={capture('comparison-two-offers')}
            alt="Comparison page showing Polo Life PCH and PCP offers side by side"
            label="Fig. 06 / Two offers"
            note="Two finance products side by side"
          />
        </div>
      </div>

      <Chapter
        number="04"
        label="Across devices"
        title={
          <>
            The same
            <br />
            journey,
            <br />
            reframed.
          </>
        }
      >
        <p>
          The responsive work went beyond shrinking desktop columns. Model
          selection and comparison needed different interaction patterns on a
          narrow screen, including a horizontally navigable comparison.
        </p>
        <p>
          The mobile views keep the journey stages visible while giving the
          active decision enough room to read and use.
        </p>
      </Chapter>
      <div className="dz-wrap of-media-block">
        <div className="of-mobile-pair">
          <InterfaceFigure
            src={capture('mobile-model-selection')}
            alt="Mobile model selection screen with compact journey navigation and vehicle listings"
            label="Fig. 07 / Mobile discovery"
            note="390px viewport"
          />
          <InterfaceFigure
            src={capture('mobile-comparison')}
            alt="Mobile comparison screen showing one offer at a time with navigation between offers"
            label="Fig. 08 / Mobile comparison"
            note="Horizontally navigable offers"
          />
        </div>
      </div>

      <Chapter
        number="05"
        label="Completing the journey"
        title={
          <>
            From offer
            <br />
            to enquiry.
          </>
        }
      >
        <p>
          After comparing, a customer can take a selected offer into an email
          enquiry. The side panel keeps the offer visible as context while the
          customer enters the details needed to continue.
        </p>
        <p>
          That handoff matters because the enquiry must remain associated with
          the choice the customer actually made.
        </p>
      </Chapter>
      <div className="dz-wrap of-media-block">
        <InterfaceFigure
          src={capture('email-entry')}
          alt="Email my Customised Offer side panel open alongside the selected finance comparison"
          label="Fig. 09 / Email enquiry"
          note="Entry state · no details submitted"
        />
      </div>

      <section className="dz-closing dz-wrap">
        <p className="dz-eyebrow dz-accent">06 / Reflection</p>
        <h2>
          Complex finance.
          <br />
          Clearer choices<span className="dz-accent">.</span>
        </h2>
        <p>
          This refresh brought together interface design, asynchronous data and
          state management across a connected customer journey. The lesson was
          to treat every upstream choice as part of the offer’s context, from
          first selection through comparison and enquiry.
        </p>
        <div className="dz-closing__end">
          <span>Volkswagen Offers &amp; Finance / Product engineering</span>
          <Link to="/#projects">Back to selected work ↗</Link>
        </div>
      </section>
    </main>
  );
}
