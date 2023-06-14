//]}write a function to accept as input a string and alphabetize the string
//p12- arrow fun

const prompt = require("prompt-sync")();


let string = (n1) => n1.split("").sort().join("");
//{
//	return n1.split("").sort().join("");
//}

let n1 = prompt("Enter string: ");
let nstr = string(n1);



console.log("string= " + n1);

console.log("new string= " + nstr);