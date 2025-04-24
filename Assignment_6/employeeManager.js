"use strict"

class Employee{
    constructor(name, id, department) {
        this.name = name;
        this.id = id;
        this.department = department;
    }
    printReport() {
        console.log("Employee Report:");
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Department: ${this.department}`);
        
    }
}

const args = process.argv.slice(2);  

if (args.length === 3) {
    
    const [name, id, department] = args;
    const employee = new Employee(name, id, department);
    employee.printReport(); 
} else {
    console.log("Please provide name, ID, and department.");
}
