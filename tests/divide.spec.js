describe('Iteration 2', () => {
  describe('Function - divide', () => {
    it('should be defined', () => {
      expect(divide).toBeDefined();
    });

    it('should take two numbers as arguments', () => {
      expect(divide.length).toBe(2);
    });

    it('should return the division of the two numbers', () => {
      expect(divide(2, 1)).toEqual(2);
      expect(divide(4, 2)).toEqual(2);
      expect(divide(100, 2)).toEqual(50);
    });

    it('should return undefined if any of the arguments is not provided', () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
    });

    it('should return undefined if divided by zero', () => {
      expect(divide(1, 0)).toEqual(undefined);
      expect(divide(20, 0)).toEqual(undefined);
    });
  });
});
