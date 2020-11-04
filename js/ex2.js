/* HW8
Question 2 JavaScript code
*/
document.querySelector("form").addEventListener("submit", e => {

    e.preventDefault();
    
    const formData = new FormData(e.target);
    //Receiving Validation Failed Error, difficult to proceed but I will finish the conceptualization of creating the table and image
    fetch("https://api.github.com/search/users/bpesquet", {
      method: "POST",
      body: formData
    })
    
      .then(response => response.text())
      .then(result => {
        document.getElementById("result").textContent = result;
        console.log(response);
        console.log(result);
        //trying to see what I'm working with, but I can't
        
      })
      
      .catch(err => {
        console.error(err.message);
      });

  });