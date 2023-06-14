//]}program 
//i/p- kamal classes thane and borivali
//o/p- kamal-classes-thane-and-borivali

const prompt = require("prompt-sync")();

let str = prompt("Enter string: ");

let arr = str.split(" ");
console.log(arr);

let nstr = arr.join("-");
console.log(nstr);

//let nnstr = str.split(" ").join("-");same code as above