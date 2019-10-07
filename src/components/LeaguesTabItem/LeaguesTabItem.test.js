import React from 'react';
import { shallow } from 'enzyme';
import LeaguesTabItem from './LeaguesTabItem';

describe('Given the LeaguesTabItem component with provided props', () => {
  describe('when the component is rendered', () => {
    const component = shallow(
      <LeaguesTabItem name='Test name' country='GBR' />
    );

    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
