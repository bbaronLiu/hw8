/* Tutorial 4
Example 2 JavaScript code
*/
console.log("Baron's Output from Tutorial 4 Example 2");

var ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var oddnumbers = ten.filter(function (i) {
    return i % 2
});

console.log(oddnumbers)

var divtwoOrFive = ten.filter(function(i) {
    return (i % 2 === 0 || i % 5 === 0) 
});

console.log(divtwoOrFive);

var div3 = ten.filter(function(i) {
    return (i % 3 === 0)
});

var divs3quared = div3.map(function (i) {
    return Math.pow(x, 2);
});

console.log(divs3quared)

var divby5 = ten.filter(function (i) {
    return  (i % 5 === 0);
});

var squared5 = divby5.map(function(i) {
    return Math.pow(i, 2);
});

var sumall = divby5.reduce((total, amount) => total + amount);

console.log(sumall)