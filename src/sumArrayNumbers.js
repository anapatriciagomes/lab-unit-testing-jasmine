function sumArrayNumbers(arrayOfNumbers) {
  if (!Array.isArray(arrayOfNumbers)) {
    return undefined;
  } else if (arrayOfNumbers.length === 0) {
    return 0;
  }
  return arrayOfNumbers.reduce((acc, cur) => acc + cur, 0);
}
