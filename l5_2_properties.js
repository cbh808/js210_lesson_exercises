function incrementProperty(object, string) {
  let keys = Object.keys(object);
  if (keys.indexOf(string) === -1) {
    object[string] = 1;
  } else {
    object[string] += 1;
  }
  return object[string];
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }
