/*   Trimming Spaces
Write a function that takes a string as an argument, and returns the string stripped of spaces from both ends. Do not remove or alter internal spaces.

Example
trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""
You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.
'hello'[0];       // "h"
'hello'[4];       // "o"

*/

// ``function trim(string) {
//   let result = ''
//   let stringStart;
  
//   for (let counter = 0; counter < string.length; counter += 1) {
//     if (string[counter] !== ' ') {
//       stringStart = counter;
//       console.log(counter);
//       break;
//     }
//   }
  
//   let stringEnd;
//   for (let counter = string.length - 1; counter >= 0; counter -= 1) {
//     if (string[counter] !== ' ') {
//       stringEnd = counter;
//       break;
//     }
//   }
  
//   for (let counter = stringStart; counter <= stringEnd; counter += 1) {
//     result += string[counter];
//   }
//   return result;
// }``

// function trim(string) {
//   let start = string.search(/\S/);
//   let fromEnd = [...string].reverse().join('').search(/\S/)
//   let end = string.length - fromEnd;

//   return string.slice(start, end);
// }


function trim(string) {
  let array = [];
  let result = '';
  // loop over string to find indexes of all chars that are not spaces
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      array.push(i);
    }
  }
  // loop from first idx in array to last to get string
  for (let i = array[0]; i <= array[array.length - 1]; i += 1 ) {
  result += string[i];
  }

  return result;
}

console.log(trim('  abc  ') === "abc");
console.log(trim('abc   ') === "abc");
console.log(trim(' ab c') === "ab c");
console.log(trim(' a b  c') === "a b  c");
console.log(trim('      ') === "");
console.log(trim('') === "");





/*
function trim(string) {
  let start = string.search(/\S/);
  let fromEnd = [...string].reverse().join('').search(/\S/)
  let end = string.length - fromEnd;

  return string.slice(start, end);
  */