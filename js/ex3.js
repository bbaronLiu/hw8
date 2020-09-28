/* Tutorial 4
Example 2 JavaScript code
*/
console.log("Baron's Output from Tutorial 4 Example 3");


const values = [3, 11, 7, 2, 9, 10];
var x = values;

function add() {
    var sum = x.reduce(function(a, b ) {
        return a + b ;
    });
    return sum
}

function biggest() {
    var max = x.reduce(function(a, b) {
        return Math.max(a, b)
    });
    return max
}

function smallest() {
    var min = x.reduce(function(a, b) {
        return Math.min(a, b)
    });
    return min
}

console.log("The Sum of the Values is " + add());
console.log("The Max number in the array is " + biggest());
console.log("The min value in the array is " + smallest());

