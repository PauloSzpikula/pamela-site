export interface NavItem {
	label: string;
	href: string;
}

export const navItems: NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Sobre', href: '/#sobre' },
	{ label: 'Portfólio', href: '/#portfolio' },
	{ label: 'Depoimentos', href: '/#depoimentos' },
	{ label: 'Contato', href: '/#contato' },
];
