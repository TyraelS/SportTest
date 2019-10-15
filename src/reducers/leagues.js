import { RSAA } from 'redux-api-middleware';
import { Map } from 'immutable';

import { getHeaders, convertArrayToMap, generateTimestamp } from 'utils';
import { gatewayPath } from 'config';

export const LEAGUES_REQUEST = 'LEAGUES_REQUEST';
export const LEAGUES_SUCCESS = 'LEAGUES_SUCCESS';
export const LEAGUES_FAILED = 'LEAGUES_FAILED';

let leaguesTimestampLock = null;

export const checkAliveHandler = newTimestamp => () => {
  return leaguesTimestampLock === newTimestamp;
};

export const fetchLeagues = categoryId => {
  const newTimestamp = generateTimestamp();
  leaguesTimestampLock = newTimestamp;

  return {
    [RSAA]: {
      endpoint: `${gatewayPath}categories/${categoryId}?type=tree&categoryLevel=childs&outright=false&specials=false`,
      method: 'GET',
      headers: getHeaders(),
      types: [
        LEAGUES_REQUEST,
        {
          type: LEAGUES_SUCCESS,

          meta: {
            checkAlive: checkAliveHandler(newTimestamp)
          }
        },
        LEAGUES_FAILED
      ]
    }
  };
};

export const initialLeaguesState = Map();

export default function leagues(state = initialLeaguesState, action = {}) {
  switch (action.type) {
    case LEAGUES_SUCCESS:
      if (action.meta && action.meta.checkAlive) {
        const isAlive = action.meta.checkAlive();
        if (!isAlive) {
          return state;
        }
      }
      const categories = convertArrayToMap(action.payload.category);
      return categories;
    // return mergeData(state, categories);
    default:
      return state;
  }
}
