import {CHANGE_SPORT_EVENTS} from '../actions/actionTypes';

export const initialEventsState = [];

export const events = (state = initialEventsState, action) => {
    switch(action.type){
        case CHANGE_SPORT_EVENTS:
            return action.payload;
        default: 
            return state;
    }
}
