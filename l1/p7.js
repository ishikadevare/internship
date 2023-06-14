const prompt = require("prompt-sync")();

try {
	let s1 = prompt("enter a number: ");
	if (! s1.match(/^[-0-9.]+$/))
		throw "numbers only";
	let n1 = parseFloat(s1);
	let r1 = n1 * n1;
	let m1 = "square = " + r1.toFixed(2);
	console.log(m1);
} catch(err) {
	console.log(err);
}
