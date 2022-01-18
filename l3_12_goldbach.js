/* Goldbach Numbers
Write a function named checkGoldbach that uses Goldbach's Conjecture to log every pair of primes that sum to the number supplied as an argument. The conjecture states that "you can express every even integer greater than 2 as the sum of two primes". The function takes as its only parameter, an integer expectedSum, and logs all combinations of two prime numbers whose sum is expectedSum. Log the prime pairs with the smaller number first. If expectedSum is odd or less than 4, your function should log null.

Your checkGoldbach function may call the isPrime function you wrote for a previous practice problem.

Example
checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

Algorithm;
create function `checkGoldbach` that takes arg `number`
create empty array primePairs
loop over counter from 2 to one half of number, (convert float results to ints)
check if counter is a prime
  if counter prime
    calculate difference between number and counter
    check if difference is prime
    if prime, add nested array pair, counter and difference, to `primePairs`
log each pair from primePairs, each pair on one line
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

function checkGoldbach(number) {
  if (number < 4 || number % 2 === 1) {
    console.log(null);
    return;
  }

  for (let counter = 2; counter <= parseInt(number / 2, 10); counter += 1) {
    let difference = 0;
    if (isPrime(counter)) {
      difference = number - counter;
    } else continue;

    if (isPrime(difference)) {
      console.log(counter, difference);
    }
  }
  return;
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

/*
function checkGoldbach(number) {
  let primePairs = [];
  for (let counter = 2; counter <= parseInt(number / 2, 10); counter += 1) {
    let difference = 0;
    if (isPrime(counter)) {
      difference = number - counter;
    } else continue;

    if (isPrime(difference)) {
      primePairs.push([counter, difference]);
    }
  }
  primePairs.length !== 0 ? primePairs.forEach ((arr) => console.log(arr[0], arr[1])) : console.log(null);
  return;
}
*/