import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import LeaguesTab from './LeaguesTab';

describe('Given the LeaguesTab component with provided props', () => {
  const leagues = fromJS({
    SBTC_01: {
      key: 'SBTC_01',
      name: 'SortofLeague',
      countryCode: 'GBR'
    },
    SBTC_02: {
      key: 'SBTC_02',
      name: 'AnotherLeague',
      countryCode: 'USA'
    }
  });
  describe('when the component is rendered', () => {
    const component = shallow(<LeaguesTab leagues={leagues} />);

    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
