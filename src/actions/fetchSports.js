import { RSAA } from 'redux-api-middleware';
import {
  FETCH_SPORTS_REQUEST,
  FETCH_SPORTS_FULFILLED,
  FETCH_SPORTS_FAILED
} from './actionTypes';
import parseData from '../utils/parseData';
import { changeSportEvents } from './changeSportEvents';

export const fetchSports = currentSportId => {
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
            // if(currentSportId){
            //   const events = getSportEvents(response.tree.sports, currentSportId);
            //   changeSportEvents(events);
            // }
            // console.log(response);
            //   if (true) {
            //       return response;
            //   }
            //   return null;
            return parseData(res);
          }
        },
        FETCH_SPORTS_FAILED
      ]
    }
  };
};

// export const fetchSportsStart = () => {
//     return {
//         type: types.FETCH_SPORTS_START
//     }
// }
// export const fetchSportsFulfilled = () => {
//     return {
//         type: types.FETCH_SPORTS_FULFILLED
//     }
// }
// export const fetchSportsFailed = () => {
//     return {
//         type: types.FETCH_SPORT_FAILED
//     }
// }

// export const fetchSports = () => {
//     return dispatch => {
//         dispatch(fetchSportsStart());
//         const req = new XMLHttpRequest();
//         req.open('GET', 'https://test-gateway.virginbet.com/sportsbook/gateway/v1/web/categories?type=tree&categoryLevel=descendants');
//         const sports;
//         req.onreadystatechange = function (aEvt) {
//             if(req.status === 200){
//                 sports = req.response;
//                 console.log(sports);
//                 dispatch(fetchSportsFulfilled());
//             } else {
//                 console.log('Error loading');
//                 dispatch(fetchSportsFailed());
//             }
//         }

//     }
// }
