/* Code Review: Rot13 Cipher

PEDAC
Problem Statement
Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a String into a new String. Write a Function, rot13, that takes a String and returns that String transformed by the rot13 cipher.
Rules:
For each character in the original String:
- If the character is a letter in the modern English alphabet, change it to the character 13 positions later in the alphabet.
  Thus a becomes n.
- If you reach the end of the alphabet, return to the beginning.
  Thus, o becomes b.
- Letter transformations preserve case.
  A becomes N while a becomes n.
- Don't modify characters that are not letters.

Input: string
Output: cipher-string

Examples:
---example 1---
console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
It's worth noting that rot13 applied twice results in the original string:

---example 2---
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
Teachers open the door, but you must enter by yourself.

This happens since there are 26 characters in the modern English alphabet: 2 sets of 13.

'A' = 65
'Z' = 90
char 78 and above must circle around => >'N'

'a' = 97
'z' = 122
char above code 110 => >'n'

for arbitrary rotaton 90 - OFFSET + 1
let lowercaseLimit = String.fromCharCode(122 - OFFSET + 1)
let uppercaseLimit = String.fromCharCode(90  - OFFSET + 1)

Rules:
if char code between
*/

function rot13(string) {
  const OFFSET = 13
  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    let char        = string[index]
    let charCode    = char.charCodeAt(0);
    let cirleAround = String.fromCharCode(charCode - OFFSET)
    let moveUp      = String.fromCharCode(charCode + OFFSET)


    if (char >= 'a' && char <= 'z') {
      if (char >= 'n') {
        result += cirleAround;
      } else {
        result += moveUp;
      }
    } else if (char >= 'A' && char <= 'Z') {
        if (char >= 'N') {
        result += cirleAround;
      } else {
        result += moveUp;
      }
    } else {
      result += char;
    }
  }

  return result;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));