function getSplitName(personName, givenNumber) {
  if (typeof personName !== "string") {
    return "error: please insert letter!";
  }

  const name = personName.split(" ");

  if (name.length > 3) {
    return "error: this function is only for 3 characters name";
  }

  const fullName = {
    firstName: name[0],
    middleName: "",
    lastName: "",
  };

  if (name.length > 1) {
    fullName.lastName = name[name.length - 1];
  }

  if (name.length === 3) {
    fullName.middleName = name[1];
  }

  return fullName;
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));
