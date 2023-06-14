//]}program to find average of 3 students

const prompt = require("prompt-sync")();

let marks1 = parseFloat(prompt("Enter marks of student1: "));
let marks2 = parseFloat(prompt("Enter marks of student2: "));
let marks3 = parseFloat(prompt("Enter marks of student3: "));

let sum = marks1 + marks2 + marks3;
let avg = sum / 3;

console.log("Average= " + avg.toFixed(2));