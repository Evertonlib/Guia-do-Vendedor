window.SECOES = window.SECOES || [];
window.SECOES.push({
  id: "processo-e-prazos",
  titulo: "Processo e prazos",
  itens: [
    {
      tipo: "nao",
      etiqueta: "Não, só Studio Vitta",
      pergunta: "Posso enviar o projeto no Promob Plus?",
      origem: "Treinamento Tatuapé · 09/10/2026",
      resposta: "Não. A fábrica exige o Promob original, Studio Vitta.",
      porque: "Arquivos de outras versões não abrem no sistema da liberação, inclusive a versão das vendas é incompatível com a versão usada no escritório (medição, liberação e astec).",
      como: "Envie o arquivo zipado original da medição sem abrir. Aberto antes, ele deixa de funcionar no original."
    },
    {
      tipo: "nao",
      etiqueta: "Não, separe no Usicode",
      pergunta: "Posso mandar os ambientes juntos, sem desmembrar?",
      resposta: "Dá para apresentar tudo junto ao cliente, mas no Usicode os ambientes precisam estar separados.",
      porque: "Com o pacote unificado, o montador gasta um dia ou mais separando as peças.",
      como: "Separe os ambientes no Usicode e no Promob. Em caso de dúvida sobre quais ambientes criar, consulte a liberação."
    },
    {
      tipo: "nao",
      etiqueta: "Aguarde o financeiro",
      pergunta: "O contrato está bloqueado no financeiro. O que acontece?",
      resposta: "O processo não avança até o financeiro liberar.",
      texto: "O bloqueio pode acontecer em qualquer momento. Ao chegar para iniciar a liberação, a liberação não inicia. Pode acontecer também depois de liberado, na hora de encomendar, quando o projeto não pode ser encomendado.",
      como: "Resolva com o financeiro e avise a liberação por e-mail quando desbloquear. O prazo do processo conta depois da liberação do financeiro."
    },
    {
      tipo: "nao",
      etiqueta: "Não, padrão único",
      pergunta: "O cliente pode exigir um novo padrão no PDF?",
      resposta: "Não, o padrão é único.",
      texto: "O padrão do PDF já é consolidado para montagem e produção, e a liberação atende o volume de todas as lojas. Não é possível personalizar o PDF para cada cliente.",
      porque: "Abrir essa margem leva a vários outros pedidos de alteração.",
      como: "Detalhes específicos, o vendedor explica na mesa com o cliente."
    },
    {
      tipo: "nao",
      etiqueta: "Não, peça nova medição",
      pergunta: "O cliente mudou a obra depois da liberação. Posso ajustar sem re-medir?",
      resposta: "Não, peça nova medição.",
      porque: "A medição existe para registrar o ambiente real, e ele deixa de ser real quando o cliente altera a obra. Seguir com o projeto assim dá errado.",
      como: "O medidor volta para medir e o projeto retorna à liberação."
    },
    {
      tipo: "medida",
      etiqueta: "Depende do pagamento",
      pergunta: "Por que o déficit do comparativo vem tão alto?",
      resposta: "Porque o Usicode calcula pela condição de pagamento fechada.",
      texto: "O Usicode mostra o déficit financeiro com base na condição de pagamento que o cliente fechou. À vista, a reversão financeira é calculada sobre o valor à vista, que é menor. Em 24x, a reversão gera um custo maior, e o déficit aparece como se fosse em 24x.",
      exemplo: "Uma cozinha paga à vista deu diferença de R$ 500. A mesma cozinha em 24x daria cerca de R$ 1.200."
    },
    {
      tipo: "sim",
      etiqueta: "O valor vem do sistema",
      pergunta: "De onde sai o valor do comparativo?",
      origem: "Treinamento Tatuapé · 09/10/2026",
      resposta: "Do próprio Usicode. A liberação não calcula nem altera valores.",
      porque: "O comparativo é proporcional à condição de pagamento: numa venda em 24x, a diferença vem parcelada, diferente da venda à vista.",
      como: "Negocie a diferença com o cliente no ajuste inicial, sem esperar o comparativo. O acesso à aba de valores fica com a supervisão."
    },
    {
      tipo: "medida",
      etiqueta: "Depende do projeto",
      pergunta: "A liberação consegue enxugar o projeto para reduzir o déficit?",
      resposta: "Depende. O projeto já sai com o mínimo necessário.",
      porque: "Os projetos já saem com o mínimo necessário para montagem mantendo a qualidade By arabi, por isso os pacotes de ferragem não podem ter componentes excluídos.",
      como: "O vendedor pode alterar o layout junto com o cliente ou negociar a diferença de valor já no ajuste inicial."
    }
  ]
});
