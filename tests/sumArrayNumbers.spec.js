describe('Iteration 5', () => {
  describe('Function - sumArrayNumbers', () => {
    it('should be defined', () => {
      expect(sumArrayNumbers).toBeDefined();
    });

    it('should take one argument', () => {
      expect(sumArrayNumbers.length).toBe(1);
    });

    it('should return the sum of all numbers in the array', () => {
      expect(sumArrayNumbers([1, 2, 3])).toEqual(6);
      expect(sumArrayNumbers([1, 2, 3, 4])).toEqual(10);
      expect(sumArrayNumbers([1, 2, 3, 10])).toEqual(16);
    });

    it('In case the argument passed is not an array, the function should return undefined', () => {
      expect(sumArrayNumbers('string')).toEqual(undefined);
      expect(sumArrayNumbers(123)).toEqual(undefined);
      expect(sumArrayNumbers(false)).toEqual(undefined);
      expect(sumArrayNumbers({})).toEqual(undefined);
    });

    it('In case the argument passed is an empty array, the function should return 0', () => {
      expect(sumArrayNumbers([])).toEqual(0);
    });
  });
});
