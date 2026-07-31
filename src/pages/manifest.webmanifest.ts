import type { APIRoute } from 'astro';
import { site } from '../config/site';

export const GET: APIRoute = () => {
	const manifest = {
		name: site.name,
		short_name: site.shortName,
		description: site.defaultDescription,
		start_url: '/',
		scope: '/',
		display: 'standalone',
		lang: site.language,
		background_color: site.backgroundColor,
		theme_color: site.themeColor,
		icons: [
			{
				src: '/favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png',
				purpose: 'any',
			},
			{
				src: '/favicon-32x32.png',
				sizes: '32x32',
				type: 'image/png',
				purpose: 'any',
			},
			{
				src: '/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'any',
			},
			{
				src: '/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'any',
			},
			{
				src: '/maskable-icon-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'maskable',
			},
		],
	};

	return new Response(JSON.stringify(manifest, null, 2), {
		headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
	});
};
