//]} program to read marks of students and find the highest and lowest

const prompt = require("prompt-sync")();
let marks = [];

let read = prompt("do you want to enter marks y/n: ");
while (read == "y")
{
	let m = parseFloat(prompt("Enter marks: "));
	marks.push(m);
	read = prompt("do you want to enter more marks y/n: ");
}

marks.sort();
let lowest = marks[0];
let highest = marks.at(-1);

console.log("Lowest marks are: " + lowest + " " + "Highest marks are: " + highest);

//# using math --> min(), max()

console.log(Math.min(...marks));

console.log(Math.max(...marks));

//...  =>  is spread operator ==> array ko spread karega

