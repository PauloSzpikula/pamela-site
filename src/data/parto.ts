import { whatsappHrefFor } from '../config/contact';

/**
 * PLACEHOLDER — os textos abaixo (hero, intro, process, faq, cta) são
 * temporários (mas já no tom/tema certo) e serão substituídos quando a
 * comunicação final for definida. Todas as imagens já são fotografias reais.
 */

export const partoWhatsappHref = whatsappHrefFor('Olá, gostaria de saber sobre a fotografia de parto');

export const seo = {
	path: '/parto',
	title: 'Fotografia de Parto em São José dos Pinhais e Curitiba | Pamela Teice Fotografia',
	description:
		'Fotografia de parto normal, cesárea e humanizado em São José dos Pinhais, Curitiba e Região Metropolitana. Registro discreto e sensível do dia em que seu bebê chega ao mundo.',
	image: '/images/portfolio/parto/15-parto.webp',
	imageAlt: 'Fotografia de parto por Pamela Teice Fotografia',
	keywords: [
		'fotografia de parto',
		'fotógrafa de parto',
		'fotografia de parto Curitiba',
		'fotografia de parto São José dos Pinhais',
		'fotografia de nascimento',
		'fotografia de parto cesárea',
	],
};

export const hero = {
	eyebrow: 'Fotografia de Parto',
	title: 'O dia em que vocês se conhecem acontece uma única vez.',
	description:
		'Registro discreto e sensível do nascimento do seu bebê, do trabalho de parto às primeiras horas de vida, em maternidades de São José dos Pinhais, Curitiba e Região Metropolitana.',
	image: '/images/portfolio/parto/parto-hero.webp',
	imageAlt: 'Bebê recém-nascido erguido pela equipe médica no momento do nascimento, em preto e branco',
};

export const intro = {
	eyebrow: 'Por que registrar',
	title: 'Tudo acontece rápido demais para caber só na memória.',
	paragraphs: [
		'No dia do parto, a emoção é tanta que muitos detalhes se perdem: o primeiro choro, o olhar do pai, a mãozinha que se fecha em volta do seu dedo pela primeira vez.',
		'A fotografia de parto guarda esse encontro como ele foi, real e intenso, para que vocês possam revivê-lo e, um dia, contar ao seu filho como foi o dia em que ele chegou.',
	],
	image: '/images/portfolio/parto/13-parto.webp',
	imageAlt: 'Mãozinha do recém-nascido envolvendo um dedo, em preto e branco',
};

export const process = {
	eyebrow: 'A Experiência',
	title: 'Presença discreta, do primeiro sinal ao primeiro colo.',
	steps: [
		{
			number: '01',
			title: 'Conversa e reserva',
			description:
				'Conversamos sobre o seu plano de parto, a maternidade e a equipe, e reservamos a sua data prevista ainda na gestação.',
		},
		{
			number: '02',
			title: 'Sobreaviso',
			description:
				'A partir da 37ª semana fico de sobreaviso 24 horas, pronta para ir ao seu encontro assim que o trabalho de parto começar.',
		},
		{
			number: '03',
			title: 'O grande dia',
			description:
				'Registro tudo com discrição, sem interferir no trabalho da equipe: a espera, o nascimento, o primeiro contato e as primeiras horas.',
		},
		{
			number: '04',
			title: 'Entrega',
			description:
				'Você recebe as fotografias tratadas com sensibilidade, contando a história do nascimento do começo ao fim.',
		},
	],
};

export const gallery = {
	eyebrow: 'Galeria',
	title: 'O primeiro encontro, em cada detalhe.',
	/**
	 * Ordem única para grid + Lightbox: as 4 primeiras aparecem no grid 2×2
	 * da página (todas horizontais, já que o grid recorta em 3:2) e variam
	 * entre nascimento, espera, primeiro contato e detalhe. As demais seguem
	 * a ordem do dia: espera → nascimento → primeiras horas.
	 * 06 (usada no hero, recortada em parto-hero.webp) e 13 (intro) ficam de fora
	 * para não repetir na página;
	 * 11 fica de fora por ser quase igual à 10.
	 */
	images: [
		{
			image: '/images/portfolio/parto/07-parto.webp',
			alt: 'Recém-nascido chorando logo após o nascimento, em preto e branco',
		},
		{
			image: '/images/portfolio/parto/02-parto.webp',
			alt: 'Casal abraçado e sorrindo na maternidade à espera do bebê',
		},
		{
			image: '/images/portfolio/parto/10-parto.webp',
			alt: 'Recém-nascido no colo da mãe no primeiro contato pele a pele, em preto e branco',
		},
		{
			image: '/images/portfolio/parto/18-parto.webp',
			alt: 'Mãozinha da bebê com casaquinho vinho segurando o dedo de um adulto',
		},
		{
			image: '/images/portfolio/parto/01-parto.webp',
			alt: 'Gestante sentada com as mãos sobre a barriga na maternidade',
		},
		{
			image: '/images/portfolio/parto/03-parto.webp',
			alt: 'Pai com touca e avental cirúrgico aguardando no quarto da maternidade',
		},
		{
			image: '/images/portfolio/parto/04-parto.webp',
			alt: 'Mãe na maca do centro obstétrico acompanhada pela equipe médica',
		},
		{
			image: '/images/portfolio/parto/05-parto.webp',
			alt: 'Mãos do casal entrelaçadas durante o parto',
		},
		{
			image: '/images/portfolio/parto/08-parto.webp',
			alt: 'Equipe médica segurando o bebê recém-nascido no centro cirúrgico, em preto e branco',
		},
		{
			image: '/images/portfolio/parto/09-parto.webp',
			alt: 'Equipe médica com o bebê recém-nascido ao lado da mãe, em preto e branco',
		},
		{
			image: '/images/portfolio/parto/12-parto.webp',
			alt: 'Mãozinha do recém-nascido sobre o peito da mãe, em preto e branco',
		},
		{
			image: '/images/portfolio/parto/14-parto.webp',
			alt: 'Pezinho do bebê sendo carimbado como primeira lembrança da maternidade',
		},
		{
			image: '/images/portfolio/parto/15-parto.webp',
			alt: 'Pai segurando o bebê recém-nascido enrolado em manta e touquinha',
		},
		{
			image: '/images/portfolio/parto/16-parto.webp',
			alt: 'Recém-nascido no bercinho da maternidade recebendo os primeiros cuidados',
		},
		{
			image: '/images/portfolio/parto/17-parto.webp',
			alt: 'Detalhe do pezinho do recém-nascido sobre manta rosa',
		},
		{
			image: '/images/portfolio/parto/19-parto.webp',
			alt: 'Recém-nascida de olhos abertos deitada sobre manta rosa',
		},
		{
			image: '/images/portfolio/parto/20-parto.webp',
			alt: 'Recém-nascida com laço e roupinha vinho dormindo no colo',
		},
	],
};

export const faq = {
	eyebrow: 'Perguntas Frequentes',
	title: 'Tudo o que você precisa saber antes de agendar.',
	items: [
		{
			question: 'Quando devo contratar a fotografia de parto?',
			answer:
				'O quanto antes, de preferência até o segundo trimestre. Atendo um número limitado de partos por mês para garantir o sobreaviso de cada família, então as datas costumam ser reservadas com antecedência.',
		},
		{
			question: 'Como funciona o sobreaviso?',
			answer:
				'A partir da 37ª semana fico disponível 24 horas por dia, todos os dias, até o nascimento. Quando o trabalho de parto começar ou a cesárea for marcada, é só me avisar e eu vou ao seu encontro.',
		},
		{
			question: 'Você fotografa parto normal e cesárea?',
			answer:
				'Sim. Fotografo parto normal, cesárea e parto humanizado, no hospital ou em casa. Cada tipo de parto tem seu ritmo, e o registro se adapta a ele.',
		},
		{
			question: 'A maternidade permite a presença da fotógrafa?',
			answer:
				'A maioria das maternidades da região permite, mas cada uma tem as próprias regras, principalmente para o centro cirúrgico. Antes do parto, verificamos juntas as autorizações necessárias para que nada seja surpresa no grande dia.',
		},
		{
			question: 'Vou me sentir exposta durante o parto?',
			answer:
				'Meu trabalho é ser discreta. Respeito o espaço da equipe médica e a sua privacidade, e combinamos antes o que você quer, e o que não quer, que seja registrado.',
		},
		{
			question: 'E se o parto acontecer de madrugada ou for muito rápido?',
			answer:
				'O sobreaviso vale para qualquer horário. Por isso é importante me avisar já nos primeiros sinais. Os casos de parto muito rápido também ficam combinados em contrato, para você ter tranquilidade.',
		},
		{
			question: 'Em quanto tempo recebo as fotos?',
			answer:
				'O prazo médio de entrega é de 15 a 20 dias úteis, com cada imagem tratada individualmente com cuidado.',
		},
	],
};

export const cta = {
	eyebrow: 'Pronta para guardar esse encontro?',
	title: 'Vamos registrar juntos o dia em que seu bebê chega ao mundo?',
	description:
		'As vagas de sobreaviso são limitadas a poucos partos por mês. Reserve a sua data prevista e viva esse dia por inteiro, enquanto eu cuido das memórias.',
	primaryLabel: 'Reservar minha data',
	primaryHref: partoWhatsappHref,
	secondaryLabel: 'Ver outros ensaios',
	secondaryHref: '/#portfolio',
};
