import { fromJS } from 'immutable';

import parseResponseData from './parseResponseData';

describe('Given the parseResponseData function', () => {
  const mockState = fromJS({
    responses: {
      sports: 1,
      leagues: 1
    }
  });
  const values = {
    testProp: 'value'
  };
  const textPromise = Promise.resolve(JSON.stringify(values));
  const mockRes = {
    text: () => textPromise
  };
  describe('and responseType with timestamp are provided', () => {
    it('should return a function', () => {
      const res = parseResponseData('sports', 1)({}, mockState, mockRes);
      console.log(res);
      expect(res).toBeInstanceOf(Promise);
    });
  });
});
