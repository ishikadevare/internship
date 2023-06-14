//]} welcome user and validing on name

const ps = require("prompt-sync");
const prompt = ps();

try
{
	let name = prompt("enter your name: ");
	if ( ! name.match(/^[A-z ]+$/))
		throw "invalid name";
	console.log("welcome " + name);
	console.log("this is lecture 3");
	console.log("operators and control statements");
}
catch(err)
{
	console.log(err);
}