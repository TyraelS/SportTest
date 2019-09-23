import { RSAA } from 'redux-api-middleware';
import {
  FETCH_SPORTS_REQUEST,
  FETCH_SPORTS_FULFILLED,
  FETCH_SPORTS_FAILED
} from './actionTypes';
import parseData from '../utils/parseData';

export const fetchSports = timestamp => {
  return {
    [RSAA]: {
      endpoint:
        'https://test-gateway.virginbet.com/sportsbook/gateway/v1/web/categories?type=tree&categoryLevel=descendants',
      method: 'GET',
      headers: {
        'client-app-version': '1.2.17test',
        'client-id': 'web',
        'client-language': 'en',
        'client-os-version': 'default'
      },
      //https://test-gateway.virginbet.com/sportsbook/gateway/v1/web/categories/SBTC1_3?type=tree&categoryLevel=childs&outright=false&specials=false
      types: [
        FETCH_SPORTS_REQUEST,
        {
          type: FETCH_SPORTS_FULFILLED,
          payload: (response, state, res) => {
            return parseData(res, timestamp);
          }
        },
        FETCH_SPORTS_FAILED
      ]
    }
  };
};
