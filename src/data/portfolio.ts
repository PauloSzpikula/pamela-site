export interface PortfolioCategory {
	slug: string;
	label: string;
	image: string;
}

export const portfolioCategories: PortfolioCategory[] = [
	{ slug: 'gestante', label: 'Gestante', image: '/images/portfolio/gestante/capa.jpg' },
	{ slug: 'newborn', label: 'Newborn', image: '/images/portfolio/newborn/capa.jpg' },
	{ slug: 'infantil', label: 'Infantil', image: '/images/portfolio/infantil/capa.jpg' },
	{ slug: 'familia', label: 'Família', image: '/images/portfolio/familia/capa.jpg' },
	{ slug: 'escolar', label: 'Escolar', image: '/images/portfolio/escolar/capa.jpg' },
	{ slug: 'casamento', label: 'Casamento', image: '/images/portfolio/casamento/capa.jpg' },
];
