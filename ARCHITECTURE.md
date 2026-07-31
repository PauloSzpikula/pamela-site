# Arquitetura do Projeto

Documentação técnica do código-fonte. Para diretrizes de marca/visual, ver `docs/DESIGN_SYSTEM.md` — este arquivo é sobre **estrutura, dados e infraestrutura**, não sobre estilo.

## 1. Visão geral

### Objetivo

Site institucional da **Pamela Teice Fotografia**: uma Home (aprovada, estável) e uma Landing Page dedicada para cada tipo de ensaio (Gestante, Newborn, Infantil, Família, Escolar, Casamento), todas seguindo o mesmo padrão de componentes, dados e SEO.

### Stack

- **[Astro](https://astro.build) 7**, `output: "static"` — todas as páginas são pré-renderizadas em build; sem SSR, sem framework de UI (React/Vue/Svelte). Interatividade é JS vanilla mínimo, inline em `<script>` por componente (parallax do Hero, estado de scroll do Header, accordion do FAQ via `<details>` nativo, reveal-on-scroll via `IntersectionObserver`).
- **Tailwind CSS v4** via `@tailwindcss/vite` — tokens de design (cores, fontes, espaçamento) definidos em `src/styles/global.css` com `@theme`, não em `tailwind.config`.
- **TypeScript** nos arquivos de dados/config (`.ts`) e no frontmatter dos componentes `.astro`.
- Zero dependências além de Astro + Tailwind. `robots.txt`, `sitemap.xml` e `manifest.webmanifest` são gerados por **endpoints Astro nativos**, não por integrações de terceiros — decisão deliberada para manter o projeto enxuto (ver seção 5).

### Organização geral

- A **Home nunca deve ser alterada visualmente** sem pedido explícito — está aprovada.
- Cada **Landing Page (LP)** é composta pelos mesmos 7 componentes genéricos em `src/components/landing/`, alimentados por um arquivo de dados próprio em `src/data/`. Nenhum componente de LP tem texto hardcoded.
- Tudo que é **institucional/global** (telefone, WhatsApp, Instagram, domínio, título/descrição padrão, dados estruturados) vive em `src/config/`, nunca espalhado pelos componentes.

## 2. Estrutura de pastas

```
src/
├── config/          # Configuração global do site (única fonte de verdade)
├── components/
│   ├── seo/         # Seo.astro, JsonLd.astro — reutilizáveis por qualquer página
│   ├── layout/       # Header, Nav, MobileNav, Logo — usados em todas as páginas
│   ├── home/         # Componentes exclusivos da Home — não reutilizar em LPs
│   └── landing/      # Componentes genéricos das Landing Pages — reutilizados por todas
├── data/            # Conteúdo e estrutura: nav.ts, portfolio.ts, gestante.ts (uma por LP)
├── layouts/
│   └── Layout.astro # Casco HTML: <head>, <Seo>, <Header>, script de reveal-on-scroll
├── pages/           # Rotas do site (arquivo = rota, padrão do Astro)
└── styles/
    └── global.css   # Tokens Tailwind v4 (@theme) + classes utilitárias (.btn, .site-container)

public/              # Assets estáticos servidos como estão (imagens, fontes, favicon) — sem processamento
docs/                # Documentação de marca/design (não confundir com este arquivo)
```

Papel de cada pasta importante:

| Pasta | Papel |
|---|---|
| `src/config/` | Configuração global única: site, contato, redes sociais, helpers de SEO, builders de dados estruturados. Ver seção 3. |
| `src/components/seo/` | `Seo.astro` (meta tags) e `JsonLd.astro` (dados estruturados). Usados por `Layout.astro` e pelas páginas. |
| `src/components/layout/` | Header fixo, navegação desktop/mobile e logo. Compartilhados por **todas** as páginas via `Layout.astro`. |
| `src/components/home/` | Componentes exclusivos da Home (Hero, About, Experience, Portfolio, Testimonials, CtaFinal, Footer). `Footer.astro` também é importado pelas LPs (é genérico o suficiente), o resto não. |
| `src/components/landing/` | Componentes prop-driven que formam qualquer Landing Page: `LandingHero`, `EditorialIntro`, `ProcessSteps`, `EditorialGallery`, `FeaturedTestimonial`, `FaqAccordion`, `LandingCta`. Nenhum texto hardcoded — tudo vem de props. |
| `src/data/` | Um arquivo por domínio de conteúdo. `nav.ts` (menu), `portfolio.ts` (categorias de ensaio + status de publicação), `gestante.ts` (todo o conteúdo textual + SEO da LP Gestante — modelo para as próximas). |
| `src/pages/` | Rotas: `index.astro` (Home), `gestante.astro` (LP), e os endpoints `robots.txt.ts`, `sitemap.xml.ts`, `manifest.webmanifest.ts`. |
| `public/` | Imagens (`images/portfolio/<slug>/`, `images/hero/`, `images/logo/`, `images/depoimentos/`), fontes self-hosted, favicon. |

## 3. Configurações globais

Tudo em `src/config/`. **Nunca duplicar estes valores em um componente ou página** — sempre importar.

| O que alterar | Arquivo | Export |
|---|---|---|
| Domínio / URL de produção | `src/config/site.ts` | `site.domain`, `site.url` |
| Nome da empresa, cidade, estado, endereço, área atendida | `src/config/site.ts` | `site.name`, `site.city`, `site.state`, `site.streetAddress`, `site.areaServed` |
| Título/descrição/imagem padrão (SEO) | `src/config/site.ts` | `site.defaultTitle`, `site.defaultDescription`, `site.defaultImage` |
| Cores de tema (manifest/theme-color) | `src/config/site.ts` | `site.themeColor`, `site.backgroundColor` |
| Telefone | `src/config/contact.ts` | `contact.phone`, `contact.phoneHref` |
| WhatsApp | `src/config/contact.ts` | `contact.whatsappNumber`, `whatsappHref` (mensagem padrão), `whatsappHrefFor(mensagem)` (mensagem específica por página) |
| Instagram / redes sociais | `src/config/social.ts` | `social.instagram`, `instagramHref`, `sameAs` (array para dados estruturados) |

`site.url` também alimenta `astro.config.mjs` (`site:`), que é importado diretamente de lá — o domínio de produção existe em **um único lugar** do projeto.

> ⚠️ **Nunca** usar `Astro.url.origin` para montar URLs de canonical/Open Graph — em build/preview ele pode resolver para um domínio de preview. Use sempre `absoluteUrl()` de `src/config/seo.ts`, que usa `site.url`.

## 4. Como criar uma nova Landing Page

Passo a passo usando **Newborn** como exemplo — repita para Infantil, Família, Escolar, Casamento.

1. **Criar `src/data/newborn.ts`** com a mesma forma de `src/data/gestante.ts`: exports `seo`, `hero`, `intro`, `process`, `gallery`, `testimonial`, `faq`, `cta`. Copie a estrutura de `gestante.ts` e troque o conteúdo — não invente campos novos sem necessidade.
2. **Criar `src/pages/newborn.astro`**, copiando `src/pages/gestante.astro` e trocando:
   - o import de `../data/gestante` para `../data/newborn`;
   - o `schema` do topo: `serviceSchema({ name: 'Ensaio Newborn', ... })`, `faqSchema(faq.items)`, `breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Newborn', path: seo.path }])`.
   - a estrutura de `<Layout>` com os 7 componentes de `landing/` permanece idêntica.
3. **Marcar como publicada** em `src/data/portfolio.ts`: adicione `published: true` na categoria `newborn`.
4. **Conferir a imagem de capa** em `public/images/portfolio/newborn/` (mesmo padrão de nome usado pelas outras categorias).
5. **Nada mais a fazer nos seguintes pontos — eles já funcionam automaticamente:**
   - o card "Newborn" no Portfólio da Home (`Portfolio.astro`) já aponta para `/newborn` (lê `portfolioCategories`);
   - o link "Newborn" no Footer ("Ensaios") já aponta para `/newborn`;
   - `/newborn` aparece em `sitemap.xml` (o endpoint filtra por `published: true`).
6. **Navegação do Header** (`src/data/nav.ts`): só altere se a nova LP exigir um item de menu próprio — hoje o menu (Home/Sobre/Portfólio/Contato) é fixo e funciona em qualquer página porque usa caminhos absolutos (`/`, `/#sobre`, `/#portfolio`, `/#contato`).
7. **Build e revisão visual** antes de considerar pronta: `npm run build`, depois `npm run preview`, conferindo desktop/tablet/mobile.

## 5. Sistema de SEO

| Peça | Arquivo | Função |
|---|---|---|
| `Seo.astro` | `src/components/seo/Seo.astro` | Renderiza `<title>`, meta description, canonical, Open Graph, Twitter Cards e robots. Usado dentro de `Layout.astro` — uma página só precisa passar `title`/`description`/`image`/`keywords`/etc. como prop do `<Layout>`, nunca escrever `<meta>` na mão. |
| `JsonLd.astro` | `src/components/seo/JsonLd.astro` | Recebe um schema (objeto) ou array de schemas e imprime cada um como `<script type="application/ld+json">`. |
| Schema builders | `src/config/schema.ts` | Funções que retornam objetos schema.org prontos: `organizationSchema()`, `localBusinessSchema()`, `photographerSchema()` (Home); `serviceSchema()`, `faqSchema()`, `breadcrumbSchema()` (LPs). **Nunca escrever um objeto JSON-LD à mão em uma página** — sempre usar ou estender um builder aqui. |
| `sitemap.xml` | `src/pages/sitemap.xml.ts` | Gera o XML a partir de uma rota fixa (`/`) + `portfolioCategories.filter(c => c.published)`. Uma LP nova entra sozinha quando `published: true` é setado — não edite este arquivo por LP nova. |
| `robots.txt` | `src/pages/robots.txt.ts` | `Allow: /` + referência ao sitemap, montado a partir de `site.url`. |
| `manifest.webmanifest` | `src/pages/manifest.webmanifest.ts` | Nome, cores e ícone do PWA, vindos de `site.ts`. Ícone atual é o `favicon.svg` (`sizes: "any"`) — ver Roadmap/melhorias sobre ícones PNG dedicados. |

Os três últimos são **endpoints Astro** (`.ts` em `src/pages/`), não arquivos estáticos em `public/` — isso evita duplicar o domínio/dados em dois lugares.

## 6. Sistema de dados

- **`src/data/portfolio.ts`** — única fonte de verdade das categorias de ensaio (`slug`, `label`, `image`, `published?`). Consumida por: grade de Portfólio da Home, lista "Ensaios" do Footer, e `sitemap.xml`. Para "despublicar" uma LP, basta remover/setar `published: false` — ela some do sitemap automaticamente (os cards/links continuam existindo, isso não esconde a página em si).
- **`src/data/nav.ts`** — itens do menu principal (`navItems`), usados por `Header`, `MobileNav` e pela lista "Navegação" do Footer. Usa caminhos absolutos (`/`, `/#sobre`, ...) de propósito, para funcionar de qualquer página, não só da Home.
- **Um arquivo de dados por LP** (`gestante.ts` é o modelo) — concentra todo o conteúdo textual da página (hero, blocos, galeria, depoimento, FAQ, CTA) e o bloco `seo`. Isso mantém os componentes de `landing/` genéricos e reutilizáveis: eles não sabem que "existe" uma LP de Gestante, só recebem props.
- **Página "publicada"** não é um conceito da própria página `.astro` — é inteiramente controlado pela flag `published` em `portfolio.ts`, que é a única coisa que o sitemap e (futuramente) qualquer listagem dinâmica consultam.

## 7. Convenções do projeto

- **Reutilizar componentes.** Uma LP nova usa os 7 componentes de `landing/` existentes. Só crie um componente novo se o Sprint pedir explicitamente uma seção nova — e, mesmo assim, avalie se dá para generalizar em vez de duplicar.
- **`home/` é exclusivo da Home.** Não importe componentes de `home/` em uma LP, exceto `Footer.astro` (já é genérico). Não importe componentes de `landing/` na Home.
- **Evitar valores hardcoded.** Telefone, WhatsApp, Instagram, domínio, nome da empresa, título/descrição padrão: sempre de `src/config/`, nunca uma string literal repetida em um componente.
- **Usar `config/` para tudo que é institucional/global**; usar `data/` para conteúdo específico de página/seção.
- **Usar os builders de `schema.ts`** para qualquer dado estruturado novo — se um tipo de schema novo for necessário, adicione uma função lá, não um objeto solto na página.
- **Manter a arquitetura consistente entre LPs.** Uma LP nova segue exatamente o padrão descrito na seção 4. Não é o lugar para experimentar uma estrutura de pastas ou um padrão de dados diferente.
- **Não instalar dependências novas sem necessidade real.** `sitemap.xml`/`robots.txt`/`manifest.webmanifest` foram implementados como endpoints nativos do Astro em vez de integrações (`@astrojs/sitemap` etc.) exatamente para manter isso.
- **Mudanças em código compartilhado (Header, Footer, `nav.ts`, `config/`) que não alteram a saída visual da Home são geralmente seguras**, mas qualquer mudança visual na Home exige confirmação explícita antes de implementar.

## 8. Roadmap

Próximas etapas previstas para o projeto:

- **Sistema de avaliações Google** — exibir/agregar avaliações do Google Meu Negócio (possivelmente novo schema `AggregateRating`/`Review` em `config/schema.ts`).
- **LP Newborn** — seguir o passo a passo da seção 4.
- **LP Infantil** — idem.
- **LP Família** — idem.
- **LP Escolar** — idem.
- **LP Casamento** — idem.
- **Performance** — otimização de imagens (formatos/tamanhos responsivos), auditoria Lighthouse.
- **Analytics** — instrumentação de métricas de tráfego/conversão (ferramenta ainda não definida).
