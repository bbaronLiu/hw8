/* HW8
Question 3 JavaScript code
*/
const traveler = [
    {
        name: "Baron",
        countries: {"USA" : 2020, "Japan" : 2019, "Taiwan": 2019
    }

    }
]

fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(traveler)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });