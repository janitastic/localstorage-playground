/* Use this area for pseudo - coding:
  - When a user clicks the “Add Contact” button, their name and email should be stored as an object in localStorage
  - When a user click the “Display Contact” button, their name and email should be pulled from localStorage, and displayed in the .display-area section (NOTE: The HTML structure for this is up to you!)

*BONUS: How could you add and display multiple users instead of just one?
*/

// Query selectors
var addContact = document.querySelector('#register-btn');
var nameField = document.querySelector('#name');
var emailField = document.querySelector('#email');
var displayContact = document.querySelector('#display-btn');
var displayUser = document.querySelector('.display-area');

// Event listeners
addContact.addEventListener("click", addLocalStorage);
displayContact.addEventListener("click", getLocalStorage);

// Function to add to localStorage
function addLocalStorage() {
  //1) declare the object with the key value pairs you're storing
  var user = {
    name: nameField.value,
    email: emailField.value
  }
//2) uncomment the console.log below to view the user object
console.log('user Object', user);
//3) stringify the object (i.e. quoties on all keys & values)
  var userDetails = JSON.stringify(user);
//4) store the object into localStorage, using 2 arguments --> 1 key & 1 value
    //this stores the value of userInputs to the key of userInputs
  localStorage.setItem('userInputs', userDetails);
}


//Function to remove from localStorage
function getLocalStorage() {
//run and if conditional to clear innerHTML if nothing is inputted
  if (localStorage.getItem('userInputs')) {
    displayUser.innerHTML += '';
//1) declare var for retrieved object by getting the key from localStorage
    var retrievedUser = localStorage.getItem('userInputs');
//uncomment the console.log below to view the declared var
  //notice it's still a stringified object
console.log(retrievedUser);
  //2) declare a var to parse the object
    //we need it to be a real object again, not a string
    var parsedUser = JSON.parse(retrievedUser);
//uncomment the console.log below to view the output of our var
console.log(parsedUser);
//call the displayUser variable, which is declared on line 13 from the section class where we want to print this
  //this example below uses innerHTML, so it can be formatted.
    displayUser.innerHTML +=
    `
      <article>
        <p>Username: ${parsedUser.name}<br>
         Email: ${parsedUser.email}</p>
      </article>
    `
  }
}
