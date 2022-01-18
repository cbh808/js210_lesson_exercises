function join(array, delimiter) {
  let resultString = '';

  for (let idx = 0; idx < array.length; idx += 1) {
    resultString += String(array[idx]);

    if (idx != array.length - 1) {
      resultString += delimiter;
    }
  }

  return resultString;
}




console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'