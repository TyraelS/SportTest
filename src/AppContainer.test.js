import { Map } from 'immutable';

import { mapStateToProps } from './AppContainer';

describe('Given the mapStateToProps function', () => {
  describe('when the function is called', () => {
    it('should return an object with theme property in it', () => {
      expect(mapStateToProps(Map({ theme: 'light' }))).toHaveProperty('theme');
    });
  });
});
