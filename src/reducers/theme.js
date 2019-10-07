export const SET_THEME = 'SET_THEME';

export const setTheme = theme => {
  return {
    type: SET_THEME,
    payload: theme
  };
};

export const initialThemeState = () => {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
  }
  return localStorage.getItem('theme');
};

export const theme = (state = initialThemeState(), action = {}) => {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
};
