// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// WHEN I click the button to generate a password
function generatePassword(){
  var passLength= prompt("Please choose a password length between 8 and 128.")
  if (passLength >= 8  && passLength <= 128) {
    alert( `Great, your password will be ${passLength} characters long!`);
  
  //THEN I am presented with a series of prompts for password criteria
    var passLower= confirm("Would you like to include lower case letters?");
    var passUpper= confirm("Would you like to include upper case letters?");
    var passNumeric= confirm("Would you like to include numbers in your password?");
    var passSpecial= confirm("Finally, would you like to include any special characters?");

    let theChars="";
    let password="";

    if (passLower) {
      theChars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (passUpper) {
      theChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (passNumeric) {
      theChars += "1234567890";
    }
    if (passSpecial) {
      theChars += "!@#$%^&*()";
    }
  for ( i= 0; i < passLength; i++) {
    password += theChars.charAt(Math.floor(Math.random() * theChars.length));
  }
  // THEN a password is generated that matches the selected criteria
    return password;
  } else {
    (passLength > 7 || passLength < 129)
    alert("Invalid. Please choose between 8 and 128!"); 
  }
  
}

// THEN the password is displayed 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
