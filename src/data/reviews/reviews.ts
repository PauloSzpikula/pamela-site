export interface Review {
	/** Identificador estável (ex: "larissa-garcia"). Necessário para futuros filtros/links diretos. */
	id: string;
	author: string;
	rating: number;
	date: string;
	text: string;
	/**
	 * Reservado para uso futuro (destacar avaliações específicas). Ainda não
	 * é lido por `ReviewService` — `getFeaturedReviews()` hoje retorna os N
	 * primeiros itens do array, independente deste campo.
	 */
	featured: boolean;
}

export interface ReviewsData {
	/** Nota agregada exibida no site (ex: 5.0). Vem do perfil do Google. */
	rating: number;
	/** Total de avaliações no Google — atualizar manualmente quando o número mudar. */
	totalReviews: number;
	/** Link do perfil público do Google (aba "Avaliações"). Enquanto vazio, o botão de CTA não é exibido. */
	googleProfileUrl: string;
	reviews: Review[];
}

/**
 * Fonte única dos dados de avaliações. Nenhum componente deve importar este
 * arquivo diretamente — sempre passar por `src/services/ReviewService.ts`.
 *
 * Avaliações reais do Google, mais recentes primeiro. Para adicionar uma
 * nova, insira no topo do array `reviews` e atualize `rating`/`totalReviews`.
 */
export const reviewsData: ReviewsData = {
	rating: 5.0,
	totalReviews: 23,
	googleProfileUrl: 'https://maps.app.goo.gl/XKAcP5Vmv5tPQuXB8',
	reviews: [
		{
			id: 'larissa-garcia',
			author: 'Larissa Garcia',
			rating: 5,
			date: '30/07/2026',
			text: 'Foi uma experiência maravilhosa, desde a recepção nos sentimos acolhidos e sentimos que nossa pequena foi muito bem tratada. O resultado das fotos superou nossas expectativas, ficamos felizes em fazer a escolha certa. 🥰',
			featured: false,
		},
		{
			id: 'cleverson-rodrigues',
			author: 'Cleverson Rodrigues',
			rating: 5,
			date: '30/07/2026',
			text: 'Existem profissionais que apenas entregam um serviço, e existem aqueles que transformam momentos em lembranças para a vida toda.\n\nDesde o primeiro contato, fomos recebidos com muito carinho, atenção e dedicação. Durante a celebração de 1 ano da nossa Helena, ela teve uma sensibilidade incrível para registrar cada sorriso, cada abraço e cada emoção de forma leve e natural.\n\nO resultado superou todas as nossas expectativas. Cada foto nos faz reviver esse momento tão especial e mostra o cuidado e o amor que ela coloca em seu trabalho.\n\nPamela, parabéns pelo seu talento e pelo profissionalismo! Muito obrigado por eternizar um capítulo tão importante da nossa história. Recomendo de olhos fechados a todos que desejam mais do que fotos: desejam guardar sentimentos para sempre. ❤️📸',
			featured: false,
		},
		{
			id: 'barbara-stoco',
			author: 'Barbara Stoco',
			rating: 5,
			date: '29/07/2026',
			text: 'Pamela muito simpática e registrou o aniversário de 10 anos do Miguel com excelência. ❤️',
			featured: false,
		},
		{
			id: 'edineia-teixeira',
			author: 'Edineia Teixeira',
			rating: 5,
			date: '30/06/2026',
			text: 'Gostei muito das fotos de 15 anos da minha filha. A Pamela foi muito atenciosa e muito profissional. As fotos ficaram lindas.',
			featured: false,
		},
		{
			id: 'simone-almeida',
			author: 'Simone Almeida',
			rating: 5,
			date: '25/05/2026',
			text: 'Fotos maravilhosas. 🥰🥰😍',
			featured: false,
		},
		{
			id: 'sara-farias',
			author: 'Sara Farias',
			rating: 5,
			date: '20/04/2026',
			text: 'Ensaio maravilhoso, super respeitou o tempo da gestante e as fotos ficaram lindas. 😻',
			featured: false,
		},
		{
			id: 'raquel-elisa-gioppo',
			author: 'Raquel Elisa Gioppo',
			rating: 5,
			date: '15/04/2026',
			text: 'A Pamela já fez fotos nas festas dos meus dois filhos. Pontual, atenciosa e o resultado sempre foi super positivo! Aceita nossas sugestões de fotos e também tem boas ideias. Procura tirar fotos de todos e a qualidade das fotos é ótima. Super recomendo!',
			featured: false,
		},
		{
			id: 'marilia-franca',
			author: 'Marilia França',
			rating: 5,
			date: '09/04/2026',
			text: 'Já fiz dois ensaios com a Pam, e eu amei cada um. Mulher super profissional, querida e muito atenciosa. Super recomendo o trabalho dela.',
			featured: false,
		},
		{
			id: 'daniela-fedne',
			author: 'Daniela Fedne',
			rating: 5,
			date: '13/03/2026',
			text: 'A experiência que tive com Pamela foi incrível. Ela te deixa bem à vontade. Super profissional. Amei. 😍🥰🤩',
			featured: false,
		},
		{
			id: 'debora-liz',
			author: 'Débora Liz',
			rating: 5,
			date: '05/03/2026',
			text: 'Experiência maravilhosa fazer ensaio com a Pamela. Profissional experiente, orienta poses e dá dicas excelentes. Recomendo o trabalho desta profissional. Com certeza voltarei a contratar.',
			featured: false,
		},
		{
			id: 'graciele-sendoski',
			author: 'Graciele Sendoski',
			rating: 5,
			date: '05/07/2025',
			text: 'A Pamela é muito dedicada, faz seu trabalho com muito amor e dedicação pela fotografia. É muito responsável, pontual, cumpre prazos e horários com excelência e sempre procura surpreender entregando além do esperado.',
			featured: false,
		},
	],
};
