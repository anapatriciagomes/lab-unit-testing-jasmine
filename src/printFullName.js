function printFullName(nameObject) {
  if (typeof nameObject !== 'object' || nameObject === null) {
    return undefined;
  } else if (
    nameObject.firstName === undefined ||
    nameObject.lastName === undefined
  ) {
    return undefined;
  } else if (
    typeof nameObject.firstName !== 'string' ||
    typeof nameObject.lastName !== 'string'
  ) {
    return undefined;
  } else if (
    Object.keys(nameObject).includes('firstName') &&
    Object.keys(nameObject).includes('lastName')
  ) {
    return `${nameObject.firstName} ${nameObject.lastName}`;
  } else {
    return undefined;
  }
}
