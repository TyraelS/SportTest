import { Map } from 'immutable';

import { mapStateToProps } from './LeagueTabsContainer';

describe('Given the mapStateToProps function', () => {
  describe('when the function is called', () => {
    it('should return an object with leagues property of Map type in it', () => {
      expect(mapStateToProps(Map()).leagues).toBeInstanceOf(Map);
    });
  });
});
