function gcd(num1, num2) {
  for (let counter = num2; counter >= 1; counter -= 1) {
    if (num2 % counter === 0 && num1 % counter === 0) {
      return counter; 
    }
  }
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1