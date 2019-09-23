import { createSelector } from 'reselect';

const getSports = createSelector(
  state => {
    console.log(state);
    return state.get('sports').map(item => {
      return {
        id: item.get('id'),
        name: item.get('name')
      };
    });
  },
  items => items
);

export default getSports;
