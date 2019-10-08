import { Map, fromJS } from 'immutable';
import { RSAA } from 'redux-api-middleware';

import sportsReducer, { fetchSports } from './sports';

describe('Given the fetchSports RSAA function', () => {
  describe('and timestamp is provided', () => {
    it('should return an [RSAA] object', () => {
      const res = fetchSports(1);
      expect(res[RSAA]).toBeTruthy();
    });
  });
});

describe('Given the sportsReducer', () => {
  describe('and state with action are not provided', () => {
    it('should call reducer with initial values for state and action and return initial state', () => {
      expect(sportsReducer()).toEqual(Map());
    });
  });

  describe('and action with SPORTS_SUCCESS type is provided', () => {
    let action = {
      type: 'SPORTS_SUCCESS',
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
        expect(sportsReducer(Map(), action)).toEqual(
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

          expect(sportsReducer(Map({ test: 'value' }), action)).toEqual(
            Map({ test: 'value' })
          );
        });
      });
    });
  });
});
