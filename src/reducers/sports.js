import { Map } from 'immutable';
import { RSAA } from 'redux-api-middleware';

import {
  convertArrayToMap,
  generateTimestamp,
  mergeData,
  getHeaders
} from 'utils';
import { gatewayPath } from 'config';

export const SPORTS_REQUEST = 'SPORTS_REQUEST';
export const SPORTS_SUCCESS = 'SPORTS_SUCCESS';
export const SPORTS_FAILED = 'SPORTS_FAILED';

let sportsTimestampLock = null;

export const checkAliveHandler = newTimestamp => () => {
  return sportsTimestampLock === newTimestamp;
};

export const fetchSports = () => {
  const newTimestamp = generateTimestamp();
  sportsTimestampLock = newTimestamp;

  return {
    [RSAA]: {
      endpoint: `${gatewayPath}categories?type=tree&categoryLevel=descendants`,
      method: 'GET',
      headers: getHeaders(),
      types: [
        SPORTS_REQUEST,
        {
          type: SPORTS_SUCCESS,
          meta: {
            checkAlive: checkAliveHandler(newTimestamp)
          }
        },
        SPORTS_FAILED
      ]
    }
  };
};

export const initialSportsState = Map();

export default function sports(state = initialSportsState, action = {}) {
  switch (action.type) {
    case SPORTS_SUCCESS:
      if (action.meta && action.meta.checkAlive) {
        const isAlive = action.meta.checkAlive();
        if (!isAlive) {
          return state;
        }
      }
      const sports = convertArrayToMap(action.payload.tree);
      return mergeData(state, sports);
    default:
      return state;
  }
}
