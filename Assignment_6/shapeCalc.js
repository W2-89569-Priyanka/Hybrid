"use strict"
class Shape {
    constructor() {
        this.area = 0;
        this.perimeter = 0;
    }
    calculateArea() {}
    calculatePerimeter() {}
}
class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        this.area = this.length * this.width;
    }

    calculatePerimeter() {
        this.perimeter = 2 * (this.length + this.width);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        this.area = Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter() {
        this.perimeter = 2 * Math.PI * this.radius;
    }
}
class Triangle extends Shape {
    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    calculateArea() {
        const s = (this.a + this.b + this.c) / 2;
        this.area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
    calculatePerimeter() {
        this.perimeter = this.a + this.b + this.c;
    }
}

const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide a shape name: rectangle, circle, or triangle.");
    
}

const shapeType = args[0];
let shape;
switch (shapeType) {
    case "rectangle":
        if (args.length !== 3) {
            console.log("Please provide length and width for the rectangle.");
        }
        const rectLength = parseFloat(args[1]);
        const rectWidth = parseFloat(args[2]);
        shape = new Rectangle(rectLength, rectWidth);
        break;
    case "circle":
        if (args.length !== 2) {
            console.log("Please provide the radius for the circle.");
            process.exit(1);
        }
        const radius = parseFloat(args[1]);
        shape = new Circle(radius);
        break;
    case "triangle":
        if (args.length !== 4) {
            console.log("Please provide three sides for the triangle.");
            process.exit(1);
        }
        const sideA = parseFloat(args[1]);
        const sideB = parseFloat(args[2]);
        const sideC = parseFloat(args[3]);
        shape = new Triangle(sideA, sideB, sideC);
        break;
    default:
        console.log("Unknown shape. Please use rectangle, circle, or triangle.");
        process.exit(1);
}

shape.calculateArea();
shape.calculatePerimeter();

console.log(`Area: ${shape.area}`);
console.log(`Perimeter: ${shape.perimeter}`);
