const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
//debagger;
// В константу sum записываем результат суммы: а+в
  sum > 50 ? (bonus = 50) : (bonus = sum);
// debagger; 
// Если результат суммы больше 50, то bonus=50, иначе bonus=sum
  return bonus;
};

// Создаем массив пар значений a и b
const inputValues = [
  [10, 20],
  [30, 40],
  [50, 60],
  [70, 80],
];

// Создаем массив для хранения результатов
const results = [];

// Проходим по массиву inputValues и вызываем calculateBonus для каждой пары
inputValues.forEach((values) => {
  const a = values[0];
  const b = values[1];
  const result = calculateBonus(a, b);
  results.push(result);
});

// Выводим результаты в консоль
console.log("Результаты:", results);