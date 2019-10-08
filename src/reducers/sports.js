import { Map } from 'immutable';
import { RSAA } from 'redux-api-middleware';

import {
  convertArrayToMap,
  mergeData,
  getHeaders,
  parseResponseData
} from 'utils';
import { gatewayPath } from 'config';

export const SPORTS_REQUEST = 'SPORTS_REQUEST';
export const SPORTS_SUCCESS = 'SPORTS_SUCCESS';
export const SPORTS_FAILED = 'SPORTS_FAILED';

export const fetchSports = timestamp => ({
  [RSAA]: {
    endpoint: `${gatewayPath}categories?type=tree&categoryLevel=descendants`,
    method: 'GET',
    headers: getHeaders(),
    types: [
      SPORTS_REQUEST,
      {
        type: SPORTS_SUCCESS,
        payload: parseResponseData('sports', timestamp)
      },
      SPORTS_FAILED
    ]
  }
});

export const initialSportsState = Map();

export default function sports(state = initialSportsState, action = {}) {
  switch (action.type) {
    case SPORTS_SUCCESS:
      if (!action.payload.alive) return state;
      const sports = convertArrayToMap(action.payload.tree);
      return mergeData(state, sports);
    default:
      return state;
  }
}
