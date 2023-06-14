//]}read a word and check if its palindrome
//ex- nitin, madam, lol, mam, wow

const prompt = require("prompt-sync")();
let str = prompt("Enter string: ");

let rstr = str.split("").reverse().join("");

if (str == rstr)
	console.log("String is palindrome");
else
	console.log("not a palindrime");