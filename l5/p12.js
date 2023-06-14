//]}read a word and alphatize a word

//mahek- aehkm
//amit- aimt

const prompt = require("prompt-sync")();
let name = prompt("Enter name: ");

let alpha = name.split("").sort().join("");
console.log(name);
console.log(alpha);