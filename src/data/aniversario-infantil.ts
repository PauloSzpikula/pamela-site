import { whatsappHrefFor } from '../config/contact';

/**
 * PLACEHOLDER — os textos abaixo (hero, intro, process, faq, cta) são
 * temporários (mas já no tom/tema certo) e serão substituídos quando a
 * comunicação final for definida. As imagens de `intro` e `gallery` já são
 * fotografias reais (Sprint 15.1); `hero.image` ainda reaproveita a capa de
 * portfólio (`infantil-capa.webp`) até que uma imagem de hero dedicada exista.
 */

export const aniversarioInfantilWhatsappHref = whatsappHrefFor(
	'Olá, gostaria de agendar um ensaio de aniversário infantil'
);

export const seo = {
	path: '/aniversario-infantil',
	title: 'Ensaio de Aniversário Infantil em São José dos Pinhais e Curitiba | Pamela Teice Fotografia',
	description:
		'Ensaios de aniversário infantil espontâneos e cheios de alegria em São José dos Pinhais, Curitiba e Região Metropolitana. Fotografias que guardam a magia da festa.',
	image: '/images/portfolio/infantil/infantil-capa.webp',
	imageAlt: 'Ensaio de aniversário infantil por Pamela Teice Fotografia',
	keywords: [
		'ensaio aniversário infantil',
		'fotógrafa infantil',
		'ensaio aniversário infantil São José dos Pinhais',
		'ensaio aniversário infantil Curitiba',
		'fotografia de festa infantil',
	],
};

export const hero = {
	eyebrow: 'Aniversário Infantil',
	title: 'A alegria da festa, registrada como ela realmente aconteceu.',
	description:
		'Fotografias espontâneas que guardam os sorrisos, as brincadeiras e a energia única do aniversário do seu filho — em São José dos Pinhais, Curitiba e Região Metropolitana.',
	image: '/images/portfolio/infantil/infantil-capa.webp',
	imageAlt: 'Criança sorrindo em festa de aniversário infantil',
};

export const intro = {
	eyebrow: 'Por que registrar',
	title: 'Cada festa é única e passa rápido demais para confiar só na memória.',
	paragraphs: [
		'Entre o bolo, as brincadeiras e os amigos correndo pela festa, os melhores momentos acontecem sem aviso — e passam rápido demais.',
		'Um ensaio de aniversário infantil existe para guardar essa energia genuína, sem poses forçadas, do jeitinho que a festa realmente foi.',
	],
	image: '/images/portfolio/infantil/pq-registrar.webp',
	imageAlt: 'Família comemorando aniversário infantil ao redor do bolo',
};

export const process = {
	eyebrow: 'A Experiência',
	title: 'Um acompanhamento leve, pensado para não atrapalhar a festa em nenhum momento.',
	steps: [
		{
			number: '01',
			title: 'Agendamento',
			description: 'Conversamos sobre a data, o tema da festa e a rotina do dia para organizar tudo com calma.',
		},
		{
			number: '02',
			title: 'Planejamento',
			description: 'Alinhamos horários, decoração e os momentos-chave que não podem passar despercebidos.',
		},
		{
			number: '03',
			title: 'Ensaio',
			description: 'Acompanho a festa com discrição, registrando espontaneidade em vez de interromper a diversão.',
		},
		{
			number: '04',
			title: 'Entrega',
			description: 'Você recebe fotografias tratadas com cuidado, prontas para reviver a festa quando quiser.',
		},
	],
};

export const gallery = {
	eyebrow: 'Galeria',
	title: 'Uma festa, muitos instantes.',
	/**
	 * Ordem única para grid + Lightbox (Sprint 15.3): as 4 primeiras aparecem
	 * no grid 2×2 da página — todas de pessoas/emoção/interação, sem detalhe
	 * de decoração puro, já que só há 4 posições. As demais (03, 10, 04, 06,
	 * 02, 08) só aparecem ao abrir o Lightbox, seja clicando numa das 4 ou em
	 * "Ver galeria completa".
	 */
	images: [
		{
			image: '/images/portfolio/infantil/01-aniv-inf.webp',
			alt: 'Criança sorridente brincando em festa de aniversário infantil',
		},
		{
			image: '/images/portfolio/infantil/09-aniv-inf.webp',
			alt: 'Família comemorando aniversário infantil cercada de amigos',
		},
		{
			image: '/images/portfolio/infantil/05-aniv-inf.webp',
			alt: 'Crianças fantasiadas de princesa em festa com tema de unicórnio',
		},
		{
			image: '/images/portfolio/infantil/07-aniv-inf.webp',
			alt: 'Família reunida em festa de aniversário infantil com tema de super-heróis',
		},
		{
			image: '/images/portfolio/infantil/03-aniv-inf.webp',
			alt: 'Família celebrando aniversário infantil com tema de dinossauros',
		},
		{
			image: '/images/portfolio/infantil/10-aniv-inf.webp',
			alt: 'Decoração temática de festa de aniversário infantil',
		},
		{
			image: '/images/portfolio/infantil/04-aniv-inf.webp',
			alt: 'Mesa decorada para festa de aniversário infantil',
		},
		{
			image: '/images/portfolio/infantil/06-aniv-inf.webp',
			alt: 'Mesa de doces com tema de sereia em festa de aniversário infantil',
		},
		{
			image: '/images/portfolio/infantil/02-aniv-inf.webp',
			alt: 'Decoração de festa infantil com tema de super-heróis',
		},
		{
			image: '/images/portfolio/infantil/08-aniv-inf.webp',
			alt: 'Docinhos personalizados com tema de carrinho de corrida',
		},
	],
};

export const faq = {
	eyebrow: 'Perguntas Frequentes',
	title: 'Tudo o que você precisa saber antes de agendar.',
	items: [
		{
			question: 'Em que momento da festa você chega?',
			answer:
				'O ideal é chegar um pouco antes do início, para registrar a decoração pronta e os primeiros convidados chegando. Definimos o horário exato conforme a programação da sua festa.',
		},
		{
			question: 'Quanto tempo de cobertura está incluído?',
			answer:
				'Em média de 2 a 3 horas, cobrindo os principais momentos da festa: chegada, brincadeiras, parabéns e bolo. Podemos ajustar conforme a duração do evento.',
		},
		{
			question: 'Vocês atendem festas em buffet, salão ou em casa?',
			answer:
				'Sim! Atendo festas em qualquer local em São José dos Pinhais, Curitiba e Região Metropolitana, seja em buffet, salão de festas, casa ou espaço ao ar livre.',
		},
		{
			question: 'As fotos incluem só a criança aniversariante ou os convidados também?',
			answer:
				'O foco principal é a criança aniversariante e a família, mas os melhores momentos com amigos e convidados também são registrados naturalmente ao longo da festa.',
		},
		{
			question: 'É possível contratar um ensaio antes da festa, tipo um "smash the cake"?',
			answer:
				'Sim, esse é um ensaio à parte, geralmente feito em estúdio ou locação antes da data da festa. Podemos conversar sobre incluir essa opção junto com a cobertura do evento.',
		},
		{
			question: 'Em quanto tempo recebo as fotos?',
			answer:
				'O prazo médio de entrega é de 15 a 20 dias úteis, com cada imagem tratada individualmente com cuidado.',
		},
	],
};

export const cta = {
	eyebrow: 'Pronto para guardar essa festa para sempre?',
	title: 'Vamos transformar a alegria do aniversário em fotografias para guardar por toda a vida?',
	description:
		'Cada festa de aniversário é única e não se repete. Agende o ensaio do aniversário infantil e preserve hoje os momentos que vocês vão reviver para sempre.',
	primaryLabel: 'Agendar Ensaio',
	primaryHref: aniversarioInfantilWhatsappHref,
	secondaryLabel: 'Ver outros ensaios',
	secondaryHref: '/#portfolio',
};
