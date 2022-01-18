/*   Substring (1)
Write a function that returns a substring of a string based on a starting index and length.

Examples
function substr(string, start, length) {
  // …
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""
The start argument is the starting index. If negative, treat it as strLength + start where strLength is the length of the string. For example, if start is -3, treat it as strLength - 3.
The length argument is the maximum length of the desired substring. If length exceeds the number of characters available, just use the available characters.
You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

Rules
if length <= 0, substring is empty
if length extends over end of string, return substring to end of string
if starting character is negative, start substring counting from back of string, e.g. last char at idx -1

Algorithm:
delclare fucntion `substr` with args `string`, `start` and `length`
return '' if substring length is <= 0
find start index
  if pos, then equal to start
  if neg, then reassign start to string.length + start
find end index
  if start + length < string.length
    end index equal to start + length - 1
  else end = string.length - 1

iterate from start to end of desired substring and concatenate each char to result
*/

function substr(string, start, length) {
  // if (length <= 0) {
  //   return ''
  // }

    if (start < 0) {
    start = string.length + start;
  }
  
  // let end = string.length - 1;
  // if (start + length < string.length) {
  //   end = start + length - 1;
  // }

  let substring = '';
  for (let counter = 0; counter < length; counter += 1) {
    let index = start + counter;

    if (string[index] === undefined) {
      break;
    }

    substring += string[index];
  }

  return substring;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
