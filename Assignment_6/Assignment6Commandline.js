"use strict";
const args = process.argv;


for (let i = 0; i < args.length; i++) {
    console.log("args " + args[i]);
}


const num1 = parseInt(args[2]);
const num2 = parseInt(args[3]);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please provide two valid numbers as arguments");
} else {
    const result = num1 + num2;
    console.log("result = " + result);
}