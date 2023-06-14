//]}calculate combinations  ncr = n! / (n-r)! r!

const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter value of n: "));
let r = parseInt(prompt("Enter value of r: "));

let r1 = 1;
for(let i = 1; i<=n; i++)
	r1 = r1 * i;


let r2 = 1;
for(let i = 1; i<=(n-r); i++)
	r1 = r1 * i;

let r3 = 1;
for(let i = 1; i<=r; i++)
	r1 = r1 * i;

let res = r1 / (r2 * r3);
console.log("result: " + res);