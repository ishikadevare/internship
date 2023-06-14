const ps = require("prompt-sync");
const prompt = ps();
 
try {
	let s1 = prompt("enter first integer: ");
	if ( ! s1.match(/^[-0-9]+$/))
		throw "integers only";
	let n1 = parseInt(s1);

	let s2 = prompt("enter second integer: ");
	if ( ! s2.match(/^[-0-9]+$/))
		throw "integers only";
	let n2 = parseInt(s2);

	let result = n1 + n2;

	console.log("Result = " + result);
	console.log("Result = " , result);
	console.log(`Result = ${result}`);
}
catch(err) {
	console.log(err);
}

