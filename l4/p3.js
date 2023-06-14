//]} program to demo array declaration

let a1 = [];
console.log(a1, typeof a1, Array.isArray(a1));

let a2 = [10, 20, 30, 40];
console.log(a2, typeof a2, Array.isArray(a2));

let a3 = (10, 20, 30, 40);
console.log(a3, typeof a3, Array.isArray(a3));

let a4 = new Array(10, 30, 20);
console.log(a4, typeof a4);
console.log(Array.isArray(a4), a4.length);

let a5 = new Array(5);
console.log(a5, typeof a5);
console.log(Array.isArray(a5), a5.length);
