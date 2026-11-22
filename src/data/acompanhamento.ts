import { whatsappHrefFor } from '../config/contact';

/**
 * PLACEHOLDER — os textos abaixo (hero, intro, process, faq, cta) são
 * temporários (mas já no tom/tema certo) e serão substituídos quando a
 * comunicação final for definida. Todas as imagens já são fotografias reais.
 */

export const acompanhamentoWhatsappHref = whatsappHrefFor(
	'Olá, gostaria de saber sobre o acompanhamento mensal do bebê',
);

const img = (n: string) => `/images/portfolio/acompanhamento/${n}-acompanhamento.webp`;

export const seo = {
	path: '/acompanhamento',
	title: 'Acompanhamento Mensal do Bebê em São José dos Pinhais e Curitiba | Pamela Teice Fotografia',
	description:
		'Ensaios mensais que acompanham o primeiro ano do seu bebê em São José dos Pinhais, Curitiba e Região Metropolitana. Cenários temáticos, smash the cake e cada fase guardada com carinho.',
	image: img('12'),
	imageAlt: 'Acompanhamento mensal do bebê por Pamela Teice Fotografia',
	keywords: [
		'acompanhamento mensal bebê',
		'ensaio mensal bebê',
		'fotos mensais do bebê Curitiba',
		'ensaio mesversário São José dos Pinhais',
		'smash the cake Curitiba',
	],
};

export const hero = {
	eyebrow: 'Acompanhamento Mensal',
	title: 'Cada mês, uma descoberta nova. Cada fase, guardada para sempre.',
	description:
		'Ensaios que acompanham o primeiro ano do seu bebê, do primeiro sorriso ao primeiro bolo, em São José dos Pinhais, Curitiba e Região Metropolitana.',
	// Recorte de 19: bebê deslocado para a direita e leve escurecimento, para o texto branco.
	image: '/images/portfolio/acompanhamento/acompanhamento-hero.webp',
	imageAlt: 'Bebê sorrindo de macacão xadrez vermelho sentado em cenário de feira com melancias',
};

export const intro = {
	eyebrow: 'Por que registrar',
	title: 'Em nenhuma outra fase da vida se muda tanto em tão pouco tempo.',
	paragraphs: [
		'Em um ano, o bebê que cabia no seu colo aprende a sorrir, a sentar, a engatinhar e, quem sabe, a dar os primeiros passos. Tudo isso acontece tão rápido que, quando você percebe, a fase já passou.',
		'O acompanhamento mensal guarda cada etapa desse crescimento, para que vocês possam rever, lado a lado, a história completa do primeiro ano.',
	],
	image: img('20'),
	imageAlt: 'Bebê sorrindo sentado em cavalinho de balanço branco',
};

export const process = {
	eyebrow: 'A Experiência',
	title: 'Um ensaio para cada fase, no ritmo do seu bebê.',
	steps: [
		{
			number: '01',
			title: 'Escolha dos meses',
			description:
				'Definimos juntos quais meses registrar: todos os meses do primeiro ano ou apenas as fases mais marcantes.',
		},
		{
			number: '02',
			title: 'Temas e cenários',
			description:
				'Para cada ensaio planejamos um cenário que combine com a fase e com o estilo da família, das cores aos detalhes.',
		},
		{
			number: '03',
			title: 'Ensaio no estúdio',
			description:
				'Um ensaio leve e sem pressa, com pausas para mamar, brincar e descansar sempre que o bebê precisar.',
		},
		{
			number: '04',
			title: 'Entrega',
			description:
				'Você recebe as fotografias de cada ensaio e, ao fim do primeiro ano, tem a história completa do crescimento do seu bebê.',
		},
	],
};

export const gallery = {
	eyebrow: 'Galeria',
	title: 'Um ano inteiro de primeiras vezes.',
	/**
	 * Ordem única para grid + Lightbox: as 4 primeiras aparecem no grid 2×2
	 * da página (todas horizontais, já que o grid recorta em 3:2) e variam
	 * entre close, cenário, banho e smash the cake. As demais só aparecem no Lightbox.
	 * 19 (hero) e 20 (intro, vertical) ficam de fora para não repetir na página;
	 * 21 e 22 ficam de fora por serem quase iguais a 02 e 13.
	 */
	images: [
		{ image: img('01'), alt: 'Bebê de olhos azuis sorrindo em cenário de dinossauros verde-água' },
		{
			image: img('02'),
			alt: 'Bebê de macacão laranja de tricô sentado em balanço de madeira com folhagens e coelhinhos',
		},
		{ image: img('03'), alt: 'Bebê sorrindo dentro de banheira em cenário de balões e arca de Noé' },
		{
			image: img('04'),
			alt: 'Bebê comemorando o primeiro ano com bolo azul sobre caixote com a palavra ONE, ao ar livre',
		},
		{ image: img('05'), alt: 'Bebê de olhos azuis segurando as cordas do balanço com expressão de surpresa' },
		{ image: img('06'), alt: 'Bebê com tiara de flores sentada em cenário rosa com borboletas e balões' },
		{ image: img('07'), alt: 'Menina sorrindo sentada em cenário de princesa com castelo e balões rosa' },
		{ image: img('08'), alt: 'Close de bebê com laço no cabelo e boquinha suja de bolo' },
		{ image: img('09'), alt: 'Bebê rindo e brincando com a água em banheira decorada com margaridas' },
		{ image: img('10'), alt: 'Bebê com tiara de orelhas de coelho em cenário de Páscoa com cenouras' },
		{ image: img('11'), alt: 'Bebê de vestido branco com laço sentada em frente a painel de papel kraft' },
		{ image: img('12'), alt: 'Bebê sorrindo de macacão marrom no balanço de madeira com folhagens' },
		{ image: img('13'), alt: 'Bebê sorrindo em cenário de Páscoa com coelho, cenouras e ovinhos' },
		{ image: img('14'), alt: 'Bebê sentado em cesto de vime em cenário de dinossauros' },
		{ image: img('15'), alt: 'Bebê provando o bolo no smash the cake de primeiro aniversário' },
		{ image: img('16'), alt: 'Detalhe dos pezinhos do bebê dentro de cesto de vime' },
		{ image: img('17'), alt: 'Bebê de jardineira lilás sentado sobre pelego em fundo azul' },
		{ image: img('18'), alt: 'Close de bebê sorrindo com body verde-água' },
	],
};

export const faq = {
	eyebrow: 'Perguntas Frequentes',
	title: 'Tudo o que você precisa saber antes de agendar.',
	items: [
		{
			question: 'Quando começar o acompanhamento?',
			answer:
				'O ideal é começar logo depois do ensaio newborn, a partir do primeiro mês. Mas dá para começar em qualquer fase do primeiro ano: o importante é não deixar passar os momentos que você quer guardar.',
		},
		{
			question: 'Preciso fazer um ensaio todos os meses?',
			answer:
				'Não. Você pode registrar todos os meses ou escolher as fases mais marcantes, como quando o bebê começa a sentar, a engatinhar ou completa um ano. Montamos juntos o formato que faz mais sentido para a sua família.',
		},
		{
			question: 'Como são escolhidos os temas?',
			answer:
				'Conversamos antes de cada ensaio sobre cores, estilo e a fase do bebê. Tenho cenários e acessórios para diferentes temas, e você também pode sugerir ideias ou trazer peças especiais da família.',
		},
		{
			question: 'O smash the cake pode fazer parte do acompanhamento?',
			answer:
				'Sim! O ensaio de um ano costuma ser o encerramento do acompanhamento, e o smash the cake, com bolo e banho no final, é um dos momentos mais divertidos.',
		},
		{
			question: 'E se o bebê estiver cansado ou indisposto no dia?',
			answer:
				'O ensaio respeita sempre o ritmo do bebê, com pausas para mamar, dormir e brincar. Se ele não estiver bem no dia, remarcamos com tranquilidade.',
		},
		{
			question: 'Os pais e irmãos podem participar?',
			answer:
				'Claro! Fotos em família podem entrar em qualquer ensaio do acompanhamento. É só me avisar antes para planejarmos.',
		},
		{
			question: 'Em quanto tempo recebo as fotos?',
			answer:
				'O prazo médio de entrega é de 15 a 20 dias úteis após cada ensaio, com cada imagem tratada individualmente com cuidado.',
		},
	],
};

export const cta = {
	eyebrow: 'Pronta para acompanhar cada fase?',
	title: 'Vamos guardar juntos o primeiro ano do seu bebê, mês a mês?',
	description:
		'O primeiro ano passa num piscar de olhos. Fale comigo, montamos juntos o seu acompanhamento e você não perde nenhuma fase.',
	primaryLabel: 'Agendar Ensaio',
	primaryHref: acompanhamentoWhatsappHref,
	secondaryLabel: 'Ver outros ensaios',
	secondaryHref: '/#portfolio',
};
