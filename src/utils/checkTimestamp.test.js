import checkTimestamp from './checkTimestamp';

describe('Given the checkTimestamp function', () => {
  beforeEach(() => {
    res = checkTimestamp(oldTimestamp, newTimestamp);
  });
  let res = null;
  let oldTimestamp = 0;
  let newTimestamp = 20;
  describe('and the old timestamp is lesser or equal to the new timestamp', () => {
    it('should return true', () => {
      expect(res).toBeTruthy();
      oldTimestamp = 40;
    });
  });
  describe('and the old timestamp is bigger than new timestamp', () => {
    it('should return true', () => {
      expect(res).toBeFalsy();
      oldTimestamp = null;
    });
  });
  describe('and the old timestamp is null', () => {
    it('should return true', () => {
      expect(res).toBeTruthy();
    });
  });
});
