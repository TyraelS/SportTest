import { fromJS } from 'immutable';

import getSportsWithCounters from './getSportsWithCounters';

describe('Given the getSportsWithCounters selector', () => {
  const mockState = fromJS({
    sports: {
      SBTC_01: {
        sportId: '1'
      },
      SBTC_02: {
        sportId: '2'
      }
    },
    leagues: {
      SBTC_011: {
        sportId: '1'
      },
      SBTC_012: {
        sportId: '1'
      }
    }
  });
  const mockResSports = {
    SBTC_01: {
      sportId: '1',
      counter: 2
    },
    SBTC_02: {
      sportId: '2',
      counter: 0
    }
  };

  describe('and sports with leagues are provided', () => {
    it('should return sports objects with counters', () => {
      expect(getSportsWithCounters(mockState).toJS()).toEqual(mockResSports);
    });
  });
});
