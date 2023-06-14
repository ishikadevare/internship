//]}program to demo array methods

let data = [10, 20, 30, 40];
console.log("Array is: " + data);

//Add element --> push() --> at last position
data.push(50);
console.log("Added 50 to the array: " + data);

//Add element --> unshift() --> at first position
data.unshift(50);
console.log("Added 50 to the beg of the array: " + data);

//Remove element --> pop() --> from last position
data.pop(50);
console.log("Removed 50 from the array: " + data);

//Remove element --> shift() --> from first position
data.shift(50);
console.log("Removed 50 from the beg of the array: " + data);

//splice(index, element to be removed, element 1, element 2 ....)
let arr = [1,2,3,4,5,6,7,8,9];
console.log("Array is: " + arr);
arr.splice(9,0,10);
console.log(arr);

//printing as per index no.s
let array = ["Ishika", "Garvit", "Mau"];
console.log(array);
console.log("Element on 0th position is: " + array[0]);
console.log("Element on 1th position is: " + array[1]);
console.log("Element on -1th position is: " + array[-1]);
console.log("Element on -1th position is: " + array.at(-1)); //at -1 shows array ka last element -1 pe
console.log("Element on -2th position is: " + array.at(-2)); //at -2 shows array ka last element -1 pe
console.log("Element on -7th position is: " + array.at(-7)); //at -1 shows array ka last element -1 pe

let dataa = [10, 20, 30, 40, 50, 60, 70, 20, 90];
console.log("Array is: " + dataa);
console.log("Index of 20 is: " + dataa.indexOf(20));
console.log("Index of 60 is: " + dataa.indexOf(60));
console.log("Index of 80 is: " + dataa.indexOf(90));
console.log("Last Index of 20 is: " + dataa.lastIndexOf(20)); //matlab abhi array mai two 20 hai toh wo last wale ka index no batayega

let dataaa = [40, 20, 10, 40]
console.log("Array is: " + dataaa);
dataaa.reverse()
console.log("Reverse array is: " + dataaa);
dataaa.sort()
console.log("Sorted array is: " + dataaa);