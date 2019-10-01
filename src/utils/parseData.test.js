import parseData from './parseData';

describe('Given the parseData function', () => {
  const values = {
    testProp: 'value'
  };
  const textPromise = Promise.resolve(JSON.stringify(values));
  const mockRes = {
    text: () => textPromise
  };
  describe('and payload and alive prop are provided', () => {
    let result = parseData(mockRes, true);
    it('should return a javascript object with provided payload and alive prop', done => {
      const mockData = {
        ...values,
        alive: true
      };
      expect(result).resolves.toEqual(mockData);
      done();
    });
  });
});
