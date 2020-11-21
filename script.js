// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var passLength= prompt("Please choose a password length between 8 and 128.")
  if (passLength >= 8  && passLength <= 128) {
    alert( `Great, your password will be ${passLength} characters long!`);
    
    var passLower= confirm("Would you like to include lower case letters?");
    var passUpper= confirm("Would you like to include upper case letters?");
    var passNumeric= confirm("Would you like to include numbers in your password?");
    var passSpecial= confirm("Finally, would you like to include any special characters?");

    let allChars="";
    let password="";

    if (passLower) {
      allChars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (passUpper) {
      allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (passNumeric) {
      allChars += "1234567890";
    }
    if (passSpecial) {
      allChars += "!@#$%^&*()";
    }
  for ( i= 0; i < passLength; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
    return password;
  } else {
    (passLength > 7 || passLength < 129)
    alert("Invalid. Please choose between 8 and 128!"); 
  }
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
