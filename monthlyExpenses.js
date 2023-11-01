// Создаем массива с данными о расходах за год для каждого примера.
let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

// Перебираем каждый пример в массиве.
expencesExamples.forEach((example, index) => {
  // Извлекаем массив годовых расходов из текущего примера.
  const { yearlyExpences } = example;

  // Создаем массив для хранения названий месяцев с низкими расходами.
  const monthsWithLowExpenses = [];

  // Перебираем расходы за каждый месяц.
  yearlyExpences.forEach((expense, month) => {
    // Проверяем, меньше ли или равно значение 1000.
    if (expense <= 1000) {
      // Если расходы меньше или равны 1000, то получаем название месяца.
      const monthName = new Date(2023, month, 1).toLocaleString("default", {
        month: "long",
      });

      // Добавляем название месяца к массиву monthsWithLowExpenses.
      monthsWithLowExpenses.push(monthName);
    }
  });

  // Выводим результат для текущего примера.
  console.log(`For example ${index + 1}, months with expenses <= 1000: 
    ${monthsWithLowExpenses.join(", ")}`);
});
