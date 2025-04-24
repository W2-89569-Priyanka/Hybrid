"use strict"
const args = process.argv;
for(let i = 0; i < args.length; i++){
    console.log("args :" +args);
}

const meter = parseFloat(args[2]);

if(isNaN(meter))
{
    console.log("Please provide argument for conversion");
}
 const feetPerMeter = 3.28084;
 const inchesPerFoot=12


const feet = meter * feetPerMeter;

const inches = (feet - Math.floor(feet)) * inchesPerFoot;

console.log(`${meter} meters is equal to:`);
console.log(`${feet.toFixed(2)} feet`);
console.log(`${Math.floor(feet)} feet and ${inches.toFixed(2)} inches`);