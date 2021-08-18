let generateBtn = document.querySelector("#generate");
console.log(generateBtn);

const lowerChar = "abcdefghijklmnopqrstuvwxyz";
//Array reference
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const specialChar = "#$%&()*+<=>?@";

const num = "0123456789";

let allChar = "";

// Prompt questions and answer section
function generatePassword() {
  let pwdLength = prompt(
    "Between 8 and 128 characters, how long would you like your password to be?"
  );
  console.log(pwdLength);
  if (pwdLength < 8 || pwdLength > 128 || isNaN(parseInt(pwdLength))) {
    alert("Please enter a number between 8 and 128.");
  } else {
    let lowerCase = confirm("Would you like to use lowerCase characters?");
    console.log(lowerCase);
    if (lowerCase == true) {
      allChar += lowerChar;
    }
    let upperCase = confirm("Would you like to use upperCase characters?");
    console.log(upperCase);
    if (upperCase == true) {
      allChar += upperChar;
    }
    let special = confirm("Would you like to use specialCharacters?");
    console.log(special);
    if (special == true) {
      allChar += specialChar;
    }
    let numbers = confirm("Would you like to use numbers?");
    console.log(numbers);
    if (numbers == true) {
      allChar += num;
    }
    //console.log("promt worked")
    if (
      lowerCase === false &&
      upperCase === false &&
      special === false &&
      numbers === false
    ) {
      alert("Please select at least one character type.");
      generatePassword();
    }
  }
  let pwd = "";
  for (let i = 0; i < pwdLength; i++) {
    pwd += allChar.charAt(Math.floor(Math.random() * allChar.length));
  }
  return pwd;
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn);
