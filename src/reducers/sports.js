import { Map } from 'immutable';

import { FETCH_SPORTS_FULFILLED } from '../actions/actionTypes';
import { convertNativeToMap, mergeData } from '../utils';

export const initialSportsState = Map();

export const sports = (state = initialSportsState, action = {}) => {
  switch (action.type) {
    case FETCH_SPORTS_FULFILLED:
      if (!action.payload.alive) return state;
      const newData = convertNativeToMap(action.payload.tree);
      return mergeData(state, newData);
    default:
      return state;
  }
};
