import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import SideMenu from './SideMenu';

describe('Given the SideMenu component', () => {
  beforeEach(() => {
    component = shallow(
      <SideMenu
        sports={sports}
        sportItemClick={sportItemClick}
        currentSportId={currentSportId}
      />
    );
  });
  let component;
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
  const currentSportId = 'SBTC_01';
  describe('when the component is rendered', () => {
    it('should match the snapshot 1', () => {
      expect(component).toMatchSnapshot();
      sports = null;
    });
  });
  describe('when sports are not provided', () => {
    it('should match the snapshot 2', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
