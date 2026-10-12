# SPEC — Modularização do site "Dúvidas do Vendedor"

Sem PRD (decisão do Everton). Fonte: conversa + leitura de `index.html` (566 linhas).

## Objetivo e porquê
Separar conteúdo de layout. Hoje cada pergunta repete ~12 linhas de HTML em um arquivo só; com 15+ entradas a caminho, o que cresce é o conteúdo, não o código. Depois: adicionar pergunta = escrever 1 bloco curto de dados.

## Estrutura alvo
- `index.html` — só a moldura: faixa com logo, cabeçalho, busca, botão, `<main id="secoes">`, estado vazio (`#vazio`), rodapé, tags `<script>`.
- `css/estilo.css` — o segundo `<style>` atual (linhas 4–115), movido sem alterar nada. O primeiro `<style>` (reset de 1 linha no `<head>`) fica no `index.html`.
- `js/app.js` — renderiza, busca, Abrir/Fechar todas, contadores.
- `dados/<secao>.js` — um por seção, script clássico (sem módulos, sem fetch: funciona abrindo o arquivo e no GitHub Pages).
- `logo.png` fica onde está. Entrada continua `index.html`.

Ordem das `<script>`: arquivos de `dados/` (na ordem das seções), depois `js/app.js` por último. Todos no fim do `<body>`.

## Formato dos dados
Cada arquivo faz `window.SECOES = window.SECOES || []; window.SECOES.push({...})` com: `id`, `titulo`, `intro` (opcional; é o texto `.lede` de dentro do bloco, usado hoje em "Perguntas das lojas") e `itens` (lista).

Cada item: `tipo` (`sim`/`medida`/`ciencia`/`nao`), `etiqueta`, `pergunta`, `resposta` (o "lead"). Opcionais: `texto`, `porque`, `como`, `exemplo`, `origem`, `atualizado` (true), `revisar` (true). Campo ausente = linha não renderiza.

Ordem dentro da resposta (igual ao atual): etiqueta, "Atualizado", origem, resposta, texto, depois a lista Por quê / Como fazer / Exemplo. Sem nenhum dos três, não há lista. `texto` e `exemplo` ainda não existem no site; a posição acima é decisão deste Spec.

## Migração das 7 seções (27 perguntas, conferido)
| arquivo | título | perguntas |
|---|---|---|
| `antes-de-fechar-a-venda.js` | Antes de fechar a venda | 4 |
| `cozinha.js` | Cozinha | 6 |
| `modulos-e-estrutura.js` | Módulos e estrutura | 5 |
| `medidas-minimas.js` | Medidas mínimas | 3 |
| `roupeiro-e-prateleiras.js` | Roupeiro e prateleiras | 2 |
| `umidade-clima-e-predio.js` | Umidade, clima e prédio | 3 |
| `perguntas-das-lojas.js` | Perguntas das lojas | 4 (com `intro` e `origem`) |

Os 7 arquivos são gerados por script Python que lê o HTML atual (`git show HEAD:index.html`); nada digitado à mão. Só uma pergunta tem "Atualizado" (canto "L" editável).

## Regras de renderização
- Texto dos dados entra só por `textContent` (seguro com aspas e símbolos). Verificado: nenhuma resposta atual tem HTML (o único `<em>` é do título H1; `&hit;` na linha 537 é código). Logo, sem `innerHTML` nos dados. Se uma entrada futura precisar de negrito, vira nova decisão.
- Mesmas classes e mesmo DOM de hoje: `section.band.band-b|band-c[data-group]` > `details.block` > `.block-body` > `.faq` > `details` > `.q-text`, `.pill.p-<tipo>`, `p.novo`, `p.src`, `p.lead`, `dl`. A faixa alterna `band-b`/`band-c` pela posição (1ª = b). O rodapé assume a faixa oposta à da última seção (decisão do Everton: evita rodapé e última seção com a mesma cor).
- A lógica de `filter`, `counts`, `allOpen`, `syncToggle` é copiada do script atual; muda só que `groups` e `items` são lidos depois de renderizar. A busca continua sobre o `textContent` sem acento de cada pergunta.
- Entrada sem `tipo` válido ou sem `pergunta`: erro no console e a entrada é pulada (não quebra o site).

## Lista de revisão (`?revisar`)
Opção escolhida: abrir `index.html?revisar` mostra uma caixa no topo da página com "Seção — pergunta" de cada entrada com `revisar:true` (mais simples para o Everton que o console). Sem `?revisar` nada aparece. A entrada continua publicada normalmente: `revisar` só alimenta a lista.

## Como adicionar
1. Pergunta nova: abra o `dados/<secao>.js` e copie um item existente dentro de `itens`.
2. Seção nova: crie `dados/nome-sem-acento.js` (copie um existente; troque `id`, `titulo`, `itens`) e adicione 1 linha `<script src="dados/nome-sem-acento.js"></script>` no `index.html`, antes de `js/app.js`. A posição da linha define a posição da seção.
3. Não é preciso mexer em `css/` nem em `js/`.

## Verificação de que nada mudou
1. Antes de mexer: script Python extrai, por pergunta do HTML atual, o texto visível (pergunta, etiqueta, origem, resposta, Por quê/Como fazer): 27 registros.
2. Depois: renderizar a página nova com Edge sem janela (`msedge --headless --dump-dom file:///.../index.html`; já vem no Windows 11, nada a instalar), extrair o mesmo texto e comparar pergunta a pergunta. Critério: **zero diferença** de texto e mesma sequência de classes. Plano B: Chrome headless.
3. `node -v` antes; se existir, `node --check` em `js/app.js` e nos 7 dados. Se não existir, a etapa 2 já acusa erro de sintaxe (página vazia).
4. Teste manual, em modo claro e escuro: sanfonas fechadas; buscar "cooktop" (abre bloco e pergunta, contador muda); buscar "xyzxyz" (estado vazio); Abrir/Fechar todas; contraste do `.src` nas faixas `band-c` (`--accent-text-c`); logo; `?revisar`.

## Fora de escopo
Aplicar `atualizacao-faq-guia-do-vendedor.md`; criar/renomear seções; mudar design; dependências; build step.

## Plano de Execução
- [x] Task 1 — Rodar `node -v`, confirmar que o Edge existe e criar a branch `modularizacao`.
- [x] Task 2 — Script Python (fora do repo) que extrai o texto-base das 27 perguntas do `index.html` atual.
- [x] Task 3 — Mover o CSS (linhas 4–115) para `css/estilo.css` sem alteração e trocar por `<link>` no `index.html`; conferir visual igual.
- [x] Task 4 — Script Python de migração gera os 7 `dados/*.js`; conferir contagens (7 seções / 27 perguntas / 4 origens / 1 atualizado).
- [x] Task 5 — Escrever `js/app.js`: render por `textContent` + busca + Abrir todas + contadores.
- [x] Task 6 — Reduzir `index.html` à moldura (`<main id="secoes">`, `#vazio`, rodapé, 7 `<script>` de dados + `app.js`).
- [x] Task 7 — Implementar `?revisar` e testar com uma entrada temporária `revisar:true`, depois remover.
- [x] Task 8 — Comparar `--dump-dom` novo x antigo: zero diferença nas 27 perguntas.
- [x] Task 9 — Teste manual (lista da seção Verificação), claro e escuro, abrindo o arquivo direto.
- [x] Task 10 — `CLAUDE.md` criado na raiz, com o "Como adicionar" (versão curta, em pt-BR).
- [ ] Task 11 — **Última tarefa, só depois de aplicar o `atualizacao-faq-guia-do-vendedor.md`:** criar o `README.md` explicando, passo a passo e sem jargão, como mudar um texto, criar pergunta, criar seção e conferir se quebrou. Escrito para o Everton daqui a meses; sugerir texto de commit (sem executar).

## Desvios
- Task 3: o CSS ganhou 4 linhas no fim, para a caixa `?revisar` (`.revisar`). As 112 linhas originais estão idênticas (conferido com diff).
- Task 8: a comparação cobriu 742 nós (tag, classe, hidden/open e texto) do DOM antigo x novo no Edge: 0 diferenças. A captura de tela a 390px é idêntica byte a byte.
- Task 9: busca, "Abrir todas", contadores, estado vazio e `?revisar` foram testados por script no Edge sem janela, não à mão. O modo escuro não foi visto, mas o CSS é idêntico. O Everton ainda precisa abrir no navegador.
