import { Map } from 'immutable';

export const SET_THEME = 'SET_THEME';

export const setTheme = theme => {
  return {
    type: SET_THEME,
    payload: theme
  };
};

export const initialThemesState = () => {
  if (localStorage.getItem('theme')) {
    return Map({ theme: localStorage.getItem('theme') });
  }
  localStorage.setItem('theme', 'light');
  return Map({ theme: localStorage.getItem('theme') });
};

export const themes = (state = initialThemesState(), action = {}) => {
  switch (action.type) {
    case SET_THEME:
      return Map({ theme: action.payload });
    default:
      return state;
  }
};
