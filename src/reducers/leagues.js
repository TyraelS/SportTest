import { RSAA } from 'redux-api-middleware';
import { List, fromJS } from 'immutable';
import parseData from '../utils/parseData';

export const fetchLeagues = (currentSportId, timestamp) => {
  return {
    [RSAA]: {
      endpoint: `https://test-gateway.virginbet.com/sportsbook/gateway/v1/web/categories/${currentSportId}?type=tree&categoryLevel=childs&outright=false&specials=false`,
      method: 'GET',
      headers: {
        'client-app-version': '1.2.17test',
        'client-id': 'web',
        'client-language': 'en',
        'client-os-version': 'default'
      },
      types: [
        'FETCH_LEAGUES_REQUEST',
        {
          type: 'FETCH_LEAGUES_SUCCESS',
          payload: (response, state, res) => {
            return parseData(res, timestamp);
          }
        },
        'FETCH_LEAGUES_FAILED'
      ]
    }
  };
};

export const initialLeaguesState = List();

export const leagues = (state = initialLeaguesState, action) => {
  switch (action.type) {
    case 'FETCH_LEAGUES_SUCCESS':
      return fromJS(action.payload.category) || List();
    default:
      return state;
  }
};
