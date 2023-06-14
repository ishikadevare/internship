//]}write a function to accept as input a string and alphabetize the string
//p11- anonymous

const prompt = require("prompt-sync")();


let string = function(n1)
{
	return n1.split("").sort().join("");
}

let n1 = prompt("Enter string: ");
let nstr = string(n1);



console.log("string= " + n1);

console.log("new string= " + nstr);