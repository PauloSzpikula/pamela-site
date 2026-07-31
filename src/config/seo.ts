import { site } from './site';

/**
 * Resolve um caminho relativo (ou URL já absoluta) para uma URL absoluta de produção.
 * Nunca usar Astro.url.origin para isso — em preview/build ele pode resolver para
 * um domínio de preview (ex: *.pages.dev), e as canonicals/OG precisam sempre do
 * domínio de produção definido em `site.url`.
 */
export function absoluteUrl(pathOrUrl: string): string {
	if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
	const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
	return `${site.url}${path}`;
}

export const defaultRobots = 'index, follow';

export const twitterCardType = 'summary_large_image';
