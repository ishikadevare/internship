//]}program to find sum of two numbers
//arrow function more shortcut

const prompt = require("prompt-sync")();

let sum = (n1, n2) => n1 + n2;

let n1 = parseInt(prompt("Enter first no: "));
let n2 = parseInt(prompt("Enter second no: "));
let add = sum(n1, n2);
console.log("Addition= " + add);