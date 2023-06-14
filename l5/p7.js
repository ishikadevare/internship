//]}* * * * *
* * * *
* * *
* *
*

const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter no: "));
if (n > 0)
{
	let str = "*\t";
	for(let i = n; i >= 1; i--)
		console.log(str.repeat(i));
}
else
{
	console.log(" Invalid input");	
}	