export interface ReviewSectionConfig {
	/** Título exibido no topo da seção. */
	title: string;
	/** Quantas avaliações buscar/exibir por padrão (o carrossel limita a 3 no mobile mesmo assim). */
	defaultCount: number;
	/** Exibir o resumo (estrelas + nota + total de avaliações) acima do carrossel. */
	showSummary: boolean;
	/** Exibir o botão final para o perfil do Google. Só aparece se também houver `googleProfileUrl` preenchido. */
	showGoogleButton: boolean;
	/** Texto do botão final. */
	googleButtonLabel: string;
}

/**
 * Configuração central do sistema de avaliações. Home, Landing Pages e
 * futuras páginas reutilizam o mesmo `<ReviewSection />` — para mudar
 * comportamento/conteúdo do componente, altere aqui (ou passe uma prop
 * equivalente na página, que sobrepõe este valor). Nunca lógica nova no
 * componente para isso.
 */
export const reviewConfig: ReviewSectionConfig = {
	title: 'Avaliações de Clientes',
	defaultCount: 6,
	showSummary: true,
	showGoogleButton: true,
	googleButtonLabel: 'Ver todas as avaliações no Google',
};
