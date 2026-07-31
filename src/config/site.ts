export interface SiteConfig {
	/** Nome completo da empresa, usado em títulos e dados estruturados. */
	name: string;
	/** Nome curto, usado no manifest/PWA e em espaços reduzidos. */
	shortName: string;
	/** Domínio de produção, sem protocolo. Nunca usar domínios de preview (ex: pages.dev). */
	domain: string;
	/** URL base de produção, sem barra final. */
	url: string;
	locale: string;
	language: string;
	streetAddress: string;
	city: string;
	state: string;
	country: string;
	/** Cidades/regiões atendidas, usadas em dados estruturados (areaServed). */
	areaServed: string[];
	defaultTitle: string;
	defaultDescription: string;
	/** Caminho (a partir da raiz) da imagem padrão para compartilhamento (Open Graph/Twitter). */
	defaultImage: string;
	/** Cor de destaque usada em theme-color e no manifest (--color-accent do design system). */
	themeColor: string;
	/** Cor de fundo usada no manifest (--color-bg do design system). */
	backgroundColor: string;
}

export const site: SiteConfig = {
	name: 'Pamela Teice Fotografia',
	shortName: 'Pamela Teice',
	domain: 'pamelateicefotografia.com.br',
	url: 'https://pamelateicefotografia.com.br',
	locale: 'pt_BR',
	language: 'pt-BR',
	streetAddress: 'Rua Professor Thales de Souza e Silva',
	city: 'São José dos Pinhais',
	state: 'PR',
	country: 'BR',
	areaServed: ['São José dos Pinhais', 'Curitiba', 'Região Metropolitana de Curitiba'],
	defaultTitle: 'Pamela Teice Fotografia | Fotógrafa em São José dos Pinhais e Curitiba',
	defaultDescription:
		'Ensaios de gestante, newborn, infantil, família, escolar e casamento com Pamela Teice, fotógrafa em São José dos Pinhais, Curitiba e Região Metropolitana.',
	defaultImage: '/images/hero/hero-home.webp',
	themeColor: '#7c8560',
	backgroundColor: '#f2ece3',
};
