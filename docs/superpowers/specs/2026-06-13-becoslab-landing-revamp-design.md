# Beco's Lab — Revamp visual e háptico da landing (`landing-experimento`)

**Data:** 2026-06-13
**Status:** Design aprovado, aguardando revisão do spec

## Visão geral

A landing `landing-experimento.{html,css,js}` tem um conceito forte e original (um
"sistema orbital": um core central com orbs de projeto que se reorganizam por
trilha — Apps, Studio, Infoprodutos). A execução, porém, está em ~70%: falta a
camada de tato/feedback, o sistema parece congelado quando ocioso (contradizendo
a própria copy "sistema vivo"), e há problemas técnicos concretos (scroll-jacking
brigando com o CSS, ausência de `prefers-reduced-motion`, foco invisível, CSS
morto).

Este revamp adiciona vida e tato à interface e corrige a base técnica, **sem
trocar a stack**: continua vanilla, sem build, sem dependências de runtime, com
deploy idêntico ao atual. Tudo é progressive enhancement — cada efeito degrada
sozinho e respeita preferências de movimento reduzido.

## Objetivos

1. Dar feedback tátil real à interface (estados de toque, vibração, atração de cursor).
2. Fazer o sistema orbital parecer vivo (deriva ociosa, pulso, entrada coreografada).
3. Tornar a metáfora de "grafo/laboratório" literal (linhas que conectam de verdade).
4. Elevar o acabamento estético (tipografia com caráter, grão real, profundidade, fim dos placeholders repetidos).
5. Corrigir a base técnica (scroll nativo, acessibilidade de movimento e foco, contraste, limpeza).

## Escopo

- **Dentro:** apenas `landing-experimento.html`, `landing-experimento.css`,
  `landing-experimento.js` e, se necessário, novos assets em `assets/`.
- **Fora (decisão do usuário):** o formulário de contato. O `mailto` sem
  destinatário permanece como está nesta rodada. *(Nota: é um bug real conhecido;
  fica registrado para uma rodada futura.)*
- **Fora:** qualquer outra página do site (`index.html`, `news.html`, etc.).

## Princípios de arquitetura

- **Vanilla, sem build, sem dependências de runtime.** Nenhum npm/framework.
- **Progressive enhancement.** Cada recurso testa suporte antes de ativar e
  degrada em silêncio se faltar.
- **Movimento é opt-out por padrão.** Toda animação vive dentro de
  `@media (prefers-reduced-motion: no-preference)`.
- **Um único loop de animação.** Deriva ociosa, pulso e parallax compartilham um
  só `requestAnimationFrame` — sem timers paralelos competindo.
- **Não brigar com o layout existente.** Os efeitos somam a offsets; nunca
  sobrescrevem o `--orb-x/--orb-y` calculado por `layoutTrackOrbs()`.

## Fases

As fases são independentes e entregáveis em sequência. Cada uma deixa o site
funcional.

### Fase 0 — Fundação e higiene
**Impacto:** base · **Esforço:** baixo

- Remover o handler JS de `wheel`/`scroll`/snap (`landing-experimento.js:499-549`
  e funções de snap relacionadas) e confiar no `scroll-snap-type: y mandatory`
  nativo já presente no CSS. Reavaliar `touchstart`/`touchend` — manter só se o
  snap nativo não cobrir o caso mobile.
- Adicionar bloco `@media (prefers-reduced-motion: reduce)` zerando/encurtando as
  transições de blur/scale e desligando os loops de animação das fases seguintes.
- Adicionar `:focus-visible` visível nos orbs (core e project), espelhando o
  tratamento dos `.door-tab`.
- Subir o contraste do texto: `--muted` de `rgba(246,239,225,0.66)` para ~`0.74`
  nos parágrafos de corpo.
- Remover CSS morto: as posições estáticas `.orb-glyph`, `.orb-mind`, etc.
  (`landing-experimento.css:372-415`) sobrescritas por
  `.lab-system .project-orb { top:50%; left:50% }`.

### Fase 1 — Camada háptica
**Impacto:** alto · **Esforço:** baixo

- `:active { transform: scale(0.94) }` (ou equivalente respeitando os `transform`
  já compostos dos orbs) em orbs, `.door-tab`, `.service-strip button`,
  `.panel-action`, `.send-action`.
- `navigator.vibrate(8)` no tap dos orbs no mobile, com guarda de suporte
  (`'vibrate' in navigator`).
- Cursor magnético no desktop: dentro de um raio (~120px) o orb se desloca ~6–8px
  na direção do ponteiro via `transform`. Ativa apenas sob
  `matchMedia('(pointer: fine)')`. O deslocamento soma ao offset de layout, não o
  substitui.

### Fase 2 — Sistema vivo
**Impacto:** alto · **Esforço:** médio

- Um único `requestAnimationFrame` aplica:
  - **Deriva ociosa:** cada orb visível ganha uma fase senoidal própria, amplitude
    ~3–5px, somada ao seu `--orb-x/--orb-y`.
  - **Pulso do core:** variação sutil e contínua de escala/opacidade.
- **Entrada coreografada:** no load, os orbs emanam do core com stagger (~40ms,
  do centro para fora) em vez de aparecerem prontos.
- Tudo sob `prefers-reduced-motion: no-preference`; com movimento reduzido, orbs
  ficam estáticos nas posições calculadas.

### Fase 3 — Tecido conectivo
**Impacto:** médio · **Esforço:** médio

- Substituir as duas `.system-line` decorativas fixas
  (`landing-experimento.css:205`) por um `<svg>` cujas paths ligam o core ao orb
  selecionado de verdade.
- A constelação se redesenha a cada seleção/troca de trilha, reaproveitando as
  posições que o JS já conhece.
- Degrada para nada (ou para as linhas estáticas atuais) sob movimento reduzido.

### Fase 4 — Polimento estético
**Impacto:** alto · **Esforço:** médio

- **Display face** apenas nos títulos (`h1` do hero, `h2` de contato e slides); o
  corpo segue em Inter. Ver questão em aberto sobre a fonte.
- **Grão real** via `feTurbulence` SVG de baixa opacidade, substituindo a grade
  de linhas atual em `.lab-noise` (`landing-experimento.css:45`).
- **Parallax de ponteiro:** campo de orbs e textura de ruído deslocam levemente em
  sentidos opostos conforme o mouse (no mesmo rAF da Fase 2, `pointer: fine`).
- **Fim dos placeholders repetidos:** os projetos `health`, `life`, `course` (e os
  orbs `info`) hoje usam todos `becoslab.jpg` com `scale(2.3)`. Cada um recebe um
  glyph/marca distinta (gerada por CSS, sem novos assets de imagem obrigatórios).

## Questões em aberto

- **Fonte de display (Fase 4):** CDN permitido (Google Fonts / Fontshare — uma
  request externa) **ou** fonte variável hospedada local em `assets/` (zero
  requests externas, mais peso no repo). Decidir antes de implementar a Fase 4.

## Verificação

Como é uma página estática sem testes automatizados, a verificação é manual e
visual, por fase:

- Carregar `landing-experimento.html` localmente e checar cada fase no desktop e
  em viewport mobile (≤820px).
- Confirmar `prefers-reduced-motion`: com movimento reduzido ativado no SO, todos
  os loops param e a página continua usável.
- Confirmar navegação por teclado: foco visível em todos os orbs e botões.
- Confirmar que o scroll-snap nativo entrega a mesma navegação de duas telas sem o
  handler JS antigo.
- Sem erros no console.

## Riscos

- **`:has()`** já é o baseline atual do site (usado no CSS existente), então não
  introduz regressão de suporte.
- **Custo de animação em mobile:** mitigado por um único rAF compartilhado, sem
  timers paralelos, e desativação total sob movimento reduzido.
- **Cursor magnético em devices híbridos** (touch + mouse): guardado por
  `(pointer: fine)`; em touch puro não roda.
