import { Map, fromJS } from 'immutable';
import { RSAA } from 'redux-api-middleware';

import { sports, fetchSports } from './sports';

describe('Given the fetchSports RSAA function', () => {
  describe('and timestamp is provided', () => {
    it('should return an [RSAA] object', () => {
      const res = fetchSports(1);
      expect(res[RSAA]).toBeTruthy();
    });
  });
});

describe('Given the sports reducer', () => {
  describe('and state with action are not provided', () => {
    it('should call reducer with initial values for state and action and return initial state', () => {
      expect(sports()).toEqual(Map());
    });
  });
  describe('and action with FETCH_SPORTS_SUCCESS type is provided', () => {
    let action = {
      type: 'FETCH_SPORTS_SUCCESS',
      payload: {
        tree: [
          {
            id: 'SBTC_01'
          }
        ],
        alive: true
      }
    };
    describe('and action.payload.alive is true', () => {
      it('should return merged state', () => {
        expect(sports(Map(), action)).toEqual(
          fromJS({
            SBTC_01: {
              id: 'SBTC_01'
            }
          })
        );
      });
      describe('and action.payload.alive is false', () => {
        it('should return initial state', () => {
          action = {
            ...action,
            payload: {
              ...action.payload,
              alive: false
            }
          };
          expect(sports(Map({ test: 'value' }), action)).toEqual(
            Map({ test: 'value' })
          );
        });
      });
    });
  });
});
