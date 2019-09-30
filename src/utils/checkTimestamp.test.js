import checkTimestamp from './checkTimestamp';

describe('Given the checkTimestamp function', () => {
  let oldTimestamp = 0;
  let newTimestamp = 20;
  describe('and the old timestamp is lesser or equal to the new timestamp', () => {
    const res = checkTimestamp(oldTimestamp, newTimestamp);
    it('should return true', () => {
      expect(res).toBeTruthy();
    });
  });
  oldTimestamp = 40;
  describe('and the old timestamp is bigger than new timestamp', () => {
    const res = checkTimestamp(oldTimestamp, newTimestamp);
    it('should return true', () => {
      expect(res).toBeFalsy();
    });
  });
  oldTimestamp = null;
  describe('and the old timestamp is null', () => {
    const res = checkTimestamp(oldTimestamp, newTimestamp);
    it('should return true', () => {
      expect(res).toBeTruthy();
    });
  });
});
