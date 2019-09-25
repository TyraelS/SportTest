import { RSAA } from 'redux-api-middleware';
import { Map } from 'immutable';
import parseData from '../utils/parseData';
import getHeaders from '../utils/getHeaders';
import checkTimestamps from '../utils/checkTimestamp';
import convertData from '../utils/convertData';

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
              state.get('responses').get('sports'),
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

export const initialLeaguesState = Map();

export const leagues = (state = initialLeaguesState, action) => {
  switch (action.type) {
    case 'FETCH_LEAGUES_SUCCESS':
      if (!action.payload.alive) return state;
      // mergeData
      const newData = convertData(action.payload.category);
      console.log('Something:', newData);
      return newData;
    default:
      return state;
  }
};
