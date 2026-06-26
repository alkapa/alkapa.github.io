export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export interface IndexRow {
  title: string;
  projects: string; // mono, no se traduce
  metric: string; // mono, no se traduce
}

export interface OfferItem {
  n: string;
  title: string;
  body: string;
  metric?: string; // mono, no se traduce
}

export interface Dict {
  htmlLang: string;
  nav: { offer: string; projects: string; contact: string; status: string };
  hero: {
    eyebrow: string;
    h1: { pre: string; mark: string; post: string };
    lead: { pre: string; strong: string; post: string };
    ctaPrimary: string;
    ctaSecondary: string;
    index: IndexRow[];
  };
  offer: { eyebrow: string; items: OfferItem[] };
  projects: { eyebrow: string; count: string; side: string };
  thesis: {
    eyebrow: string;
    h2: { pre: string; gold: string; post: string };
    body: string;
    beat: string;
    cards: { name: string; body: string }[];
  };
  track: { eyebrow: string };
  contact: {
    h2: string;
    body: string;
    ctaPrimary: string;
    ctaPrimaryNote: string;
    ctaSecondary: string;
    ctaSecondaryNote: string;
    labelEmail: string;
    labelLinkedin: string;
    labelGithub: string;
    labelCv: string;
    cvText: string;
    footerMade: string;
  };
  a11y: { skip: string; langToggle: string };
}

export const ui: Record<Lang, Dict> = {
  es: {
    htmlLang: 'es',
    nav: { offer: 'Lo que ofrezco', projects: 'Proyectos', contact: 'Contacto', status: 'abierto' },
    hero: {
      eyebrow: 'JUAN CAMILO GUTIÉRREZ — BACKEND GO · AGENTES DE IA',
      h1: {
        pre: 'Construyo el backend que tu negocio necesita para escalar, y las ',
        mark: 'herramientas de IA',
        post: ' que aceleran a tu equipo.',
      },
      lead: {
        pre: 'Soy Juan Camilo. +10 años llevando sistemas a producción en fintech de alta escala. No vine a contarte mi pasado — ',
        strong: 'esto es lo que sé hacer',
        post: '.',
      },
      ctaPrimary: 'Trabajemos juntos',
      ctaSecondary: 'Hablemos de un proyecto',
      index: [
        { title: 'Backend confiable a escala', projects: 'ualess · lambda-go · goala', metric: '~1.000 λ' },
        { title: 'IA aplicada, verificable', projects: 'gitar · gauchada · triqui', metric: 'MCP · ACP' },
        { title: 'Audio + hardware', projects: 'mimic · gx-100', metric: 'DSP nativo' },
      ],
    },
    offer: {
      eyebrow: '01 — ESTO PONGO SOBRE LA MESA',
      items: [
        {
          n: '01',
          title: 'Backend confiable a escala',
          body: 'Diseño y sostengo sistemas distribuidos que aguantan millones de transacciones sin despeinarse. La confiabilidad que aprendí en fintech la llevo a cualquier producto con carga real.',
          metric: '~20M txns/mes · ~1.000 Lambdas en Go · <100ms p99',
        },
        {
          n: '02',
          title: 'Herramientas que aceleran a tu equipo',
          body: 'Construyo tooling interno que sube la velocidad de desarrollo y baja la fricción del día a día.',
          metric: '+45% velocidad · −60% code review · MTTA 10→2 min',
        },
        {
          n: '03',
          title: 'Agentes de IA que podés auditar',
          body: 'Llevo LLMs y agentes a flujos de desarrollo reales —scaffolding, revisión de código, gobernanza de agentes en CI— y los hago controlables: medibles, verificables y auditables antes de prometer.',
          metric: 'harness engineering · validación en CI · MCP · ACP',
        },
        {
          n: '04',
          title: 'Liderazgo técnico por influencia',
          body: 'Subo el estándar de calidad, mentoreo y entrego seguido. Muevo la aguja del equipo como líder técnico (IC), sin necesitar un título de manager.',
        },
      ],
    },
    projects: { eyebrow: '02 — NO TE LO CUENTO, TE LO MUESTRO', count: '8 cosas en producción · 5 públicas', side: 'SIDE' },
    thesis: {
      eyebrow: '03 — HACIA DÓNDE VOY',
      h2: {
        pre: 'Los agentes de IA necesitan ',
        gold: 'coordinación verificable y determinística',
        post: ', no coordinación “a ojo”.',
      },
      body: 'Es la idea que me obsesiona y la base de mi I+D —y la vengo construyendo hace rato: harness engineering y gobernanza de agentes antes de que la industria les pusiera nombre. Para mí, el futuro del software no es “la IA escribe el código”, sino “la IA y las personas coordinan trabajo de forma confiable”.',
      beat: 'COMPÁS COMPARTIDO · EN TIEMPO',
      cards: [
        { name: 'Mado', body: 'Protocolo para orquestar agentes de forma verificable.' },
        { name: 'Gitar', body: 'Su primera aplicación concreta: revisar código de IA.' },
      ],
    },
    track: { eyebrow: '04 — TRAYECTORIA, EN UNA LÍNEA' },
    contact: {
      h2: '¿Construimos algo juntos?',
      body: 'Busco un equipo donde shippear seguido importe: backend Sr/Lead en Go o construyendo agentes de IA. Industria abierta —la confiabilidad de fintech se transfiere a cualquier producto con carga real—. También tomo proyectos de consultoría.',
      ctaPrimary: 'Trabajemos juntos',
      ctaPrimaryNote: '· full-time',
      ctaSecondary: 'Hablemos de un proyecto',
      ctaSecondaryNote: '· consultoría',
      labelEmail: 'EMAIL',
      labelLinkedin: 'LINKEDIN',
      labelGithub: 'GITHUB',
      labelCv: 'CV',
      cvText: 'Descargar CV (PDF) ↓',
      footerMade: 'Hecho en Argentina · 2026',
    },
    a11y: { skip: 'Saltar al contenido', langToggle: 'Cambiar idioma' },
  },

  en: {
    htmlLang: 'en',
    nav: { offer: 'What I offer', projects: 'Projects', contact: 'Contact', status: 'open' },
    hero: {
      eyebrow: 'JUAN CAMILO GUTIÉRREZ — GO BACKEND · AI AGENTS',
      h1: {
        pre: 'I build the backend your business needs to scale, and the ',
        mark: 'AI tooling',
        post: ' that makes your team faster.',
      },
      lead: {
        pre: "I'm Juan Camilo. 10+ years shipping systems to production in high-scale fintech. I'm not here to walk you through my past — ",
        strong: "this is what I know how to do",
        post: '.',
      },
      ctaPrimary: "Let's work together",
      ctaSecondary: "Let's talk about a project",
      index: [
        { title: 'Reliable backend at scale', projects: 'ualess · lambda-go · goala', metric: '~1,000 λ' },
        { title: 'Applied AI, verifiable', projects: 'gitar · gauchada · triqui', metric: 'MCP · ACP' },
        { title: 'Audio + hardware', projects: 'mimic · gx-100', metric: 'native DSP' },
      ],
    },
    offer: {
      eyebrow: '01 — WHAT I PUT ON THE TABLE',
      items: [
        {
          n: '01',
          title: 'Reliable backend at scale',
          body: "I design and operate distributed systems that handle millions of transactions without breaking a sweat. The reliability I learned in fintech carries over to any product with real load.",
          metric: '~20M txns/month · ~1,000 Go Lambdas · <100ms p99',
        },
        {
          n: '02',
          title: 'Tools that make your team faster',
          body: 'I build internal tooling that raises dev speed and cuts daily friction.',
          metric: '+45% dev speed · −60% code review · MTTA 10→2 min',
        },
        {
          n: '03',
          title: 'AI agents you can audit',
          body: 'I bring LLMs and agents into real dev workflows —scaffolding, code review, agent governance in CI— and make them controllable: measurable, verifiable and auditable before I promise.',
          metric: 'harness engineering · CI validation · MCP · ACP',
        },
        {
          n: '04',
          title: 'Technical leadership by influence',
          body: "I raise the quality bar, mentor, and ship often. I move the team's needle as a technical lead (IC), no manager title required.",
        },
      ],
    },
    projects: { eyebrow: "02 — I WON'T TELL YOU, I'LL SHOW YOU", count: '8 things in production · 5 public', side: 'SIDE' },
    thesis: {
      eyebrow: "03 — WHERE I'M HEADED",
      h2: {
        pre: 'AI agents need ',
        gold: 'verifiable, deterministic coordination',
        post: ', not coordination “by eyeball”.',
      },
      body: "It's the idea I'm obsessed with and the foundation of my R&D —and I've been building it for a while: harness engineering and agent governance before the industry had a name for it. To me, the future of software isn't “AI writes the code” — it's “AI and people coordinate work reliably”.",
      beat: 'SHARED BEAT · IN TIME',
      cards: [
        { name: 'Mado', body: 'A protocol to orchestrate agents verifiably.' },
        { name: 'Gitar', body: 'Its first concrete application: reviewing AI code.' },
      ],
    },
    track: { eyebrow: '04 — TRACK RECORD, IN ONE LINE' },
    contact: {
      h2: 'Want to build something together?',
      body: "I'm looking for a team where shipping often matters: Sr/Lead backend in Go or building AI agents. Industry-agnostic —the reliability I built in fintech carries over to any product with real load. I also take on consulting projects.",
      ctaPrimary: "Let's work together",
      ctaPrimaryNote: '· full-time',
      ctaSecondary: "Let's talk about a project",
      ctaSecondaryNote: '· consulting',
      labelEmail: 'EMAIL',
      labelLinkedin: 'LINKEDIN',
      labelGithub: 'GITHUB',
      labelCv: 'CV',
      cvText: 'Download CV (PDF) ↓',
      footerMade: 'Made in Argentina · 2026',
    },
    a11y: { skip: 'Skip to content', langToggle: 'Switch language' },
  },
};

/** Helper: ruta equivalente en el otro idioma para el LangToggle. */
export function altLangHref(lang: Lang): string {
  return lang === 'es' ? '/en/' : '/';
}
