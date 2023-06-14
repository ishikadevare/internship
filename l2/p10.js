const prompt = require("prompt-sync")();
let str = prompt("enter number: ");
try
{
	if ( ! str.match(/^[-0-9]+$/))
		throw "integers only";
	let num = parseInt(str);
	switch(num % 2)
	{
		case 0 :
		console.log("even");
		break;
		case 1 :
		console.log("odd");
		break;
		case -1 :
		console.log("odd");
		break;
	}
}
catch(err)
{
console.log(err);
}