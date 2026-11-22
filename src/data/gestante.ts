import { whatsappHrefFor } from '../config/contact';

export const gestanteWhatsappHref = whatsappHrefFor(
	'Olá, gostaria de agendar um ensaio de gestante'
);

export const seo = {
	path: '/gestante',
	title: 'Ensaio Gestante em São José dos Pinhais e Curitiba | Pamela Teice Fotografia',
	description:
		'Ensaios gestantes sensíveis e premium em São José dos Pinhais, Curitiba e Região Metropolitana. Fotografias que eternizam a espera com leveza e emoção.',
	image: '/images/portfolio/gestante/gestante-capa.webp',
	imageAlt: 'Ensaio gestante por Pamela Teice Fotografia',
	keywords: [
		'ensaio gestante',
		'fotógrafa gestante',
		'ensaio gestante São José dos Pinhais',
		'ensaio gestante Curitiba',
		'fotografia de gestante',
	],
};

export const hero = {
	eyebrow: 'Ensaio Gestante',
	title: 'Um retrato eterno da espera mais bonita da sua vida.',
	description:
		'Ensaios sensíveis que celebram a gestação, o vínculo e a beleza desse momento único, em São José dos Pinhais, Curitiba e Região Metropolitana.',
	image: '/images/portfolio/gestante/gestante-capa.webp',
	imageMobile: '/images/portfolio/gestante/gestante-hero-mobile.webp',
	imageAlt: 'Gestante de vestido verde olhando para o alto em ensaio de estúdio',
};

export const intro = {
	eyebrow: 'Por que registrar',
	title: 'Essa fase não volta, mas pode ser lembrada para sempre.',
	paragraphs: [
		'A gestação é feita de pequenos instantes que passam rápido demais: o primeiro chute, as mãos sobre a barriga, a expectativa no olhar.',
		'Um ensaio gestante existe para guardar tudo isso: não como uma pose, mas como memória viva de um tempo que só existe uma vez.',
	],
	image: '/images/portfolio/gestante/pq-registrar.webp',
	imageAlt: 'Casal sorridente em ensaio gestante, ele com as mãos na barriga dela',
};

export const process = {
	eyebrow: 'A Experiência',
	title: 'Um caminho pensado para que você viva a espera com leveza, do início à entrega.',
	steps: [
		{
			number: '01',
			title: 'Agendamento',
			description: 'Conversamos sobre a data ideal, sua disponibilidade e tiramos todas as dúvidas.',
		},
		{
			number: '02',
			title: 'Planejamento',
			description: 'Alinhamos roupas, cenário e cada detalhe para um ensaio confortável e autêntico.',
		},
		{
			number: '03',
			title: 'Ensaio',
			description: 'Vivemos o momento com naturalidade, sem poses forçadas, no seu ritmo.',
		},
		{
			number: '04',
			title: 'Entrega',
			description: 'Você recebe fotografias tratadas com sensibilidade, prontas para guardar para sempre.',
		},
	],
};

export const gallery = {
	eyebrow: 'Galeria',
	title: 'Um ensaio, muitos instantes.',
	/**
	 * Ordem única para grid + Lightbox: as 4 primeiras aparecem no grid 2×2
	 * (todas horizontais, já que o grid recorta em 3:2). As verticais (04, 08, 09)
	 * ficam para o Lightbox.
	 */
	images: [
		{
			image: '/images/portfolio/gestante/01-gestante.webp',
			alt: 'Gestante de chapéu preto e blusa de renda posando em estúdio',
		},
		{
			image: '/images/portfolio/gestante/02-gestante.webp',
			alt: 'Casal segurando sapatinhos vermelhos de bebê sobre a barriga da gestante',
		},
		{
			image: '/images/portfolio/gestante/03-gestante.webp',
			alt: 'Pai beijando a barriga da gestante de vestido preto',
		},
		{
			image: '/images/portfolio/gestante/06-gestante.webp',
			alt: 'Filho abraçando a barriga da mãe grávida de vestido azul',
		},
		{
			image: '/images/portfolio/gestante/05-gestante.webp',
			alt: 'Casal abraçado e sorrindo, ele com as mãos sobre a barriga dela',
		},
		{
			image: '/images/portfolio/gestante/07-gestante.webp',
			alt: 'Casal encostando as testas em ensaio gestante, ela com as mãos na barriga',
		},
		{
			image: '/images/portfolio/gestante/10-gestante.webp',
			alt: 'Casal em ensaio gestante, ela com chapéu de palha e body de renda branco',
		},
		{
			image: '/images/portfolio/gestante/04-gestante.webp',
			alt: 'Gestante de vestido longo azul-marinho com cauda em ensaio de estúdio',
		},
		{
			image: '/images/portfolio/gestante/08-gestante.webp',
			alt: 'Casal abraçado em ensaio gestante, ela de vestido verde longo',
		},
		{
			image: '/images/portfolio/gestante/09-gestante.webp',
			alt: 'Gestante de vestido verde com cauda olhando para o alto',
		},
	],
};


export const faq = {
	eyebrow: 'Perguntas Frequentes',
	title: 'Tudo o que você precisa saber antes de agendar.',
	items: [
		{
			question: 'Com quantas semanas de gestação devo fazer o ensaio?',
			answer:
				'O ideal é entre a 30ª e a 34ª semana, quando a barriga já está bem definida e você ainda se sente confortável para o ensaio. Mas cada gestação é única, e podemos conversar sobre o melhor momento para você.',
		},
		{
			question: 'Posso levar meu parceiro e outros filhos?',
			answer:
				'Claro! Esse é um momento em família. Combine com antecedência para planejarmos o ensaio incluindo todos que você quiser presentes.',
		},
		{
			question: 'Onde acontecem os ensaios?',
			answer:
				'Trabalho com locações em estúdio, ao ar livre e também na sua casa, em São José dos Pinhais, Curitiba e Região Metropolitana. Definimos juntas o cenário que mais combina com sua história.',
		},
		{
			question: 'Quanto tempo dura o ensaio?',
			answer:
				'Em média de 1h30 a 2h, com pausas para descanso sempre que precisar. Nada é feito com pressa.',
		},
		{
			question: 'Preciso levar roupas específicas?',
			answer:
				'Não é obrigatório: tenho um acervo de vestidos pensados para ensaios gestantes. Mas se preferir usar peças próprias, te ajudo a escolher as melhores opções antes do dia.',
		},
		{
			question: 'Em quanto tempo recebo as fotos?',
			answer:
				'O prazo médio de entrega é de 15 a 20 dias úteis, com cada imagem tratada individualmente com cuidado.',
		},
	],
};

export const cta = {
	eyebrow: 'Pronta para eternizar esse momento?',
	title: 'Vamos transformar a espera em fotografias para guardar por toda a vida?',
	description:
		'Cada semana dessa fase passa mais rápido do que imaginamos. Agende seu ensaio gestante e preserve hoje a memória que você vai reviver para sempre.',
	primaryLabel: 'Agendar Ensaio',
	primaryHref: gestanteWhatsappHref,
	secondaryLabel: 'Ver outros ensaios',
	secondaryHref: '/#portfolio',
};
