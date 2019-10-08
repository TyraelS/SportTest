import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import SideMenu from './SideMenu';

describe('Given the SideMenu component', () => {
  let sports = fromJS({
    SBTC_01: {
      id: 'SBTC_01',
      name: 'SortofLeague'
    },
    SBTC_02: {
      id: 'SBTC_02',
      name: 'AnotherLeague'
    }
  });
  const sportItemClick = jest.fn();
  const categoryId = 'SBTC_01';

  describe('when the component is rendered', () => {
    const component = shallow(
      <SideMenu
        sports={sports}
        sportItemClick={sportItemClick}
        categoryId={categoryId}
      />
    );

    it('should match the snapshot 1', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
