import { fromJS } from 'immutable';

import parseResponseData from './parseResponseData';
import { parseData } from './parseResponseData';

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
      expect(res).toBeInstanceOf(Promise);
    });
  });
});