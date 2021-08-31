const functions = require('./modules');

let result1;
let result2;

result1 = functions.addNumbers(500,300);
result2 = functions.subtract(600,500);

console.log("Addition is " +result1);
console.log("Subtraction is " +result2);