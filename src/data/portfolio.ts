export interface PortfolioCategory {
	slug: string;
	label: string;
	image: string;
	/** true quando a Landing Page da categoria (/{slug}) já existe. Usado no sitemap. */
	published?: boolean;
}

export const portfolioCategories: PortfolioCategory[] = [
	{
		slug: 'gestante',
		label: 'Gestante',
		image: '/images/portfolio/gestante/gestante-capa.webp',
		published: true,
	},
	{
		slug: 'newborn',
		label: 'Newborn',
		image: '/images/portfolio/newborn/newborn-capa.webp',
		published: true,
	},
	{
		slug: 'aniversario-infantil',
		label: 'Aniversário Infantil',
		image: '/images/portfolio/infantil/infantil-capa.webp',
		published: true,
	},
	{
		slug: 'parto',
		label: 'Parto',
		image: '/images/portfolio/parto/parto-capa.webp',
		published: true,
	},
	{
		slug: 'acompanhamento',
		label: 'Acompanhamento',
		image: '/images/portfolio/acompanhamento/acompanhamento-capa.webp',
		published: true,
	},
	{ slug: 'casamento', label: 'Casamento', image: '/images/portfolio/casamento/casamento-capa.webp' },
];
