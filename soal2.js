function checkTypeNumber(givenNumber) {
  if (typeof givenNumber !== `number`) {
    return "Error: Invalid Data Type";
  } else if (givenNumber === null) {
    return "Error: Bro where is the parameter";
  }
  if (givenNumber % 2 === 0) {
    return `Genap`;
  } else {
    return `Ganjil`;
  }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

exports.checkTypeNumber = checkTypeNumber;
