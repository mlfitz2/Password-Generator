// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = "";
  var passwordText = document.querySelector("#password");
  var passwordLength = 0;
  var uppercaseLetters = ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '-', '/'];
  var selectedCharacters = [];

  //Select password length
  var chooseLength = window.prompt('How long would you like your password to be? Choose between 8 and 128 characters.');
  if (chooseLength > 7 && chooseLength < 127) {
    passwordLength = chooseLength
    console.log(passwordLength)
  } else {
    window.alert('Invalid response. Please enter a number between 8 and 128.')
  }

  //Select if uppercase letters will be included
  var chooseUppercase = window.confirm('Would you like uppercase letters to be included?');
  if (chooseUppercase) {
      selectedCharacters = selectedCharacters + uppercaseLetters 
  }

  //Select if lowercase letters will be included
  var chooseLowercase = window.confirm('Would you like lowercase letters to be included?');
  if (chooseLowercase) {
      selectedCharacters = selectedCharacters + lowercaseLetters 
  }

  //Select if numbers will be included
    var chooseNumbers = window.confirm('Would you like numbers to be included?');
    if (chooseNumbers) {
        selectedCharacters = selectedCharacters + numbers 
    }

  //Select if special characters will be included
  var chooseSpecialCharacters = window.confirm('Would you like special characters to be included?');
  if (chooseSpecialCharacters) {
      selectedCharacters = selectedCharacters + specialCharacters 
  }

  for (var i = 0; i < passwordLength; i++) {
    password = password + selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)]
    console.log(password)
   
  } 


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
