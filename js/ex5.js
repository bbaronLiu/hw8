/* Tutorial 4
Example 2 JavaScript code
*/
console.log("Baron's Output from Tutorial 4 Example 5");


function wordchecker() {
    var word = prompt("Enter a word: ");
    var lowerword = word.toLowerCase();
    var x = lowerword.match(/[aeiou]/gi);
    var y = x === null ? 0 : x.length;
    var len = Math.floor(lowerword.length / 2);
    for (var i = 0; i < len; i++) {
        if (word[i] !== lowerword[lowerword.length - i - 1]) {
            return console.log (word + "contains " + y + " vowels and is not a palindrome");
        } else {
            return console.log (word + "contains " + y + " vowels and is a palindrome");
        }
    }
}


wordchecker()