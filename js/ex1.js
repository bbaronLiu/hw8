/* Hw7
 Question 1 JavaScript code
*/
// Character list. Each house has a name and a code
const houses = [{
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

var select = document.getElementById("house");

for (var i = 0; i < houses.length; i++) {
  var opt = houses[i];
  var el = document.createElement("option");
  el.textContent = opt.name;
  el.value = opt.code;
  select.appendChild(el);
}

function myFunction() {
  var x = document.getElementById("house").value;
  y = getCharacters(x)
  var str = '<ul>'
  y.forEach(function(s) {
    str += '<li>' + s + '</li>';
  });

  str += '</ul>';
  document.getElementById("characters").innerHTML = str;

}
