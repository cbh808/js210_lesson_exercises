Problem:
/*
  For boolean values, the || operator returns true if either or both of its operands are true, false if both operands are false. The && operator, on the other hand, returns true if both of its operands are true, and false if either operand is false. This works great until you need only one of two conditions to be true, the so-called "exclusive or", or XOR.

Write a function named isXor that takes two arguments, and returns true if exactly one argument is truthy, false otherwise. Your function should work with the boolean values of true and false, but also any JavaScript values based on their "truthiness".

  Rules:
    -if both values are true, truthy or false return false
    -if only one value is true or truthy return true

isXor(false, true);     // true
  -if one value is boolean true (truthy), return true
  
isXor(true, false);     // true
isXor(false, false);    // false
  -both false values return false
  
isXor(true, true);      // false
  -both true values (boolean) return false


isXor(false, 3);        // true
  -if one value is truthy (non-boolean) return true
  
isXor('a', undefined);  // true

isXor(null, '');        // false
isXor('2', 23);         // false
  -if both are truthy, return flase

Algorithm:
create function isXor that takes two arguments

check if both arguments are truthy, e.g. a && b
  RETURN false
check if both args are falsey !a && !b
  RETURN false
else 
  RETURN true
*/

function isXor(arg1, arg2) {
 if ((arg1 && arg2) || (!arg1 && !arg2)) {
  return false;
 }
  return true;
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false
console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false