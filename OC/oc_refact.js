// Classe base para as perguntas
class Question {
    constructor(description) {
      this.description = description;
    }
  
    // Método comum para exibir a descrição, mas cada tipo de pergunta terá a sua implementação de exibição
    display() {
      console.log(this.description);
    }
  }
  
  // Tipo de pergunta boolean
  class BooleanQuestion extends Question {
    display() {
      super.display();
      console.log("1. True");
      console.log("2. False");
    }
  }
  
  // Tipo de pergunta de múltipla escolha
  class MultipleChoiceQuestion extends Question {
    constructor(description, options) {
      super(description);
      this.options = options;
    }
  
    display() {
      super.display();
      this.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
      });
    }
  }
  
  // Tipo de pergunta de texto
  class TextQuestion extends Question {
    display() {
      super.display();
      console.log("Answer:______________________");
    }
  }
  
  // Tipo de pergunta de intervalo
  class RangeQuestion extends Question {
    display() {
      super.display();
      console.log("Minimum:______________________");
      console.log("Maximum:______________________");
    }
  }
  
  // Função que imprime o quiz, agora sem precisar de um switch, apenas chamando o método display das perguntas
  function printQuiz(questions) {
    questions.forEach((question) => {
      question.display();
      console.log(""); // Pula uma linha para separar as perguntas
    });
  }
  
  // Criando as perguntas
  const questions = [
    new BooleanQuestion("This video is useful."),
    new MultipleChoiceQuestion("What is your favorite language?", ["CSS", "HTML", "JS", "Python"]),
    new TextQuestion("What is your name?"),
    new RangeQuestion("What is the speed limit in your area?"),
  ];
  
  // Imprimir o quiz
  printQuiz(questions);
  