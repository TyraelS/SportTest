import { FETCH_SPORTS_FULFILLED } from '../actions/actionTypes';
import { List, fromJS } from 'immutable';

export const initialSportsState = List();

export const sports = (state = initialSportsState, action) => {
  switch (action.type) {
    case FETCH_SPORTS_FULFILLED:
      console.log('Smth:', state);
      console.log('Whaaat:', action);
      if (action.payload.alive) {
        return fromJS(action.payload.tree);
      }
      return state;
    // return mergeDeep(
    //   state,
    //   fromJS(action.payload.tree).map(item =>
    //     Map({ id: item.get('id'), name: item.get('name') })
    //   )
    // );
    default:
      return state;
  }
};
