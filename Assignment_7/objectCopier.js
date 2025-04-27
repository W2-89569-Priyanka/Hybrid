"use strict"
const [,, name,age,location]= process.argv;

const user = { name, age: Number(age), location };

const modifiedUser = { ...user, age: user.age + 5, role: "Developer"};

console.log("Original User:", user);
console.log("Modified User:", modifiedUser);