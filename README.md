# Dúvidas do Vendedor — como mexer neste site

Site de perguntas e respostas para os vendedores da By Arabi. Cada pergunta abre como uma sanfona e explica o que pode, o que não pode e por quê.

Todo o texto fica em arquivos simples na pasta `dados/`. **Você não precisa mexer em mais nada** para mudar o conteúdo.

## Onde está cada coisa

| Pasta ou arquivo | O que é |
|---|---|
| `dados/` | **O conteúdo.** Um arquivo por seção (por exemplo `cozinhas-banheiros-e-varandas.js`). |
| `index.html` | A página em si. Só mexe aqui para criar seção nova ou trocar a data do rodapé. |
| `css/` e `js/` | Visual e funcionamento. Não precisa mexer. |
| `logo.png` | O logo da faixa preta no topo. |

## 1. Mudar um texto que já existe

1. Abra o arquivo da seção em `dados/`.
2. Ache a pergunta e troque o texto **entre as aspas**.
3. Salve e abra o `index.html` no navegador para conferir.

## 2. Criar uma pergunta nova

1. Abra o arquivo da seção onde ela deve ficar.
2. Copie **um bloco inteiro**, de `{` até `}`.
3. Cole logo depois do último bloco e **coloque uma vírgula entre os dois blocos** (depois do `}` do bloco de cima).
4. Reescreva os campos:

```js
{
  tipo: "nao",
  etiqueta: "Não, separe no Usicode",
  pergunta: "Posso mandar os ambientes juntos?",
  resposta: "Dá para apresentar junto, mas no Usicode precisam estar separados.",
  porque: "O montador perde um dia separando as peças.",
  como: "Separe os ambientes no Usicode e no Promob."
}
```

**Campos obrigatórios:** `tipo`, `etiqueta`, `pergunta` e `resposta`.

**Campos opcionais** (apague a linha se não precisar): `texto`, `porque`, `como`, `exemplo`, `origem`.

**Tipo** define a cor da etiqueta:
- `nao` — "Não, use a alternativa" (vermelho)
- `sim` — "Sim, com condição" (verde)
- `ciencia` — "Só com ciência do cliente" (laranja)
- `medida` — medida ou informação neutra (cinza)

A etiqueta deve ser curta, de 2 a 4 palavras.

## 3. Criar uma seção nova

1. Em `dados/`, copie um arquivo existente e dê um nome **sem acento e sem espaço**, como `fornecedores.js`.
2. Dentro dele, troque `id` (mesmo nome do arquivo, sem `.js`), `titulo` (o nome que aparece na tela) e as perguntas.
3. No `index.html`, perto do fim, adicione uma linha como esta, **antes** da linha de `js/app.js`:
   `<script src="dados/fornecedores.js"></script>`

A posição dessa linha define a posição da seção na página. Para mudar a ordem, mude a linha de lugar.

## 4. Conferir se quebrou

- **Abra o `index.html` no navegador** (dois cliques). Se uma seção sumiu, o arquivo dela tem um erro, quase sempre vírgula esquecida, aspas faltando ou chave sem fechar.
- Para ver onde está o erro, abra o terminal na pasta do projeto e rode:
  `Get-ChildItem dados\*.js | ForEach-Object { node --check $_.FullName }`
  Se não aparecer nada, está tudo certo. Se aparecer erro, ele mostra o arquivo e a linha.
- Depois de mudar, atualize a página com Ctrl+F5.

## 5. Cuidados

- Aspas duplas **dentro** de um texto precisam de uma barra antes: `\"assim\"`. Ou use aspas simples.
- Não funciona negrito, link ou outro formato dentro dos textos: o texto aparece como foi escrito.
- Não use acento nem espaço em nome de arquivo.
- Nomes certos: **Brilhart** (sem E) e **Studio Vitta** (dois T).
- Para uma pergunta que você ainda quer revisar, coloque `revisar: true` nela. Ela continua aparecendo no site. A lista das marcadas aparece ao abrir `index.html?revisar`.

## 6. Publicar

O site no ar é o que está na branch `main` do GitHub. Faça as mudanças em outra branch, confira, e só depois junte com a `main`. Depois de 1 ou 2 minutos o GitHub Pages atualiza sozinho.

## Documentos de apoio

- `PRD_ATUALIZACAO_FAQ.md` e `SPEC_ATUALIZACAO_FAQ.md` — decisões e plano da reorganização de 12/10/2026.
- `SPEC_MODULARIZACAO.md` — por que o site foi dividido em arquivos.
