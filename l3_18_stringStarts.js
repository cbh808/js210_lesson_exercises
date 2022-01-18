/*   String StartsWith
Implement a function that determines whether a string begins with another string. If it does, the function should return true, or false otherwise.

Examples
function startsWith(string, searchString) {
  // …
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false

You may use the square brackets ([]) to access a character by index, and the length property

Algorithm:
declare function and params `str` & `startStr`
if startStr empty return true
if startStr longer than string return false
iterate over each char of startStr
if any give char of startStr not equivalent to corresponding char in str
  - return false
return true
*/

function startsWith(string, startStr) {
  for (i in startStr) {
    if (startStr[i] !== string[i]) {
      return false;
    }
  }
  return true;
}


let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false
