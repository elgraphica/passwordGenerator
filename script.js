// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt the user for the password length
  const length = parseInt(prompt("How many characters do you want your password to contain?"));

  // Check if the input is a number
  if (isNaN(length)) {
    alert("Please enter a valid number for the password length.");
    return;
  }

  // Check if the length is at least 8 characters and no more than 128 characters
  if (length < 8 || length > 128) {
    alert("The password length must be between 8 and 128 characters.");
    return;
  }

  // Confirm whether the user wants to use special characters
  const useSpecialCharacters = confirm("Do you want to use special characters in your password?");

  // Confirm whether the user wants to use numeric characters
  const useNumbers = confirm("Do you want to use numbers in your password?");

  // Confirm whether the user wants to use lowercase letters
  const useLowercaseLetters = confirm("Do you want to use lowercase letters in your password?");

  // Confirm whether the user wants to use uppercase letters
  const useUppercaseLetters = confirm("Do you want to use uppercase letters in your password?");

  // Return the password options as an object
  return {
    length,
    useSpecialCharacters,
    useNumbers,
    useLowercaseLetters,
    useUppercaseLetters
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  // Get a random index from the array
  const randomIndex = Math.floor(Math.random() * arr.length);

  // Return the element at the random index
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  // Get the password options
  const options = getPasswordOptions();

  // Store the password as an array of characters
  let password = [];

  // Store the selected character types
  let selectedCharacters = [];

  // If the user wants to use special characters, add them to the selected characters
  if (options.useSpecialCharacters) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
  }

  // If the user wants to use numeric characters, add them to the selected characters
  if (options.useNumbers) {
    selectedCharacters = selectedCharacters.concat(numericCharacters);
  }

  // If the user wants to use lowercase letters, add them to the selected characters
  if (options.useLowercaseLetters) {
    selectedCharacters = selectedCharacters.concat(lowerCasedCharacters);
  }

  // If the user wants to use uppercase letters, add them to the selected characters
  if (options.useUppercaseLetters) {
    selectedCharacters = selectedCharacters.concat(upperCasedCharacters);
  }

  // If the user does not select any character types, return an error message
  if (selectedCharacters.length === 0) {
    alert("Please select at least one character type to include in the password.");
    return;
  }

  // Generate the password by selecting a random character from the selected characters for the length of the password
  for (let i = 0; i < options.length; i++) {
    password.push(getRandom(selectedCharacters));
  }

  // Convert the password array to a string and return it
  return password.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Done