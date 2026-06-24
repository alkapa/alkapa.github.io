// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://alkapa.github.io',
  base: '/',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false, // es => "/", en => "/en/"
    },
  },
  vite: {
    // cast: @tailwindcss/vite y Astro empaquetan versiones distintas de Vite,
    // así que los tipos del Plugin difieren (falso positivo; compila ok).
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
