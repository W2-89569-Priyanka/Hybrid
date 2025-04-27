"use strict"
const expenses = process.argv.slice(2);

const validExpenses = expenses
  .map(item => parseFloat(item))
  .filter(num => !isNaN(num));

const total = validExpenses.reduce((sum, num) => sum + num, 0);
const average = total / validExpenses.length;

console.log(`Expense Analysis: Total: $${total} Average: $${average} Valid Entries: ${validExpenses.length}`);

