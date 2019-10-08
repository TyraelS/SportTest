import checkTimestamp from './checkTimestamp';

describe('Given the checkTimestamp function', () => {
  describe('and the old timestamp is lesser or equal to the new timestamp', () => {
    it('should return true', () => {
      expect(checkTimestamp(0, 20)).toBe(true);
    });
  });

  describe('and the old timestamp is bigger than new timestamp', () => {
    it('should return true', () => {
      expect(checkTimestamp(40, 20)).toBe(false);
    });
  });

  describe('and the old timestamp is null', () => {
    it('should return true', () => {
      expect(checkTimestamp(null, 20)).toBe(true);
    });
  });
});
