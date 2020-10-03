// Assignment Code
let generateBtn = document.querySelector("#generate");
let numCharactersEl = document.getElementById('numCharacters');
let uppercaseCheckbox = document.getElementById('uppercase');
let lowerCaseCheckbox = document.getElementById('lowercase');
let specialCheckbox = document.getElementById('special');
let passwordParagraph = document.getElementById('password')
let numericCheckbox = document.getElementById('numeric');

let includeLowercase = true;
let includeUppercase = true;
let includeNumeric = true;
let includeSpecial = true;

let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.textContent = password;

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

  //create an array of the valid character sets
  let validCharacterSets = [];
  if(includeLowercase)
    validCharacterSets.push(lowercase);
  if(includeUppercase)
    validCharacterSets.push(uppercase);
  if(includeNumeric)
    validCharacterSets.push(numbers);
  if(includeSpecial)
    validCharacterSets.push(specialCharacters);

  //Get the number of characters
  let numCharacters = numCharactersEl.value;

  //Verify the number of characters is between 8 and 128
  if(numCharacters < 8 || numCharacters > 128) {
    alert("Enter a number between 8 and 128");
    return;
  }

  let password = "";
  //Do a for loop that runs from i=0 to i=number of characters - 1;
  //each time create a random character from a random set of the included characters 
  for(let i = 0; i < numCharacters - 1; i++)
  {
    let characterSet = validCharacterSets[Math.floor(Math.random() * validCharacterSets.length)];
    let character = characterSet[Math.floor(Math.random() * characterSet.length)];
    password += character;
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
