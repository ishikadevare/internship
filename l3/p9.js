//]}do while loop

const prompt = require("prompt-sync")();

let num = parseInt(prompt("enter positive integer: "));
if (num > 0)
{
	let i = 1;
	let sum = 0;
	do
	{
		sum = sum + i;
		i = i + 1;
	}while( i <= num );
	console.log("Sum: " + sum);
}
else
{
console.log("Invalid input");
}