//]}program to find sum of two numbers
//function expression / anonymous function

const prompt = require("prompt-sync")();


let sum = function(n1, n2)
{
	return n1 + n2;
}
let n1 = parseInt(prompt("Enter first no: "));
let n2 = parseInt(prompt("Enter second no: "));
let add = sum(n1, n2);
console.log("Addition= " + add);