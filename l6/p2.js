//]} regular function

const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter value of n: "));
let r = parseInt(prompt("Enter value of r: "));

function fact(num)
{
	let f =1;
	for(let i = 1; i<= num; i++)
		f = f * i;
	return f;
}

let res= fact(n) / ( fact(n - r) * fact(r));
console.log("Result: "+ res);
