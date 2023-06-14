//]}....ellipses

const prompt = require("prompt-sync")();
let str = prompt("Enter string: ");
let n = prompt("Enter n: ");

if (n > 0)
{
	if (str.length > n)
		str = str.substring(0, n-3) + "...";
	console.log(str)
}
else
{
	console.log("Invalid");
}