//]}read an integer and it its even or odd
//oop

const prompt = require("prompt-sync")(); 
class evenOdd
{
	constructor(n) {
		this .n = n;
	}
	
	showNumber() {
		console.log("num= " + n);
	}

	check() {
	return n % 2 == 0 ? "even" : "odd";
	}
}

let n = parseInt(prompt("enter an integer: "));
let e = new evenOdd(n);
e.showNumber();
console.log(e.check());