// O Princípio Open/Closed (Aberto/Fechado) é um dos Princípios SOLID de design de software e diz que um sistema deve ser aberto para extensão e fechado para modificação. Isso significa que, quando você precisar adicionar funcionalidades ou comportamentos novos ao seu código, deve ser possível fazer isso sem alterar o código que já está funcionando.

// Explicação para Leigos:
// Imagine que você tem uma caixa de ferramentas. A caixa de ferramentas já vem com várias ferramentas, como martelos, chaves de fenda e alicates, que você usa para consertar coisas. Agora, suponha que você precise adicionar uma nova ferramenta, como uma chave inglesa. O princípio Open/Closed seria algo como: a caixa de ferramentas (o sistema) deve estar pronta para acomodar novas ferramentas (novas funcionalidades) sem que você precise alterar as ferramentas que já estão lá.

// Deve ser fecha para modificação devido a adição de novos tipos de perguntas
function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    switch (question.type) {
      case "boolean":
        console.log("1. True");
        console.log("2. False");
        break;
      case "multipleChoice":
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;
      case "text":
        console.log("Answer:______________________");
        break;
      case "range":
        console.log("Minimum:______________________");
        console.log("Maximum:______________________");
        break;
    }
    console.log("");
  });
}

// Aberto para extensão de novos tipos de perguntas
const questions = [
  {
    type: "boolean",
    description: "This video is useful.",
  },
  {
    type: "multipleChoice",
    description: "What is your favorite language?",
    options: ["CSS", "HTML", "JS", "Python"],
  },
  {
    type: "text",
    description: "What is your name?",
  },
  {
    type: "range",
    description: "What is the speed limit in your area?",
  },
];

// Problema: O código acima não é fechado para modificação, pois a função printQuiz não está fechada para modificação
// Sempre que um novo tipo de pergunta for adicionado, a função printQuiz deve ser modificada