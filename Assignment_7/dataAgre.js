"use strict"

const numbers = process.argv.slice(2).map(Number);

const sum = numbers.reduce((a, b) => a + b, 0);
const average = sum / numbers.length;
const sorted = [...numbers].sort((a, b) => a - b);
const median = sorted.length % 2 === 0 
               ? (sorted[sorted.length/2 - 1] + sorted[sorted.length/2]) / 2
               : sorted[Math.floor(sorted.length/2)];

console.log(`Numbers: ${numbers.join(', ')} Sum: ${sum} Average: ${average.toFixed(2)} Median: ${median.toFixed(2)}`);
