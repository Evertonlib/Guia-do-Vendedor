# SPEC — Atualização do FAQ (12/10/2026)

Base: `PRD_ATUALIZACAO_FAQ.md` (aprovado). Textos novos: `atualizacao-faq-guia-do-vendedor.md`, seção 3 (copiados sem reescrever). Não muda `css/` nem `js/app.js`.

## Observações (código x PRD)
- Código confere com o PRD: hoje são 27 entradas (4/6/5/3/2/3/4) em 7 arquivos.
- `js/app.js:36-46` renderiza na ordem: etiqueta, `origem`, `resposta` (destaque), `texto`, depois Por quê / Como fazer / Exemplo. Uma entrada com `texto` + `porque` + `como` + `exemplo` já funciona; nada a mudar no app.js.
- Fonte tem 9 notas em colchetes e um "Brilharte" (linha 37): já resolvidos no PRD; não copiar as notas nem a grafia errada.

## 1. Arquivos em `dados/`

| Arquivo hoje | Depois | Como |
|---|---|---|
| `antes-de-fechar-a-venda.js` | igual | sai "Misturar cores" (vai p/ Acabamentos); entram 6, 7, 9 |
| `cozinha.js` | `cozinhas-banheiros-e-varandas.js` (id igual, titulo "Cozinhas, banheiros e varandas") | `git mv`; entra 10 |
| `modulos-e-estrutura.js` | igual | entra "Fundo com mão francesa/grapa" (vinda das lojas) + 11, 12 |
| `medidas-minimas.js`, `umidade-clima-e-predio.js` | iguais | sem mudança |
| `roupeiro-e-prateleiras.js` | `prateleiras-e-paineis.js` (titulo "Prateleiras e painéis") | `git mv`; sai o cabideiro (vai p/ Dormitório) |
| `perguntas-das-lojas.js` | removido | `git rm` depois de mover as 4 entradas |
| (novo) | `processo-e-prazos.js`, `acabamentos.js`, `dormitorio.js`, `fabricas-parceiras.js` | ids = nome do arquivo; titulos: "Processo e prazos", "Acabamentos", "Dormitório", "Fábricas parceiras" |

Entradas que mudam de arquivo: texto e campos idênticos, inclusive `origem` (e `atualizado`, se houver). Só as 2 correções de termo do item 3.
- Promob Plus e comparativo → `processo-e-prazos.js`; fundo/grapa → `modulos-e-estrutura.js`; meia-cana → `acabamentos.js`; "Misturar cores" → `acabamentos.js`; cabideiro → `dormitorio.js`.

**Ordem das tags `<script>` em `index.html`** (substitui as linhas 34-40; `js/app.js` continua por último):
1. `dados/antes-de-fechar-a-venda.js`  2. `dados/processo-e-prazos.js`  3. `dados/cozinhas-banheiros-e-varandas.js`  4. `dados/modulos-e-estrutura.js`  5. `dados/acabamentos.js`  6. `dados/dormitorio.js`  7. `dados/prateleiras-e-paineis.js`  8. `dados/medidas-minimas.js`  9. `dados/umidade-clima-e-predio.js`  10. `dados/fabricas-parceiras.js`

Rodapé (`index.html:31`): "Última atualização: 09/10/2026" → "12/10/2026". Sem `revisar: true` e sem ⚠.

## 2. As 14 entradas novas
Regra de campos (arquivo-fonte → site): "Resposta curta" com até 4 palavras vira `etiqueta`, e o "Texto" (se houver) vira `resposta`. Com mais de 4 palavras, ela vira `resposta` (verbatim), o "Texto" vira `texto` e a `etiqueta` é nova. Sem "Texto", `resposta` = resposta curta verbatim. "Por quê"/"Como fazer"/"Exemplo" → `porque`/`como`/`exemplo`. Pergunta = título da fonte.

| Nº | Seção | Tipo | Etiqueta | `resposta` vem de |
|---|---|---|---|---|
| 1 | Processo e prazos | nao | Não, separe no Usicode | Texto |
| 2 | Processo e prazos | nao | Aguarde o financeiro (PRD) | curta; Texto em `texto` |
| 3 | Processo e prazos | nao | Não, padrão único | curta; Texto em `texto` |
| 4 | Processo e prazos | nao | Não, peça nova medição | curta |
| 5 | Processo e prazos | medida | Depende do pagamento | curta (com "condição"); Texto em `texto`; `exemplo` |
| 6 | Antes de fechar a venda | sim | Peça nova medição | curta |
| 7 | Antes de fechar a venda | nao | Não, venda móvel novo | curta |
| 8 | Acabamentos | nao | Não, use o catálogo (PRD) | curta |
| 9 | Antes de fechar a venda | medida | Depende do projeto (PRD) | "Depende. O projeto já sai com o mínimo necessário." |
| 10 | Cozinhas, banheiros e varandas | sim | Pode, compra do comercial | curta; Texto em `texto` |
| 11 | Módulos e estrutura | nao | Não, só 25 mm | curta |
| 12 | Módulos e estrutura | sim | Peça à liberação | curta; Texto em `texto` |
| 13 | Fábricas parceiras | sim | Sim, linha Brilhart | curta; Texto em `texto` |
| 14 | Fábricas parceiras | sim | Sim, espelho vertical | curta; Texto em `texto` |

- Etiquetas não aprovadas no PRD (1, 3-7, 10-14) são propostas minhas; o Everton corrige depois se quiser. Todas têm 2 a 4 palavras.
- Entrada 5: trocar "forma de pagamento" por "condição de pagamento" na resposta curta e no Texto (exemplo fica como está). Entrada 9 sem "Texto".
- Entrada 15 (BP) e itens "fora de escopo" do PRD: não criar.

## 3. Correções de termo nas existentes
- Etiqueta do Promob Plus: "Não, só Studio Vita" → "Não, só Studio Vitta".
- "De onde sai o valor do comparativo?", campo `porque`: "forma de pagamento" → "condição de pagamento".
- Grafia da fábrica: "Brilhart" (sem E). Nunca "Brilharte".

## 4. Ordem das entradas por seção
Antigas primeiro, novas depois (`N` = número novo; antigas por nome curto).

| Seção | Ordem |
|---|---|
| Antes de fechar a venda | obra, puxador, cristaleira, 6, 7, 9 |
| Processo e prazos | Promob Plus, 1, 2, 3, 4, 5, comparativo |
| Cozinhas, banheiros e varandas | as 6 atuais na ordem de hoje, 10 |
| Módulos e estrutura | as 5 atuais na ordem de hoje, fundo/grapa, 11, 12 |
| Acabamentos | meia-cana, misturar cores, 8 |
| Dormitório | cabideiro |
| Prateleiras e painéis | suporte invisível c/ LED |
| Medidas mínimas / Umidade | sem mudança (3 / 3) |
| Fábricas parceiras | 13, 14 |

Contagens esperadas, na ordem do site: 6 / 7 / 7 / 8 / 3 / 1 / 1 / 3 / 3 / 2 = 41.

## 5. Verificação
(a) `node --check` em cada `dados/*.js`. (b) Contar as entradas por arquivo e conferir 6/7/7/8/3/1/1/3/3/2. (c) Script Python do executor, fora do repo: comparar as 27 antigas campo a campo (antes no `git show HEAD:`, depois no arquivo novo); só são aceitas as 2 correções do item 3 e a mudança de seção. (d) `msedge --headless --dump-dom` (`C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`, mesmo método do `SPEC_MODULARIZACAO.md`): 10 seções, ordem e contadores; por script, buscar "Vitta" (acha Promob Plus), uma palavra de entrada nova (ex.: "ripada"), "Abrir todas" e busca sem resultado (mensagem de vazio). (e) grep: nenhum "Brilharte", nenhum "Studio Vita" isolado e nenhum ⚠ em `index.html`, `dados/`, `css/`, `js/`; conferir que as 14 etiquetas novas têm 2 a 4 palavras.

## Plano de Execução
- [x] Task 1 — Criar a branch `faq-12-10` a partir de `modularizacao`.
- [x] Task 2 — `git mv` de `cozinha.js` e `roupeiro-e-prateleiras.js` para os nomes novos; ajustar `id` e `titulo` dentro deles.
- [x] Task 3 — Criar `processo-e-prazos.js` (Promob Plus com a correção "Vitta", entradas 1 a 5 e comparativo com a correção "condição", na ordem do item 4).
- [x] Task 4 — Criar `acabamentos.js` (meia-cana, misturar cores, entrada 8) e `dormitorio.js` (cabideiro); remover essas entradas dos arquivos de origem.
- [x] Task 5 — Criar `fabricas-parceiras.js` (13 e 14); acrescentar 10 em cozinhas, 11 e 12 e fundo/grapa em módulos, 6, 7 e 9 em antes de fechar a venda.
- [x] Task 6 — `git rm dados/perguntas-das-lojas.js`; reescrever as tags `<script>` na ordem do item 1; mudar o rodapé para 12/10/2026.
- [x] Task 7 — Rodar a verificação (a) a (e) e corrigir o que falhar.
- [x] Task 8 — Criar `README.md` (pt-BR, sem jargão, passo a passo para o Everton daqui a meses: mudar um texto, criar pergunta, criar seção, conferir se quebrou). Propor (sem editar) ajuste no `CLAUDE.md` só se alguma regra mudou, trocando uma linha existente (ele deve ficar abaixo de ~100 linhas). Sugerir o texto de commit, sem executar.

## Desvios
- Entrada 9: no arquivo-fonte, "junto com o cliente" estava em negrito (`**`). O site não renderiza HTML nos dados, então o texto entrou sem negrito.
- Verificação (Task 7): `node --check` ok em todos os `dados/*.js`; 10 seções na ordem do PRD, contagens 6/7/7/8/3/1/1/3/3/2 = 41; as 27 antigas só mudaram nas 2 correções de termo (13 trocaram de seção); 14 etiquetas novas de 2 a 4 palavras; zero "Brilharte", "Studio Vita", ⚠, `**` ou "forma de pagamento". Busca ("Vitta", "Brilhart", "lixeira"), estado vazio e "Abrir todas" (51 = 10 + 41) testados no Edge sem janela. Rodapé: 12/10/2026, com faixa oposta à da última seção.
- Task 8: o `CLAUDE.md` não foi editado. Proposta (trocar 1 linha): na linha que lista `SPEC_MODULARIZACAO.md` e `atualizacao-faq-guia-do-vendedor.md`, usar "`PRD_*.md` e `SPEC_*.md` — decisões e planos; ler antes de mudar a estrutura".
