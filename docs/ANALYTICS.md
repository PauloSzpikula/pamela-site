# Analytics, Google Ads e Meta Pixel

Guia de medição do site: o que o código envia, como configurar o GTM e como ler os resultados.

**Objetivo:** saber **quantos contatos pelo WhatsApp** cada página e cada campanha gera, para investir mais (principalmente em Google Ads) onde dá resultado.

---

## 1. Como funciona (visão geral)

```
Site (código)                       GTM (GTM-MQZT457Z)              Plataformas
─────────────────                   ──────────────────              ───────────
Consent Mode v2 (padrão: negado) ─┐
Banner de cookies (aceitar/recusar)├─► dataLayer ─► tags ─────────► Google Analytics 4
Contexto: page_type + service     │                                 Google Ads (conversão)
Cliques: whatsapp_click etc.     ─┘                                 Meta Pixel
```

- **O código do site não muda** quando você troca/adiciona tags: tudo é feito no painel do GTM.
- **LGPD:** nada grava cookies antes do aceite. O Google (Analytics/Ads) envia só sinais anônimos sem cookies até o aceite (Consent Mode "avançado"). O Meta Pixel **nem carrega** sem aceite.

### Arquivos

| Arquivo | Função |
|---|---|
| `src/config/analytics.ts` | ID do GTM, chave/validade do consentimento, `pageContextFor()` (detecta Home/LP/serviço) |
| `src/components/analytics/Gtm.astro` | Consent Mode v2 + contexto da página + carregamento do GTM + rastreamento de cliques |
| `src/components/analytics/GtmNoscript.astro` | Fallback `<noscript>` do GTM |
| `src/components/analytics/CookieBanner.astro` | Banner de cookies |
| `src/pages/politica-de-privacidade.astro` | Política de privacidade (link no banner e no rodapé) |
| `docs/gtm-container.json` | Container pronto para **importar** no GTM (seção 3) |

---

## 2. Contrato do dataLayer (o que o site envia)

### Em todo carregamento de página (antes do GTM)

```js
{ page_type: 'home' | 'landing' | 'institucional', service: 'gestante' | 'newborn' | ... | 'geral', consent_status: 'granted' | 'denied' | 'pending' }
```

`service` é o slug da LP. LP nova cadastrada em `src/data/portfolio.ts` é reconhecida sozinha.

### Eventos

| Evento | Quando | Parâmetros |
|---|---|---|
| `whatsapp_click` | Clique em qualquer link `wa.me` | `cta_location`, `link_text`, `link_url`, `page_type`, `service` |
| `instagram_click` | Clique em link do Instagram | idem |
| `phone_click` | Clique em link `tel:` (hoje não há nenhum no site) | idem |
| `cookie_consent_update` | Visitante clica Aceitar/Recusar no banner | `consent_status` |

`cta_location` diz **qual botão** foi clicado, via atributo `data-cta` no link:

| Valor | Botão |
|---|---|
| `header` | "Agendar pelo WhatsApp" do topo (desktop) |
| `mobile_nav` | Botão dentro do menu mobile |
| `hero` | Botão grande do topo da Home |
| `cta_final` | Bloco final da Home |
| `landing_hero` | Botão do topo de cada LP |
| `landing_cta` | Bloco final de cada LP |
| `floating` | Botão redondo fixo no canto da tela (mobile/tablet, aparece após rolar o topo) |
| `footer` | Links do rodapé |
| `outro` | Link sem `data-cta` (adicione o atributo ao criar um botão novo) |

---

## 3. Configuração passo a passo

Faça na ordem. Leva ~1 hora.

### 3.1 Criar as contas e pegar os IDs

**Google Analytics 4** → [analytics.google.com](https://analytics.google.com)
1. Administrador → Criar → Propriedade. Fuso: Brasília. Moeda: Real.
2. Coleta de dados → Fluxo da Web → URL `pamelateicefotografia.com.br`.
3. Anote o **ID da métrica** (`G-XXXXXXXXXX`).
4. No fluxo, em "Medição otimizada", pode deixar ligado.

**Google Ads** → [ads.google.com](https://ads.google.com)
1. Se for criar a conta agora: na tela de criar campanha, procure o link "Mudar para o Modo Especialista" → "Criar uma conta sem uma campanha". (Assim você não é forçado a criar uma campanha às pressas.)
2. Metas → Conversões → Resumo → **+ Nova ação de conversão** → **Site**.
3. Informe o domínio, depois "Adicionar manualmente uma ação de conversão":
   - Meta/categoria: **Contato** · Nome: `Clique no WhatsApp`
   - Valor: "Usar o mesmo valor para cada conversão" — sugestão: um valor estimado por contato (ex: R$ 50). Ajuda o Google a otimizar; pode refinar depois.
   - Contagem: **Uma** (vários cliques da mesma pessoa contam como 1 contato).
   - Janela de conversão: 30 dias.
4. Em "Configuração da tag" escolha **Usar o Gerenciador de tags do Google** e anote:
   - **ID de conversão** (só números, ex: `123456789`. Se aparecer `AW-123456789`, use só os números)
   - **Rótulo de conversão** (ex: `AbC-D_efG-h12_34-567`)

**Meta (Facebook/Instagram)** → [business.facebook.com/events_manager](https://business.facebook.com/events_manager)
1. Conectar fontes de dados → Web → **Pixel do Meta** → nome "Pamela Teice Site".
2. Na instalação escolha "Instalar o código manualmente" (só para ver o ID; não cole código nenhum).
3. Anote o **ID do Pixel** (15–16 dígitos).
4. Recomendado: Configurações do negócio → Segurança da marca → Domínios → adicionar e verificar `pamelateicefotografia.com.br` (por meta tag ou DNS. Me peça que eu adiciono a meta tag no site).

### 3.2 Importar o container no GTM

1. [tagmanager.google.com](https://tagmanager.google.com) → container **GTM-MQZT457Z**.
2. **Administrador → Importar contêiner**.
3. Arquivo: `docs/gtm-container.json`.
4. Espaço de trabalho: **Existente → Default Workspace**.
5. Opção de importação: **Mesclar → Substituir tags, acionadores e variáveis conflitantes**.
6. Confirmar. Devem entrar **7 tags, 3 acionadores e 9 variáveis**.

### 3.3 Preencher os 4 IDs

Em **Variáveis → Variáveis definidas pelo usuário**, edite cada constante e troque o valor de exemplo:

| Variável | Valor |
|---|---|
| `CONST - GA4 Measurement ID` | `G-...` do GA4 |
| `CONST - Google Ads Conversion ID` | ID de conversão (só números) |
| `CONST - Google Ads Label WhatsApp` | Rótulo de conversão |
| `CONST - Meta Pixel ID` | ID do Pixel |

> Se uma plataforma ainda não estiver pronta, **pause** as tags dela (abrir a tag → ⋮ → Pausar) em vez de publicar com ID de exemplo.

### 3.4 Testar (Visualizar)

1. Clique em **Visualizar** → URL `https://pamelateicefotografia.com.br` → Connect.
2. Na aba que abre (de preferência numa janela anônima, para o banner aparecer):
   - **Antes de aceitar:** "GA4 - Google tag" dispara (modo sem cookies); as tags do Meta aparecem como **bloqueadas por consentimento**. Isso é o esperado.
   - Clique **Aceitar** → evento `cookie_consent_update` → "Meta Pixel - Base (PageView)" dispara.
   - Clique num botão de WhatsApp → evento `whatsapp_click` → dispara **GA4 - Evento - whatsapp_click**, **Google Ads - Conversão - WhatsApp** e **Meta Pixel - Contact (WhatsApp)**.
   - Repita numa LP (ex: `/newborn`) e confira na aba "Variáveis" que `DLV - service` = `newborn`.
3. Extras para conferir:
   - GA4 → Relatórios → **Tempo real**: o evento `whatsapp_click` aparece.
   - Meta → Gerenciador de Eventos → **Testar eventos**: PageView e Contact aparecem.

### 3.5 Publicar

**Enviar → Nome da versão** "GA4 + Ads + Meta + Consent Mode v2" → **Publicar**.

### 3.6 Ajustes no GA4 (depois de publicar)

1. **Evento-chave:** Administrador → Eventos → marque `whatsapp_click` como **evento-chave**. Ele só aparece na lista depois de acontecer pelo menos uma vez (faça um clique de teste).
2. **Dimensões personalizadas:** Administrador → Definições personalizadas → Criar (escopo **Evento**):
   - `service` → nome "Serviço"
   - `page_type` → nome "Tipo de página"
   - `cta_location` → nome "Local do botão"
3. **Vincular ao Google Ads:** Administrador → Vinculações de produtos → Google Ads → vincular a conta (permite ver campanhas no GA4 e criar públicos de remarketing).
4. Retenção de dados: Administrador → Coleta de dados → Retenção → **14 meses**.

---

## 4. Como responder "quais LPs performam mais"

| Pergunta | Onde ver |
|---|---|
| Quantos contatos cada LP gerou? | GA4 → Explorar → Forma livre: linhas **Serviço**, valores **Contagem de eventos**, filtro **Nome do evento = whatsapp_click** |
| Qual LP converte melhor (contatos ÷ visitas)? | GA4 → Relatórios → Engajamento → **Páginas de destino**: coluna "Eventos-chave" e taxa por página |
| Qual botão funciona mais? | Mesma exploração com linhas **Local do botão** |
| Quanto custa cada contato por serviço? | Google Ads → Campanhas → coluna **Custo/conv.** (desde que cada serviço tenha seu grupo de anúncios, ver abaixo) |
| De onde vêm os contatos (Google pago, orgânico, Instagram)? | GA4 → Aquisição → Aquisição de tráfego, com o evento-chave `whatsapp_click` |

---

## 5. Google Ads: estrutura recomendada para aparecer primeiro

1. **Campanha de Rede de Pesquisa** (não "Performance Max" no início): você paga quando alguém **pesquisa** o serviço, que é exatamente quem já quer contratar.
2. **Um grupo de anúncios por serviço**, com o **URL final na LP correspondente**:
   - Newborn → `/newborn` · palavras: `fotógrafa newborn curitiba`, `ensaio newborn são josé dos pinhais`, `fotos recém-nascido curitiba`
   - Gestante → `/gestante` · `ensaio gestante curitiba`, `fotógrafa gestante são josé dos pinhais`
   - Aniversário infantil → `/aniversario-infantil` · `fotógrafo aniversário infantil curitiba`, `fotografia festa infantil sjp`
   - Use correspondência de **frase** e **exata** (`"ensaio newborn curitiba"`, `[ensaio newborn curitiba]`) no começo; amplia depois.
3. **Local:** São José dos Pinhais + Curitiba + RMC; opção "Presença: pessoas que estão ou que regularmente estão nos locais segmentados".
4. **Palavras negativas:** `curso`, `grátis`, `vaga`, `emprego`, `como fazer`, `preset`, `wallpaper`, `banco de imagens`.
5. **Lance:** comece com "Maximizar cliques" com teto de CPC por ~2–4 semanas; quando houver ~15–30 conversões no mês, mude para **"Maximizar conversões"** ou **CPA desejado**. O lance automático depende da conversão do WhatsApp configurada aqui.
6. **Extensões (recursos):** sitelinks para cada LP, frase de destaque ("Estúdio em SJP", "Atendimento a Curitiba"), **local** (vincular o Perfil da Empresa no Google) e **chamada**.
7. Revise semanalmente o relatório **Termos de pesquisa** e negative o que não é cliente.

### Além do Ads: Perfil da Empresa no Google

Para "fotógrafa newborn perto de mim", o **Google Maps / Perfil da Empresa** aparece antes até dos resultados orgânicos e é **gratuito**. Mantenha fotos recentes, categorias corretas ("Fotógrafo", "Fotógrafo de retratos"), horário, link para o site e peça avaliações a toda cliente. As avaliações já alimentam a seção de depoimentos do site.

---

## 6. Manutenção

- **Botão novo de WhatsApp:** basta ser um link `wa.me`; adicione `data-cta="nome_do_local"` para aparecer separado nos relatórios.
- **LP nova:** nada a fazer em analytics, porque `service` vem do slug cadastrado em `portfolio.ts`.
- **Validar após deploy** (opcional, script local): abrir o site com o Tag Assistant (Visualizar do GTM) e repetir a seção 3.4.
- **Revisar o texto da política** (`politica-de-privacidade.astro`) se passar a coletar dados novos (ex: formulário) ou se houver um e-mail/CNPJ para incluir.
