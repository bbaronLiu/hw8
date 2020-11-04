/* Hw8
 Question 1 JavaScript code
*/

var paint = [{
  "name": "The Starry Night",
  "year": "1889",
  "artist": "Vincent Van Gogh"
},
{
  "name": "The Scream",
  "year": "1893",
  "artist": "Edvard Munch"
},
{
  "name": "Guernica",
  "year": "1937",
  "artist": "Pablo Picasso"
}
];

function addPainting(nl, data) { 
data.forEach((d, i) => {
var tr = nl.insertRow(i);
Object.keys(d).forEach((k, j) => { 
var cell = tr.insertCell(j);
cell.innerHTML = d[k];  
});
nl.appendChild(tr);
})
}

var painting = document.querySelector("#painting tbody");

try {
  addPainting(painting, paint);
}
catch(err) {
  console.log("Problem with code");
}
