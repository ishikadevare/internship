//]} for loop program to find factorial of given number
//5! = 1*2*3*4*5 = 120

const prompt = require("prompt-sync")();

let num = BigInt(parseInt(prompt("enter positive integer: ")));
if (num >= 0)
{
	let fact = BigInt(1);
	for (let i=BigInt(1); i<= num; i++)
	fact = fact * i;
	console.log("Fact: " + fact);
}
else
{
console.log("Invalid input");
}