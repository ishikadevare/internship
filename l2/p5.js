const prompt = require("prompt-sync")();

let n1 = parseInt(prompt("Enter first integer: "));
let n2 = parseInt(prompt("Enter second integer: "));

//ternery
let r1 = n1 < n2 ? n1 : n2;
console.log("min = " + r1);

//if else
if (n1 < n2)
	console.log("min = " + n1);
else
	console.log("min = " + n2);

//math lib
console.log("min = " + Math.min(n1, n2));