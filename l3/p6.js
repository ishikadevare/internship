//]} program to read rating between 1 to 5 and print msg
//5/4- excellent   3/2- good    1- ok
//if else -p5
//switch case- p6

const ps = require("prompt-sync");
const prompt = ps();

let rating = parseInt(prompt("Enter rating: "));

switch(rating)
{
	case 5:
	case 4:
	console.log("Excellent ");
	break;
	case 3:
	case 2:
	console.log("Good ");
	break;
	case 1:
	console.log("Ok ");
	break;
	default:
	console.log("Invalid Rating ");
	break;
}