import { createSelector } from 'reselect';
import { Map } from 'immutable';

const getSports = state => state.get('sports', Map());
const getLeagues = state => state.get('leagues', Map());

const getSportsWithCounters = createSelector(
  [getSports, getLeagues],
  (sports, leagues) => {
    const sportsWithCounters = sports.map((item, key) => {
      const sportId = item.get('sportId', '');
      const counter = leagues.filter(
        league => league.get('sportId', '') === sportId
      ).size;
      return item.set('counter', counter);
    });
    return sportsWithCounters;
  }
);

export default getSportsWithCounters;
