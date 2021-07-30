// Assignment Code
var generateBtn = document.querySelector("#generate");


//VARIABLES BELOW:
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWRXYZ";
var num = "0123456789";
var specialChar =  "~!@#$%^&*()_+=";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Prompt 1: has user select length min 8 char max 128 char
var passLength = prompt("Please select the length of your password (min: 8 characters and max: 128 characters).");

//Prompt 2: User chooses to which type of characters
var passChar

// for loop