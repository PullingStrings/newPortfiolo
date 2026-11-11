import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './contact.css';

const contactLinks = [
  { label: 'Email', value: 'titozwane28@gmail.com', href: 'mailto:titozwane28@gmail.com', external: false },
  { label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/titozwane', external: true },
  { label: 'GitHub', value: 'PullingStrings', href: 'https://github.com/PullingStrings', external: true },
];

export default function Contact() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const context = gsap.context(() => {
      gsap.from('.contact-page__eyebrow, .contact-page__title, .contact-page__intro, .contact-page__links', {
        y: 22,
        opacity: 0,
        duration: 0.75,
        stagger: 0.09,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <main className="contact-page" ref={rootRef}>
      <div className="contact-page__eyebrow">
        <span>04 / Contact</span>
        <span>London, UK · Open to conversations</span>
      </div>

      <div className="contact-page__grid">
        <div className="contact-page__identity">
          <p className="contact-page__kicker">Get in touch <span aria-hidden="true">—</span></p>
          <h1 className="contact-page__title">Contact<span className="contact-page__period">.</span></h1>
          <div className="contact-page__art" aria-hidden="true">
            <span className="contact-page__art-type">LET'S MAKE<br />SOMETHING<br />HAPPEN.</span>
            <span className="contact-page__art-disc" />
            <span className="contact-page__art-caption">Conversations / collaborations / good problems</span>
          </div>
        </div>

        <div className="contact-page__details">
          <div className="contact-page__intro">
            <h2>Let's talk about<br />a project<span>.</span></h2>
            <p>New work, collaborations, or just a conversation about making things for the web. Pick a channel and say hello.</p>
          </div>

          <ul className="contact-page__links" aria-label="Ways to contact Tito">
            {contactLinks.map(({ label, value, href, external }) => (
              <li key={label}>
                <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  <span className="contact-page__link-label">{label}</span>
                  <span className="contact-page__link-value">{value}</span>
                  <span className="contact-page__link-arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="contact-page__closing">
            <span className="contact-page__signal" aria-hidden="true" />
            <p>Make the work clear. <strong>Make Tito weird.</strong></p>
          </div>
        </div>
      </div>
    </main>
  );
}
