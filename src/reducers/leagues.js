import { RSAA } from 'redux-api-middleware';
import { Map } from 'immutable';

import {
  parseData,
  getHeaders,
  checkTimestamp,
  convertNativeToMap,
  mergeData
} from '../utils';

export const fetchLeagues = (currentSportId, timestamp) => {
  return {
    [RSAA]: {
      endpoint: `https://gateway.virginbet.com/sportsbook/gateway/v1/web/categories/${currentSportId}?type=tree&categoryLevel=childs&outright=false&specials=false`,
      method: 'GET',
      headers: getHeaders(),
      types: [
        'FETCH_LEAGUES_REQUEST',
        {
          type: 'FETCH_LEAGUES_SUCCESS',
          payload: (response, state, res) => {
            const alive = checkTimestamp(
              state.get('responses').get('sports'),
              timestamp
            );
            return parseData(res, alive);
          }
        },
        'FETCH_LEAGUES_FAILED'
      ]
    }
  };
};

export const initialLeaguesState = Map();

export const leagues = (state = initialLeaguesState, action) => {
  switch (action.type) {
    case 'FETCH_LEAGUES_SUCCESS':
      if (!action.payload.alive) return state;
      const newData = convertNativeToMap(action.payload.category);
      return mergeData(state, newData);
    default:
      return state;
  }
};
