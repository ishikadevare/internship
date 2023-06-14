// ]} program to maintain team names

const prompt = require("prompt-sync")();
let team_names = [];

while (true)
{
let option = prompt("1 new, 2 View, 3 Remove, 4 Exit ");
if (option == 1)
{	
	let name = prompt("Enter team name: ");
	if (team_names.indexOf(name) == -1)
	{
		team_names.push(name);
		console.log(name + " Added");
	}
	else
	{
		console.log(name + " Already present");
	}
}
else if (option == 2)
{
	console.log(team_names);
}
else if (option == 3)
{
	let name = prompt("Enter team name: ");
	if (team_names.indexOf(name) == -1)
	{
		console.log(name + " not present");
	}
	else
	{
		team_names.splice(team_names.indexOf(name), 1);
		console.log(name + " removed ");
	}
}
else if (option == 4)
{
	break;
}
else
{
console.log("Invalid");
}
}