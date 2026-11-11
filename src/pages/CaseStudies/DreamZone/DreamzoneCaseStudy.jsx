import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../CaseStudyLanding/case-studies.css';
import './dreamzone.css';

const media = {
  hero: '/projects/dreamzone/id-polo-hero.jpg',
  cross: '/projects/dreamzone/id-cross-gallery.jpeg',
  polo: '/projects/dreamzone/id-polo-gallery.jpeg',
  tiguan: '/projects/dreamzone/tiguan-gallery.jpeg',
};

function Chapter({ number, label, title, children, className = '' }) {
  return (
    <section className={`dz-chapter ${className}`}>
      <div className="dz-wrap">
        <div className="dz-chapter__grid">
          <div>
            <p className="dz-eyebrow dz-accent">
              {number} / {label}
            </p>
            <h2>{title}</h2>
          </div>
          <div className="dz-chapter__copy">{children}</div>
        </div>
      </div>
    </section>
  );
}

const exportStats = [
  ['2,000+', 'Image frames considered'],
  ['30', 'fps · chosen export'],
  ['~50MB', 'Reported output size'],
  ['1 sec', 'Keyframe interval'],
];

const recoverySteps = [
  ['Return to tab', 'Visibility, focus and page-resume events'],
  ['Restore target', 'Reconcile scroll progress and the intended video frame'],
  [
    'Verify paint',
    'Seek and check that a visible video frame has been rendered',
  ],
  ['Recover', 'Reload the media if the original seek cannot be recovered'],
];

function MediaFigure({ src, alt, name, note, className = '' }) {
  return (
    <figure className={`dz-gallery__figure ${className}`}>
      <div className="dz-gallery__crop">
        <img src={src} alt={alt} loading="lazy" width="960" height="546" />
      </div>
      <figcaption>
        <strong>{name}</strong>
        <span>{note}</span>
      </figcaption>
    </figure>
  );
}

export default function DreamzoneCaseStudy() {
  const [reduceMotion, setReduceMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', updateMotionPreference);
    return () =>
      mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  return (
    <main className="dz-case">
      <div className="dz-wrap">
        <div className="dz-topline">
          <Link to="/case-studies">← All case studies</Link>
          <span>01 — Volkswagen / 2026</span>
        </div>
      </div>

      <header className="dz-hero">
        <div
          className="dz-hero__media"
          style={{ backgroundImage: `url(${media.hero})` }}
          aria-hidden="true"
        >
          {!reduceMotion && (
            <video
              poster={media.hero}
              width="960"
              height="546"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
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
          )}
        </div>
        <div className="dz-wrap dz-hero__content">
          <div className="dz-hero__labels">
            <span>Fig. 01 / The experience</span>
            <span>ID. Polo / Recorded experience</span>
          </div>
          <div className="dz-hero__body">
            <p className="dz-eyebrow dz-accent">
              Case Study 01 / Creative engineering
            </p>
            <h1>
              Volkswagen
              <br />
              Dreamzone<span className="dz-accent">.</span>
            </h1>
            <p className="dz-hero__dek">
              Turning an existing scroll-driven prototype into a production
              experience — through video engineering, front-end architecture and
              browser resilience.
            </p>
            <div className="dz-hero__meta">
              <span>Role / Front-end engineering</span>
              <span>GSAP · React · AEM · Python · FFmpeg</span>
              <span>2026</span>
            </div>
          </div>
        </div>
      </header>

      <Chapter
        number="01"
        label="Context & challenge"
        title={
          <>
            From 2,000+
            <br />
            frames to
            <br />
            one video.
          </>
        }
      >
        <p>
          I inherited an existing proof of concept for a scroll-controlled
          fly-around. The initial idea was an image sequence, but the animation
          was long enough to require more than two thousand frames.
        </p>
        <p>
          Even compressed as WebP, that created concerns about network delivery,
          managing the assets in AEM and supporting other markets beyond the
          original UK showcase.
        </p>
        <p>
          I opted for video instead. That moved the technical challenge from
          managing thousands of images to achieving high-quality, responsive
          seeking inside a browser.
        </p>
      </Chapter>

      <div className="dz-wrap">
        <div
          className="dz-stats"
          aria-label="Chosen production video encoding profile"
        >
          {exportStats.map(([value, label]) => (
            <div className="dz-stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <Chapter
        number="02"
        label="My tooling"
        title={
          <>
            Building
            <br />
            the media
            <br />
            pipeline.
          </>
        }
      >
        <p>
          To take control of the export, I built a Python command-line tool that
          ran through Docker. It uses OpenCV and Pillow for image-frame
          processing, while FFmpeg handles video extraction and encoded export.
        </p>
        <p>
          The CLI supports trimming, resizing, frame sampling, PNG/WebP output,
          multiple encoding modes and video concatenation. It let me tune media
          for scroll-controlled playback rather than relying on a generic export
          preset.
        </p>
        <p>
          The reported production compromise was a 1920 × 1080, 30fps H.264 Main
          video at roughly 4.82 Mbps, with a one-second GOP and an output of
          about 50MB for an 86.7-second sequence.
        </p>
      </Chapter>

      <div className="dz-wrap">
        <div className="dz-pipeline" aria-label="Media tool capabilities">
          <div className="dz-pipeline__node">
            <small>01 / Input</small>
            <strong>
              Source
              <br />
              media
            </strong>
          </div>
          <div className="dz-pipeline__node">
            <small>02 / Runtime</small>
            <strong>
              Python
              <br />+ Docker
            </strong>
          </div>
          <div className="dz-pipeline__node">
            <small>03 / Optional processing</small>
            <strong>
              OpenCV
              <br />+ Pillow
            </strong>
          </div>
          <div className="dz-pipeline__node">
            <small>04 / Export</small>
            <strong>
              FFmpeg
              <br />
              H.264
            </strong>
          </div>
        </div>
        <p className="dz-note">
          Simplified capability diagram, not a fixed linear pipeline. Video-only
          exports can bypass frame extraction.
        </p>
      </div>

      <Chapter
        number="03"
        label="Interaction engineering"
        title={
          <>
            Making
            <br />
            scroll feel
            <br />
            like playback.
          </>
        }
      >
        <p>
          Changing the media architecture was only part of the work. I refined
          how GSAP ScrollTrigger, the ticker and the HTML video element worked
          together.
        </p>
        <p>
          The playback system maps scroll progress to a target frame and media
          time. It also accounts for input velocity, seek throttling, cue-point
          holds and frame timing, so the visual sequence and campaign content
          remain coordinated.
        </p>
        <p>
          Different campaign configurations can supply cue positions, mobile
          layouts and scrub tuning without rewriting the central fly-around
          component.
        </p>
      </Chapter>
      <div className="dz-wrap">
        <figure className="dz-context">
          <img
            src={media.polo}
            alt="Uncropped ID. Polo screen capture showing the campaign inside a desktop browser"
            loading="lazy"
            width="960"
            height="546"
          />
          <figcaption>
            Fig. 02 / Application context — original browser capture, shown
            uncropped.
          </figcaption>
        </figure>
        <div
          className="dz-scrub"
          aria-label="Conceptual mapping from scroll position to video frame"
        >
          <div>
            <span>Scroll progress</span>
            <b>0 → 1</b>
          </div>
          <div className="dz-scrub__line" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div>
            <span>GSAP / target frame</span>
            <b>frame ÷ 30fps → currentTime</b>
          </div>
        </div>
        <p className="dz-note">
          Conceptual illustration of the source implementation, not a live
          reproduction of the Volkswagen interaction.
        </p>
      </div>

      <section
        className="dz-gallery dz-wrap"
        aria-labelledby="dz-gallery-title"
      >
        <p className="dz-eyebrow dz-accent">04 / Campaign media</p>
        <h2 id="dz-gallery-title">
          One system.
          <br />
          Different cars.
        </h2>
        <div className="dz-gallery__grid">
          <MediaFigure
            className="dz-gallery__figure--wide"
            src={media.cross}
            alt="Green Volkswagen ID. Cross captured during its fly-around"
            name="ID. Cross"
            note="Recorded experience / frame study"
          />
          <MediaFigure
            src={media.polo}
            alt="Blue Volkswagen ID. Polo captured during its fly-around"
            name="ID. Polo"
            note="Recorded experience"
          />
          <MediaFigure
            src={media.tiguan}
            alt="Gold Volkswagen Tiguan captured during its fly-around"
            name="Tiguan"
            note="Additional supplied example"
          />
        </div>
        <p className="dz-note">
          These are images from supplied screen recordings. Tiguan is shown as a
          separate example, not presented as GTI 50 footage.
        </p>
      </section>

      <div className="dz-dark">
        <Chapter
          number="05"
          label="Browser resilience"
          title={
            <>
              When Safari
              <br />
              stops
              <br />
              playing.
            </>
          }
        >
          <p>
            Returning to a Safari tab could leave the fly-around frozen. I built
            a recovery mechanism so the user could continue from where they
            stopped instead of restarting the sequence.
          </p>
          <p>
            The implementation calculates the intended frame from scroll
            position, attempts to seek, verifies a painted video frame, and has
            a hard-reload fallback if recovery cannot complete.
          </p>
          <p>
            This turned a fragile browser edge case into an explicit part of the
            playback system.
          </p>
        </Chapter>
        <div className="dz-wrap">
          <ol className="dz-recovery">
            {recoverySteps.map(([title, detail], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{title}</strong>
                <p>{detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <section className="dz-closing dz-wrap">
        <p className="dz-eyebrow dz-accent">06 / Reflection</p>
        <h2>
          The animation
          <br />
          was only half
          <br />
          the job<span className="dz-accent">.</span>
        </h2>
        <p>
          The important engineering decisions happened beneath the visuals —
          choosing the media format, building the tools to prepare it, and
          addressing the browser behaviour users only notice when it breaks.
        </p>
        <div className="dz-closing__end">
          <span>Volkswagen Dreamzone / Creative engineering</span>
          <Link to="/#projects">Back to selected work ↗</Link>
        </div>
      </section>
    </main>
  );
}
