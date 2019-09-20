import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';

import { sports, initialSportsState } from '../reducers/sports';
import { events, initialEventsState} from '../reducers/events';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, apiMiddleware,));

const initialStoreState = {
    sports: initialSportsState,
    events: initialEventsState
}

export const store = createStore(combineReducers({
    sports,
    events
}), initialStoreState, enhancer);