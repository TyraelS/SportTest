import { FETCH_SPORTS_FULFILLED } from '../actions/actionTypes';
import { Map } from 'immutable';
import convertData from '../utils/convertData';
import mergeData from '../utils/mergeData';

export const initialSportsState = Map();

export const sports = (state = initialSportsState, action) => {
  switch (action.type) {
    case FETCH_SPORTS_FULFILLED:
      if (!action.payload.alive) return state;
      const newData = convertData(action.payload.tree);
      if (state.size === 0) return newData;
      return mergeData(state, newData);
    default:
      return state;
  }
};
