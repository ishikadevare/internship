//]} for loop

const prompt = require("prompt-sync")();

let num = parseInt(prompt("enter positive integer: "));
if (num > 0)
{
	let i = 1;
	let sum = 0;
	for (let i=1; i<= num; i++)
	sum = sum + i;
	console.log("Sum: " + sum);
}
else
{
console.log("Invalid input");
}