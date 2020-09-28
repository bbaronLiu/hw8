/* Tutorial 4
Example 2 JavaScript code
*/
console.log("Baron's Output from Tutorial 4 Example 4");

var x = "stop"
var z = []
var counter = 0


function words() {
while (x != "stop") {
    var y = prompt("enter a word: ")
    if (y.toLowerCase() == "stop") {
        if (counter == 0) {
            console.log("No words to display, Stop was the first word entered");
        } else {
            console.log("You entered the following words:")
            for (var i in z) {
                console.log(i);
            }
        }
    } else {
        z.push(y);
        counter = counter + 1;
    }
}
}

words()