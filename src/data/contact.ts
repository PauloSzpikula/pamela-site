const whatsappNumber = '5541995441327';

export const whatsappHref = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20ensaio`;

/** Gera um link de WhatsApp com mensagem pré-preenchida específica (ex: por tipo de ensaio). */
export const whatsappHrefFor = (message: string) =>
	`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const instagramHref = 'https://www.instagram.com/pamelateicefotografia';
