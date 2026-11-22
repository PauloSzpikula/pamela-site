import { whatsappHrefFor } from '../config/contact';

/**
 * PLACEHOLDER — os textos abaixo (hero, intro, process, faq, cta) são
 * temporários (mas já no tom/tema certo) e serão substituídos quando a
 * comunicação final for definida. Todas as imagens já são fotografias reais.
 */

export const newbornWhatsappHref = whatsappHrefFor('Olá, gostaria de agendar um ensaio newborn');

export const seo = {
	path: '/newborn',
	title: 'Ensaio Newborn em São José dos Pinhais e Curitiba | Pamela Teice Fotografia',
	description:
		'Ensaios newborn delicados e seguros em São José dos Pinhais, Curitiba e Região Metropolitana. Fotografias que eternizam os primeiros dias do seu bebê com sensibilidade.',
	image: '/images/portfolio/newborn/26-newborn.webp',
	imageAlt: 'Ensaio newborn por Pamela Teice Fotografia',
	keywords: [
		'ensaio newborn',
		'fotógrafa newborn',
		'ensaio newborn São José dos Pinhais',
		'ensaio newborn Curitiba',
		'fotografia recém-nascido',
	],
};

export const hero = {
	eyebrow: 'Ensaio Newborn',
	title: 'Os primeiros dias passam rápido. As fotografias ficam para sempre.',
	description:
		'Ensaios delicados e seguros que guardam os detalhes, a pele macia e o aconchego dos primeiros dias do seu bebê, em São José dos Pinhais, Curitiba e Região Metropolitana.',
	image: '/images/portfolio/newborn/26-newborn.webp',
	imageMobile: '/images/portfolio/newborn/newborn-hero-mobile.webp',
	imageAlt: 'Recém-nascida com macacão de tricô rosé dormindo em cesto com folhagens e flores lilás',
};

export const intro = {
	eyebrow: 'Por que registrar',
	title: 'Em poucas semanas, ele já não cabe mais no seu colo do mesmo jeito.',
	paragraphs: [
		'Os dedinhos que se fecham em volta do seu, o sono profundo, as caretinhas e o cheirinho de recém-nascido mudam a cada dia, quase sem que a gente perceba.',
		'Um ensaio newborn existe para guardar esse começo com toda a delicadeza que ele merece, enquanto ele ainda é tão pequeno.',
	],
	image: '/images/portfolio/newborn/15-newborn.webp',
	imageAlt: 'Mãe beijando a cabeça da filha recém-nascida enrolada em manta rosa',
};

export const process = {
	eyebrow: 'A Experiência',
	title: 'Um ensaio no ritmo do bebê, com calma, segurança e todo o cuidado do mundo.',
	steps: [
		{
			number: '01',
			title: 'Agendamento',
			description:
				'Reservamos a data ainda na gestação e ajustamos assim que o bebê nascer, idealmente nos primeiros 15 dias de vida.',
		},
		{
			number: '02',
			title: 'Planejamento',
			description: 'Escolhemos juntos cores, cenários e acessórios, e envio orientações para o dia do ensaio.',
		},
		{
			number: '03',
			title: 'Ensaio',
			description:
				'Em um ambiente aquecido e tranquilo, respeitamos as pausas para mamar, trocar e acalmar, sem pressa.',
		},
		{
			number: '04',
			title: 'Entrega',
			description: 'Você recebe fotografias tratadas com delicadeza, prontas para guardar e emocionar por gerações.',
		},
	],
};

export const gallery = {
	eyebrow: 'Galeria',
	title: 'Pequenos detalhes, memórias imensas.',
	/**
	 * Ordem única para grid + Lightbox: as 4 primeiras aparecem no grid 2×2
	 * da página (todas horizontais, já que o grid recorta em 3:2) e variam
	 * entre cenário, família e detalhe. As demais só aparecem no Lightbox.
	 * Fotos quase repetidas da mesma sessão ficam de fora para não cansar.
	 * 26 (hero) e 15 (intro) também ficam de fora para não repetir na página.
	 */
	images: [
		{
			image: '/images/portfolio/newborn/01-newborn.webp',
			alt: 'Recém-nascida dormindo com as mãos sob o rosto e faixa delicada na cabeça',
		},
		{
			image: '/images/portfolio/newborn/10-newborn.webp',
			alt: 'Bebê de touca azul dormindo sobre almofada em formato de lua com estrelas',
		},
		{
			image: '/images/portfolio/newborn/12-newborn.webp',
			alt: 'Pais sorrindo abraçados com a filha recém-nascida no colo',
		},
		{
			image: '/images/portfolio/newborn/09-newborn.webp',
			alt: 'Pais em silhueta beijando o recém-nascido enrolado em manta azul',
		},
		{
			image: '/images/portfolio/newborn/05-newborn.webp',
			alt: 'Bebê com roupinha de ursinho abraçando um panda de pelúcia dentro de um cesto',
		},
		{
			image: '/images/portfolio/newborn/16-newborn.webp',
			alt: 'Recém-nascida enrolada em manta rosa com tiara de flores',
		},
		{
			image: '/images/portfolio/newborn/14-newborn.webp',
			alt: 'Pais encostando as testas enquanto seguram a filha recém-nascida',
		},
		{
			image: '/images/portfolio/newborn/11-newborn.webp',
			alt: 'Recém-nascida dormindo em rede de tecido lilás',
		},
		{
			image: '/images/portfolio/newborn/19-newborn.webp',
			alt: 'Close do rostinho de recém-nascida dormindo com tiara de flores',
		},
		{
			image: '/images/portfolio/newborn/13-newborn.webp',
			alt: 'Pai beijando a filha recém-nascida aconchegada no colo',
		},
		{
			image: '/images/portfolio/newborn/07-newborn.webp',
			alt: 'Bebê com touca de orelhinhas azul segurando uma pequena câmera fotográfica',
		},
		{
			image: '/images/portfolio/newborn/21-newborn.webp',
			alt: 'Recém-nascida com vestidinho de tule rosa dormindo sobre travesseiro',
		},
		{
			image: '/images/portfolio/newborn/28-newborn.webp',
			alt: 'Detalhe das mãozinhas do bebê sobre roupinha de tricô',
		},
		{
			image: '/images/portfolio/newborn/04-newborn.webp',
			alt: 'Recém-nascida dormindo enrolada em manta lilás sobre pelego',
		},
		{
			image: '/images/portfolio/newborn/24-newborn.webp',
			alt: 'Recém-nascida sorrindo enquanto dorme em rede de tecido rosa',
		},
		{
			image: '/images/portfolio/newborn/29-newborn.webp',
			alt: 'Recém-nascida enrolada em manta branca sobre almofada lilás em cesto com flores',
		},
		{
			image: '/images/portfolio/newborn/20-newborn.webp',
			alt: 'Detalhe dos cabelinhos da recém-nascida com tiara de flor branca',
		},
	],
};

export const faq = {
	eyebrow: 'Perguntas Frequentes',
	title: 'Tudo o que você precisa saber antes de agendar.',
	items: [
		{
			question: 'Qual a idade ideal para o ensaio newborn?',
			answer:
				'O ideal é entre o 5º e o 15º dia de vida, quando o bebê ainda dorme profundamente e se acomoda com facilidade nas posições mais aconchegantes. Depois disso também é possível fotografar, com um estilo um pouco diferente.',
		},
		{
			question: 'Quando devo agendar?',
			answer:
				'O quanto antes, ainda durante a gestação. Reservamos uma data aproximada pela previsão do parto e ajustamos assim que o bebê nascer. É só me avisar.',
		},
		{
			question: 'O ensaio é seguro para o bebê?',
			answer:
				'Sim. A segurança vem antes de qualquer foto: o ambiente é aquecido e higienizado, o bebê nunca fica sem apoio e as posições são feitas com delicadeza, respeitando sempre os limites dele.',
		},
		{
			question: 'Quanto tempo dura o ensaio?',
			answer:
				'Em média de 3 a 4 horas. O tempo é longo justamente para respeitar o ritmo do bebê, com pausas para mamar, trocar a fralda e acalmar sempre que precisar.',
		},
		{
			question: 'Preciso levar roupas e acessórios?',
			answer:
				'Não é necessário. Tenho mantas, roupinhas, tiaras e cenários para o ensaio. Se quiser incluir alguma peça especial da família, é só trazer que encaixamos com carinho.',
		},
		{
			question: 'Os pais e irmãos podem participar?',
			answer:
				'Claro! As fotos em família estão entre as mais emocionantes do ensaio. Envio orientações de roupas para que todos fiquem em harmonia com o bebê.',
		},
		{
			question: 'Em quanto tempo recebo as fotos?',
			answer:
				'O prazo médio de entrega é de 15 a 20 dias úteis, com cada imagem tratada individualmente com cuidado.',
		},
	],
};

export const cta = {
	eyebrow: 'Pronta para guardar esse começo?',
	title: 'Vamos eternizar os primeiros dias do seu bebê em fotografias para toda a vida?',
	description:
		'As datas para ensaio newborn são limitadas e reservadas ainda na gestação. Garanta a sua e preserve hoje um tempo que passa depressa demais.',
	primaryLabel: 'Agendar Ensaio',
	primaryHref: newbornWhatsappHref,
	secondaryLabel: 'Ver outros ensaios',
	secondaryHref: '/#portfolio',
};
