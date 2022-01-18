let indexOf = function(array, value) {
  for (index in array) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));
console.log(indexOf([1, 2, 3], 4));