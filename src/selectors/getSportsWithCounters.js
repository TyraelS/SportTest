import { createSelector } from 'reselect';
import { Map } from 'immutable';

const getSports = state => state.get('sports', Map());
const getLeagues = state => state.get('leagues', Map());

const getSportsWithCounters = createSelector(
  [getSports, getLeagues],
  (sports, leagues) => {
    const sportsWithCounters = sports.map(item => {
      const sportId = item.get('sportId', '');
      const counter = leagues.count(
        league => league.get('sportId', '') === sportId
      );
      return item.set('counter', counter);
    });
    return sportsWithCounters;
  }
);

export default getSportsWithCounters;
