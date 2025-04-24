"use strict"
const args = process.argv;
for(let i = 0; i < args.length; i++)
{
    console.log("args :" +args[i]);
}
const score= parseFloat(args[2]);

if(isNaN(score) || score < 0 || score < 100){
    console.log("Please provide a valid score between 0 and 100.");
}
 
let grade;
if( score >= 90){
    grade = 'A';

}
else if( score >= 80)
{
    grade = 'B';
}
else if( score >= 70){
    grade = 'C';
}
else if( score >= 50)
{
    grade = 'D';
}
else {
    grade = 'F';
}

console.log(`Score : ${score}`);
console.log(`Grade : ${grade}`)