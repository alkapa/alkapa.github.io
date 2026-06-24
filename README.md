# alkapa.github.io

Portafolio personal de **Juan Camilo Gutiérrez** (alkapa) — Backend Engineer Go-first + tooling de IA.
Una carta de presentación viva (no un CV): lo que puedo construir, en primera persona.

🔗 **https://alkapa.github.io**

## Stack

- [Astro](https://astro.build) — salida 100% estática
- [Tailwind CSS v4](https://tailwindcss.com) — tokens del sistema de diseño en `src/styles/global.css`
- TypeScript vanilla para la capa interactiva (canvas + IntersectionObserver), sin framework de UI
- Bilingüe **ES / EN** (i18n nativo de Astro: `/` y `/en/`)
- Deploy automático a GitHub Pages vía GitHub Actions

## Concepto

Dirección visual editorial "Monumental" (paper/ink + acento oro) diseñada en Claude Design, con una
**capa reactiva de "orquesta silenciosa"**: el sitio es una partitura que se interpreta al hacer
scroll —línea-batuta en el hero, diagrama de orquestación en la tesis de IA, entradas escalonadas—.
Todo respeta `prefers-reduced-motion`.

## Desarrollo

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/
```

## Estructura

```
src/
  layouts/Base.astro        # head, fuentes, tokens, motion guard
  components/               # Nav, Hero, ScoreLine, Offers, Projects, Thesis, Orchestration, ...
  data/                    # projects.ts, experience.ts, site.ts
  i18n/ui.ts               # diccionario ES/EN
  scripts/motion.ts        # reveals, parallax, sección activa
  styles/global.css        # @theme + keyframes + utilidades
  pages/                   # index.astro (es) · en/index.astro (en)
```
