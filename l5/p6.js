//]}

const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter no: "));
if (n > 0)
{
	let str = "$\t";
	for(let i = 0; i <= n; i++)
		console.log(str.repeat(i));
}
else
{
	console.log(" Invalid input");	
}	