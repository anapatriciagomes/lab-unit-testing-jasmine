describe('Iteration 3', () => {
  describe('Function - calculateArea', () => {
    it('should be defined', () => {
      expect(calculateArea).toBeDefined();
    });

    it('should take two numbers as arguments', () => {
      expect(calculateArea.length).toBe(2);
    });

    it('should return a number representing the area of a rectangle (the product of the two arguments)', () => {
      expect(calculateArea(3, 3)).toEqual(9);
      expect(calculateArea(2, 6)).toEqual(12);
      expect(calculateArea(50, 2)).toEqual(100);
    });

    it('In case any of the arguments is not provided, the function should return undefined', () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });
  });
});
