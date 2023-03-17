function getAngkaTerbesarKedua(dataNumbers) {
  if (!Array.isArray(dataNumbers)) {
    return "Parameter must be array!";
  }

  const sortArray = dataNumbers.sort(function (a, b) {
    return b - a;
  });
  return sortArray[1];
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
