//]} while loop

const prompt = require("prompt-sync")();

let num = parseInt(prompt("enter positive integer: "));
if (num > 0)
{
	let i = 1;
	let sum = 0;
	while ( i <= num)
	{
		sum = sum + i;
		i = i + 1;
	}
	console.log("Sum: " + sum);
}
else
{
console.log("Invalid input");
}