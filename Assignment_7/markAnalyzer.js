const args = process.argv.slice(2);

const marks = args.map(Number);

if (marks.some(isNaN)) {
    console.log("Enter marks.");
   
}

const total = marks.reduce((sum, mark) => sum + mark, 0);
const average = total / marks.length;

const min = Math.min(...marks);
const max = Math.max(...marks);

console.log("Student Marks Analyzer");
console.log("Average:", average);
console.log("Minimum:", min);
console.log("Maximum:", max);
