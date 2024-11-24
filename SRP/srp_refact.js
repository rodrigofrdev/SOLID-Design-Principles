// Single Responsibility Principle Explained

class CalorieTracker {
  constructor(maxCalories, logger) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
    this.logger = logger;
  }

  trackCalories(caloriesCount) {
    this.currentCalories += caloriesCount;
    if (this.currentCalories > this.maxCalories) {
      this.logger.log('Max calories exceeded');
    }
  }
}

class Logger{
  log(message) {
    console.log(message);
  }
}

const logger = new Logger();
const calorieTracker = new CalorieTracker(2000, logger);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);

// ##################################################

function generateReport(data) {
  return `Relatório gerado com dados: ${JSON.stringify(data)}`;
}

function sendReportByEmail(report) {
  console.log(`Enviando o relatório: ${report} para o email do usuário.`);
}

// Função principal que usa as funções separadas
function generateAndSendReport(data) {
  const report = generateReport(data);
  sendReportByEmail(report);
}