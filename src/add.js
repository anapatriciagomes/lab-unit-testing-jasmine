function add(numOne, numTwo) {
  if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
    return undefined;
  } else if (numOne === null || typeof numTwo === null) {
    return undefined;
  } else return numOne + numTwo;
}
