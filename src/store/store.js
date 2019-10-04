import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunkMiddleware from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { Map } from 'immutable';

import { sports, initialSportsState } from 'Reducers/sports';
import { leagues, initialLeaguesState } from 'Reducers/leagues';
import { responses, initialResponsesState } from 'Reducers/responses';
import { themes, initialThemesState } from 'Reducers/themes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware, apiMiddleware)
);

const initialStoreState = Map({
  sports: initialSportsState,
  leagues: initialLeaguesState,
  responses: initialResponsesState,
  themes: initialThemesState()
});

export const store = createStore(
  combineReducers({
    sports,
    leagues,
    responses,
    themes
  }),
  initialStoreState,
  enhancer
);
