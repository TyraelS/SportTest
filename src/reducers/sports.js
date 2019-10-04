import { Map } from 'immutable';
import { RSAA } from 'redux-api-middleware';

import {
  convertNativeToMap,
  mergeData,
  getHeaders,
  parseResponseData
} from 'Utils';
import { gatewayPath } from 'Config';

export const FETCH_SPORTS_REQUEST = 'FETCH_SPORTS_REQUEST';
export const FETCH_SPORTS_SUCCESS = 'FETCH_SPORTS_SUCCESS';
export const FETCH_SPORTS_FAILED = 'FETCH_SPORTS_FAILED';

export const fetchSports = timestamp => {
  return {
    [RSAA]: {
      endpoint: `${gatewayPath}categories?type=tree&categoryLevel=descendants`,
      method: 'GET',
      headers: getHeaders(),
      types: [
        FETCH_SPORTS_REQUEST,
        {
          type: FETCH_SPORTS_SUCCESS,
          payload: parseResponseData('sports', timestamp)
        },
        FETCH_SPORTS_FAILED
      ]
    }
  };
};

export const initialSportsState = Map();

export const sports = (state = initialSportsState, action = {}) => {
  switch (action.type) {
    case FETCH_SPORTS_SUCCESS:
      if (!action.payload.alive) return state;
      const sports = convertNativeToMap(action.payload.tree);
      return mergeData(state, sports);
    default:
      return state;
  }
};
