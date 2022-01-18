/*
Write a function that takes a number argument, and returns true if the number is prime, or false if it is not.

You may assume that the input is always a non-negative integer.


isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false

Problem: 
given a non-negative (positive) integer, 1, 2, 3...
write a function that takes an argument
return a boolean based on priminess

if number is 0 or 1 return false
Algorithm:

- create function isPrime() with number as its parameter
- if the number is less than or equal to 1 then return false
- Create a loop:
  - declare variable `counter` and assign it to 2
  - continue looping as long as `counter` is less than `number`
  - increment `counter` by one at each iteration
  
  - conditional statement:
    - if `number` remainder `counter` is equal to 0
      - RETURN FALSE
  
  - if false was not returns then return `true` outside of the loop, within function
*/

function isPrime(number) {
 if (number <= 1) {
  return false; 
 }
  
 for (let counter = 2; counter < number; counter += 1) {
  if (number % counter === 0) {
   return false; 
  }
 }
  
 return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false