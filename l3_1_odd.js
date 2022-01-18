function logOddNumbers(number) {
  for (let counter = 1; counter <= number; counter += 1) {
    if (counter % 2 === 1) {
      console.log(counter);
    }
  }
}

function incrementByTwo(number) {
  for (let counter = 1; counter <= number; counter += 2) {
    console.log(counter);
  }
}

function checkForEvens(number) {
  for (let counter = 1; counter <= number; counter += 1) {
    if (counter % 2 == 0) {
      continue;
    }
    console.log(counter);
  }
}

logOddNumbers(19);
incrementByTwo(11);
checkForEvens(9);