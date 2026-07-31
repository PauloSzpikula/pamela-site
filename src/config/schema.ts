import { site } from './site';
import { contact } from './contact';
import { sameAs } from './social';
import { absoluteUrl } from './seo';

/** Reutilizável em qualquer schema que precise de um endereço postal. */
function postalAddress() {
	return {
		'@type': 'PostalAddress',
		streetAddress: site.streetAddress,
		addressLocality: site.city,
		addressRegion: site.state,
		addressCountry: site.country,
	};
}

export function organizationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: site.name,
		url: site.url,
		logo: absoluteUrl('/images/logo/logo-preta.png'),
		image: absoluteUrl(site.defaultImage),
		sameAs,
	};
}

export function localBusinessSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: site.name,
		description: site.defaultDescription,
		url: site.url,
		telephone: contact.phoneHref.replace('tel:', ''),
		image: absoluteUrl(site.defaultImage),
		address: postalAddress(),
		areaServed: site.areaServed,
		sameAs,
	};
}

export function photographerSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Photographer',
		name: site.name,
		description: site.defaultDescription,
		url: site.url,
		image: absoluteUrl(site.defaultImage),
		address: postalAddress(),
		areaServed: site.areaServed,
		sameAs,
	};
}

interface ServiceSchemaOptions {
	name: string;
	description: string;
	path: string;
	image?: string;
}

/** Schema Service, reutilizável por qualquer Landing Page de ensaio (Gestante, Newborn, etc). */
export function serviceSchema({ name, description, path, image }: ServiceSchemaOptions) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		serviceType: name,
		name,
		description,
		url: absoluteUrl(path),
		...(image && { image: absoluteUrl(image) }),
		provider: {
			'@type': 'LocalBusiness',
			name: site.name,
			url: site.url,
			telephone: contact.phoneHref.replace('tel:', ''),
		},
		areaServed: site.areaServed,
	};
}

interface FaqSchemaItem {
	question: string;
	answer: string;
}

export function faqSchema(items: FaqSchemaItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: items.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer,
			},
		})),
	};
}

interface BreadcrumbItem {
	name: string;
	path: string;
}

/** Reutilizável por qualquer página interna: passe a trilha do Home até a página atual. */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: absoluteUrl(item.path),
		})),
	};
}
