import mergeData from './mergeData';
import { fromJS } from 'immutable';

describe('Given the mergeData function', () => {
  let res;
  describe('and oldData with newData are provided', () => {
    beforeEach(() => {
      res = mergeData(oldData, newData);
    });
    const oldData = fromJS({
      SBTC_01: {
        id: 'SBTC_01',
        version: '1',
        name: 'testSport'
      },
      SBTC_02: {
        id: 'SBTC_02',
        version: '14',
        name: 'testSport2'
      }
    });
    const newData = fromJS({
      SBTC_01: {
        id: 'SBTC_01',
        version: '2',
        name: 'testSport'
      },
      SBTC_02: {
        id: 'SBTC_02',
        version: '12',
        name: 'testSport2'
      },
      SBTC_03: {
        id: 'SBTC_03',
        version: '12',
        name: 'testSport3'
      }
    });
    const expectedData = {
      SBTC_01: {
        id: 'SBTC_01',
        version: '2',
        name: 'testSport'
      },
      SBTC_02: {
        id: 'SBTC_02',
        version: '14',
        name: 'testSport2'
      },
      SBTC_03: {
        id: 'SBTC_03',
        version: '12',
        name: 'testSport3'
      }
    };
    it('should create new immutable object which is result of the merge', () => {
      expect(res.toJS()).toMatchObject(expectedData);
    });
  });
});
