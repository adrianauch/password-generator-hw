// Assignment Code
var generateBtn = document.querySelector("#generate");


//VARIABLES BELOW:
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWRXYZ";
var num = "0123456789";
var specialChar =  "~!@#$%^&*()_+=";
var masterString = ""
//master string += 
var password = ""
var length

// Write password to the #password input
function writePassword() {
  //Prompts for char types
  
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

//function that generates password from characters on masterString
function generatePassword() {
  //Grab a random char from the master string one at a time until the length is met
  for (let i = 0; i < length; i++) {
    var random = Math.floor(Math.random()* masterString.length)
   password += masterString.charAt(random) 
  }
  
  document.querySelector("#password").textContent= password
}

function defineLength() {
  var passLength = prompt("Please select the length of your password (min: 8 characters and max: 128 characters).");
  length = passLength
  
}

function defineChar() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Prompt 1: has user select length min 8 char max 128 char
var passLength = prompt("Please select the length of your password (min: 8 characters and max: 128 characters).");
// if passLength < 8 prompt("Password must be longer than 8 character") 
// if else passLenth is > 128 prompt ("Password must be shorter than 128 characters")
// else pass length < 8 && >128 go to the next function

//Prompt 2: User chooses to which type of characters) 
var passChar

