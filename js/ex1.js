/* Tutorial 4
 Example 1 JavaScript code
*/
console.log("Baron's Output from Tutorial 4 Example 1");

var number1 = prompt("Enter Number1: ")
var number2 = prompt("Enter Number 2: ")
var math = prompt("Enter Mathematical Operation")

function solve(number1, number2, math) {
    if (math == "+") {
        return (number1 += number2);
    } else if (math == "-") {
        return (number1 -= number2);
    } else if (math == "*") {
        return (number1 *= number2);
    } else if (math == "/") {
        return (number1 /= number2);
    }
}

console.log(solve(number1, number2, math))