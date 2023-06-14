//]} modify the foll to produce gm/ga/ge -> date object

const ps = require("prompt-sync");
const prompt = ps();

try
{
	let name = prompt("enter your name: ");
	if ( ! name.match(/^[A-z ]+$/))
		throw "invalid name";
	let d = new Date();
	let hr = d.getHours();
	let msg = " ";
	if (hr < 12)
		msg = "Good Morning ";
	else if (hr < 16)
		msg = "Good Afternoon ";
	else
		msg = "Good Evening ";
	console.log(msg + name);
	console.log("this is lecture 3");
	console.log("operators and control statements");
}
catch(err)
{
	console.log(err);
}