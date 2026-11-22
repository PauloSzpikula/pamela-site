import { whatsappHrefFor } from '../config/contact';

/**
 * PLACEHOLDER — os textos abaixo (hero, intro, process, faq, cta) são
 * temporários (mas já no tom/tema certo) e serão substituídos quando a
 * comunicação final for definida. Todas as imagens já são fotografias reais.
 */

export const eventosWhatsappHref = whatsappHrefFor('Olá, gostaria de um orçamento para fotografia de evento');

const img = (n: string) => `/images/portfolio/eventos/${n}-eventos.webp`;

export const seo = {
	path: '/eventos',
	title: 'Fotografia de Eventos em São José dos Pinhais e Curitiba | Pamela Teice Fotografia',
	description:
		'Cobertura fotográfica de 15 anos, bodas, chá revelação, eventos corporativos e esportivos em São José dos Pinhais, Curitiba e Região Metropolitana. Momentos espontâneos registrados com sensibilidade.',
	image: img('01'),
	imageAlt: 'Fotografia de eventos por Pamela Teice Fotografia',
	keywords: [
		'fotografia de eventos',
		'fotógrafa de eventos Curitiba',
		'fotógrafa de eventos São José dos Pinhais',
		'fotografia de 15 anos',
		'fotografia de evento corporativo',
		'fotografia de chá revelação',
	],
};

export const hero = {
	eyebrow: 'Fotografia de Eventos',
	title: 'Os momentos que reúnem as pessoas merecem ser lembrados.',
	description:
		'Cobertura fotográfica de festas, celebrações, eventos corporativos e esportivos, com olhar atento para o que acontece de verdade, em São José dos Pinhais, Curitiba e Região Metropolitana.',
	// Recorte de 10: letreiro deslocado para a direita e escurecido, para o texto branco.
	image: '/images/portfolio/eventos/eventos-hero.webp',
	imageMobile: '/images/portfolio/eventos/eventos-hero-mobile.webp',
	imageAlt: 'Palco de festa de 15 anos com letreiro iluminado e pista de dança de LED',
};

export const intro = {
	eyebrow: 'Por que registrar',
	title: 'Um evento dura algumas horas. As fotografias, a vida inteira.',
	paragraphs: [
		'Em um dia de festa, você está em todos os lugares ao mesmo tempo e, mesmo assim, perde os abraços, os olhares e as risadas que acontecem do outro lado do salão.',
		'Meu trabalho é estar atenta a cada um desses momentos, espontâneos e emocionantes, para que você possa reviver o seu evento como ele realmente foi.',
	],
	image: img('11'),
	imageAlt: 'Casal de idosos abraçado e sorrindo em celebração de bodas ao ar livre',
};

export const process = {
	eyebrow: 'A Experiência',
	title: 'Uma cobertura planejada nos detalhes e leve no grande dia.',
	steps: [
		{
			number: '01',
			title: 'Conversa inicial',
			description:
				'Entendo o seu evento: o estilo, o local, o roteiro e quais momentos e pessoas não podem ficar de fora.',
		},
		{
			number: '02',
			title: 'Planejamento',
			description:
				'Alinhamos o cronograma, os horários principais e a lista de fotos importantes, para que nada seja esquecido.',
		},
		{
			number: '03',
			title: 'Cobertura',
			description:
				'No dia, registro com discrição tanto os momentos posados quanto os espontâneos, sem atrapalhar o andamento do evento.',
		},
		{
			number: '04',
			title: 'Entrega',
			description:
				'Você recebe as fotografias tratadas com cuidado, prontas para guardar, compartilhar e, no caso de empresas, divulgar.',
		},
	],
};

export const gallery = {
	eyebrow: 'Galeria',
	title: 'Cada evento, uma história para contar.',
	/**
	 * Ordem única para grid + Lightbox: as 4 primeiras aparecem no grid 2×2
	 * da página (todas horizontais, já que o grid recorta em 3:2) e variam
	 * entre 15 anos, chá revelação, corporativo e decoração. As demais
	 * (incluindo as verticais dos eventos esportivos) só aparecem no Lightbox.
	 * 10 (hero) e 11 (intro) ficam de fora para não repetir na página.
	 */
	images: [
		{ image: img('01'), alt: 'Debutante de vestido rosa na pista de dança iluminada da festa de 15 anos' },
		{ image: img('02'), alt: 'Casal comemorando com fumaça azul e balões em chá revelação' },
		{ image: img('03'), alt: 'Equipe celebrando o corte da fita na inauguração de uma empresa' },
		{ image: img('04'), alt: 'Salão de festas decorado com tecidos, luzes e arranjos de flores' },
		{ image: img('05'), alt: 'Detalhe das mãos cortando a fita vermelha em inauguração' },
		{ image: img('06'), alt: 'Corredor saltando de alegria ao cruzar a linha de chegada de uma corrida' },
		{ image: img('07'), alt: 'Ciclista posando com a bicicleta na área de largada de um evento esportivo' },
		{ image: img('08'), alt: 'Pelotão de ciclistas em prova de ciclismo, em preto e branco' },
		{ image: img('09'), alt: 'Ciclista em curva durante prova de ciclismo, em preto e branco' },
	],
};

export const faq = {
	eyebrow: 'Perguntas Frequentes',
	title: 'Tudo o que você precisa saber antes de contratar.',
	items: [
		{
			question: 'Quais tipos de evento você fotografa?',
			answer:
				'Festas de 15 anos, bodas e renovação de votos, chá revelação e chá de bebê, aniversários, eventos corporativos (inaugurações, confraternizações, palestras) e eventos esportivos, como corridas e provas de ciclismo.',
		},
		{
			question: 'Com quanta antecedência devo contratar?',
			answer:
				'O quanto antes, principalmente para datas em fins de semana e no fim do ano, que costumam ser as mais procuradas. Assim que tiver a data e o local definidos, me chame para reservarmos.',
		},
		{
			question: 'Quanto tempo dura a cobertura?',
			answer:
				'Depende do evento. Montamos a cobertura de acordo com o roteiro: pode ser só nos momentos principais ou do começo ao fim. Na conversa inicial eu te ajudo a definir o formato ideal.',
		},
		{
			question: 'Você atende eventos fora de São José dos Pinhais?',
			answer:
				'Sim. Atendo São José dos Pinhais, Curitiba e toda a Região Metropolitana. Para outras cidades, é só consultar.',
		},
		{
			question: 'Minha empresa pode usar as fotos em redes sociais e na divulgação?',
			answer:
				'Sim. Nos eventos corporativos, as fotos já são pensadas para comunicação, e o uso em redes sociais, site e materiais de divulgação fica combinado no contrato.',
		},
		{
			question: 'Em quanto tempo recebo as fotos?',
			answer:
				'O prazo médio de entrega é de 15 a 20 dias úteis, com cada imagem tratada individualmente com cuidado.',
		},
	],
};

export const cta = {
	eyebrow: 'Tem um evento chegando?',
	title: 'Vamos registrar juntos os melhores momentos do seu evento?',
	description:
		'Me conte como vai ser o seu evento: data, local e o que você imagina. Eu preparo uma proposta sob medida para você.',
	primaryLabel: 'Pedir orçamento',
	primaryHref: eventosWhatsappHref,
	secondaryLabel: 'Ver outros ensaios',
	secondaryHref: '/#portfolio',
};
