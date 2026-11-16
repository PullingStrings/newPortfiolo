import { Link } from 'react-router-dom';
import { createClassNames } from '@/utils/cssModules';
import sharedStyles from '../../CaseStudyLanding/case-studies.module.css';
import styles from './samsung-repair.module.css';

const assets = {
  map: '/projects/samsung-repair/vendor-map.png',
  options: '/projects/samsung-repair/repair-options.png',
};

const css = createClassNames(sharedStyles, styles);

function Chapter({ number, label, title, children }) {
  return (
    <section className={css('dz-chapter')}>
      <div className={css('dz-wrap dz-chapter__grid')}>
        <div>
          <p className={css('dz-eyebrow dz-accent')}>
            {number} / {label}
          </p>
          <h2>{title}</h2>
        </div>
        <div className={css('dz-chapter__copy')}>{children}</div>
      </div>
    </section>
  );
}

function Capture({ src, alt, title, detail }) {
  return (
    <figure className={css('sr-capture')}>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open original screenshot: ${title}`}
      >
        <img src={src} alt={alt} loading="lazy" />
      </a>
      <figcaption>
        <strong>{title}</strong>
        <span>{detail}</span>
        <a href={src} target="_blank" rel="noopener noreferrer">
          View capture ↗
        </a>
      </figcaption>
    </figure>
  );
}

const booking = [
  [
    '01',
    'Find a store',
    'Samsung store locations and available repair services',
  ],
  [
    '02',
    'Check availability',
    'Middleware retrieves appointment slots from Qudini',
  ],
  ['03', 'Reserve a slot', 'Qudini provides a reservation identifier'],
  ['04', 'Create service request', 'IGSPN records the Samsung repair request'],
  [
    '05',
    'Confirm booking',
    'Customer and order details complete the Qudini booking',
  ],
];

export default function SamsungRepairCaseStudy() {
  return (
    <main className={css('dz-case')}>
      <div className={css('dz-wrap')}>
        <div className={css('dz-topline')}>
          <Link to="/case-studies">← All case studies</Link>
          <span>04 — Samsung UK / Repair</span>
        </div>
      </div>
      <header className={css('sr-hero dz-wrap')}>
        <p className={css('dz-eyebrow dz-accent')}>
          Case Study 04 / Integration engineering
        </p>
        <div className={css('sr-hero__heading')}>
          <span className={css('sr-hero__number')} aria-hidden="true">
            04
          </span>
          <div>
            <h1>
              Samsung
              <br />
              Repair<span className={css('dz-accent')}>.</span>
            </h1>
            <p className={css('sr-hero__dek')}>
              Making a complex repair network feel simple.
            </p>
          </div>
        </div>
        <Capture
          src={assets.map}
          alt="Samsung repair vendor map showing repair locations and availability"
          title="Fig. 01 / Repair locations"
          detail="Existing repair and availability journey"
        />
        <div className={css('sr-hero__meta')}>
          <span>Role / One of three primary developers</span>
          <span>JavaScript · PHP · AWS middleware</span>
          <span>Qudini · IGSPN · LikeWise</span>
        </div>
      </header>

      <Chapter
        number="00"
        label="The context"
        title={
          <>
            An existing
            <br />
            system. Many
            <br />
            moving parts.
          </>
        }
      >
        <p>
          Samsung's repair experience connected troubleshooting, service
          options, authorised locations and appointment booking. The
          customer-facing journey was supported by an established JavaScript and
          PHP application and several external services.
        </p>
        <p>
          I worked as one of three primary developers extending and maintaining
          the experience. The booking infrastructure, middleware and vendor
          mapping were already in place; our work had to fit the existing system
          rather than replace it.
        </p>
      </Chapter>

      <section className={css('sr-statement')}>
        <div className={css('dz-wrap')}>
          <p className={css('dz-eyebrow')}>The engineering challenge</p>
          <p>
            CHANGE THE JOURNEY.
            <br />
            <em>RESPECT THE SYSTEM.</em>
          </p>
        </div>
      </section>

      <Chapter
        number="01"
        label="Repair choices"
        title={
          <>
            Different
            <br />
            needs. One
            <br />
            entry point.
          </>
        }
      >
        <p>
          Customers needed routes to different repair services. The interface
          had to help them find a suitable option while handing the right
          information to the systems responsible for appointments and service
          orders.
        </p>
        <p>
          Existing journeys also had to accommodate new service types and
          updates without disturbing unrelated repair flows.
        </p>
      </Chapter>
      <div className={css('dz-wrap sr-media')}>
        <Capture
          src={assets.options}
          alt="Samsung repair options interface showing repair choices"
          title="Fig. 02 / Repair options"
          detail="A supporting screen from the existing customer journey"
        />
      </div>

      <Chapter
        number="02"
        label="Booking architecture"
        title={
          <>
            A booking
            <br />
            crosses service
            <br />
            boundaries.
          </>
        }
      >
        <p>
          Behind a single appointment sat multiple stages: store data, available
          slots, reservation, a Samsung service request and final confirmation.
        </p>
        <p>
          The documented system used Qudini for appointment management and IGSPN
          for service requests, with Samsung Support AWS middleware connecting
          the application to those services. This was existing architecture we
          worked within, not a booking platform I built from scratch.
        </p>
      </Chapter>
      <div className={css('dz-wrap sr-flow')}>
        <p className={css('dz-eyebrow dz-accent')}>
          Booking / Simplified integration sequence
        </p>
        <ol>
          {booking.map(([number, title, detail]) => (
            <li key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
        <p className={css('dz-note')}>
          Conceptual sequence based on the booking-system documentation; not an
          exact endpoint or failure-handling diagram.
        </p>
      </div>

      <Chapter
        number="03"
        label="Store onboarding & QA"
        title={
          <>
            Test stores
            <br />
            before real
            <br />
            bookings.
          </>
        }
      >
        <p>
          As stores became available through Qudini, I verified that the repair
          application could reach the relevant booking APIs. I also logged into
          Qudini's management platform to inspect store setup and availability.
        </p>
        <p>
          Testing started with configured test stores before progressing to real
          stores and actual booking journeys. That work checked more than the
          visual interface: a store had to be available to the application and
          able to participate in the end-to-end booking flow.
        </p>
        <p>
          This was integration verification and QA across an existing service
          boundary, rather than ownership of Qudini's store-management platform.
        </p>
      </Chapter>

      <div className={css('sr-dark')}>
        <Chapter
          number="04"
          label="A focused change"
          title={
            <>
              Battery
              <br />
              replacement,
              <br />
              directly.
            </>
          }
        >
          <p>
            A 2025 functional analysis proposed a direct battery-replacement
            path for eligible smartphones in the UK and Ireland. Rather than
            asking customers to navigate unrelated repair steps, the journey
            would recognise a LikeWise troubleshooting event and continue into
            the appropriate booking form.
          </p>
          <p>
            The specification described session state, conditional screens and a
            battery-replacement reason passed to Qudini. It records my
            involvement reviewing the requirements and following up with the
            relevant integration teams about event stability and booking
            information.
          </p>
          <p>
            The document establishes the design and coordination work; it does
            not independently verify that every proposed change was released.
          </p>
        </Chapter>
        <div className={css('dz-wrap sr-dependencies')}>
          <div>
            <small>Customer troubleshooting</small>
            <strong>LikeWise</strong>
          </div>
          <span aria-hidden="true">→</span>
          <div>
            <small>Repair journey</small>
            <strong>Session state</strong>
          </div>
          <span aria-hidden="true">→</span>
          <div>
            <small>Appointment service</small>
            <strong>Qudini</strong>
          </div>
        </div>
        <div className={css('dz-wrap')}>
          <p className={css('sr-dark__note')}>
            Simplified feature dependency, not a reproduction of production code
            or API payloads.
          </p>
        </div>
      </div>

      <Chapter
        number="05"
        label="Working in production"
        title={
          <>
            More than
            <br />
            frontend
            <br />
            code.
          </>
        }
      >
        <p>
          The work required understanding legacy code, vendor configuration and
          external booking behaviour. A successful interface update still
          depended on the right store being configured, the booking API
          responding and the downstream request being accepted.
        </p>
        <p>
          Sprinklr also formed part of the wider support experience, helping
          customers who needed assistance. Separate technical assessments
          explored booking API migration and security improvements; these are
          not presented here as shipped changes.
        </p>
        <p>
          Working in a three-developer team meant contributing to a shared
          application, validating integrations and coordinating changes across
          system boundaries.
        </p>
      </Chapter>

      <section className={css('dz-closing dz-wrap sr-closing')}>
        <p className={css('dz-eyebrow dz-accent')}>06 / Reflection</p>
        <h2>
          Not every
          <br />
          system needs
          <br />
          rebuilding<span className={css('dz-accent')}>.</span>
        </h2>
        <p>
          Engineering an established service means understanding what already
          works, knowing where dependencies live and proving that changes hold
          up beyond the browser. This project sharpened that discipline through
          booking integrations, vendor QA and collaborative delivery.
        </p>
        <div className={css('dz-closing__end')}>
          <span>Samsung Repair / Integration engineering</span>
          <Link to="/case-studies">All case studies ↗</Link>
        </div>
      </section>
    </main>
  );
}
