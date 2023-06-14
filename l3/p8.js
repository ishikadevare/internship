//]} while loop

const prompt = require("prompt-sync")();

let num = parseInt(prompt("enter positive integer: "));
if (num > 0)
{
	let i = 1, sum = 0;
	while ( i <= num)
	{
		sum += i;
		i  += 1;
	}
	console.log("Sum: " + sum);
}
else
{
console.log("Invalid input");
}