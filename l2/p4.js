const prompt = require("prompt-sync")();
let radius = parseInt(prompt("enter radius= "));
if (radius > 0.0)
{
	
	let area = Math.PI + Math.pow(radius,2);
	let circum = 2 * Math.PI * radius;
	area = area.toFixed(2);
	circum = circum.toFixed(2);
	console.log("Area = " + area + " Circum = " + circum);
	console.log("Area = " , area , " Circum = " , circum);
	console.log(`Area = ${area} circum = ${circum}`);
}
else
{
	console.log("Invalid radius");
}