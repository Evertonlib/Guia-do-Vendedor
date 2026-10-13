# Dúvidas do Vendedor — By Arabi Planejados

FAQ em sanfona para vendedores (o que pode e o que não pode vender, e por quê). Site estático no GitHub Pages: **a branch `main` é o que está no ar**. HTML/CSS/JS puros, sem build, sem dependências.

## Estrutura

- `index.html` — só a moldura (faixa com logo, busca, rodapé, tags `<script>`).
- `css/estilo.css` — todo o visual.
- `js/app.js` — monta as sanfonas a partir dos dados, busca, "Abrir todas", contadores, `?revisar`.
- `dados/<secao>.js` — **o conteúdo**. Um arquivo por seção; cada pergunta é um bloco `{ ... }` dentro de `itens`.
- `logo.png` — logo da marca (só existe versão para fundo escuro).
- `SPEC_MODULARIZACAO.md` — Spec da estrutura acima. `atualizacao-faq-guia-do-vendedor.md` — conteúdo novo a aplicar.

## Como mexer no conteúdo

- **Mudar um texto:** abra `dados/<secao>.js`, ache a pergunta e edite entre as aspas.
- **Pergunta nova:** copie um bloco `{ ... }` inteiro dentro de `itens`, cole depois dele, **ponha vírgula entre os blocos** e reescreva.
- **Seção nova:** crie `dados/nome-sem-acento.js` copiando outro, troque `id`, `titulo` e `itens`, e adicione 1 linha `<script src="dados/nome-sem-acento.js"></script>` no `index.html`, **antes** de `js/app.js`.
- **Ordem das seções** = ordem das linhas `<script>` no `index.html`. Troque a linha de lugar.

Campos da pergunta: `tipo` (`sim`, `medida`, `ciencia` ou `nao`), `etiqueta`, `pergunta`, `resposta` (obrigatórios); `texto`, `porque`, `como`, `exemplo`, `origem`, `atualizado: true`, `revisar: true` (opcionais — campo ausente = linha não aparece).

**Selos (`tipo`) — escolha pela cor, não só pelo sentido:**

- `sim` (verde): pode, ou pode sob condição. Ex.: "Só cooktop de indução".
- `nao` (vermelho): não pode ou há bloqueio; etiqueta começa com "Não, ..." e traz a alternativa.
- `ciencia` (amarelo): pode, mas só com ciência do cliente, sem garantia ou com aviso.
- `medida` (cinza): neutro — números/faixas e também respostas informativas ("de onde sai...", "peça à liberação").
- A etiqueta nunca contradiz a resposta (não pôr "Sim" em resposta que começa com "Não").

## Armadilhas

- Faltou vírgula, aspas ou chave num `dados/*.js` → aquela seção some da página (as outras continuam). Confira com `node --check dados/arquivo.js`.
- Aspas duplas dentro de um texto precisam de `\"` ou troque por aspas simples.
- Nomes de arquivo e `id` sem acento nem espaço (o GitHub Pages diferencia maiúsculas de minúsculas).
- `revisar: true` **não esconde** a entrada: ela é publicada. Serve só para listar pendências em `index.html?revisar`.
- O texto dos dados entra como texto puro: não funciona HTML (negrito, link) dentro das respostas.
- O navegador guarda favoritos e cache: depois de publicar, atualize com Ctrl+F5.

## Design

- Sistema visual By Arabi (skill `byarabi-design`): papel como padrão, escuro automático pelo sistema.
- Ouro em texto pequeno: `--accent-text`, e `--accent-text-c` nas faixas `band-c` (senão reprova contraste AA).
- Não mexer em `css/` nem em `js/` para trocar conteúdo.

## Fluxo

Mudanças de estrutura seguem PRD → Spec → implementação. Pode trabalhar direto na `main` (é ela que publica). Commit só quando o Everton pedir.
