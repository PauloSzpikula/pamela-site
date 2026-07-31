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
	{ slug: 'newborn', label: 'Newborn', image: '/images/portfolio/newborn/newborn-capa.webp' },
	{ slug: 'infantil', label: 'Infantil', image: '/images/portfolio/infantil/infantil-capa.webp' },
	{ slug: 'familia', label: 'Família', image: '/images/portfolio/familia/familia-capa.webp' },
	{ slug: 'escolar', label: 'Escolar', image: '/images/portfolio/escolar/escolar-capa.webp' },
	{ slug: 'casamento', label: 'Casamento', image: '/images/portfolio/casamento/casamento-capa.webp' },
];
