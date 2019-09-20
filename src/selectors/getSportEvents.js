import { createSelector } from 'reselect';

const getSportEvents = createSelector(
    (state, id) => {
        return state.find((item) => {
            return item.id === id;}
    )},
    item => item.childs
)

export default getSportEvents;