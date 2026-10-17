import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import './landing.css';
import './motion.css';
import { projects, shipped } from '../data/homepage';

gsap.registerPlugin(ScrollTrigger);

function useProjectMotion(rootRef, motion) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || !motion) return undefined;

    const matchMedia = gsap.matchMedia();
    matchMedia.add({
      desktop: '(min-width: 901px) and (min-height: 720px)',
      compact: '(max-width: 900px), (max-height: 719px)',
      reduce: '(prefers-reduced-motion: reduce)',
    }, ({ conditions }) => {
      if (conditions.reduce) return undefined;

      // Compact screens: visible artwork, one deliberate number entrance on scroll.
      // No image wipe, long scroll pin, overshoot or return movement.
      if (conditions.compact && motion.canonical && motion.playback !== 'autoplay-hold') {
        const q = gsap.utils.selector(root);
        const number = q('.project-row__number');
        const ctx = gsap.context(() => {
          gsap.fromTo(number,
            { y: 46, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              ease: 'power2.out',
              scrollTrigger: {
                // Animate when the number itself is comfortably in view,
                // not when the much taller project section first enters.
                trigger: number[0],
                start: 'top 66%',
                once: true,
              },
            },
          );
        }, root);
        return () => ctx.revert();
      }

      const q = gsap.utils.selector(root);
      const number = q('.project-row__number');
      const media = q('.project-row__media');
      const reveal = q('.project-row__media-reveal');
      const info = q('.project-row__info');
      const title = q('.project-row__title');
      const dot = q('.project-row__motion-dot');
      const accent = q('.project-row__motion-accent');
      const interruption = q('.project-row__interruption');
      const secondary = q('.project-row__secondary-media');
      // Repair V2: reveal the vendor map, hold, uncover a small supporting screen,
      // then bring 04 into its final place. Screenshots never translate or bounce.
      if (motion.study === 'repair-v2') {
        if (!conditions.desktop) return undefined;

        const frame = q('.project-row__pin')[0];
        gsap.set(title, { yPercent: 0 });
        gsap.set(media, { x: 0, y: 0, scale: 1 });
        gsap.set(reveal, { clipPath: 'inset(0 100% 0 0)' });
        gsap.set(secondary, { x: 0, y: 0, rotation: 0, opacity: 1, clipPath: 'inset(100% 0 0 0)' });
        gsap.set(number, { x: 95, y: 0, rotation: 0, scale: 1, opacity: 0 });
        gsap.set(dot, { opacity: 0 });
        gsap.set(accent, { opacity: 0 });

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root,
            start: 'top top+=8%',
            end: `+=${motion.end ?? 1700}`,
            scrub: 1.1,
            pin: frame,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(reveal, {
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.37,
          ease: 'power2.inOut',
        }, 0.07)
          // Hold the map before bringing in the supporting repair-options screen.
          .to(secondary, {
            clipPath: 'inset(0% 0 0 0)',
            duration: 0.20,
            ease: 'power2.inOut',
          }, 0.49)
          .to(number, {
            x: 0,
            opacity: 1,
            duration: 0.21,
            ease: 'power2.out',
          }, 0.74);

        return () => tl.kill();
      }

      // Finance V1: left-to-right rectangular wipe, deliberate hold, one-way 02 entrance.
      // The interface never translates or bounces; motion is only in the mask and number.
      if (motion.study === 'finance-v1') {
        if (!conditions.desktop) return undefined;

        const frame = q('.project-row__pin')[0];
        gsap.set(title, { yPercent: 0 });
        gsap.set(media, { x: 0, y: 0, scale: 1 });
        gsap.set(number, { x: 110, y: 0, rotation: 0, scale: 1, opacity: 1 });
        gsap.set(reveal, { clipPath: 'inset(0 100% 0 0)' });
        gsap.set(dot, { opacity: 0 });
        gsap.set(accent, { opacity: 0 });

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root,
            start: 'top top+=8%',
            end: `+=${motion.end ?? 1600}`,
            scrub: 1.1,
            pin: frame,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(reveal, {
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.44,
          ease: 'power2.inOut',
        }, 0.08)
          // 0.52–0.62: pause with the complete product interface visible.
          .to(number, { x: 0, duration: 0.30, ease: 'power2.out' }, 0.62);

        return () => tl.kill();
      }

      // Dreamzone V2: reveal → hold → one-way number entrance.
      // Keep campaign artwork stationary: no translation, scale animation or bounce.
      if (motion.study === 'dreamzone-v2') {
        if (!conditions.desktop) return undefined;

        const frame = motion.completeFrame ? root : q('.project-row__pin')[0];
        const origin = '58% 46%';
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root,
            start: 'top top+=8%',
            end: `+=${motion.end ?? 1500}`,
            scrub: 1.1,
            pin: frame,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Explicit end positions make backward scroll deterministic.
        gsap.set(title, { yPercent: 0 });
        gsap.set(media, { x: 0, y: 0, scale: 1 });
        gsap.set(reveal, { clipPath: `circle(0% at ${origin})` });
        gsap.set(number, { x: -115, y: 0, rotation: 0, scale: 1, opacity: 1 });
        gsap.set(dot, { opacity: 0 });
        gsap.set(accent, { opacity: 0 });

        tl.to(reveal, {
          clipPath: `circle(150% at ${origin})`,
          duration: 0.45,
          ease: 'power2.inOut',
        }, 0.08)
          // 0.53–0.60: hold on the fully revealed campaign artwork.
          .to(number, {
            x: 0,
            duration: 0.30,
            ease: 'power2.out',
          }, 0.60);

        return () => tl.kill();
      }

      // Approved 03 motion study: signal → circular reveal → type interruption → editorial resolve.
      // Isolated from the reusable quiet/loud archetypes until the motion is visually approved.
      if (motion.study === 'contact') {
        const frame = q('.project-row__pin')[0];
        const circleOrigin = '28% 52%';
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root,
            start: 'top top+=8%',
            end: `+=${motion.end ?? 1800}`,
            scrub: 1.1,
            pin: frame,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.set(title, { yPercent: 112 });
        gsap.set(number, { x: 30, y: 48, rotation: 0, scale: 1 });
        gsap.set(media, { x: 0, y: 30, scale: 1 });
        gsap.set(reveal, { clipPath: `circle(0% at ${circleOrigin})` });
        gsap.set(dot, { left: '28%', top: '52%', xPercent: -50, yPercent: -50, scale: 0.4, opacity: 0 });
        gsap.set(interruption, { x: 0, y: 35, rotation: 0, opacity: 0 });
        gsap.set(accent, { scaleY: 0, transformOrigin: 'bottom' });

        tl.to(title, { yPercent: 0, duration: 0.12 }, 0)
          .to(dot, { opacity: 1, scale: 1.6, duration: 0.12 }, 0.02)
          .to(reveal, { clipPath: `circle(14px at ${circleOrigin})`, duration: 0.09 }, 0.12)
          .to(reveal, { clipPath: `circle(36px at ${circleOrigin})`, duration: 0.08 }, 0.21)
          .to(reveal, { clipPath: `circle(140px at ${circleOrigin})`, duration: 0.13 }, 0.29)
          .to(dot, { opacity: 0, scale: 2.4, duration: 0.12 }, 0.31)
          .to(reveal, { clipPath: `circle(175% at ${circleOrigin})`, duration: 0.24 }, 0.42)
          .to(number, { x: -30, y: 0, duration: 0.52 }, 0.18)
          .to(media, { y: -12, duration: 0.43 }, 0.20)
          .to(interruption, { y: 0, opacity: 1, duration: 0.20 }, 0.59)
          .to(accent, { scaleY: 1, duration: 0.15 }, 0.62)
          .to(media, { x: 0, y: 0, scale: 1, duration: 0.18 }, 0.82)
          .to(number, { x: 0, y: 0, duration: 0.18 }, 0.82);

        return () => tl.kill();
      }

      const { archetype, mirror, canonical = false, intensity = 1, finalNumberX = 0, end = 1800, secondaryCue = false, playback } = motion;

      const origin = mirror ? '22% 27%' : '78% 27%';
      const startNumberX = (mirror ? -120 : 120) * intensity;
      const midNumberX = (mirror ? 82 : -82) * intensity;
      const interruptionStartX = (mirror ? 150 : -150) * intensity;
      const mediaMidX = (mirror ? -18 : 18) * intensity;
      const interruptionMidX = (mirror ? -18 : 18) * intensity;
      const quietScale = canonical ? 1 : archetype === 'quiet' ? intensity : 1;
      const firstNumberX = canonical ? (mirror ? 52 : -52) : finalNumberX;
      const resolvedNumberX = canonical ? (mirror ? 58 : -58) : finalNumberX;
      const resolvedNumberY = canonical ? 56 : 0;
      const initialRadius = canonical ? 14 : 14 + (18 * (1 - quietScale));
      const smallRadius = canonical ? 36 : 36 + (18 * (1 - quietScale));
      const mediumRadius = canonical ? 140 : 140 * quietScale + 80 * (1 - quietScale);
      const largeRadius = canonical ? 340 : 340 * quietScale + 180 * (1 - quietScale);

      if (playback === 'autoplay-hold') {
        const matchMedia = gsap.matchMedia();

        matchMedia.add({
          desktop: '(min-width: 901px) and (min-height: 720px)',
          reduce: '(prefers-reduced-motion: reduce)',
        }, ({ conditions }) => {
          if (!conditions.desktop || conditions.reduce) return undefined;

          gsap.set(title, { yPercent: 112 });
          gsap.set(number, { x: startNumberX, y: -36, rotation: mirror ? -2 : 2, scale: .92, opacity: 1 });
          gsap.set(media, { y: 72, scale: .95, x: 0 });
          gsap.set(reveal, { clipPath: `circle(14px at ${origin})` });
          gsap.set(dot, { scale: 1, opacity: 1, left: mirror ? '22%' : '78%', top: '27%' });
          gsap.set(accent, { scaleY: .15, transformOrigin: mirror ? 'left center' : 'right center' });

          const autoplayTimeline = gsap.timeline({ paused: true });

          autoplayTimeline
            .to(title, { yPercent: 0, duration: .16, ease: 'power2.out' }, 0)
            .to(number, { x: resolvedNumberX, y: resolvedNumberY, rotation: 0, scale: 1, duration: 1, ease: 'power2.out' }, 0)
            .to(media, { y: 12, scale: 1, duration: .22, ease: 'power1.out' }, .1)
            .to(dot, { scale: 1.15, duration: .08, ease: 'power1.out' }, .12)
            .to(reveal, { clipPath: `circle(36px at ${origin})`, duration: .1, ease: 'power1.inOut' }, .12)
            .to(reveal, { clipPath: `circle(140px at ${origin})`, duration: .18, ease: 'power1.inOut' }, .22)
            .to(reveal, { clipPath: `circle(340px at ${origin})`, duration: .22, ease: 'power1.inOut' }, .4)
            .to(dot, { opacity: 0, duration: .1 }, .5)
            .to(accent, { scaleY: 1, duration: .2, ease: 'power1.out' }, .52)
            .to(reveal, { clipPath: `circle(140% at ${origin})`, duration: .22, ease: 'power1.inOut' }, .62)
            .to(media, { y: -16, duration: .22, ease: 'power1.inOut' }, .7)
            .to(media, { x: 0, y: 0, scale: 1, duration: .22, ease: 'power2.out' }, .98);

          const trigger = ScrollTrigger.create({
            trigger: root,
            start: 'top top+=72px',
            end: 'bottom top+=72px',
            invalidateOnRefresh: true,
            onEnter: () => autoplayTimeline.play(),
            onLeaveBack: () => {
              autoplayTimeline.reverse();
            },
          });

          if (trigger.progress > 0) autoplayTimeline.play();

          return () => {
            trigger.kill();
            autoplayTimeline.kill();
          };
        });

        matchMedia.add({
          compact: '(max-width: 900px), (max-height: 719px)',
          reduce: '(prefers-reduced-motion: reduce)',
        }, ({ conditions }) => {
          if (!conditions.compact || conditions.reduce) return undefined;

          gsap.set([title, number, media], { opacity: 0 });
          const compactTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: root,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          });

          compactTimeline.to([title, number, media], {
            opacity: 1,
            duration: .7,
            stagger: .06,
            ease: 'power2.out',
          });

          return () => compactTimeline.kill();
        });

        return () => {
          matchMedia.revert();
        };
      }

      gsap.set(number, { x: startNumberX, y: -36 * quietScale, rotation: (mirror ? -2 : 2) * quietScale, scale: .92 + (.08 * (1 - quietScale)), opacity: 1 });
      gsap.set(media, { y: 72 * quietScale, scale: 1 - (.05 * quietScale), x: 0 });
      gsap.set(reveal, { clipPath: `circle(${initialRadius}px at ${origin})` });
      gsap.set(dot, { scale: 1, opacity: 1, left: mirror ? '22%' : '78%', top: '27%' });
      gsap.set(accent, { scaleY: .15, transformOrigin: canonical ? (mirror ? 'left center' : 'right center') : 'bottom' });

      if (canonical) {
        gsap.set(title, { yPercent: 112 });
      } else {
        gsap.set(info, { y: 28 * quietScale });
      }

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
          pin: canonical ? (motion.completeFrame ? root : q('.project-row__pin')[0]) : true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      if (canonical) {
        tl.to(title, { yPercent: 0, duration: .12 }, 0);
      }

      tl.to(number, { x: firstNumberX, y: 58 * quietScale, rotation: 0, scale: 1, duration: .74 }, 0)
        .to(media, { y: 12 * quietScale, scale: 1, duration: .18 }, .08)
        .to(dot, { scale: 1.15, duration: .06 }, .10)
        .to(reveal, { clipPath: `circle(${smallRadius}px at ${origin})`, duration: .08 }, .10)
        .to(reveal, { clipPath: `circle(${mediumRadius}px at ${origin})`, duration: .14 }, .18)
        .to(reveal, { clipPath: `circle(${largeRadius}px at ${origin})`, duration: .16 }, .32)
        .to(dot, { opacity: 0, duration: .08 }, .40)
        .to(accent, { scaleY: 1, duration: .12 }, .44)
        .to(reveal, { clipPath: `circle(140% at ${origin})`, duration: .18 }, .48)
        .to(media, { y: -22 * quietScale, x: mediaMidX, duration: .22 }, .58)
        .to(number, { x: midNumberX, y: 92 * quietScale, duration: .22 }, .58);

      if (!canonical) {
        tl.to(info, { y: 0, duration: .2 }, .1);
      }

      if (interruption.length) {
        tl.to(interruption, { x: 0, y: 0, rotation: 0, duration: .18 }, .62)
          .to(interruption, { x: interruptionMidX, y: -8 * quietScale, duration: .18 }, .78);
      }

      if (secondary.length && secondaryCue) {
        if (canonical) {
          tl.to(secondary, { x: 0, y: 0, rotation: 0, opacity: 1, duration: .22 }, .66);
        } else {
          tl.to(secondary, { x: -12 * intensity, y: 12 * intensity, rotation: -1 * intensity, opacity: 1, duration: .2 }, .66)
            .to(secondary, { x: 0, y: 0, rotation: 0, opacity: 1, duration: .18 }, .84);
        }
      }

      tl.to(media, { x: 0, y: 0, scale: 1, duration: .18 }, .86)
        .to(number, { x: resolvedNumberX, y: resolvedNumberY, rotation: 0, scale: 1, opacity: 1, duration: .18 }, .86);

      if (interruption.length) {
        tl.to(interruption, { x: 0, y: 0, rotation: 0, duration: .18 }, .86);
      }
    });

    return () => matchMedia.revert();
  }, [motion, rootRef]);
}

function ProjectDetails({ project }) {
  return (
    <div className="project-row__canonical-details">
      <p>{project.copy}</p>
      <div className="project-row__meta">
        {project.meta.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
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

// Each media type has a clear job. The animation lives in useProjectMotion.
function ProjectMedia({ project, showGhost }) {
  return (
    <figure className="project-row__media project-row__media--real">
      <div className="project-row__media-reveal">
        <img
          src={project.media.src}
          alt={project.media.alt}
          loading={project.media.loading}
          width={project.media.width}
          height={project.media.height}
        />
        {showGhost && (
          <span className="project-row__motion-ghost" aria-hidden="true">
            {project.index}
          </span>
        )}
        <span className="project-row__motion-accent" aria-hidden="true" />
      </div>
      <span className="project-row__motion-dot" aria-hidden="true" />
      <figcaption>{project.media.label}</figcaption>
    </figure>
  );
}

function SupportingMedia({ project }) {
  if (!project.secondaryMedia) return null;

  return (
    <img
      className="project-row__secondary-media"
      src={project.secondaryMedia.src}
      alt={project.secondaryMedia.alt}
      loading="lazy"
      width={project.secondaryMedia.width}
      height={project.secondaryMedia.height}
    />
  );
}

function ProjectInterruption({ lines }) {
  if (!lines) return null;

  return (
    <span className="project-row__interruption" aria-hidden="true">
      {lines.map((line) => <span key={line}>{line}</span>)}
    </span>
  );
}

function ProjectRow({ project }) {
  const rootRef = useRef(null);
  useProjectMotion(rootRef, project.motion);

  const showGhost = project.motion?.archetype === 'quiet'
    && project.motion?.ghost;
  const completeFrame = Boolean(project.motion?.completeFrame);

  // The featured projects share one stage layout.
  // Desktop and compact motion have separate, explicit timelines.
  return (
    <article
      ref={rootRef}
      className={[
        'project-row',
        'project-row--canonical',
        completeFrame ? 'project-row--complete-frame' : '',
        project.className,
      ].filter(Boolean).join(' ')}
      data-motion-archetype={project.motion.archetype}
    >
      <div className="project-row__pin">
        <div className="project-row__canonical-kicker">
          <span>{project.index} / FEATURED WORK</span>
          <span>{project.kicker}</span>
        </div>
        <div className="project-row__title-wrap">
          <h3 className="project-row__title">{project.title}</h3>
        </div>
        <strong className="project-row__accent">{project.accent}</strong>
        <div className="project-row__stage">
          <div className="project-row__number" aria-hidden="true">
            {project.index}
          </div>
          <ProjectMedia project={project} showGhost={showGhost} />
          <SupportingMedia project={project} />
          <ProjectInterruption lines={project.interruption} />
        </div>
        {completeFrame && <ProjectDetails project={project} />}
      </div>
      {!completeFrame && <ProjectDetails project={project} />}
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
        copy={
          "Not every project needs a full case study. " +
          "Here are some smaller features, integrations and " +
          "production challenges I've worked on."
        }
      />
      <div className="shipped-list">
        {shipped.map((item, index) => (
          <article className="shipped-item" key={item.title}>
            <span className="shipped-item__index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="shipped-item__title">
              <span>{item.meta}</span>
              <h3>{item.title}</h3>
            </div>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Hero() {
  return (
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
          I'm a front-end developer with a background in music.
          I build interactive experiences, practical tools and
          the systems that make them work in production.
        </p>
      </div>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section className="work-index home-section" id="projects">
      <SectionHeading
        index="01"
        eyebrow="Featured work"
        title="Selected work."
        copy={
          "Campaign experiences, finance tools and customer " +
          "support journeys I've helped build for Volkswagen and Samsung."
        }
      />
      {projects.map((project) => (
        <ProjectRow key={project.index} project={project} />
      ))}
    </section>
  );
}

function About() {
  return (
    <section className="about-v2 home-section" id="about">
      <SectionHeading
        index="03"
        eyebrow="About / approach"
        title="From bass lines to browser windows."
      />
      <div className="about-grid">
        <div className="about-grid__aside">
          Front-end systems<br />
          Creative development<br />
          Interaction<br />
          Production thinking
        </div>
        <p className="about-grid__copy">
          I used to play bass professionally before I got into coding.
          These days I build things for the web. Different tools,
          but I still enjoy figuring things out, working with people
          and making something feel right.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-v2 home-section" id="contact">
      <div className="contact-panel">
        <h2>Have a good problem?</h2>
        <a href="/contact">Start a conversation →</a>
      </div>
    </section>
  );
}

export default function Landing() {
  return (
    <main className="home-shell">
      <Hero />
      <FeaturedWork />
      <ShippedArchive />
      <About />
      <ContactSection />
    </main>
  );
}
