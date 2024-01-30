describe('Iteration 4', () => {
  describe('Function - printFullName', () => {
    it('should be defined', () => {
      expect(printFullName).toBeDefined();
    });

    it('should take one argument of type object.', () => {
      expect(printFullName.length).toBe(1);
      expect(printFullName(123)).toBe(undefined);
      expect(printFullName('string')).toBe(undefined);
      expect(printFullName(false)).toBe(undefined);
    });

    it('should return a string with the first name and the last name separated by a space', () => {
      expect(
        printFullName({ firstName: 'Patrícia', lastName: 'Gomes' })
      ).toEqual('Patrícia Gomes');
    });

    it('In case the argument passed is not an object, the function should return undefined', () => {
      expect(printFullName('string')).toEqual(undefined);
      expect(printFullName(2)).toEqual(undefined);
      expect(printFullName([])).toEqual(undefined);
    });

    it('In case the firstName or lastName properties are not provided, the function should return undefined', () => {
      expect(printFullName({ lastName: 'Gomes' })).toEqual(undefined);
      expect(printFullName({ firstName: 'Patrícia' })).toEqual(undefined);
      expect(printFullName({})).toEqual(undefined);
    });

    it('should return undefined if firstName or lastName are not strings', () => {
      expect(printFullName({ firstName: 'Patrícia', lastName: 123 })).toEqual(
        undefined
      );
      expect(printFullName({ firstName: 123, lastName: 'Gomes' })).toEqual(
        undefined
      );
      expect(printFullName({ firstName: 123, lastName: 123 })).toEqual(
        undefined
      );
    });
  });
});
