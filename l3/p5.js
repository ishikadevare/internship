//]} program to read rating between 1 to 5 and print msg
//5/4- excellent   3/2- good    1- ok
//if else -p5
//switch case- p6

const ps = require("prompt-sync");
const prompt = ps();

let rating = parseInt(prompt("Enter rating: "));
if ( (rating < 1 ) || (rating > 5) )
	console.log("Invalid rating ");
else if ((rating === 5) || (rating === 4))
	console.log("Excellent ");
else if ((rating === 3) || (rating === 2))
	console.log("Good ");
else
	console.log(" Ok ");