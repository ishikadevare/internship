//]}convert string to array and back

//csv= comma separated values
let s1 = "10,20,30,40,50,60";
console.log(s1);

let a1 = s1.split(",");
console.log(a1);

//ssv= space sep values
let ns1 = a1.join(" ");
console.log(ns1);
