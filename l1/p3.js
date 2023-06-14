const ps = require("prompt-sync");
const prompt = ps()
let name = prompt("enter your name: ");
console.log("Welcome " + name);
console.log("Welcome " , name);
console.log(`Welcome ${name}`);