import { FETCH_SPORTS_FULFILLED } from '../actions/actionTypes';
import { List, fromJS, mergeWith } from 'immutable';

export const initialSportsState = List();

export const sports = (state = initialSportsState, action) => {
  switch (action.type) {
    case FETCH_SPORTS_FULFILLED:
      console.log('Smth:', state);
      console.log('Whaaat:', action);
      if (action.payload.alive) {
        // mergeData
        const newData = fromJS(action.payload.tree);
        // if (state.size !== 0) {

        // }
        return newData;
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
