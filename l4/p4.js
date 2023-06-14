//]}program to display Array

let data = [10, 20, 30, 40];
console.log("Method 1");
console.log(data);

console.log("Method 2");
for(let i=0; i < data.length; i++)
	console.log(data[i]);


console.log("Method 3");	//index
for(let i in data)
	console.log(data[i]);

console.log("Method 2");	//element
for(let e of data)
	console.log(e);
