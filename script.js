// Assignment Code
let generateBtn = document.querySelector("#generate");
let numCharactersEl = document.getElementById('numCharacters');
let uppercaseCheckbox = document.getElementById('uppercase');
let lowerCaseCheckbox = document.getElementById('lowercase');
let specialCheckbox = document.getElementById('special');
let numericCheckbox = document.getElementById('numeric');

let includeLowercase = true;
let includeUppercase = true;
let includeNumeric = true;
let includeSpecial = true;


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //Get the checkbox values to decide what to include in the password
  includeLowercase = lowerCaseCheckbox.checked;
  includeUppercase = uppercaseCheckbox.checked;
  includeNumeric = numericCheckbox.checked;
  includeSpecial = specialCheckbox.checked;

  //At least one has to be checked
  if(!includeLowercase && !includeNumeric && !includeUppercase && !includeSpecial){
    alert("You must select at least one of the following: Lowercase, Uppercase, Numeric, and / or Special")
    return;
  }

  //Get the number of characters
  let numCharacters = numCharactersEl.value;

  //Verify the number of characters is between 8 and 128
  if(numCharacters < 8 || numCharacters > 128) {
    alert("Enter a number between 8 and 128");
    return;
  }

  Math.random().toString(numCharacters).replace(/[^a-z]+/g, '');

  //Should i divide the password out evenly beteween each one?


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
