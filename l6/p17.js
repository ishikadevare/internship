//]}program to class rectangle
/* var: length and breadth
methods: constructor
info(): return len, breadth
area(): return area
perimeter: return peri */

const prompt = require("prompt-sync")();
class Rectangle 
{
	constructor(length,breadth) {
		this.length = length;
		this.breadth = breadth;
	}
	
	info = () => "Length= " + this.length + " Breadth= " + this.breadth;
	area = () => "Area: " + this.length * this.breadth;
	perimeter = () => "Perimeter: " + 2 * (this.length + this.breadth);
}
let length = parseFloat(prompt("Enter length: "));
let breadth = parseFloat(prompt("Enter breadth: "));
let res = new Rectangle(length, breadth);
console.log(res.info());
console.log(res.area());
console.log(res.perimeter());


