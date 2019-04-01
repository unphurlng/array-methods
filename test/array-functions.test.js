const { mapArray } = require('../lib/array-functions');

describe('array functions', () => {
  describe('map array function', () => {
    it('takes array, creates new array with callback value', () => {
      const mock = jest.fn(num => num);
      expect(mapArray([1, 2, 3, 4, 5], mock)).toEqual([1, 2, 3, 4, 5]);
    });
  });


});
