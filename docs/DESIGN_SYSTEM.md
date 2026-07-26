# Design System

## Filosofia

Este projeto segue a filosofia Leica.

Isso significa:

- A fotografia é sempre a protagonista.
- O design existe para valorizar as fotografias.
- Todo elemento visual deve transmitir calma, confiança e sofisticação.
- O site nunca deve parecer chamativo ou exagerado.
- Menos elementos.
- Mais espaço em branco.
- Poucas cores.
- Tipografia elegante.
- Interface extremamente limpa.

## Princípios

Antes de implementar qualquer componente, validar sempre:

1. Este elemento é realmente necessário?
2. Ele melhora a experiência?
3. Ele destaca a fotografia?
4. Ele transmite confiança?
5. Ele parece premium sem parecer luxuoso?

Se qualquer resposta for "não", o componente deve ser simplificado.

## Personalidade

A marca transmite:

- Integridade
- Organização
- Delicadeza
- Atenção aos detalhes
- Atendimento humano
- Elegância discreta

Nunca transmitir:

- Excesso de animações
- Excesso de cores
- Visual infantil
- Aparência de template
- Aparência de fotógrafo amador
- Interface poluída

## Regra principal

Sempre que houver dúvida entre duas soluções de design, escolher a mais simples.

## Tipografia

### Filosofia

A tipografia deve transmitir sofisticação, leveza e excelente legibilidade.

Nunca utilizar fontes decorativas para textos longos.

A combinação deve lembrar editoriais de fotografia de alto padrão.

### Fontes

Heading:
Cormorant Garamond

Texto:
Inter

Interface:
Inter

### Hierarquia

H1
Muito grande.
Peso 600.
Poucas linhas.
Muito espaço abaixo.

H2
Elegante.
Sempre com bastante respiro.

H3
Discreto.

Texto
Máximo conforto de leitura.

Small
Utilizado apenas para categorias, etiquetas e pequenos detalhes.

### Comprimento

Nunca criar blocos longos.

Preferir:

2 a 4 linhas por parágrafo.

### Alinhamento

Sempre alinhado à esquerda.

Nunca justificar textos.

### Espaçamento

Entre título e texto:
grande.

Entre seções:
muito grande.

Entre componentes:
consistente.

### Regra

Quando houver dúvida entre aumentar o tamanho da fonte ou aumentar o espaço em branco, aumentar o espaço em branco.

## Paleta de Cores

### Filosofia

As cores devem desaparecer para que as fotografias apareçam.

O site nunca deve competir com as imagens.

A fotografia é sempre a protagonista.

### Paleta

Background Principal

Branco quente.

Nunca branco puro absoluto.

Surface

Cinza extremamente claro.

Utilizado apenas para separar áreas discretamente.

Texto Principal

Preto suave.

Nunca preto absoluto.

Texto Secundário

Cinza médio.

Bordas

Cinza muito claro.

### Cor da Marca

Dourado.

O dourado é uma cor de destaque.

Nunca deve dominar a interface.

Utilizar apenas em:

- Botão principal
- Hover do menu
- Pequenos detalhes
- Divisores especiais
- Ícones de destaque
- Elementos institucionais

Nunca utilizar grandes áreas douradas.

### Contraste

Todo texto deve possuir contraste AA ou superior.

### Regra

Se existir dúvida entre usar dourado ou branco, utilizar branco.

Se existir dúvida entre usar cinza ou dourado, utilizar cinza.

O dourado é reservado apenas para momentos importantes da interface.

## Grid e Espaçamento

### Filosofia

O espaço em branco faz parte do design.

Não preencher espaços apenas porque estão vazios.

Respiração visual transmite sofisticação.

### Container

Largura máxima:

1280px

Conteúdo centralizado.

Padding lateral confortável em todos os dispositivos.

### Grid

Desktop

12 colunas.

Tablet

8 colunas.

Mobile

4 colunas.

Sempre Mobile First.

### Espaçamento

Utilizar uma escala consistente.

Nunca utilizar valores aleatórios.

As seções devem respirar.

Entre uma seção e outra deve existir bastante espaço.

### Hero

O Hero ocupa praticamente toda a primeira tela.

### Header

Sempre compacto.

Nunca competir com o Hero.

### Regra

Quando houver dúvida entre reduzir um elemento ou aumentar o espaço em branco, aumentar o espaço em branco.

## Componentes

### Botão Primário

Objetivo:

Levar o usuário para o WhatsApp.

Características:

- elegante
- sólido
- discreto
- fácil de identificar
- cantos levemente arredondados
- altura confortável
- sombra extremamente discreta

Nunca parecer um botão chamativo.

---

### Botão Secundário

Objetivo:

Navegação.

Características:

- fundo transparente
- borda discreta
- mesma altura do botão principal
- aparência leve

---

### Header

Características:

- altura reduzida
- muito espaço lateral
- logo à esquerda
- menu centralizado
- botão WhatsApp à direita
- sticky
- fundo branco com leve transparência ao rolar a página
- borda inferior extremamente discreta

Nunca utilizar menus pesados.

---

### Hero

Características:

- aproximadamente 100vh
- fotografia ocupa mais espaço que o texto
- fotografia sempre protagonista
- texto curto
- apenas um H1
- dois botões
- muito espaço em branco

Nunca colocar muitos elementos.

---

### Fotografias

As fotografias são o principal elemento visual do projeto.

Sempre utilizar imagens grandes.

Evitar cortes agressivos.

Evitar galerias pequenas.

Sempre priorizar emoção.

---

### Regra Final

Todo componente deve responder a uma pergunta:

"Ele ajuda a fotografia a se destacar?"

Se a resposta for não, simplificar o componente.
