const prompt = require("prompt-sync")();
let str = prompt("enter number: ");
try
{
	if ( ! str.match(/^[-0-9]+$/))
		throw "integers only";
	let num = parseInt(str);
	let res = num % 2 == 0 ? "even" : "odd";
	console.log("Result= " + res);
}
catch(err)
{
console.log(err);
}
