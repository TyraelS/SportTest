import { SET_THEME } from 'Reducers/theme';

const localStorageMiddleware = () => next => action => {
  if (action.type === SET_THEME) {
    localStorage.setItem('theme', action.payload);
  }
  next(action);
};

export default localStorageMiddleware;
