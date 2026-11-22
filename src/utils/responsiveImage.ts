import fs from 'node:fs';
import path from 'node:path';

/**
 * Cada foto de /public/images (portfólio e sobre) tem uma versão de 960px ao
 * lado, com sufixo "-960" (ex: 01-gestante.webp → 01-gestante-960.webp).
 * Assim o navegador baixa a versão leve em miniaturas e no celular, e a
 * original (1920px) só em telas grandes/retina e no Lightbox.
 *
 * Foto nova: gere a versão 960 junto (sharp, largura 960, webp q78). Sem ela,
 * esta função devolve undefined e a <img> continua funcionando só com `src`.
 */
export function srcsetFor(image: string): string | undefined {
	const small = image.replace(/\.webp$/, '-960.webp');
	if (small === image) return undefined;
	if (!fs.existsSync(path.join(process.cwd(), 'public', small))) return undefined;
	return `${small} 960w, ${image} 1920w`;
}
