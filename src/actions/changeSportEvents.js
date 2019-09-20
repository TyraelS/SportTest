import { CHANGE_SPORT_EVENTS } from './actionTypes';

export const changeSportEvents = (events) => {
    return {
        type: CHANGE_SPORT_EVENTS,
        payload: events
    }
}