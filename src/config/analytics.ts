import { portfolioCategories } from '../data/portfolio';

/** ID do container do Google Tag Manager, carregado em todas as páginas via Layout. */
export const GTM_ID = 'GTM-MQZT457Z';

/** Chave no localStorage onde a escolha do banner de cookies é guardada. */
export const CONSENT_STORAGE_KEY = 'pt_cookie_consent';

/** Depois desse prazo o banner volta a aparecer e pede o consentimento de novo. */
export const CONSENT_MAX_AGE_DAYS = 365;

export type PageType = 'home' | 'landing' | 'institucional';

export interface PageContext {
	/** Tipo da página — permite comparar Home x Landing Pages nos relatórios. */
	pageType: PageType;
	/** Serviço/ensaio da página (slug da LP, ex: "gestante"), ou "geral" fora das LPs. */
	service: string;
}

/**
 * Contexto da página enviado ao dataLayer antes do GTM carregar. Toda LP registrada
 * em portfolio.ts é reconhecida automaticamente pelo slug — LP nova não exige mudança aqui.
 */
export function pageContextFor(pathname: string): PageContext {
	const slug = pathname.replace(/^\/+|\/+$/g, '');
	if (slug === '') return { pageType: 'home', service: 'geral' };
	if (portfolioCategories.some((category) => category.slug === slug)) {
		return { pageType: 'landing', service: slug };
	}
	return { pageType: 'institucional', service: 'geral' };
}
