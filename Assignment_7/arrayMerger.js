"use strict"
const [,, list1, list2] = process.argv;

const parseList = str => str.split(' ').map(item => item.trim());
const array1 = parseList(list1);
const array2 = parseList(list2);
const merged = [...array1, ...array2];

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Merged:", merged);
