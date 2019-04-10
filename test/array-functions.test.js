const { mapArray } = require('../lib/array-functions');

describe('array functions', () => {
  describe('mapArray function', () => {
    it('takes array, copies original array with callback value', () => {
      const mock = jest.fn(num => num);
      expect(mapArray([1, 2, 3, 4, 5], mock)).toEqual([1, 2, 3, 4, 5]);
    });
    
    it('takes array, ignores hole in the array and returns a copy with the hole', () => {
      const mock = jest.fn(num => num + 1);
      expect(mapArray([1, 2, 3,, 4, 5], mock)).toEqual([2, 3, 4,, 5, 6]);
    });
  });

 
});
