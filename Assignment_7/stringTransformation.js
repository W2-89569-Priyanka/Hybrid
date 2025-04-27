"use srict"
const names = process.argv.slice(2);
const transformations = [
    { name: "Uppercase", transform: str => str.toUpperCase() },
    { name: "Lowercase", transform: str => str.toLowerCase() },
    { name: "Reverse",   transform: str => [...str].reverse() },
   
];

console.log(`Original: ${names}`);

transformations.forEach(({name, transform}) => {
    const result = names.map(transform);
    console.log(`${name}: ${result}`);
});
