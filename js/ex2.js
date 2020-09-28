/* Tutorial 4
Example 2 JavaScript code
*/
console.log("Baron's Output from Tutorial 4 Example 2");

const r = Number(prompt("Enter the circle radius:"));

var circle = {};
circle.radius = r;
circle.circumference = function {
    return Math.PI * 2 * this.radius;
}
circle.area = function {
    return Math.PI * this.radius * this.radius;
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
