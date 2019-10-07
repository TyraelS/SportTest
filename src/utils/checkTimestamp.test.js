import checkTimestamp from './checkTimestamp';

describe('Given the checkTimestamp function', () => {
  let res = null;
  describe('and the old timestamp is lesser or equal to the new timestamp', () => {
    it('should return true', () => {
      res = checkTimestamp(0, 20);
      expect(res).toBe(true);
    });
  });

  describe('and the old timestamp is bigger than new timestamp', () => {
    it('should return true', () => {
      res = checkTimestamp(40, 20);
      expect(res).toBe(false);
    });
  });

  describe('and the old timestamp is null', () => {
    it('should return true', () => {
      res = checkTimestamp(null, 20);
      expect(res).toBe(true);
    });
  });
});
