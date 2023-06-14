//]}program to read string from user and print on screen

const prompt = require("prompt-sync")();

let str = prompt("Enter string: ");
console.log(str);

for(let i = 0; i <str.length; i++)
	process.stdout.write(str[i]);
console.log();

for(let i = 0; i<str.length; i++)
	process.stdout.write(str.charAt(i));
console.log();

for(let i in str)
	process.stdout.write(str[i]);
console.log();

for(let a of str)
	process.stdout.write(a);
	







