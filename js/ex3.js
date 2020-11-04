/* HW7
Question 4 JavaScript code
*/
document.querySelector("form").addEventListener("submit", e => {

    e.preventDefault();
    
    const formData = new FormData(e.target);

    console.log(formData);
    // this part is difficult, created the html but don't know how to view what I'm working with to create the tables 


});