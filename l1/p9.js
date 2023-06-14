//program to swap numbers

const prompt = require("prompt-sync")();

let n1 = parseInt(prompt("Enter first Integer: "));
let n2 = parseInt(prompt("Enter second Integer: "));
console.log(n1, n2);

let n3 = n1;
n1 = n2;
n2 = n3;

console.log(n1, n2);

//one more method

//console.log(n1, n2);

//[n1, n2] = [n2, n1];

//console.log(n1, n2);