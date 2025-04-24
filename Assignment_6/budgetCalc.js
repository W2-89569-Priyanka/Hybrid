"use strict"

let balance = 0;

for (let i = 2; i < process.argv.length; i++) {
  balance += Number(process.argv[i]);
}

console.log(`Balance: ${balance}`);

if (balance > 0) {
  console.log("Surplus");
} else if (balance < 0) {
  console.log("Deficit");
} else {
  console.log("Balanced");
}
