
//program to read marks between 0 and 100 and print the grade
// m>80-grade A, m>60-grade B, m > 40-grade C else grade D

const prompt = require("prompt-sync")();

let marks = parseInt(prompt("Enter marks: "));

//method 1
if ( (marks < 0) || (marks > 100) )
	console.log("Invalid marks ");
else if (marks > 80) 
	console.log("Grade A " );
else if (marks > 60)
	console.log("Grade B" );
else if (marks > 40)
	console.log("Grade C" );
else
	console.log("Grade D" );


