//]}waoojsp to perform addition of two nos

const prompt = require("prompt-sync")();
class Addition
{
	constructor(n1, n2) {	
		this.n1 = n1;
		this.n2 = n2;
	}
	
	info = () => "n1 = " + this.n1 + " n2 = " + this.n2;
	add = () => this.n1 + this.n2;
}

let n1 = parseFloat(prompt("Enter first no: "));
let n2 = parseFloat(prompt("Enter second no: "));

let a = new Addition(n1, n2);
console.log(a.info())
console.log(a.add())