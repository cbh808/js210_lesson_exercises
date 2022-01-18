/*   Converting Strings to Lower Case
Write a function that returns a string converted to lowercase.

To convert a single uppercase character to a lowercase character, get its ASCII numeric representation from the ASCII table, add 32 to that number, then convert the number back to a character using the same ASCII table. 
Use the String.fromCharCode and the String.charCodeAt methods for these operations. 

For example:
let string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

Examples
function toLowerCase(string) {
  // …
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"

You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

Algorithm
create result string as empty string
loop over characters of string
  - if capital letter convert to lowercase and add to string
    - capitals are between 65 and 90
    - if capital add 32 and use method to convert to lowercase letter
  - else add character to string
return result string

*/

function toLowerCase(string) {
  let lowercaseString = '';
  const ASCII_CONVERSION_TO_LOWER = 32

  for (let i = 0; i < string.length; i += 1) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      lowercaseString += String.fromCharCode(string.charCodeAt(i) + ASCII_CONVERSION_TO_LOWER);
    } else {
      lowercaseString += string[i];
    }
  }
  return lowercaseString;
}


console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"