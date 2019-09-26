import { RSAA } from 'redux-api-middleware';

import {
  FETCH_SPORTS_REQUEST,
  FETCH_SPORTS_FULFILLED,
  FETCH_SPORTS_FAILED
} from './actionTypes';
import { parseData, getHeaders, checkTimestamp } from '../utils';

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
          type: FETCH_SPORTS_FULFILLED,
          payload: (response, state, res) => {
            const alive = checkTimestamp(
              state.get('responses').get('sports'),
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
