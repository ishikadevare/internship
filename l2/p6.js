//read 3 nos and print max no
const prompt = require("prompt-sync")();

let n1 = parseFloat(prompt("Enter first integer: "));
let n2 = parseFloat(prompt("Enter second integer: "));
let n3 = parseFloat(prompt("Enter third integer: "));

//method 1
if ( (n1 >= n2) && (n1 >= n3) )
	console.log("Max =  " + n1);
else if ( (n2 >= n1) && (n2 >= n1) )
	console.log("Max = " + n2);
else
	console.log("Max = " +n3);

//method 2

console.log("Max = " + Math.max(n1, n2, n3));