import { reviewsData } from '../data/reviews/reviews';
import type { Review } from '../data/reviews/reviews';

/**
 * Único ponto de acesso aos dados de avaliações. Componentes e páginas devem
 * sempre importar daqui — nunca de `src/data/reviews/reviews.ts` diretamente.
 * Isso permite trocar a fonte dos dados no futuro (ex: API do Google) sem
 * tocar em nenhum componente.
 */

export function getReviews(): Review[] {
	return reviewsData.reviews;
}

export function getFeaturedReviews(limit: number): Review[] {
	return reviewsData.reviews.slice(0, limit);
}

export function getRating(): number {
	return reviewsData.rating;
}

export function getTotalReviews(): number {
	return reviewsData.totalReviews;
}

export function getGoogleProfile(): string {
	return reviewsData.googleProfileUrl;
}

/** Formata a nota no padrão brasileiro (ex: 5 -> "5,0"). */
export function formatRating(rating: number): string {
	return rating.toFixed(1).replace('.', ',');
}

export interface TruncatedReviewText {
	text: string;
	isTruncated: boolean;
}

/**
 * Trunca um comentário no limite de palavra mais próximo (nunca no meio de
 * uma palavra) e adiciona "..." quando corta. Usado pelo ReviewCard para
 * manter os cards de uma mesma página do carrossel com altura equilibrada.
 */
export function truncateReviewText(text: string, maxLength = 180): TruncatedReviewText {
	if (text.length <= maxLength) return { text, isTruncated: false };

	const cut = text.slice(0, maxLength);
	const lastBreak = Math.max(cut.lastIndexOf(' '), cut.lastIndexOf('\n'));
	const safe = lastBreak > 0 ? cut.slice(0, lastBreak) : cut;

	return { text: `${safe.trimEnd()}...`, isTruncated: true };
}
