import { RSAA } from 'redux-api-middleware';
import { Map, fromJS } from 'immutable';

import { leagues, fetchLeagues } from './leagues';

describe('Given the fetchLeagues RSAA function', () => {
  describe('and currentSportId with timestamp are provided', () => {
    it('should return an [RSAA] object', () => {
      const res = fetchLeagues('1', 1);
      expect(res[RSAA]).toBeTruthy();
    });
  });
});

describe('Given the leagues reducer', () => {
  describe('and state with action are not provided', () => {
    it('should call reducer with initial values for state and action and return initial state', () => {
      expect(leagues()).toEqual(Map());
    });
  });

  describe('and action with FETCH_LEAGUES_SUCCESS type is provided', () => {
    let action = {
      type: 'FETCH_LEAGUES_SUCCESS',
      payload: {
        category: [
          {
            id: 'SBTC_01'
          }
        ],
        alive: true
      }
    };

    describe('and payload is still valid', () => {
      it('should return merged state', () => {
        expect(leagues(Map(), action)).toEqual(
          fromJS({
            SBTC_01: {
              id: 'SBTC_01'
            }
          })
        );
      });

      describe('and payload is no longer valid', () => {
        it('should return initial state', () => {
          action = {
            ...action,
            payload: {
              ...action.payload,
              alive: false
            }
          };
          const mockState = Map({ test: 'value' });
          expect(leagues(mockState, action)).toEqual(mockState);
        });
      });
    });
  });
});
