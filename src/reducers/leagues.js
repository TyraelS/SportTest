import { RSAA } from 'redux-api-middleware';
import { Map } from 'immutable';

import {
  parseData,
  getHeaders,
  checkTimestamp,
  convertNativeToMap,
  mergeData
} from 'Utils';
import { gatewayPath } from 'Config';

export const FETCH_LEAGUES_REQUEST = 'FETCH_LEAGUES_REQUEST';
export const FETCH_LEAGUES_SUCCESS = 'FETCH_LEAGUES_SUCCESS';
export const FETCH_LEAGUES_FAILED = 'FETCH_LEAGUES_FAILED';

export const fetchLeagues = (currentSportId, timestamp) => {
  return {
    [RSAA]: {
      endpoint: `${gatewayPath}categories/${currentSportId}?type=tree&categoryLevel=childs&outright=false&specials=false`,
      method: 'GET',
      headers: getHeaders(),
      types: [
        FETCH_LEAGUES_REQUEST,
        {
          type: FETCH_LEAGUES_SUCCESS,
          payload: (response, state, res) => {
            const alive = checkTimestamp(
              state.get('responses', Map()).get('sports', ''),
              timestamp
            );
            return parseData(res, alive);
          }
        },
        FETCH_LEAGUES_FAILED
      ]
    }
  };
};

export const initialLeaguesState = Map();

export const leagues = (state = initialLeaguesState, action = {}) => {
  switch (action.type) {
    case 'FETCH_LEAGUES_SUCCESS':
      if (!action.payload.alive) return state;
      const categories = convertNativeToMap(action.payload.category);
      return mergeData(state, categories);
    default:
      return state;
  }
};
