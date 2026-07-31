export interface ContactConfig {
	/** Telefone em formato de exibição. */
	phone: string;
	/** Telefone em formato E.164, para href="tel:...". */
	phoneHref: string;
	/** Número de WhatsApp sem formatação, para links wa.me. */
	whatsappNumber: string;
	/** Ainda não existe um e-mail de contato divulgado publicamente. */
	email?: string;
}

export const contact: ContactConfig = {
	phone: '(41) 99544-1327',
	phoneHref: 'tel:+5541995441327',
	whatsappNumber: '5541995441327',
};

const defaultWhatsappMessage = 'Olá, gostaria de agendar um ensaio';

export const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(defaultWhatsappMessage)}`;

/** Gera um link de WhatsApp com mensagem pré-preenchida específica (ex: por tipo de ensaio). */
export function whatsappHrefFor(message: string): string {
	return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
