import { Map, fromJS } from 'immutable';

import { sports } from './sports';

describe('Given the sports reducer', () => {
  describe('and state with action are not provided', () => {
    it('should call reducer with initial values for state and action and return initial state', () => {
      expect(sports()).toEqual(Map());
    });
  });
  describe('and action with FETCH_SPORTS_SUCCESS type is provided', () => {
    const action = {
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
          action.payload.alive = false;
          expect(sports(Map({ test: 'value' }), action)).toEqual(
            Map({ test: 'value' })
          );
        });
      });
    });
  });
});
