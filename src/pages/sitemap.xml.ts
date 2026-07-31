import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { portfolioCategories } from '../data/portfolio';

interface SitemapRoute {
	path: string;
	changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
	priority: string;
}

/**
 * Rotas fora do Portfólio (home, futuras páginas institucionais, etc).
 * As Landing Pages de ensaio (/gestante, /newborn, ...) entram automaticamente
 * a partir de `portfolioCategories` — marque `published: true` lá quando a
 * página existir e ela aparece aqui sem precisar tocar neste arquivo.
 */
const staticRoutes: SitemapRoute[] = [{ path: '/', changefreq: 'monthly', priority: '1.0' }];

export const GET: APIRoute = () => {
	const landingPageRoutes: SitemapRoute[] = portfolioCategories
		.filter((category) => category.published)
		.map((category) => ({ path: `/${category.slug}`, changefreq: 'monthly', priority: '0.8' }));

	const routes = [...staticRoutes, ...landingPageRoutes];

	const urls = routes
		.map(
			(route) => `  <url>
    <loc>${site.url}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
