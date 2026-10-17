// Homepage content is deliberately hard-coded for now.
// Keep copy, image paths and motion settings here, away from component logic.
// A CMS can replace this module later without changing the page structure.
export const projects = [
  {
    index: '01',
    title: 'Volkswagen Dreamzone',
    kicker: 'Volkswagen / Dreamzone / 2026',
    copy:
      'Scroll-driven storytelling engineered for production across ' +
      'ID. Polo, GTI 50 and ID. Cross — combining video, animation, ' +
      'product interaction and campaign-specific content.',
    meta: [
      'Creative development',
      'GSAP / ScrollTrigger',
      'Video systems',
      'Safari / iOS resilience',
    ],
    className: 'project-row--campaign project-row--dreamzone',
    accent: 'Prototype → system → production',
    // Loud artwork needs no extra type interruption.
    interruption: null,
    motion: {
      archetype: 'loud',
      mirror: true,
      canonical: true,
      intensity: 1,
      completeFrame: true,
      study: 'dreamzone-v2',
    },
    media: {
      src: '/projects/dreamzone/cover.png',
      alt:
        'A montage of Volkswagen Dreamzone experiences for ' +
        'ID. Cross, ID. Polo and GTI 50',
      label: 'GTI 50 / DREAMZONE',
      loading: 'eager',
      width: 1397,
      height: 785,
    },
  },
  {
    index: '02',
    title: 'Volkswagen Offers & Finance',
    kicker: 'Volkswagen / Finance / 2026',
    copy:
      'A responsive finance journey for discovering vehicles, ' +
      'calculating PCP and PCH offers, comparing options and ' +
      'submitting customer enquiries against live vehicle and finance data.',
    meta: [
      'Transactional UI',
      'Filtering / comparison',
      'Responsive systems',
      'Accessibility',
    ],
    className: 'project-row--mirror project-row--finance',
    accent: 'Campaign pace. Production finance complexity.',
    motion: {
      archetype: 'quiet',
      mirror: true,
      canonical: true,
      intensity: 1,
      end: 1600,
      study: 'finance-v1',
    },
    media: {
      src: '/projects/offers-finance/cover.png',
      alt: 'Volkswagen New Car Finance Offers model-selection journey',
      label: 'OFFERS / FINANCE / COMPARE',
      loading: 'lazy',
      width: 3338,
      height: 1996,
    },
  },
  {
    index: '03',
    title: 'Samsung Contact',
    kicker: 'Samsung UK / Cheil / 2025',
    copy:
      'A reusable, data-driven contact journey inside Samsung’s AEM ' +
      'ecosystem, orchestrating nested navigation, contact methods, ' +
      'Sprinklr live chat, consent, analytics and accessibility.',
    meta: ['AEM', 'Sprinklr', 'Data-driven UI', 'CMP / analytics'],
    className: 'project-row--contact',
    accent: 'Help, made clear.',
    interruption: ['HELP', 'MADE', 'CLEAR.'],
    motion: {
      archetype: 'quiet',
      mirror: false,
      canonical: true,
      intensity: 1,
      end: 1800,
      study: 'contact',
    },
    media: {
      src: '/contact-us.png',
      alt:
        'Samsung Contact Us support journey with product ' +
        'and contact option tiles',
      label: 'CONTACT / SUPPORT / SPRINKLR',
      loading: 'lazy',
      width: 1600,
      height: 900,
    },
  },
  {
    index: '04',
    title: 'Samsung Support / Repair',
    kicker: 'Samsung UK / Cheil / 2024—2025',
    copy:
      'Legacy support and repair journeys made clearer across booking, ' +
      'map and appointment screens, with vendor availability driven ' +
      'by service data across multiple repair types.',
    meta: [
      'Vanilla JavaScript',
      'PHP',
      'API-driven availability',
      'Legacy systems',
    ],
    className: 'project-row--mirror project-row--repair',
    accent: 'Complex systems made clear.',
    motion: {
      archetype: 'quiet',
      mirror: true,
      canonical: true,
      intensity: 1,
      end: 1700,
      study: 'repair-v2',
    },
    media: {
      src: '/projects/samsung-repair/vendor-map.png',
      alt:
        'Samsung repair booking map showing nearby repair ' +
        'vendors and booking availability',
      label: 'VENDOR / AVAILABILITY / BOOKING',
      loading: 'lazy',
      width: 1536,
      height: 1024,
    },
    secondaryMedia: {
      src: '/projects/samsung-repair/repair-options.png',
      alt:
        'Samsung repair journey showing in-home repair ' +
        'and trade-up options',
      width: 1240,
      height: 1240,
    },
  },
];

export const shipped = [
  {
    title: 'Galaxy Unpacked / flagship work',
    meta: 'Samsung / campaign delivery',
    copy:
      'Responsive campaign and production work within Samsung’s ' +
      'wider flagship and launch ecosystem.',
  },
  {
    title: 'Sprinklr live chat integrations',
    meta: 'Samsung / support',
    copy:
      'Consent-aware chat routing, conversation state, contextual ' +
      'behaviour and production integration.',
  },
  {
    title: 'Live chat wait-time service',
    meta: 'Samsung / AWS / Sprinklr',
    copy:
      'A frontend wait-time experience backed by API Gateway ' +
      'and Lambda to safely bridge Sprinklr data into Samsung.com.',
  },
  {
    title: 'Trade-in tooling',
    meta: 'Samsung / commerce',
    copy:
      'Data-driven comparison UI, SKU mapping, sticky table ' +
      'behaviour and resilient API fallbacks.',
  },
  {
    title: 'KX / Quidini journeys',
    meta: 'Samsung / retail experience',
    copy:
      'Store-selection and booking integrations built around ' +
      'existing Samsung and third-party systems.',
  },
  {
    title: 'Qualtrics / survey experiences',
    meta: 'Samsung / optimisation',
    copy:
      'Timed and consent-aware intercept experiences with controlled ' +
      'frequency and production-safe behaviour.',
  },
];
