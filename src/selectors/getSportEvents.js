import { createSelector } from "reselect";

const getSportEvents = createSelector(
  (state, id) => {
    console.log(state);
    return state.find(item => {
      return item.id === id;
    });
  },
  item => item.childs
);

export default getSportEvents;
