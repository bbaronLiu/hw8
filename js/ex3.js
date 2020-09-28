/* Tutorial 4
Example 2 JavaScript code
*/
console.log("Baron's Output from Tutorial 4 Example 3");


const values=[3,11,7,2,9,10];

var sum = values.reduce(function(a, b_) {
    return a + b_;
});

var max = values.reduce(function(a, b) {
    return Math.max(a, b)
});

var min = values.reduce(function(a, b) {
    return Math.min(a, b)
});

console.log("The Sum of the Values is " + sum);
console.log("The Max number in the array is " + max);
console.log("The min value in the array is " + min);

