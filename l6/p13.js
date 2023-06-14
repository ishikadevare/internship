//]}read an integer
//normal method

const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter an integer: "));
let res = num % 2 == 0 ? "even" : "odd";
console.log("Result: " + res);