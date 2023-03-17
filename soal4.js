function isValidPassword(givenPassword) {
  if (typeof givenPassword !== "string") {
    return false;
  }

  const longPass = givenPassword.length >= 8;
  const uppercase = /[A-Z]/.test(givenPassword);
  const lowerCase = /[a-z]/.test(givenPassword);
  const hasNumber = /[0-9]/.test(givenPassword);

  return longPass && uppercase && lowerCase && hasNumber;
}

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());
