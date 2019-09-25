import { FETCH_SPORTS_FULFILLED } from '../actions/actionTypes';
import { fromJS, Map } from 'immutable';

export const initialSportsState = Map();

export const sports = (state = initialSportsState, action) => {
  switch (action.type) {
    case FETCH_SPORTS_FULFILLED:
      console.log('Smth:', state);
      console.log('Whaaat:', action);
      if (action.payload.alive) {
        // mergeData
        const newData = fromJS(action.payload.tree);
        const y = Map(newData.map(item => [item.get('id'), item]));
        console.log('Something:', y);
        if (state.size !== 0) {
          return state.mergeWith((oldVal, newVal) => {
            if (
              parseInt(oldVal.get('version')) < parseInt(newVal.get('version'))
            )
              return newVal;
            else return oldVal;
          }, y);
        }
        return y;
      }
      return state;
    // Map(list.map(item => [item.id, item]));
    default:
      return state;
  }
};
