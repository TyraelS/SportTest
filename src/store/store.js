import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunkMiddleware from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';

import { Map } from 'immutable';
import { sports, initialSportsState } from '../reducers/sports';
import { leagues, initialLeaguesState } from '../reducers/leagues';
import { timestamps, initialTimestampsState } from '../reducers/timestamps';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware, apiMiddleware)
);

const initialStoreState = Map({
  sports: initialSportsState,
  leagues: initialLeaguesState,
  timestamps: initialTimestampsState
});

export const store = createStore(
  combineReducers({
    sports,
    leagues,
    timestamps
  }),
  initialStoreState,
  enhancer
);
