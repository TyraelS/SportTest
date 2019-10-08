import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import LeagueTabs from './LeagueTabs';

describe('Given the LeagueTabs component with provided props', () => {
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
    const component = shallow(<LeagueTabs leagues={leagues} />);

    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
