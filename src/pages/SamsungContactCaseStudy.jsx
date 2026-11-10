import { Link } from 'react-router-dom';
import './case-studies.css';
import './samsung-contact.css';

const screenshot = '/contact-us.png';

function Chapter({ number, label, title, children }) {
  return (
    <section className="dz-chapter">
      <div className="dz-wrap dz-chapter__grid">
        <div>
          <p className="dz-eyebrow dz-accent">{number} / {label}</p>
          <h2>{title}</h2>
        </div>
        <div className="dz-chapter__copy">{children}</div>
      </div>
    </section>
  );
}

const capabilities = [
  ['01', 'Visibility', 'Show or hide tiles as support options change.'],
  ['02', 'Ordering', 'Rearrange contact tiles without a code change.'],
  ['03', 'Operations', 'Update seasonal opening hours and maintenance-related information.'],
  ['04', 'Permissions', 'Different administration roles, including admin and basic users.'],
  ['05', 'Publishing', 'Let authorised clients publish content changes through the CMS/AEM workflow.'],
];

export default function SamsungContactCaseStudy() {
  return (
    <main className="dz-case sc-case">
      <div className="dz-wrap">
        <div className="dz-topline">
          <Link to="/case-studies">← All case studies</Link>
          <span>03 — Samsung UK / 2025</span>
        </div>
      </div>

      <header className="sc-hero dz-wrap">
        <p className="dz-eyebrow dz-accent">Case Study 03 / Application architecture</p>
        <div className="sc-hero__heading">
          <span className="sc-hero__number" aria-hidden="true">03</span>
          <div>
            <h1>Samsung<br />Contact<span className="dz-accent">.</span></h1>
            <p className="sc-hero__dek">Support that understood the journey.</p>
          </div>
        </div>
        <figure className="sc-hero__figure">
          <a href={screenshot} target="_blank" rel="noopener noreferrer" aria-label="Open the full Samsung Contact screenshot">
            <img src={screenshot} alt="Samsung Contact page with product and contact option tiles" width="1600" height="900" fetchPriority="high" />
          </a>
          <figcaption><span>Fig. 01 / Customer-facing contact journey</span><a href={screenshot} target="_blank" rel="noopener noreferrer">View original capture ↗</a></figcaption>
        </figure>
        <div className="sc-hero__meta">
          <span>Role / Primary developer</span>
          <span>JavaScript · Handlebars · SCSS · Webpack</span>
          <span>AEM · Sprinklr</span>
        </div>
      </header>

      <Chapter number="00" label="The challenge" title={<>More than<br />a contact<br />page.</>}>
        <p>Samsung’s contact experience needed a clearer path through products and support options. Behind it sat difficult-to-follow JavaScript, fragmented JSON content and identifiers used to connect the journey.</p>
        <p>Routine changes added another challenge. Christmas opening hours and temporary maintenance information could require a developer to make content edits, even when the underlying experience had not changed.</p>
        <p>As the primary developer, I owned both the customer-facing Contact application and its CMS administration interface. Rather than introducing React unnecessarily, I focused on improving the existing implementation.</p>
      </Chapter>

      <section className="sc-manifesto" aria-label="Design principle">
        <div className="dz-wrap">
          <p className="dz-eyebrow">The engineering principle</p>
          <p>CHANGE THE <em>CONTENT.</em><br />NOT THE CODE.</p>
        </div>
      </section>

      <Chapter number="01" label="Navigation" title={<>A journey<br />with a<br />memory.</>}>
        <p>Customers moved through nested product and issue tiles before arriving at a relevant contact method. The interface needed to remember the journey so breadcrumbs and back actions returned people to the correct previous choice.</p>
        <p>Navigation state was managed through a history stack, separating where a customer was from how they had arrived there. This made the experience easier to reason about than relying only on a web of unique identifiers.</p>
      </Chapter>

      <div className="dz-wrap sc-diagram-section">
        <div className="sc-journey" role="img" aria-label="Conceptual support navigation: choose product, choose issue, select chat, then pass context to Sprinklr">
          {[
            ['01 / Select product', 'Product category'],
            ['02 / Narrow issue', 'Support category'],
            ['03 / Choose channel', 'Chat option'],
            ['04 / Carry context', 'Sprinklr chatbot'],
          ].map(([label, title]) => (
            <div className="sc-journey__step" key={label}>
              <small>{label}</small>
              <strong>{title}</strong>
            </div>
          ))}
        </div>
        <p className="dz-note">Conceptual journey, not an exact reproduction of the original tile taxonomy or Sprinklr payload.</p>
      </div>

      <Chapter number="02" label="Content management" title={<>Control for<br />the people<br />using it.</>}>
        <p>Alongside the public Contact page, I built a CMS administration interface where authenticated client users could manage the experience themselves.</p>
        <p>Users could show, hide and reorder tiles, edit operational content and publish changes. The interface also had different user roles, including admin and basic user access.</p>
        <p>This mattered particularly during seasonal opening-hour changes and maintenance periods. When the Repair service was unavailable, administrators could update relevant Contact information so customers still had a support route.</p>
      </Chapter>

      <div className="dz-wrap sc-capabilities">
        <p className="dz-eyebrow dz-accent">CMS / Confirmed capabilities</p>
        <div className="sc-capabilities__grid">
          {capabilities.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <p className="dz-note">The exact content-delivery mechanism after publishing is not verified; these are confirmed user-facing capabilities, not a diagram of the CMS internals.</p>
      </div>

      <div className="sc-dark">
        <Chapter number="03" label="Sprinklr integration" title={<>The chat<br />already had<br />context.</>}>
          <p>By the time a customer opened chat, they had already made choices through the Contact journey. That information was passed to Sprinklr so the chatbot had context about the product or issue.</p>
          <p>The automated conversation could then continue towards the appropriate human agents when needed. The integration also had to fit Samsung’s existing consent and analytics requirements.</p>
          <p>The tiles weren’t just navigation. They helped the support service understand why the customer was there.</p>
        </Chapter>
        <div className="dz-wrap sc-handoff">
          <div><small>Customer experience</small><strong>Navigation<br />context</strong></div>
          <span aria-hidden="true">→</span>
          <div><small>Support integration</small><strong>Sprinklr<br />chatbot</strong></div>
          <span aria-hidden="true">→</span>
          <div><small>When required</small><strong>Human<br />agent</strong></div>
        </div>
        <div className="dz-wrap"><p className="sc-dark__note">Simplified handoff model. Specific routing rules and context fields are intentionally not claimed.</p></div>
      </div>

      <Chapter number="04" label="Engineering outcome" title={<>Make it<br />easier to<br />run.</>}>
        <p>The customer-facing journey became more predictable, and the code became easier to read and maintain without a full framework rewrite.</p>
        <p>More importantly, routine content edits became something authorised client users could handle through their publishing workflow. That reduced reliance on developer time for everyday updates and left engineering capacity for larger features.</p>
        <p>The strongest result was a shift in ownership: the support team could operate the content, while the application continued to provide the structure and integrations behind it.</p>
      </Chapter>

      <section className="dz-closing dz-wrap sc-closing">
        <p className="dz-eyebrow dz-accent">05 / Reflection</p>
        <h2>A support<br />page became<br />a system<span className="dz-accent">.</span></h2>
        <p>Good engineering wasn’t about replacing every tool. It was about making the experience clearer, the code easier to work with, and the day-to-day operation less dependent on developers.</p>
        <div className="dz-closing__end">
          <span>Samsung Contact / Application architecture</span>
          <Link to="/case-studies">All case studies ↗</Link>
        </div>
      </section>
    </main>
  );
}
