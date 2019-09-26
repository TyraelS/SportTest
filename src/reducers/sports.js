import { Map } from 'immutable';
import { RSAA } from 'redux-api-middleware';

import {
  convertNativeToMap,
  mergeData,
  parseData,
  getHeaders,
  checkTimestamp
} from '../utils';

export const fetchSports = timestamp => {
  return {
    [RSAA]: {
      endpoint:
        'https://gateway.virginbet.com/sportsbook/gateway/v1/web/categories?type=tree&categoryLevel=descendants',
      method: 'GET',
      headers: getHeaders(),
      types: [
        'FETCH_SPORTS_REQUEST',
        {
          type: 'FETCH_SPORTS_FULFILLED',
          payload: (response, state, res) => {
            const alive = checkTimestamp(
              state.get('responses').get('sports'),
              timestamp
            );
            return parseData(res, alive);
          }
        },
        'FETCH_SPORTS_FAILED'
      ]
    }
  };
};

export const initialSportsState = Map();

export const sports = (state = initialSportsState, action = {}) => {
  switch (action.type) {
    case 'FETCH_SPORTS_FULFILLED':
      if (!action.payload.alive) return state;
      const newData = convertNativeToMap(action.payload.tree);
      return mergeData(state, newData);
    default:
      return state;
  }
};
