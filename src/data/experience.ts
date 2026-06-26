import type { Lang } from '../i18n/ui';

export interface Job {
  company: string;        // no se traduce
  period: string;         // no se traduce
  role?: Record<Lang, string>;
  summary: Record<Lang, string>;
}

export const experience: Job[] = [
  {
    company: 'MODO',
    period: '2026',
    role: { es: 'Senior Software Engineer', en: 'Senior Software Engineer' },
    summary: {
      es: 'Tooling con IA para ingeniería: validación y gobernanza de agentes en CI, estándar de repos AI-first y tablero DORA por squad.',
      en: 'AI tooling for engineering: agent validation & governance in CI, an AI-first repo standard, and a DORA dashboard per squad.',
    },
  },
  {
    company: 'Ualá',
    period: '2022–2026',
    role: { es: 'Senior → Lead', en: 'Senior → Lead' },
    summary: {
      es: 'Lead de Backend Platform en una plataforma de ~20M txns/mes; creé lambda-go, ualess y la mayoría de las librerías del ecosistema (goala).',
      en: 'Backend Platform Lead on a ~20M txns/month platform; I built lambda-go, ualess and most of the ecosystem libraries (goala).',
    },
  },
  {
    company: 'Mercado Libre',
    period: '2021–2022',
    summary: {
      es: 'Route ETA: −20% de latencia, memoria estabilizada.',
      en: 'Route ETA: −20% latency, stabilized memory.',
    },
  },
  {
    company: 'Frávega',
    period: '2020–2021',
    summary: {
      es: 'Migré la logística de un monolito COBOL a Go event-driven + Kafka.',
      en: 'Migrated logistics from a COBOL monolith to event-driven Go + Kafka.',
    },
  },
  {
    company: 'EcomExperts',
    period: '2019–2020',
    summary: {
      es: 'Integraciones e-commerce multi-cloud.',
      en: 'Multi-cloud e-commerce integrations.',
    },
  },
];

export const experienceFootnote: Record<Lang, string> = {
  es: 'Antes: data/BI (Python, SQL). Formación: UNSAM — Programación; Kubernetes (Linux Foundation, en curso).',
  en: 'Earlier: data/BI (Python, SQL). Education: UNSAM — Programming; Kubernetes (Linux Foundation, in progress).',
};
