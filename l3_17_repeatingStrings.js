/*  Repeating Strings
Implement a function that takes a string and a number times as arguments. The function should return the string repeated times number of times. If times is not a number, return undefined. If it is a negative number, return undefined also. If times is 0, return an empty string. You may ignore the possibility that times is a number that isn't an integer.

function repeat(string, times) {
  // …
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined
You may concatenate strings, but you may not use any other properties or methods from JavaScript's built-in String class.

Algorithm
declare function and args
if conditional:  if number = 0... else if number >= 1... else undefined
*/

function repeat(string, number) {
  let result = '';
  
  if (number === 0) {
    return "";
  } else if (number >= 1) {
    for (let counter = 1; counter <= number; counter += 1) {
      result += string;
    }
    return result;
  } else {
    return undefined;
  }
}
console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined