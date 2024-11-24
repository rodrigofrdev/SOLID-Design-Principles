// Single Responsibility Principle Explained

// Analogias:
// Imagine que você tem um robô que faz café e também lava pratos. Se você quiser melhorar o recurso de lavar pratos, precisará mexer no mesmo robô que faz café, correndo o risco de estragar essa funcionalidade. Não seria melhor ter um robô para fazer café e outro para lavar pratos?

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(caloriesCount) {
    this.currentCalories += caloriesCount;
    if (this.currentCalories > this.maxCalories) {
      this.logCalorieSurplus();
    }
  }

  logCalorieSurplus() {
    console.log('Max calories exceeded');
  }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);

// A classe CalorieTracker viola o Single Responsibility Principle (SRP) porque ela está assumindo duas responsabilidades distintas:

// Rastreamento de calorias: A lógica de rastrear e calcular o consumo de calorias (trackCalories e as variáveis currentCalories e maxCalories).
// Registro de eventos (logging): A lógica de registrar quando o consumo de calorias ultrapassa o limite (logCalorieSurplus).

// Por que isso é um problema?
// Quando uma classe tem mais de uma responsabilidade, ela se torna difícil de manter e escalar:

// Se a forma de registrar eventos (logging) mudar — por exemplo, se você quiser armazenar logs em um arquivo ou enviar notificações via e-mail — será necessário modificar a classe CalorieTracker.
// Isso cria um acoplamento desnecessário entre duas preocupações distintas: rastrear calorias e registrar eventos.

// ##################################################

function generateAndSendReport(data) {
  // Gerar relatório
  const report = `Relatório gerado com dados: ${JSON.stringify(data)}`;

  // Enviar relatório por email
  console.log(`Enviando o relatório: ${report} para o email do usuário.`);
}

// Se a lógica de geração do relatório mudar, você terá que alterar essa função.
// Se a forma de envio de e-mails mudar, a função também precisará ser alterada.
// Testar ou reutilizar uma parte (gerar ou enviar) é difícil porque tudo está misturado.
