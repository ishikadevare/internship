const ps = require("prompt-sync");
const prompt = ps();

let s1 = prompt("enter first integer: ");
let n1 = parseInt(s1);
let s2 = prompt("enter second integer: ");
let n2 = parseInt(s2);

let result = n1 + n2;

console.log("Result = " + result);
console.log("Result = " , result);
console.log(`Result = ${result}`);