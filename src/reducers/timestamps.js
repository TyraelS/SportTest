import { Map, set } from 'immutable';

export const setSportsTimestamp = timestamp => {
  return {
    type: 'SET_SPORTS_TIMESTAMP',
    payload: timestamp
  };
};

export const setLeaguesTimestamp = timestamp => {
  return {
    type: 'SET_LEAGUES_TIMESTAMP',
    payload: timestamp
  };
};

export const initialTimestampsState = Map({
  sports: null,
  leagues: null
});

export const timestamps = (state = initialTimestampsState, action) => {
  switch (action.type) {
    case 'SET_SPORTS_TIMESTAMP':
      console.log('Timestamp is:', action.payload);
      return set(state, 'sports', action.payload);
    case 'SET_LEAGUES_TIMESTAMP':
      return set(state, 'leagues', action.payload);
    default:
      return state;
  }
};
