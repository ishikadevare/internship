//]}program to find average of "n" students
//Array is collection of elements
//Array size is not fixed (dynamic)

const prompt = require("prompt-sync")();

//array declaration
let marks = [];

//reading array elements
let read = prompt("do you want to enter marks y/n: ");
while(read == "y")
{
	let m = parseFloat(prompt("Enter marks: "));
	marks.push(m);
	read = prompt("do you want to enter marks y/n: ");
}
 
//processing array elements
let sum = 0.0;
for(let i=0; i < marks.length; i++)
	sum = sum + marks[i];

let avg = sum / marks.length;

console.log("Average= " + avg.toFixed(2));