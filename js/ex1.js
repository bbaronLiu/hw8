/* Tutorial 4
 Example 1 JavaScript code
*/
console.log("Baron's Output from Tutorial 4 Example 1");

class Square {
    constructor(side) {
        this.area = Math.pow(side, 2);
        this.perimeter = side * 4;
        this.diagonal = Math.sqrt(2) * Math.pow(side, 2)
        this.describe = console.log ("Square with side " + side + " has perimeter of " + this.perimeter + ", area of " + this.area + ", and diagonal of " + this.diagonal)

    }
}

let sq1 = new Square(4);
let sq2 = new Square(3);
let sq3 = new Square(2);

console.log(sq1.describe);
console.log(sq2.describe)
console.log(sq3.describe)