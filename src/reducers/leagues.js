import { RSAA } from 'redux-api-middleware';
import { List, fromJS } from 'immutable';
import parseData from '../utils/parseData';
import getHeaders from '../utils/getHeaders';
import checkTimestamps from '../utils/checkTimestamp';

export const fetchLeagues = (currentSportId, timestamp) => {
  return {
    [RSAA]: {
      endpoint: `https://test-gateway.virginbet.com/sportsbook/gateway/v1/web/categories/${currentSportId}?type=tree&categoryLevel=childs&outright=false&specials=false`,
      method: 'GET',
      headers: getHeaders(),
      types: [
        'FETCH_LEAGUES_REQUEST',
        {
          type: 'FETCH_LEAGUES_SUCCESS',
          payload: (response, state, res) => {
            const alive = checkTimestamps(
              state.get('timestamps').get('sports'),
              timestamp
            );
            return parseData(res, alive);
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
      if (action.payload.alive) {
        return fromJS(action.payload.category);
      }
      return state;
    default:
      return state;
  }
};
