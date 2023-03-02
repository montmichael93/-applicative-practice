export function minBy(array, cb) {
  let min = Infinity;
  let outPut; 
for (let item of array) {
  let someValue = cb(item);
  if (someValue < min || someValue.length < min) {
    min = someValue;
    outPut = item;
  }
} 
  return outPut ;
}

export function maxBy(array, cb) {
  let max = -Infinity;
  let outPut; 
for (let item of array) {
  let someValue = cb(item);
  if (someValue > max) {
    max = someValue;
    outPut = item;
  }
} 
  return outPut ;
}



