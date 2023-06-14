//]}program to read username and password
//if username is kamal and pass is classes
//then o/p success else failure

const prompt = require("prompt-sync")();

let username = prompt("Enter name: ");
let password = prompt("Enter password: ", {echo: "*"});
//let password = prompt.hide("Enter password: ");

if ( (username == "kamal" && password == "classes") )
	console.log("Success");
else
	console.log("Failure");
