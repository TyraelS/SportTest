import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunkMiddleware from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { Map } from 'immutable';

import { sports, initialSportsState } from 'Reducers/sports';
import { leagues, initialLeaguesState } from 'Reducers/leagues';
import { responses, initialResponsesState } from 'Reducers/responses';
import { theme, initialThemeState } from 'Reducers/theme';
import { localStorageMiddleware } from 'Middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware, apiMiddleware, localStorageMiddleware)
);

const initialStoreState = Map({
  sports: initialSportsState,
  leagues: initialLeaguesState,
  responses: initialResponsesState,
  theme: initialThemeState()
});

export const store = createStore(
  combineReducers({
    sports,
    leagues,
    responses,
    theme
  }),
  initialStoreState,
  enhancer
);
