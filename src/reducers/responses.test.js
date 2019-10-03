import { fromJS } from 'immutable';

import {
  responses,
  setSportsTimestamp,
  SET_SPORTS_TIMESTAMP,
  setLeaguesTimestamp,
  SET_LEAGUES_TIMESTAMP
} from './responses';

describe('Given the responses reducer', () => {
  describe('given setSportsTimestamp action', () => {
    const res = setSportsTimestamp(1);
    it('should return an object with type SET_SPORTS_TIMESTAMP', () => {
      expect(res.type).toBe(SET_SPORTS_TIMESTAMP);
    });
    it('and should return an object with timestamp payload', () => {
      expect(res.payload).toBe(1);
    });
  });
  describe('given setLeaguesTimestamp action', () => {
    const res = setLeaguesTimestamp(1);
    it('should return an object with type SET_LEAGUES_TIMESTAMP', () => {
      expect(res.type).toBe(SET_LEAGUES_TIMESTAMP);
    });
    it('and should return an object with timestamp payload', () => {
      expect(res.payload).toBe(1);
    });
  });
  const initialState = fromJS({
    sports: null,
    leagues: null
  });
  describe('when state with action are not provided', () => {
    it('should call reducer with initial values for state and action and return initial state', () => {
      expect(responses()).toEqual(initialState);
    });
  });
  describe('when action of SET_SPORTS_TIMESTAMP type is provided', () => {
    const action = {
      type: SET_SPORTS_TIMESTAMP,
      payload: 1
    };
    it('should return state with new sports timestamp', () => {
      expect(responses(initialState, action)).toEqual(
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
      expect(responses(initialState, action)).toEqual(
        fromJS({ sports: null, leagues: 1 })
      );
    });
  });
});
