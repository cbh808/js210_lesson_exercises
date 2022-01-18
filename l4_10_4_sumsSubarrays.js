function matrixSums(arr) {
  result = arr.map(subarray => {
    let sum = 0;
    for (let i = 0; i < subarray.length; i += 1) {
      sum += subarray[i];
    }
    return sum;
  });
  return result;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]