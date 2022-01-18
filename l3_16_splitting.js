/*  Splitting a String
Write a function that takes two arguments:

a string to be split
a delimiter character
The function logs the split strings to the console, as shown below:

Examples
function splitString(string, delimiter) {
  // …
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

'hello'[0];    // "h"
'hello'[4];    // "o"

input: string, string deliter
output: log to console varying on input string, delimiter

Rules:
if no delimiter log an error message
if delimiter empty, log each letter of string individually to console
if delimiter, output each substring to own line
if delimiter with no text preceding, output a blank line

Algorithm
define function `splitSTring` that takes two args, string, delimiter
check for no delimiter => output error if none provide
check for empty string arg => if empty loop over each character and log to console
create result string = empty string
if delimiter => iterate over each char of string
  if char is delimiter => console log result string
  reset result string to empty
*/

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  if (delimiter === '') {
    for (let i in string) {
      console.log(string[i]);
   }
    return;
  }
  
  let result = ''
  for (let i in string) {
    if (string[i] === delimiter) {
      console.log(result);
      result = '';
    } else {
      result += string[i];
    }
  }
  if (result) {
    console.log(result);
  }
  return;
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello