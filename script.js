// Assignment Code
let generateBtn = document.querySelector("#generate");
let numCharactersEl = document.getElementById('numCharacters');
let uppercaseCheckbox = document.getElementById('uppercase');
let lowerCaseCheckbox = document.getElementById('lowercase');
let specialCheckbox = document.getElementById('special');
let passwordParagraph = document.getElementById('password')
let numericCheckbox = document.getElementById('numeric');

//Whether we want to include the character set or not
let includeLowercase = true;
let includeUppercase = true;
let includeNumeric = true;
let includeSpecial = true;

//Character sets
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.textContent = password;
  passwordText.select();
  document.execCommand("copy");
  alert("Password has been copied to clipboard!");
}

function generatePassword() {
  //Get the checkbox values to decide what to include in the password
  setCheckboxValues();

  //At least one has to be checked
  if(!includeLowercase && !includeNumeric && !includeUppercase && !includeSpecial){
    alert("You must select at least one of the following: Lowercase, Uppercase, Numeric, and / or Special")
    return;
  }

  //create an array of the valid character sets
  let validCharacterSets = getValidCharacterSets();

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
    //Get a random character set to get this character from
    let characterSet = validCharacterSets[Math.floor(Math.random() * validCharacterSets.length)];
    //Get a random character from the random character set
    let character = characterSet[Math.floor(Math.random() * characterSet.length)];
    //Add the character to password
    password += character;
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Set the checkbox values, each character type we want to include is eithe true or false
function setCheckboxValues() {
  includeLowercase = lowerCaseCheckbox.checked;
  includeUppercase = uppercaseCheckbox.checked;
  includeNumeric = numericCheckbox.checked;
  includeSpecial = specialCheckbox.checked;
}

/**
 * Using the variable for each character set (set to true or false)
 * return an array with each character set we want to include in our password 
 * */
function getValidCharacterSets() {
  let validCharacterSets = [];
  if(includeLowercase)
    validCharacterSets.push(lowercase);
  if(includeUppercase)
    validCharacterSets.push(uppercase);
  if(includeNumeric)
    validCharacterSets.push(numbers);
  if(includeSpecial)
    validCharacterSets.push(specialCharacters);

  return validCharacterSets;
}