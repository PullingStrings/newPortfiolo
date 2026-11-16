import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { createClassNames } from '@/utils/cssModules';
import styles from './contact.module.css';

const contactLinks = [
  {
    label: 'Email',
    value: 'titozwane28@gmail.com',
    href: 'mailto:titozwane28@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/titozwane',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'PullingStrings',
    href: 'https://github.com/PullingStrings',
    external: true,
  },
];

const css = createClassNames(styles);

export default function Contact() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return undefined;

    const context = gsap.context(() => {
      gsap.from(
        [
          'contact-page__eyebrow',
          'contact-page__title',
          'contact-page__intro',
          'contact-page__links',
        ]
          .map((name) => `.${styles[name]}`)
          .join(', '),
        {
          y: 22,
          opacity: 0,
          duration: 0.75,
          stagger: 0.09,
          ease: 'power2.out',
          clearProps: 'all',
        },
      );
    }, root);

    return () => context.revert();
  }, []);

  return (
    <main className={css('contact-page')} ref={rootRef}>
      <div className={css('contact-page__eyebrow')}>
        <span>04 / Contact</span>
        <span>London, UK · Open to conversations</span>
      </div>

      <div className={css('contact-page__grid')}>
        <div className={css('contact-page__identity')}>
          <p className={css('contact-page__kicker')}>
            Get in touch <span aria-hidden="true">—</span>
          </p>
          <h1 className={css('contact-page__title')}>
            Contact<span className={css('contact-page__period')}>.</span>
          </h1>
          <div className={css('contact-page__art')} aria-hidden="true">
            <span className={css('contact-page__art-type')}>
              LET'S MAKE
              <br />
              SOMETHING
              <br />
              HAPPEN.
            </span>
            <span className={css('contact-page__art-disc')} />
            <span className={css('contact-page__art-caption')}>
              Conversations / collaborations / good problems
            </span>
          </div>
        </div>

        <div className={css('contact-page__details')}>
          <div className={css('contact-page__intro')}>
            <h2>
              Let's talk about
              <br />a project<span>.</span>
            </h2>
            <p>
              New work, collaborations, or just a conversation about making
              things for the web. Pick a channel and say hello.
            </p>
          </div>

          <ul
            className={css('contact-page__links')}
            aria-label="Ways to contact Tito"
          >
            {contactLinks.map(({ label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <span className={css('contact-page__link-label')}>
                    {label}
                  </span>
                  <span className={css('contact-page__link-value')}>
                    {value}
                  </span>
                  <span
                    className={css('contact-page__link-arrow')}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className={css('contact-page__closing')}>
            <span className={css('contact-page__signal')} aria-hidden="true" />
            <p>
              Make the work clear. <strong>Make Tito weird.</strong>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
