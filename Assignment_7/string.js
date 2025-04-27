const s11 = "Sunbeam";
const s22 = 'DMC';
const s33 = `${s11}, ${s22}!!`;
console.log(s11);
console.log(s22);
console.log(s33);

const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length); // 26

const s1 = "Nilesh";
console.log("s1 = " + s1 + " of type " + typeof s1); // string
const s2 = String(123);
console.log("s2 = " + s2 + " of type " + typeof s2); // string
const s3 = new String("Sunbeam");
console.log("s3 = " + s3 + " of type " + typeof s3); // object

const s4 = "Nilesh";
console.log("s1 == s4 : ", s1 == s4); // true - two strings are equal
const s5 = new String("Sunbeam");
console.log("s3 == s5 : ", s3 == s5); // false - two objects are never equal (addr comparison)

let text1 = "SunBeam";
let text2 = text1.toUpperCase();
let text3 = text1.toLowerCase();
const str = "sunbeam";
console.log("str[2] = " + str[2]); // n
console.log("str[-2] = " + str[-2]); // undefined
console.log("str.charAt(1) = " + str.charAt(1)); // u
console.log("str.charAt(-1) = " + str.charAt(-1)); // (blank "")
console.log("str.at(1) = " + str.at(1)); // u
console.log("str.at(-1) = " + str.at(-1)); // undefined

let text11 = "0123456789";
let part1 = text.slice(2, 8); // 234567
let text22 = "0123456789";
let part2 = text.slice(2); // 23456789
let text33 = "0123456789";
let part3 = text.slice(-2); // 89
let text4 = "0123456789";
let part4 = text.slice(-8, -2); // 234567

let text5 = "0123456789";
let part5 = text.slice(-2); // 0123456789

let text6 = "Hello".concat("SunBeam", "DMC!");
console.log(text);

let text7 = " Hello ";
console.log(`text = |${text}|, length = ${text.length}`);
let result1 = text.trim();
console.log(`trim() = |${result1}|, length = ${result1.length}`);
let result2 = text.trimStart();
console.log(`trimStart() = |${result2}|, length = ${result2.length}`);
let result3 = text.trim();
console.log(`trimEnd() = |${result3}|, length = ${result3.length}`);

let text8 = "A";
let padded1 = text.padStart(4,"0"); // 000A
console.log(padded1);
let padded2 = text.padEnd(4,"x"); // Axxx
console.log(padded2);

let text9 = "Hello world!";
let result = text.repeat(4);

let text10 = "Hello DMC! Hello!!!";
let result11 = text.replace("Hello", "Hi"); // Hi DMC! Hello!!!
 // only first occurrance is replaced.
let result22 = text.replaceAll("Hello", "Hi"); // Hi DMC! Hi!!!
// split() splits string into multiple parts.
let text34 = "DAC,DMC,DESD,DBDA,DITISS";
let parts = text.split(","); // ["DAC","DMC","DESD","DBDA","DITISS"]




