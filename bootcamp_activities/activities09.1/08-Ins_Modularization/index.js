var badmath = require("./badmath.js");

var num1 = process.argv[2];
var num2 = process.argv[3];
console.log(badmath.pie);

badmath.sum(num1, num2);

console.log(badmath.predictable());
