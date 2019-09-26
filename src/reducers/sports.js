import { Map } from 'immutable';
import { RSAA } from 'redux-api-middleware';

import {
  convertNativeToMap,
  mergeData,
  parseData,
  getHeaders,
  checkTimestamp
} from 'Utils';

export const FETCH_SPORTS_REQUEST = 'FETCH_SPORTS_REQUEST';
export const FETCH_SPORTS_SUCCESS = 'FETCH_SPORTS_SUCCESS';
export const FETCH_SPORTS_FAILED = 'FETCH_SPORTS_FAILED';

export const fetchSports = timestamp => {
  return {
    [RSAA]: {
      endpoint:
        'https://gateway.virginbet.com/sportsbook/gateway/v1/web/categories?type=tree&categoryLevel=descendants',
      method: 'GET',
      headers: getHeaders(),
      types: [
        FETCH_SPORTS_REQUEST,
        {
          type: FETCH_SPORTS_SUCCESS,
          payload: (response, state, res) => {
            const alive = checkTimestamp(
              state.get('responses', Map()).get('sports', ''),
              timestamp
            );
            return parseData(res, alive);
          }
        },
        FETCH_SPORTS_FAILED
      ]
    }
  };
};

export const initialSportsState = Map();

export const sports = (state = initialSportsState, action = {}) => {
  switch (action.type) {
    case 'FETCH_SPORTS_SUCCESS':
      if (!action.payload.alive) return state;
      const sports = convertNativeToMap(action.payload.tree);
      return mergeData(state, sports);
    default:
      return state;
  }
};
