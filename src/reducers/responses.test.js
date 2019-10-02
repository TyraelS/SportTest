import { fromJS } from 'immutable';

import { responses } from './responses';

describe('Given the responses reducer', () => {
  describe('and state with action are not provided', () => {
    it('should call reducer with initial values for state and action and return initial state', () => {
      expect(responses()).toEqual(
        fromJS({
          sports: null,
          leagues: null
        })
      );
    });
  });
});
