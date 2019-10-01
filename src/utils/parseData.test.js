import parseData from './parseData';

describe('Given the parseData function', () => {
  const values = {
    testProp: 'value'
  };
  const mockRes = {
    text: jest.fn(() => {
      return new Promise(resolve => {
        resolve(JSON.stringify(values));
      });
    })
  };
  describe('and payload and alive prop are provided', () => {
    const alive = true;
    let res = parseData(mockRes, alive);
    it('should return a javascript object with provided payload and alive prop', async () => {
      values.alive = alive;
      await expect(res).resolves.toEqual(values);
    });
  });
});
