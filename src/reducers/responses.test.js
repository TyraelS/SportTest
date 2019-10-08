import { fromJS } from 'immutable';

import responsesReducer, {
  setSportsTimestamp,
  SET_SPORTS_TIMESTAMP,
  setLeaguesTimestamp,
  SET_LEAGUES_TIMESTAMP
} from './responses';

describe('Given the responsesReducer', () => {
  describe('given setSportsTimestamp action', () => {
    it('should return an action with SET_SPORTS_TIMESTAMP and payload with provided time', () => {
      expect(setSportsTimestamp(1)).toEqual({
        type: SET_SPORTS_TIMESTAMP,
        payload: 1
      });
    });
  });

  describe('given setLeaguesTimestamp action', () => {
    it('should return an action with SET_LEAGUES_TIMESTAMP and payload with provided time', () => {
      expect(setLeaguesTimestamp(1)).toEqual({
        type: SET_LEAGUES_TIMESTAMP,
        payload: 1
      });
    });
  });

  const initialState = fromJS({
    sports: null,
    leagues: null
  });

  describe('when state with action are not provided', () => {
    it('should call reducer with initial values for state and action and return initial state', () => {
      expect(responsesReducer()).toEqual(initialState);
    });
  });

  describe('when action of SET_SPORTS_TIMESTAMP type is provided', () => {
    const action = {
      type: SET_SPORTS_TIMESTAMP,
      payload: 1
    };

    it('should return state with new sports timestamp', () => {
      expect(responsesReducer(initialState, action)).toEqual(
        fromJS({ sports: 1, leagues: null })
      );
    });
  });

  describe('when action of SET_LEAGUES_TIMESTAMP type is provided', () => {
    const action = {
      type: SET_LEAGUES_TIMESTAMP,
      payload: 1
    };

    it('should return state with new sports timestamp', () => {
      expect(responsesReducer(initialState, action)).toEqual(
        fromJS({ sports: null, leagues: 1 })
      );
    });
  });
});
