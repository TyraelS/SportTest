import { RSAA } from 'redux-api-middleware';
import {
  FETCH_SPORTS_REQUEST,
  FETCH_SPORTS_FULFILLED,
  FETCH_SPORTS_FAILED
} from './actionTypes';
import parseData from '../utils/parseData';
import getHeaders from '../utils/getHeaders';
import checkTimestamps from '../utils/checkTimestamp';

export const fetchSports = timestamp => {
  return {
    [RSAA]: {
      endpoint:
        'https://test-gateway.virginbet.com/sportsbook/gateway/v1/web/categories?type=tree&categoryLevel=descendants',
      method: 'GET',
      headers: getHeaders(),
      //https://test-gateway.virginbet.com/sportsbook/gateway/v1/web/categories/SBTC1_3?type=tree&categoryLevel=childs&outright=false&specials=false
      types: [
        FETCH_SPORTS_REQUEST,
        {
          type: FETCH_SPORTS_FULFILLED,
          payload: (response, state, res) => {
            const alive = checkTimestamps(
              state.get('timestamps').get('sports'),
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
