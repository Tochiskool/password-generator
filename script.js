// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var answer, totalCharacters, randomResult = [], arrayResults;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //Prompt user to enter length of password
  var passwordCriteria = prompt("How long would you like your password to be");
  console.log(passwordCriteria);
  //Confirm the criterias of the password
  var specialChars = confirm("Do you want special characters");
  var numbericChars = confirm("Do you want Numeric characters");
  var capitalLetters = confirm("Do you want caps in your password");
  var smallLetters = confirm("Do you want small letters in your password");
  //Make password criteria a numeric value
  passwordCriteria = parseInt(passwordCriteria);
  console.log(passwordCriteria)
  var specialC = ["!", "~", "@", "$", "#", "^", "*", "(", ")", "_", "+", "=", "?", "|", ";", "'", ".", "/", "\n", "&", "}", "{", "]", "["];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var uppperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  //Check if confirmations are all affirmative 
  if (!specialChars && !numbericChars && !capitalLetters && !smallLetters) {
    alert("You must choose at least one of the character types")
    console.log(specialChars, numbericChars, capitalLetters, smallLetters)
  } else if (numbericChars || smallLetters || capitalLetters || specialChars && passwordCriteria) {
    //Place all logic in the affirmation variables
    specialChars = specialC;
    numbericChars = numbers;
    capitalLetters = uppperCase;
    smallLetters = lowerCase;
    //Unite the variables with a spread operator
     totalCharacters = [...specialChars, ...numbericChars, ...capitalLetters , ...smallLetters];
  }
  //Special logic
  //passwordCriteria is used as the dynamic length to determine how many times we loop randomly through the totalcharacters array
  for (var i = 0; i < passwordCriteria; i++) {
    //We push everything into the randomResult array base on the number chosen by the authorizer
      randomResult.push(totalCharacters[Math.floor(Math.random()*totalCharacters.length)])
    //We join them without space and return the result
    arrayResults = randomResult.join("");
  }
  //Voila!!! Now it looks
  return arrayResults;
}