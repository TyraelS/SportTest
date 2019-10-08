import { RSAA } from 'redux-api-middleware';
import { Map } from 'immutable';

import {
  getHeaders,
  convertArrayToMap,
  mergeData,
  parseResponseData
} from 'utils';
import { gatewayPath } from 'config';

export const LEAGUES_REQUEST = 'LEAGUES_REQUEST';
export const LEAGUES_SUCCESS = 'LEAGUES_SUCCESS';
export const LEAGUES_FAILED = 'LEAGUES_FAILED';

export const fetchLeagues = (categoryId, timestamp) => ({
  [RSAA]: {
    endpoint: `${gatewayPath}categories/${categoryId}?type=tree&categoryLevel=childs&outright=false&specials=false`,
    method: 'GET',
    headers: getHeaders(),
    types: [
      LEAGUES_REQUEST,
      {
        type: LEAGUES_SUCCESS,
        payload: parseResponseData('leagues', timestamp)
      },
      LEAGUES_FAILED
    ]
  }
});

export const initialLeaguesState = Map();

export default function leagues(state = initialLeaguesState, action = {}) {
  switch (action.type) {
    case LEAGUES_SUCCESS:
      if (!action.payload.alive) return state;
      const categories = convertArrayToMap(action.payload.category);
      return mergeData(state, categories);
    default:
      return state;
  }
}
