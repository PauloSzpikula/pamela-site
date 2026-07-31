// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/config/site.ts';

// https://astro.build/config
export default defineConfig({
	// Domínio de produção — nunca o domínio de preview (*.pages.dev). Alimenta
	// Astro.site, usado como base para canonicals e URLs de Open Graph.
	site: site.url,
	// Canonicals do site usam URLs sem barra final (ex: /gestante, não /gestante/).
	trailingSlash: 'never',
	compressHTML: true,
	prefetch: true,
	vite: {
		plugins: [tailwindcss()],
	},
});
