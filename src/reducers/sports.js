import {
  FETCH_SPORTS_REQUEST,
  FETCH_SPORTS_FULFILLED,
  FETCH_SPORTS_FAILED
} from "../actions/actionTypes";

export const initialSportsState = {
  sports: [{ id: 1, name: "Smth" }],
  error: null
};

export const sports = (state = initialSportsState, action) => {
  switch (action.type) {
    case FETCH_SPORTS_REQUEST:
      return state;
    case FETCH_SPORTS_FULFILLED:
      console.log(action.payload);
      return {
        state,
        sports: [...action.payload.tree]
      };
    case FETCH_SPORTS_FAILED:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload.error
      };

    default:
      return state;
  }
};
