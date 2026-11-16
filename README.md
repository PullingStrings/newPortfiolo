# Tito Zwane — Portfolio

This personal developer portfolio brings together creative engineering, production web systems and editorial storytelling. It connects technical clarity with an expressive presentation: make the work clear, make the world weird; editorial by default, expressive by interruption; same grammar, different resolve.

## Featured work

- [Volkswagen Dreamzone — Creative Engineering](src/pages/CaseStudies/DreamZone/DreamzoneCaseStudy.jsx): Scroll-driven campaign storytelling built around video, animation and product interaction for Volkswagen models.
- [Volkswagen Offers & Finance — Product Engineering](src/pages/CaseStudies/OffersFinance/OffersFinanceCaseStudy.jsx): A responsive vehicle finance journey for exploring, calculating and comparing offers and submitting enquiries.
- [Samsung Contact — Application Architecture](src/pages/CaseStudies/SamsungContact/SamsungContactCaseStudy.jsx): A reusable, data-driven support journey integrated with Samsung's AEM ecosystem, contact methods, chat, consent and analytics.
- [Samsung Repair — Integration Engineering](src/pages/CaseStudies/SamsungRepair/SamsungRepairCaseStudy.jsx): Support and repair journeys connecting booking interfaces to service availability and repair vendors.

The routes are `/case-studies/volkswagen-dreamzone`, `/case-studies/volkswagen-offers-finance`, `/case-studies/samsung-contact` and `/case-studies/samsung-repair`.

## Technology

The portfolio uses React 19, React Router 7 and Vite 8, with GSAP and ScrollTrigger for page motion. CSS Modules scope component and page styles. Axios and dotenv support the separate GitHub project-data export. These are portfolio dependencies; technologies mentioned in individual case studies describe those projects, not necessarily this site.

## Architecture

`src/main.jsx` mounts the React application and `src/App.jsx` defines the routes. Shared featured-project data in `src/data/homepage.js` supplies project IDs, order, paths, summaries, media and motion settings. The case-study index has its own presentation data, while each featured story is maintained in its case-study component. Page and component styles live in CSS Modules; GSAP/ScrollTrigger timelines are implemented with the landing page. Local artwork and project media live under `public/`.

`src/utils/fetchProjects.js` exports GitHub project data into `public/projects.json`, combining API results with `public/manualProjects.json`. This build-time export is separate from the four featured case studies and is not currently rendered by the site.

## Content management

All site content is maintained in this repository; there is no CMS.

- Featured projects, their order, summaries, routes and media metadata: `src/data/homepage.js`.
- Case-study index descriptions and cards: `src/pages/CaseStudyLanding/CaseStudies.jsx`.
- Detailed case-study copy and layout: the four components under `src/pages/CaseStudies/`.
- About information: `src/pages/Landing/Landing.jsx`.
- Contact information: `src/pages/Contact/Contact.jsx`.
- Archive entries: `shipped` in `src/data/homepage.js`.
- Images and videos: `public/`, including `public/projects/` for project media.

Keep existing `className` and `motion` values when editing featured-project records. Reference public assets with root-relative paths such as `/projects/dreamzone/cover.png`.

## Local development

The repository uses Yarn and Docker Compose. Start the Vite development server with:

```sh
docker compose up --build
```

The app is exposed on `http://localhost:5173`. Run repository checks in the app container:

```sh
docker compose run --rm app yarn lint
docker compose run --rm app yarn format:check
docker compose run --rm app yarn content:check
docker compose run --rm app yarn build
```

The build runs the `prebuild` GitHub project-data export before Vite; when API data is available it can update `public/projects.json`.

## Deployment

`vercel.json` rewrites application routes to `index.html` for the client-side router. The repository documents [www.titozwane.com](https://www.titozwane.com/) as the live site. GitHub is the source repository and Vercel hosts the site. This repository does not document a verified automatic promotion or release process between `staging` and production.

## SEO and metadata

`index.html` currently contains the shared document title, description, canonical URL and social metadata. Route-specific metadata has not been implemented in the initial HTML response; the current Vercel rewrite serves the same HTML entry point for application routes.

## Screenshots

Screenshot files exist in `public/`, but their currency as captures of the current approved portfolio design has not been verified. This README therefore does not present them as current screenshots.

## Contact

- Email: [titozwane28@gmail.com](mailto:titozwane28@gmail.com)
- LinkedIn: [linkedin.com/in/titozwane](https://linkedin.com/in/titozwane)
- GitHub: [github.com/PullingStrings](https://github.com/PullingStrings)
