function wordCount(stringOfWords) {
  let counts = {};
  // string to array of words
  wordArray = stringOfWords.split(' ');
  // iterate over wordArray & add to object or iterate
  wordArray.forEach ( word => {
  if (Object.keys(counts).includes(word)) {
    counts[word] += 1;
  } else {
    counts[word] = 1;
  }
  });

  return counts;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }