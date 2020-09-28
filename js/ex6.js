/* Tutorial 4
Example 2 JavaScript code
*/
console.log("Baron's Output from Tutorial 4 Example 6");

function guesser() {
    var x = Math.floor(Math.random() * 100) + 1
    var y = prompt("Enter a number: ");
    var z = 0;
    var counter = 0;
    while (z == 0) {
        if (y < x) {
            console.log("Too low, guess again");
            counter = counter + 1;
        } else if (y > x) {
            console.log("Too high, guess again")
            counter = counter + 1;
        } else {
            console.log("Correct! It took you " + counter + " attempts to guess the correct number");
            z = 1;
        }
        }
    }
}

guesser()
