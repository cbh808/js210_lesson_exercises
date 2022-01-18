/* Pattern Generation
Write a function that takes a number of rows as the argument `nStars`
 and logs a square of numbers and asterisks. 

Test Case:
For example, if nStars is 7, log the following pattern:

Copy Code
generatePattern(7);

// console output
1******  1 + 6 stars  (7 - 1 stars)
12*****  2 + 5 stars  (7 - 2 stars)
123****
1234***
12345**
123456*
1234567

- loop with counter
    - count from 1 to nStars
    - concatenate count to int + (nStart - count) * stars and output

*/
function getStars(starsNum) {
  let stars = '';
  for (let i = 1; i <= starsNum; i += 1) {
    stars += '*';
  }
  return stars;
}

function getMaxLength(nStars) {
  numbers = ''
  for (let count = 1; count <= nStars; count += 1) {
    numbers += String(count);
  }
  return numbers.length;
}


function generatePattern(nStars) {
  let maxLength = getMaxLength(nStars)
  let numbers = '';
  for (let count = 1; count <= nStars; count += 1) {
    numbers += String(count);
    let length = maxLength - numbers.length 
    console.log(`${numbers}${getStars(length)}`);
  }
  return;
}
generatePattern(9);
generatePattern(19);
