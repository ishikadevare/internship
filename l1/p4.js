//program to add two integers

const ps = require("prompt-sync");
const prompt = ps()

let s1 = prompt("Enter first integer: ");
let n1 = parseInt(s1);
let s2 = prompt("Enter second  integer: ");
let n2 = parseInt(s2);
let result = n1 + n2;

console.log("Result = " + result);
console.log("Result = " , result);
console.log(`Result = ${result}`);