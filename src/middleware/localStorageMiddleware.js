import { SET_THEME } from 'reducers/theme';

const localStorageMiddleware = () => next => action => {
  if (action.type === SET_THEME) {
    localStorage.setItem('theme', action.payload);
  }
  next(action);
};

export default localStorageMiddleware;
