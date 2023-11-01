// Function to calculate the sum of expenses above 1000 in the yearlyExpenses array.
function calculateExpensesSum(yearlyExpenses) {
    // Use the reduce method to calculate the sum.
    return yearlyExpenses.reduce(function (total, expense) {
        if (expense > 1000) {
            return total + expense;
        }
        return total;
    }, 0);
}

// Test function to check the calculation on test data.
function testExpensesCalculation() {
    // Test data objects with yearlyExpenses arrays.
    let expensesExamples = [
        { yearlyExpenses: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
        { yearlyExpenses: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
        { yearlyExpenses: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
    ];

    // Iterate through the test data objects using forEach.
    expensesExamples.forEach(function (example, index) {
        // Calculate the sum of expenses for each example.
        const sum = calculateExpensesSum(example.yearlyExpenses);
        // Output the result of the test.
        console.log(`Test ${index + 1}: Sum of expenses above 1000 is ${sum}`);
    });
}

// Call the test function to check the calculations on test data.
testExpensesCalculation();


