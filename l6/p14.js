//]}read an integer and it its even or odd
//funxtion

const prompt = require("prompt-sync")();

function showNumber(n)
{	
	console.log("num: " + n);
}

function check(n)
{
	return n % 2 == 0 ? "even" : "odd";
}

let n = parseInt(prompt("Enter an integer: "));
showNumber(n);
console.log(check(n));
