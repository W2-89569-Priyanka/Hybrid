"use strict"
const arg = process.argv;
function greet() {
    const timeOfDay = "Morning!";

    function greetingGen(name) {
        return "Good " + timeOfDay + " " + name;
    }

    const name = process.argv[2] || "Stranger";
    

    return greetingGen(name);
}

const gre = greet();  
console.log(gre);  

