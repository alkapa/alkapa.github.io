import type { Lang } from '../i18n/ui';

export interface Project {
  slug: string;
  name: string;        // nombre en mono (no se traduce)
  stack: string;       // etiqueta corta arriba a la derecha (no se traduce)
  link?: string;       // url externa
  star?: boolean;      // ★ destacado
  side?: boolean;      // badge SIDE (side project)
  metric?: string;     // métrica corta opcional (no se traduce)
  title: Record<Lang, string>;
  /** descripción con HTML inline de confianza (<code>, <b>) */
  desc: Record<Lang, string>;
}

/** ualess — destacado, se renderiza en el bloque oscuro. */
export const featured: Project = {
  slug: 'ualess',
  name: 'ualess',
  stack: 'Go · AWS Lambda · MCP',
  link: 'https://github.com/alkapa/ualess',
  star: true,
  title: {
    es: 'Scaffolding universal de servicios Lambda en Go',
    en: 'Universal AWS Lambda scaffolding in Go',
  },
  desc: {
    es: 'Generás un servicio Lambda completo (HTTP/sync/async, con conectores a DynamoDB, S3, SNS, SQS) desde un <code class="text-[var(--color-gold-bright)]">workspace.yaml</code> — con editor web visual y un servidor MCP para que asistentes de IA generen, validen y previsualicen el código. Desarrollo local sin dependencias extra (sin LocalStack).',
    en: 'Generate a complete Lambda service (HTTP/sync/async, with DynamoDB, S3, SNS, SQS connectors) from a <code class="text-[var(--color-gold-bright)]">workspace.yaml</code> — with a visual web editor and an MCP server so AI assistants can generate, validate and preview the code. Local development with no extra dependencies (no LocalStack).',
  },
};

/** Resto de la grilla, en el orden del mockup. */
export const projects: Project[] = [
  {
    slug: 'lambda-go',
    name: 'lambda-go',
    stack: 'Go · AWS',
    link: 'https://github.com/alkapa/ualess',
    metric: '+45% dev · −60% code review',
    title: {
      es: 'Librería opinada para AWS Lambda',
      en: 'An opinionated library for AWS Lambda',
    },
    desc: {
      es: 'Abstrae el manejo de eventos de la lógica de negocio: escribís el <code>Service</code> y la librería lo identifica, adapta y ejecuta — sync/async/HTTP/WS/batch, middleware y generics sin reflection.',
      en: 'Abstracts event handling away from business logic: you write the <code>Service</code> and the library identifies, adapts and runs it — sync/async/HTTP/WS/batch, with middleware and generics, no reflection.',
    },
  },
  {
    slug: 'goala',
    name: 'goala',
    stack: 'Go',
    title: {
      es: 'Librerías de utilidades del ecosistema',
      en: "The ecosystem's utility libraries",
    },
    desc: {
      es: 'Las que impulsé y desarrollé: <b>utel</b> (observabilidad), <b>udyn</b> (DynamoDB con paginación por generics + expression builder) y <b>uaws</b> (clientes AWS con simulaciones + mock injection).',
      en: 'The ones I drove and built: <b>utel</b> (observability), <b>udyn</b> (DynamoDB with generics-based pagination + expression builder) and <b>uaws</b> (AWS clients with simulations + mock injection).',
    },
  },
  {
    slug: 'gitar',
    name: 'gitar',
    stack: 'Rust · Tauri',
    title: {
      es: 'Revisión de código generado por IA',
      en: 'Reviewing AI-generated code',
    },
    desc: {
      es: 'App de escritorio para revisar cambios de IA antes de integrarlos: monitorea el árbol de trabajo en vivo, ancla comentarios a código que evoluciona y orquesta agentes ACP.',
      en: 'Desktop app to review AI changes before merging: watches the working tree live, anchors comments to code as it evolves and orchestrates ACP agents.',
    },
  },
  {
    slug: 'gauchada',
    name: 'gauchada',
    stack: 'Node · React',
    title: {
      es: 'Agente Claude embebido en Chrome',
      en: 'Claude agent embedded in Chrome',
    },
    desc: {
      es: 'Un agente ACP nativo dentro del navegador: edita código viendo los cambios en vivo y actúa sobre las pestañas reales. Expone 27 herramientas MCP sobre Native Messaging Host.',
      en: "A native ACP agent inside the browser: edits code with live preview and acts on the user's real tabs. Exposes 27 MCP tools over a Native Messaging Host.",
    },
  },
  {
    slug: 'triqui',
    name: 'triqui',
    stack: 'Go',
    title: {
      es: 'Proxy OpenAI ↔ ACP',
      en: 'OpenAI ↔ ACP proxy',
    },
    desc: {
      es: 'Deja que cualquier cliente compatible con OpenAI hable con Claude, Codex o Gemini sin SDKs de proveedor. Elimina el vendor lock-in; soporta streaming y múltiples modelos.',
      en: 'Lets any OpenAI-compatible client talk to Claude, Codex or Gemini without vendor SDKs. Removes vendor lock-in; supports streaming and multiple models.',
    },
  },
  {
    slug: 'mimic',
    name: 'mimic',
    stack: 'Kotlin · C++',
    link: 'https://github.com/alkapa/Mimic',
    side: true,
    title: {
      es: 'Tu celular como mic de karaoke',
      en: 'Your phone as a karaoke mic',
    },
    desc: {
      es: 'Afinador + efectos con motor de audio nativo de baja latencia (Oboe / C++) y UI en Jetpack Compose. Convertí el teléfono en un micrófono con FX en tiempo real.',
      en: 'Tuner + effects with a low-latency native audio engine (Oboe / C++) and a Jetpack Compose UI. I turned the phone into a mic with real-time FX.',
    },
  },
  {
    slug: 'gx-100',
    name: 'gx-100',
    stack: 'React · DSP',
    link: 'https://github.com/alkapa/gx-100-eq-helper',
    side: true,
    title: {
      es: 'Editor de EQ por BLE MIDI',
      en: 'BLE MIDI EQ editor',
    },
    desc: {
      es: 'Configura el Global EQ del pedal BOSS GX-100 desde el celular, con espectrómetro en vivo del micrófono y auto-EQ — hablando SysEx por BLE MIDI.',
      en: "Configures the BOSS GX-100 pedal's Global EQ from your phone, with a live mic spectrometer and auto-EQ — speaking SysEx over BLE MIDI.",
    },
  },
];
